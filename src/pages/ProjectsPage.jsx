import PageHeader from "../components/common/PageHeader"
import ProjectCard from "../components/projects/ProjectCard"
import { projects } from "../../data/projects/projects.js"

const ProjectsPage = () => {

  return (
    <div className="flex flex-col gap-2 ">
      <PageHeader text="projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
        { projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage