"use client";

const automationFiles = [
  { name: "workflow-ai.json", body: "Prompt chain, guardrail logic, fallback routing e output supervisionato." },
  { name: "shopify-sync.ts", body: "Webhook, validazione, sync ordini e riconciliazione stock multi-sistema." },
  { name: "brief-notes.md", body: "Obiettivi business, KPI reali, rischi tecnici e priorita di delivery." },
  { name: "cms-map.csv", body: "Modelli contenuto, relazioni editoriali e campi strutturati per team marketing." },
];

const notifications = [
  "Nuovo lead qualificato acquisito",
  "Deploy completato senza regressioni",
  "Nuova integrazione API disponibile",
  "Report KPI generato per il team",
];

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

type MagicBentoProps = {
  eyebrow: string;
  title: string;
  text: string;
  language: "it" | "en";
};

export function MagicBento({
  eyebrow,
  title,
  text,
  language,
}: MagicBentoProps) {
  return (
    <section className="section-pad magic-bento" aria-labelledby="magic-bento-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="magic-bento-title">{title}</h2>
        </div>
        <p>{text}</p>
      </div>

      <div className="magic-bento__grid">
        <article className="magic-bento__card magic-bento__card--marquee">
          <div className="magic-bento__header">
            <span>01</span>
            <h3>{language === "it" ? "File, brief e materiali" : "Files, briefs, and inputs"}</h3>
            <p>
              {language === "it"
                ? "Documenti, note, prompt e asset che entrano davvero in un progetto."
                : "Documents, notes, prompts, and assets that actually enter a project."}
            </p>
          </div>
          <div className="magic-bento__marquee">
            <div className="magic-bento__marquee-track">
              {[...automationFiles, ...automationFiles].map((file, index) => (
                <figure key={`${file.name}-${index}`} className="magic-bento__file">
                  <figcaption>{file.name}</figcaption>
                  <blockquote>{file.body}</blockquote>
                </figure>
              ))}
            </div>
          </div>
        </article>

        <article className="magic-bento__card magic-bento__card--list">
          <div className="magic-bento__header">
            <span>02</span>
            <h3>{language === "it" ? "Segnali e notifiche" : "Signals and notifications"}</h3>
            <p>
              {language === "it"
                ? "Flussi che tengono il team allineato e fanno emergere subito quello che conta."
                : "Flows that keep the team aligned and surface what matters immediately."}
            </p>
          </div>
          <div className="magic-bento__list">
            {notifications.map((item, index) => (
              <div
                key={item}
                className="magic-bento__list-item"
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <strong>{item}</strong>
                <span>{language === "it" ? "in tempo reale" : "real time"}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="magic-bento__card magic-bento__card--beam">
          <div className="magic-bento__header">
            <span>03</span>
            <h3>{language === "it" ? "Integrazioni" : "Integrations"}</h3>
            <p>
              {language === "it"
                ? "Frontend, CMS, API, AI e analytics collegati senza creare caos."
                : "Frontend, CMS, APIs, AI, and analytics connected without creating chaos."}
            </p>
          </div>
          <div className="magic-bento__beam-scene" aria-hidden="true">
            <div className="magic-bento__node magic-bento__node--source">Core</div>
            <div className="magic-bento__node magic-bento__node--one">CMS</div>
            <div className="magic-bento__node magic-bento__node--two">API</div>
            <div className="magic-bento__node magic-bento__node--three">AI</div>
            <div className="magic-bento__node magic-bento__node--four">Data</div>
            <i className="magic-bento__beam magic-bento__beam--one" />
            <i className="magic-bento__beam magic-bento__beam--two" />
            <i className="magic-bento__beam magic-bento__beam--three" />
            <i className="magic-bento__beam magic-bento__beam--four" />
          </div>
        </article>

        <article className="magic-bento__card magic-bento__card--calendar">
          <div className="magic-bento__header">
            <span>04</span>
            <h3>{language === "it" ? "Planning e release" : "Planning and release"}</h3>
            <p>
              {language === "it"
                ? "Roadmap leggibile, sprint chiari e date che hanno un senso per il business."
                : "Readable roadmap, clear sprints, and dates that make sense for the business."}
            </p>
          </div>
          <div className="magic-bento__calendar">
            <div className="magic-bento__calendar-head">
              {days.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="magic-bento__calendar-grid">
              {Array.from({ length: 35 }).map((_, index) => {
                const isActive = [10, 11, 12, 17, 18, 24].includes(index);
                return (
                  <span
                    key={index}
                    className={isActive ? "is-active" : ""}
                  >
                    {(index % 30) + 1}
                  </span>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
