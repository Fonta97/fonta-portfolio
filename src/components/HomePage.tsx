"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { MagicBento } from "@/components/MagicBento";
import { TypingAnimation } from "@/components/TypingAnimation";
import BorderGlow from "@/components/BorderGlow";
import { ContactForm } from "@/components/ContactForm";
import { MagneticButton } from "@/components/MagneticButton";
import ProfileCard from "@/components/ProfileCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScroll } from "@/components/SmoothScroll";
import {
  capabilityGroups,
  faqs,
  pageCopy,
  processSteps,
  projects,
  services,
  siteConfig,
  stockImages,
} from "@/lib/site-data";
import type { Language, ThemeMode } from "@/lib/site-data";
import { useExperienceSettings } from "@/lib/use-experience-settings";
import { useLiteExperience } from "@/lib/use-lite-experience";

const BounceCards = dynamic(() => import("@/components/BounceCards"), {
  ssr: false,
});

const SoftAurora = dynamic(() => import("@/components/SoftAurora"), {
  ssr: false,
});

export function HomePage() {
  const { language, setLanguage, theme, toggleTheme } = useExperienceSettings();
  const isLiteExperience = useLiteExperience();
  const copy = pageCopy[language];

  return (
    <>
      <SmoothScroll disabled={isLiteExperience} />
      {!isLiteExperience ? <ScrollProgress /> : null}
      <SiteHeader
        language={language}
        theme={theme}
        onLanguageChange={setLanguage}
        onThemeToggle={toggleTheme}
      />
      <main id="main">
        <Hero language={language} theme={theme} isLiteExperience={isLiteExperience} />
        <CinematicBridge language={language} />
        <StockGallery language={language} />
        <WorkShowcase language={language} />
        <ServicesSection language={language} isLiteExperience={isLiteExperience} />
        <MagicBentoSection language={language} />
        <ProcessSection language={language} />
        <CapabilitiesSection language={language} isLiteExperience={isLiteExperience} />
        <AboutSection language={language} isLiteExperience={isLiteExperience} />
        <FAQSection language={language} />
        <ContactSection language={language} isLiteExperience={isLiteExperience} />
      </main>
      <Footer language={language} role={copy.footerRole} />
    </>
  );
}

function Hero({
  language,
  theme,
  isLiteExperience,
}: {
  language: Language;
  theme: ThemeMode;
  isLiteExperience: boolean;
}) {
  const copy = pageCopy[language].hero;
  const cardGradient =
    theme === "dark"
      ? "linear-gradient(150deg, rgba(14, 8, 24, 0.98) 0%, rgba(53, 29, 90, 0.72) 52%, rgba(201, 166, 255, 0.22) 100%)"
      : "linear-gradient(150deg, rgba(255, 255, 255, 0.94) 0%, rgba(241, 231, 255, 0.84) 48%, rgba(147, 51, 234, 0.12) 100%)";
  const glowColor =
    theme === "dark" ? "rgba(167, 139, 250, 0.34)" : "rgba(147, 51, 234, 0.2)";

  const handleCardContactClick = () => {
    const target = document.getElementById("contact");
    if (!target) return;
    window.history.replaceState(null, "", "#contact");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__nebula" />
        {!isLiteExperience ? (
          <div className="hero__planet-field">
            <SoftAurora
              speed={theme === "dark" ? 0.52 : 0.44}
              scale={1.32}
              brightness={theme === "dark" ? 1.08 : 0.82}
              color1={theme === "dark" ? "#ede9fe" : "#c084fc"}
              color2={theme === "dark" ? "#a855f7" : "#7c3aed"}
              noiseFrequency={2.2}
              noiseAmplitude={0.82}
              bandHeight={0.48}
              bandSpread={1.22}
              octaveDecay={0.34}
              layerOffset={0.42}
              colorSpeed={0.82}
              enableMouseInteraction
              mouseInfluence={0.18}
            />
          </div>
        ) : null}
        <div className="signal-grid" />
      </div>
      <div className="hero__content">
        <Reveal immediate>
          <p className="eyebrow">
            {isLiteExperience ? copy.eyebrow : <TypingAnimation text={copy.eyebrow} speed={26} />}
          </p>
        </Reveal>
        <Reveal immediate delay={0.05}>
          <h1 id="hero-title">{copy.title}</h1>
        </Reveal>
        <Reveal immediate delay={0.1}>
          <p className="hero__lead">{copy.lead}</p>
        </Reveal>
        <Reveal immediate delay={0.15}>
          <div className="hero__actions">
            <BorderGlow
              className="ui-glow ui-glow--button"
              disabled={isLiteExperience}
              edgeSensitivity={26}
              glowColor="274 92 80"
              backgroundColor={theme === "dark" ? "#ffffff" : "#ffffff"}
              borderRadius={12}
              glowRadius={28}
              glowIntensity={0.95}
              coneSpread={20}
              colors={["#8b5cf6", "#c084fc", "#f472b6"]}
              fillOpacity={0.34}
            >
              <MagneticButton href="#contact">{copy.primary}</MagneticButton>
            </BorderGlow>
            <BorderGlow
              className="ui-glow ui-glow--button"
              disabled={isLiteExperience}
              edgeSensitivity={26}
              glowColor="274 92 80"
              backgroundColor={theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(5,5,5,0.035)"}
              borderRadius={12}
              glowRadius={28}
              glowIntensity={0.95}
              coneSpread={20}
              colors={["#8b5cf6", "#c084fc", "#f472b6"]}
              fillOpacity={0.26}
            >
              <MagneticButton href="#work" variant="secondary">
                {copy.secondary}
              </MagneticButton>
            </BorderGlow>
          </div>
        </Reveal>
      </div>

      <Reveal className="hero__portrait" immediate delay={0.2}>
        {isLiteExperience ? (
          <article className="hero-profile-lite">
            <div className="hero-profile-lite__header">
              <h3>Alessandro Fontana</h3>
              <p>{language === "it" ? "AI Engineering / Full Stack" : "AI Engineering / Full Stack"}</p>
            </div>
            <div className="hero-profile-lite__media">
              <Image
                src="/assets/alessandro-fonta-2026.jpg"
                alt="Alessandro Fontana portrait"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 760px) 92vw, (max-width: 1120px) 420px, 450px"
              />
            </div>
            <div className="hero-profile-lite__footer">
              <div className="hero-profile-lite__identity">
                <span>@fonta97</span>
                <p>{language === "it" ? "Piemonte / remoto" : "Piedmont / remote"}</p>
              </div>
              <button type="button" onClick={handleCardContactClick}>
                {language === "it" ? "Contatto" : "Contact"}
              </button>
            </div>
          </article>
        ) : (
          <ProfileCard
            className="hero-profile-card"
            avatarUrl="/assets/alessandro-fonta-2026.jpg"
            miniAvatarUrl="/assets/alessandro-fonta-2026.jpg"
            name="Alessandro Fontana"
            title={language === "it" ? "AI Engineering / Full Stack" : "AI Engineering / Full Stack"}
            handle="fonta97"
            status={language === "it" ? "Piemonte / remoto" : "Piedmont / remote"}
            contactText={language === "it" ? "Contatto" : "Contact"}
            showUserInfo
            enableTilt
            enableMobileTilt={false}
            onContactClick={handleCardContactClick}
            behindGlowEnabled
            behindGlowColor={glowColor}
            behindGlowSize="48%"
            innerGradient={cardGradient}
            avatarLoading="eager"
            avatarFetchPriority="high"
          />
        )}
      </Reveal>
    </section>
  );
}

function CinematicBridge({ language }: { language: Language }) {
  const copy = pageCopy[language].cinematic;

  return (
    <section id="direction" className="cinematic" aria-label="Portfolio positioning">
      <div className="cinematic__sticky">
        <Reveal className="cinematic__copy">
          <span>{copy.label}</span>
          <p>{copy.text}</p>
          <div className="cinematic__chips">
            {copy.chips.map((item) => (
              <i key={item}>{item}</i>
            ))}
          </div>
        </Reveal>
        <div className="cinematic__stage" aria-hidden="true">
          <div className="kinetic-orb kinetic-orb--bridge" />
          <div className="cinematic__grid" />
          <div className="cinematic__manifest">
            {copy.stack.map((item, index) => (
              <p key={item} className={`cinematic__word cinematic__word--${index + 1}`}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StockGallery({ language }: { language: Language }) {
  const copy = pageCopy[language].visualProof;

  return (
    <section className="section-pad visual-proof" aria-labelledby="visual-proof-title">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="visual-proof-title">{copy.title}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p>{copy.text}</p>
        </Reveal>
      </div>
      <div className="visual-proof__grid">
        {stockImages.map((image, index) => (
          <Reveal key={image.src} delay={index * 0.04}>
            <figure className="visual-proof__item">
              <Image
                src={image.src}
                alt={image.alt[language]}
                fill
                sizes="(max-width: 760px) 92vw, 33vw"
              />
              <figcaption>{image.title[language]}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MagicBentoSection({ language }: { language: Language }) {
  const copy = pageCopy[language].magicBento;

  return (
    <Reveal>
      <MagicBento
        eyebrow={copy.eyebrow}
        title={copy.title}
        text={copy.text}
        language={language}
      />
    </Reveal>
  );
}

function WorkShowcase({ language }: { language: Language }) {
  const copy = pageCopy[language].work;

  return (
    <section id="work" className="section-pad work" aria-labelledby="work-title">
      <div className="section-heading section-heading--wide">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="work-title">{copy.title}</h2>
        </Reveal>
      </div>

      <div className="work__layout">
        <aside className="work__rail" aria-label="Work summary">
          {copy.rail.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </aside>
        <div className="work__list">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <article className="project-card">
                <Link href={`/work/${project.slug}`} className="project-card__link">
                  <div className="project-card__meta">
                    <span>{project.category[language]}</span>
                    <span>{project.year}</span>
                  </div>
                  <ProjectVisual
                    accent={project.accent}
                    label={project.title[language]}
                    client={project.client[language]}
                    category={project.category[language]}
                    backgroundSrc={project.visual.backgroundSrc}
                    backgroundAlt={project.visual.backgroundAlt[language]}
                    foregroundSrc={
                      "foregroundSrc" in project.visual ? project.visual.foregroundSrc : undefined
                    }
                    foregroundAlt={
                      "foregroundAlt" in project.visual
                        ? project.visual.foregroundAlt?.[language]
                        : undefined
                    }
                    foregroundFit={
                      "foregroundFit" in project.visual ? project.visual.foregroundFit : undefined
                    }
                    brandSurface={
                      "brandSurface" in project.visual ? project.visual.brandSurface : undefined
                    }
                    tags={project.tags}
                  />
                  <div className="project-card__body">
                    <div>
                      <h3>{project.title[language]}</h3>
                      <p>{project.short[language]}</p>
                    </div>
                    <dl>
                      <div>
                        <dt>{pageCopy[language].projectLabels.role}</dt>
                        <dd>{project.role[language]}</dd>
                      </div>
                      <div>
                        <dt>{pageCopy[language].projectLabels.result}</dt>
                        <dd>{project.result[language]}</dd>
                      </div>
                    </dl>
                    <ul aria-label={`${project.title[language]} technologies`}>
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({
  language,
  isLiteExperience,
}: {
  language: Language;
  isLiteExperience: boolean;
}) {
  const copy = pageCopy[language].services;

  return (
    <section id="services" className="section-pad services" aria-labelledby="services-title">
      <div className="section-heading section-heading--wide">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="services-title">{copy.title}</h2>
        </Reveal>
      </div>
      <div className="services__grid">
        {services.map((service, index) => (
          <Reveal key={service.title.en} delay={index * 0.035}>
            <BorderGlow
              className="ui-glow ui-glow--card"
              disabled={isLiteExperience}
              edgeSensitivity={24}
              glowColor="274 88 78"
              backgroundColor="var(--contrast-card)"
              borderRadius={16}
              glowRadius={24}
              colors={["#8b5cf6", "#c084fc", "#f472b6"]}
              fillOpacity={0.22}
            >
              <article className="service-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title[language]}</h3>
                <p>{service.text[language]}</p>
              </article>
            </BorderGlow>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProcessSection({ language }: { language: Language }) {
  const copy = pageCopy[language].process;

  return (
    <section id="process" className="section-pad process" aria-labelledby="process-title">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="process-title">{copy.title}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p>{copy.text}</p>
        </Reveal>
      </div>
      <div className="process__list">
        {processSteps.map((step, index) => (
          <Reveal key={step.title.en} delay={index * 0.04}>
            <article className="process-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title[language]}</h3>
              <p>{step.text[language]}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CapabilitiesSection({
  language,
  isLiteExperience,
}: {
  language: Language;
  isLiteExperience: boolean;
}) {
  const copy = pageCopy[language].capabilities;
  const band = capabilityGroups.flatMap((group) => group.items).slice(0, 18);

  return (
    <section
      id="capabilities"
      className="section-pad capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="capabilities__band" aria-hidden="true">
        <div className="capabilities__band-track">
          {[...band, ...band].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="capabilities-title">{copy.title}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p>{copy.text}</p>
        </Reveal>
      </div>
      <div className="capabilities__grid">
        {capabilityGroups.map((group, index) => (
          <Reveal key={group.label.en} delay={index * 0.04}>
            <BorderGlow
              className="ui-glow ui-glow--card"
              disabled={isLiteExperience}
              edgeSensitivity={24}
              glowColor="274 88 78"
              backgroundColor="var(--panel)"
              borderRadius={16}
              glowRadius={24}
              colors={["#8b5cf6", "#c084fc", "#f472b6"]}
              fillOpacity={0.22}
            >
              <article className="capability-card">
                <h3>{group.label[language]}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </BorderGlow>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutSection({
  language,
  isLiteExperience,
}: {
  language: Language;
  isLiteExperience: boolean;
}) {
  const copy = pageCopy[language].about;
  const aboutImages = [
    "/assets/about-1.jpeg",
    "/assets/about-2.jpeg",
    "/assets/about-3.jpeg",
    "/assets/alessandro-fonta-2026.jpg",
  ];
  const transforms = [
    "rotate(-10deg) translate(-150px)",
    "rotate(-4deg) translate(-54px)",
    "rotate(5deg) translate(44px)",
    "rotate(10deg) translate(142px)",
  ];

  return (
    <section id="about" className="section-pad about" aria-labelledby="about-title">
      {!isLiteExperience ? (
        <Reveal className="about__image">
          <BounceCards
            className="about__bounce-cards"
            images={aboutImages}
            containerWidth={520}
            containerHeight={520}
            animationDelay={0.28}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transforms}
            enableHover
          />
        </Reveal>
      ) : (
        <Reveal className="about__mobile-gallery">
          {aboutImages.slice(0, 4).map((image, index) => (
            <div key={image} className={`about__mobile-shot about__mobile-shot--${index + 1}`}>
              <Image
                src={image}
                alt={copy.title}
                fill
                sizes="(max-width: 760px) 44vw, 0px"
              />
            </div>
          ))}
        </Reveal>
      )}
      <div className="about__content">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="about-title">{copy.title}</h2>
        </Reveal>
        {copy.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delay={(index + 1) * 0.04}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
        <Reveal delay={0.16}>
          <div className="about__facts">
            {copy.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <details className="personal-signal">
            <summary>{copy.personalSummary}</summary>
            <p>
              {copy.personalText}{" "}
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
                @{siteConfig.social.instagram.replace("https://instagram.com/", "")}
              </a>
              .
            </p>
          </details>
        </Reveal>
      </div>
    </section>
  );
}

function FAQSection({ language }: { language: Language }) {
  const copy = pageCopy[language].faq;

  return (
    <section className="section-pad faq" aria-labelledby="faq-title">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="faq-title">{copy.title}</h2>
        </Reveal>
      </div>
      <div className="faq__list">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question.en} delay={index * 0.04}>
            <article>
              <h3>{faq.question[language]}</h3>
              <p>{faq.answer[language]}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactSection({
  language,
  isLiteExperience,
}: {
  language: Language;
  isLiteExperience: boolean;
}) {
  const copy = pageCopy[language].contact;

  return (
    <section id="contact" className="section-pad contact" aria-labelledby="contact-title">
      <div className="contact__intro">
        <Reveal>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="contact-title">{copy.title}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p>{copy.text}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="contact__direct">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.08}>
        <BorderGlow
          className="contact__form ui-glow ui-glow--panel"
          disabled={isLiteExperience}
          edgeSensitivity={24}
          glowColor="274 88 78"
          backgroundColor="var(--panel)"
          borderRadius={18}
          glowRadius={30}
          colors={["#8b5cf6", "#c084fc", "#f472b6"]}
          fillOpacity={0.24}
        >
          <ContactForm copy={copy.form} email={siteConfig.email} />
        </BorderGlow>
      </Reveal>
    </section>
  );
}

function Footer({ language, role }: { language: Language; role: string }) {
  return (
    <footer className="footer">
      <p>
        {siteConfig.shortName} / {role}
      </p>
      <div>
        <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <span>{language === "it" ? "Italia" : "Italy"}</span>
      </div>
    </footer>
  );
}
