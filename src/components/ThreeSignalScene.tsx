"use client";

import { useEffect, useRef } from "react";
import type { ThemeMode } from "@/lib/site-data";

type ThreeSignalSceneProps = {
  theme: ThemeMode;
};

type ThreeModule = typeof import("three");

function drawLandmass(
  ctx: CanvasRenderingContext2D,
  points: Array<[number, number]>,
  fill: string,
  shadow: string,
) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);

  for (let index = 1; index < points.length; index += 1) {
    const [currentX, currentY] = points[index];
    const [previousX, previousY] = points[index - 1];
    const controlX = (previousX + currentX) * 0.5;
    const controlY = (previousY + currentY) * 0.5;
    ctx.quadraticCurveTo(previousX, previousY, controlX, controlY);
  }

  const [lastX, lastY] = points[points.length - 1];
  ctx.quadraticCurveTo(lastX, lastY, points[0][0], points[0][1]);
  ctx.closePath();
  ctx.shadowBlur = 28;
  ctx.shadowColor = shadow;
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.restore();
}

function createPlanetTexture(THREE: ThreeModule, theme: ThemeMode) {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const ocean = ctx.createLinearGradient(0, 0, 0, canvas.height);
  ocean.addColorStop(0, theme === "dark" ? "#091923" : "#6ec7ea");
  ocean.addColorStop(0.5, theme === "dark" ? "#0f2835" : "#3aa2d2");
  ocean.addColorStop(1, theme === "dark" ? "#041019" : "#13739f");
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = theme === "dark" ? 0.16 : 0.11;
  ctx.strokeStyle = theme === "dark" ? "#b7f5ff" : "#0f4f66";
  ctx.lineWidth = 1;
  for (let y = 90; y < canvas.height; y += 90) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  for (let x = 110; x < canvas.width; x += 110) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  ctx.restore();

  const landFill = theme === "dark" ? "#7fe464" : "#117b63";
  const landShade = theme === "dark" ? "rgba(173, 255, 120, 0.42)" : "rgba(15, 118, 110, 0.24)";

  drawLandmass(
    ctx,
    [
      [180, 220],
      [280, 150],
      [390, 120],
      [500, 150],
      [540, 270],
      [470, 350],
      [360, 390],
      [250, 330],
      [190, 260],
    ],
    landFill,
    landShade,
  );

  drawLandmass(
    ctx,
    [
      [470, 400],
      [530, 470],
      [550, 600],
      [510, 750],
      [460, 840],
      [400, 780],
      [410, 620],
      [430, 500],
    ],
    landFill,
    landShade,
  );

  drawLandmass(
    ctx,
    [
      [970, 220],
      [1100, 170],
      [1260, 210],
      [1370, 300],
      [1490, 350],
      [1530, 460],
      [1450, 530],
      [1290, 520],
      [1150, 440],
      [1010, 340],
    ],
    landFill,
    landShade,
  );

  drawLandmass(
    ctx,
    [
      [1160, 520],
      [1240, 570],
      [1290, 680],
      [1260, 840],
      [1190, 900],
      [1110, 810],
      [1090, 650],
    ],
    landFill,
    landShade,
  );

  drawLandmass(
    ctx,
    [
      [1530, 740],
      [1620, 710],
      [1710, 760],
      [1670, 840],
      [1570, 850],
      [1510, 790],
    ],
    landFill,
    landShade,
  );

  ctx.save();
  ctx.globalAlpha = theme === "dark" ? 0.16 : 0.12;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.ellipse(canvas.width * 0.72, canvas.height * 0.34, 230, 100, -0.26, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(canvas.width * 0.34, canvas.height * 0.58, 280, 120, 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(canvas.width * 0.54, canvas.height * 0.12, 320, 70, 0.02, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.save();
  const iceFill = theme === "dark" ? "rgba(245, 250, 255, 0.78)" : "rgba(255, 255, 255, 0.84)";
  ctx.fillStyle = iceFill;
  ctx.beginPath();
  ctx.ellipse(canvas.width * 0.5, 54, 690, 68, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(canvas.width * 0.5, canvas.height - 54, 620, 78, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function createCloudTexture(THREE: ThreeModule) {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.12)";

  const clouds = [
    [260, 210, 240, 90, 0.16],
    [610, 490, 360, 110, 0.14],
    [980, 250, 260, 94, 0.18],
    [1250, 660, 300, 120, 0.15],
    [1540, 350, 280, 98, 0.14],
    [1760, 560, 250, 92, 0.12],
  ] as const;

  for (const [x, y, width, height, alpha] of clouds) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.ellipse(x, y, width, height, Math.random() * 0.4 - 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function latLonToVector3(THREE: ThreeModule, latitude: number, longitude: number, radius: number) {
  const phi = ((90 - latitude) * Math.PI) / 180;
  const theta = ((longitude + 180) * Math.PI) / 180;

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

export function ThreeSignalScene({ theme }: ThreeSignalSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let frame = 0;
    let dispose = () => {};
    let isMounted = true;

    async function start() {
      const THREE = await import("three");
      if (!isMounted || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.set(0, 0.08, 4.8);

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = theme === "dark" ? 1.18 : 1.02;

      const sceneGroup = new THREE.Group();
      sceneGroup.position.set(0.16, -0.02, 0);
      scene.add(sceneGroup);

      const planetGroup = new THREE.Group();
      sceneGroup.add(planetGroup);

      const accentColor = theme === "dark" ? 0xd6ff4f : 0x0f766e;
      const markerColor = theme === "dark" ? 0xf7fff7 : 0x052b30;
      const planetTexture = createPlanetTexture(THREE, theme);
      const cloudTexture = createCloudTexture(THREE);

      const globeGeometry = new THREE.SphereGeometry(1.42, 96, 96);
      const globeMaterial = new THREE.MeshStandardMaterial({
        map: planetTexture,
        roughness: 0.94,
        metalness: 0.06,
        emissive: new THREE.Color(theme === "dark" ? 0x07151a : 0x8be6ff),
        emissiveIntensity: theme === "dark" ? 0.14 : 0.04,
      });
      const globe = new THREE.Mesh(globeGeometry, globeMaterial);

      const cloudGeometry = new THREE.SphereGeometry(1.47, 72, 72);
      const cloudMaterial = new THREE.MeshStandardMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: theme === "dark" ? 0.28 : 0.18,
        roughness: 1,
        metalness: 0,
        depthWrite: false,
      });
      const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);

      const atmosphereGeometry = new THREE.SphereGeometry(1.66, 64, 64);
      const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: accentColor,
        transparent: true,
        opacity: theme === "dark" ? 0.12 : 0.08,
        side: THREE.BackSide,
      });
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);

      const wireGeometry = new THREE.SphereGeometry(1.44, 26, 26);
      const wireMaterial = new THREE.MeshBasicMaterial({
        color: accentColor,
        wireframe: true,
        transparent: true,
        opacity: theme === "dark" ? 0.08 : 0.06,
      });
      const wireGlobe = new THREE.Mesh(wireGeometry, wireMaterial);

      planetGroup.add(globe, clouds, atmosphere, wireGlobe);

      const ringMaterial = new THREE.MeshBasicMaterial({
        color: accentColor,
        transparent: true,
        opacity: theme === "dark" ? 0.2 : 0.14,
      });
      const ringBase = new THREE.TorusGeometry(1.98, 0.018, 12, 220);
      const ringMaterials: import("three").MeshBasicMaterial[] = [];
      const rings = [
        [0.4, 0.1, -0.16],
        [-0.68, 0.4, 0.34],
        [1.06, -0.22, 0.48],
      ].map(([x, y, z]) => {
        const material = ringMaterial.clone();
        ringMaterials.push(material);
        const ring = new THREE.Mesh(ringBase, material);
        ring.rotation.set(x, y, z);
        sceneGroup.add(ring);
        return ring;
      });

      const markerCoordinates = [
        [45.07, 7.69],
        [40.71, -74.0],
        [51.5, -0.12],
        [25.2, 55.27],
        [35.68, 139.69],
        [1.29, 103.85],
        [-33.86, 151.2],
        [52.37, 4.9],
      ] as const;

      const markerPositions = new Float32Array(markerCoordinates.length * 3);
      markerCoordinates.forEach(([latitude, longitude], index) => {
        const point = latLonToVector3(THREE, latitude, longitude, 1.5);
        markerPositions[index * 3] = point.x;
        markerPositions[index * 3 + 1] = point.y;
        markerPositions[index * 3 + 2] = point.z;
      });

      const markerGeometry = new THREE.BufferGeometry();
      markerGeometry.setAttribute("position", new THREE.BufferAttribute(markerPositions, 3));
      const markerMaterial = new THREE.PointsMaterial({
        color: markerColor,
        size: 0.06,
        transparent: true,
        opacity: theme === "dark" ? 0.95 : 0.82,
        sizeAttenuation: true,
        depthWrite: false,
      });
      const markers = new THREE.Points(markerGeometry, markerMaterial);
      planetGroup.add(markers);

      const starCount = 220;
      const starPositions = new Float32Array(starCount * 3);
      for (let index = 0; index < starCount; index += 1) {
        const radius = 3.4 + Math.random() * 2.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        starPositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
        starPositions[index * 3 + 1] = radius * Math.cos(phi);
        starPositions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      }

      const starsGeometry = new THREE.BufferGeometry();
      starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
      const starsMaterial = new THREE.PointsMaterial({
        color: accentColor,
        size: theme === "dark" ? 0.022 : 0.018,
        transparent: true,
        opacity: theme === "dark" ? 0.52 : 0.36,
        depthWrite: false,
      });
      const stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);

      const ambient = new THREE.AmbientLight(theme === "dark" ? 0xf7fbff : 0xffffff, 1.4);
      const keyLight = new THREE.DirectionalLight(theme === "dark" ? 0xffffff : 0xe7fbff, 2.8);
      keyLight.position.set(4.2, 2.4, 3.8);
      const rimLight = new THREE.PointLight(accentColor, 20, 9);
      rimLight.position.set(-2.1, 1.3, 2.9);
      const fillLight = new THREE.PointLight(theme === "dark" ? 0x6ed3ff : 0xffffff, 8, 10);
      fillLight.position.set(2.8, -1.7, 1.5);
      scene.add(ambient, keyLight, rimLight, fillLight);

      const pointer = { x: 0, y: 0 };
      const targetTilt = { x: -0.2, y: 0.18 };
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function resize() {
        const rect = canvas.getBoundingClientRect();
        const width = Math.max(1, rect.width);
        const height = Math.max(1, rect.height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height, false);
      }

      function onPointerMove(event: PointerEvent) {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.5;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.32;
      }

      function render(time = 0) {
        const seconds = time * 0.001;
        targetTilt.x = -0.22 + pointer.y * 0.55;
        targetTilt.y = 0.18 + pointer.x * 0.72;

        sceneGroup.rotation.x = THREE.MathUtils.lerp(sceneGroup.rotation.x, targetTilt.x, 0.03);
        sceneGroup.rotation.y = THREE.MathUtils.lerp(sceneGroup.rotation.y, targetTilt.y, 0.03);
        sceneGroup.rotation.z = Math.sin(seconds * 0.22) * 0.04;

        globe.rotation.y = seconds * 0.22;
        globe.rotation.x = -0.08 + Math.sin(seconds * 0.16) * 0.03;
        clouds.rotation.y = seconds * 0.27 + 0.12;
        clouds.rotation.z = Math.sin(seconds * 0.12) * 0.02;
        wireGlobe.rotation.y = seconds * 0.26 + 0.06;
        markers.rotation.y = seconds * 0.22;

        rings[0].rotation.z += 0.0013;
        rings[1].rotation.z -= 0.001;
        rings[2].rotation.z += 0.0008;
        stars.rotation.y = -seconds * 0.02;
        stars.rotation.x = Math.sin(seconds * 0.08) * 0.04;

        renderer.render(scene, camera);
        if (!reduceMotion) frame = window.requestAnimationFrame(render);
      }

      const observer = new ResizeObserver(resize);
      observer.observe(canvas);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      resize();

      if (reduceMotion) {
        render(0);
      } else {
        frame = window.requestAnimationFrame(render);
      }

      dispose = () => {
        window.cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        globeGeometry.dispose();
        cloudGeometry.dispose();
        atmosphereGeometry.dispose();
        wireGeometry.dispose();
        ringBase.dispose();
        markerGeometry.dispose();
        starsGeometry.dispose();
        planetTexture.dispose();
        cloudTexture.dispose();
        globeMaterial.dispose();
        cloudMaterial.dispose();
        atmosphereMaterial.dispose();
        wireMaterial.dispose();
        markerMaterial.dispose();
        starsMaterial.dispose();
        ringMaterial.dispose();
        ringMaterials.forEach((material) => {
          material.dispose();
        });
        renderer.dispose();
      };
    }

    start();

    return () => {
      isMounted = false;
      dispose();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="three-signal-scene"
      aria-label="Animated Earth-inspired signal field"
    />
  );
}
