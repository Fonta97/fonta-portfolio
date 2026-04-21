"use client";

import Link from "next/link";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SiteHeader } from "@/components/SiteHeader";
import { pageCopy, projects } from "@/lib/site-data";
import { useExperienceSettings } from "@/lib/use-experience-settings";

type ProjectDetailClientProps = {
  slug: string;
};

export function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
  const { language, theme, toggleLanguage, toggleTheme } = useExperienceSettings();
  const copy = pageCopy[language];
  const project = projects.find((item) => item.slug === slug);

  if (!project) return null;

  return (
    <>
      <SiteHeader
        language={language}
        theme={theme}
        onLanguageToggle={toggleLanguage}
        onThemeToggle={toggleTheme}
      />
      <main className="project-detail">
        <section className="project-detail__hero section-pad">
          <Link href="/#work" className="back-link">
            {copy.backToWork}
          </Link>
          <div className="project-detail__intro">
            <p className="eyebrow">{project.category[language]}</p>
            <h1>{project.title[language]}</h1>
            <p>{project.description[language]}</p>
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
            tags={project.tags}
          />
        </section>

        <section className="project-detail__body section-pad" aria-label="Project details">
          <div className="project-detail__stats">
            <div>
              <span>{copy.projectLabels.year}</span>
              <strong>{project.year}</strong>
            </div>
            <div>
              <span>{copy.projectLabels.role}</span>
              <strong>{project.role[language]}</strong>
            </div>
            <div>
              <span>{copy.projectLabels.result}</span>
              <strong>{project.result[language]}</strong>
            </div>
          </div>

          <div className="project-detail__narrative">
            <article>
              <span>{copy.projectLabels.challenge}</span>
              <p>{project.challenge[language]}</p>
            </article>
            <article>
              <span>{copy.projectLabels.approach}</span>
              <p>{project.approach[language]}</p>
            </article>
            <article>
              <span>{copy.projectLabels.outcome}</span>
              <p>{project.outcome[language]}</p>
            </article>
          </div>

          <div className="project-detail__stack">
            <h2>{copy.projectLabels.stack}</h2>
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="project-detail__cta section-pad" aria-labelledby="project-cta">
          <p className="eyebrow">{copy.projectLabels.next}</p>
          <h2 id="project-cta">{copy.projectCtaTitle}</h2>
          <Link href="/#contact">{copy.projectCtaLink}</Link>
        </section>
      </main>
    </>
  );
}
