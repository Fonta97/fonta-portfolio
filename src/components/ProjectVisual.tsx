import Image from "next/image";

type ProjectVisualProps = {
  accent: "lime" | "cyan" | "rose" | "amber" | "violet";
  label: string;
  client: string;
  category: string;
  backgroundSrc: string;
  backgroundAlt: string;
  foregroundSrc?: string;
  foregroundAlt?: string;
  foregroundFit?: "contain" | "cover";
  brandSurface?: "light" | "dark";
  tags: readonly string[];
};

const accentClass = {
  lime: "from-[#b794f4] via-[#e9d5ff] to-[#100617]",
  cyan: "from-[#8b5cf6] via-[#c4b5fd] to-[#0d0a17]",
  rose: "from-[#f472b6] via-[#f5d0fe] to-[#170811]",
  amber: "from-[#c084fc] via-[#ddd6fe] to-[#140c1d]",
  violet: "from-[#a78bfa] via-[#ddd6fe] to-[#090711]",
};

export function ProjectVisual({
  accent,
  label,
  client,
  category,
  backgroundSrc,
  backgroundAlt,
  foregroundSrc,
  foregroundAlt,
  foregroundFit = "cover",
  brandSurface = "light",
  tags,
}: ProjectVisualProps) {
  const visualTags = tags.slice(0, 3);

  return (
    <div className="project-visual" role="img" aria-label={`${label}. ${backgroundAlt}`}>
      <div className={`project-visual__beam bg-gradient-to-br ${accentClass[accent]}`} />
      <Image
        src={backgroundSrc}
        alt=""
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1120px) 52vw, 38vw"
        className="project-visual__background"
      />
      <div className="project-visual__veil" />
      <div className="project-visual__chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="project-visual__stack" aria-hidden="true">
        {visualTags.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      {foregroundSrc ? (
        <div
          className={`project-visual__brand ${foregroundFit === "contain" ? "is-contain" : ""} ${
            brandSurface === "dark" ? "is-dark" : "is-light"
          }`}
          aria-hidden="true"
        >
          <Image
            src={foregroundSrc}
            alt=""
            fill
            sizes="220px"
            className="project-visual__brand-image"
          />
        </div>
      ) : (
        <div className="project-visual__brand project-visual__brand--text" aria-hidden="true">
          <span>{foregroundAlt ?? client}</span>
        </div>
      )}

      <div className="project-visual__legend">
        <span>{client}</span>
        <strong>{label}</strong>
        <p>{category}</p>
      </div>

      <div className="project-visual__metrics" aria-hidden="true">
        {visualTags.map((item, index) => (
          <div key={item} className="project-visual__metric-card">
            <small>{String(index + 1).padStart(2, "0")}</small>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
