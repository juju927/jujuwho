import DemoButton from "./DemoButton";
import GithubButton from "./GithubButton";
import TagList from "./TagList";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative w-11/12 h-80 rounded-md border border-white/70 shadow-md">
      <img
        src={project?.image}
        className="aspect-auto rounded-md w-full h-full object-cover object-center lg:object-top"
      />

      <div className="absolute rounded-b-md z-10 w-full h-fit bottom-0 bg-black/70 p-2 flex flex-col gap-2">
        <div className="flex">
          <h1 className="grow text-xl text-white font-bold tracking-wider">
            {project?.name}
          </h1>
          <div className="flex justify-end gap-4">
            {project?.links?.demo && <DemoButton link={project?.links?.demo} />}
            {project?.links?.github && (
              <GithubButton link={project?.links?.github} />
            )}
          </div>
        </div>
        <p className="text-base text-white/90 grow">{project?.description}</p>

        <TagList taglist={project?.tags} />
      </div>
    </div>
  );
};

export default ProjectCard;
