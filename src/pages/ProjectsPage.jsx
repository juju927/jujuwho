import PageHeader from "../components/common/PageHeader"
import ProjectCard from "../components/projects/ProjectCard"
import { projects } from "../../data/projects/projects.js"

const ProjectsPage = () => {

  return (
    <div className="flex flex-col gap-2 items-center">
      <PageHeader text="projects" />

      <div className="mt-w-10/12 md:w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-[1fr] gap-6">
        { projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage