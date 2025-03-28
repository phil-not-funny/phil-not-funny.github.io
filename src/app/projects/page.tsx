import PageHeader from "@/components/low/PageHeader";
import { Typography } from "@/components/Materials";
import ProjectList from "@/components/pageSpecific/ProjectList";
import { WithPageHead } from "@/components/top/PageHead";

export default function Projects() {
  return (
    <WithPageHead>
      <PageHeader>Projects</PageHeader>
      <Typography variant="lead" className="text-center">
        Here, you&apos;ll find a showcase of all my major projects.
      </Typography>
      <ProjectList className="mt-16" />
    </WithPageHead>
  );
}
