import ProjectDetailed from "@/components/pageSpecific/ProjectDetailed";
import { projects } from "@/lib/projects";
import { Project } from "@/types/LibTypes";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project: Project | undefined = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <h1 className="text-2xl uppercase tracking-wider">Project Not Found</h1>
    );
  }

  return <ProjectDetailed project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
