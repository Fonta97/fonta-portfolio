import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailClient } from "@/components/ProjectDetailClient";
import { projects, siteConfig } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title.en} | ${siteConfig.shortName}`,
    description: project.short.en,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title.en} | ${siteConfig.shortName}`,
      description: project.short.en,
      url: `/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title.en,
    description: project.description.en,
    url: `${siteConfig.url}/work/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Alessandro Fontana",
      url: siteConfig.url,
    },
    keywords: project.stack.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <ProjectDetailClient slug={project.slug} />
    </>
  );
}
