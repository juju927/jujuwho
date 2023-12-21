import PageHeader from "../components/common/PageHeader"
import ProjectCard from "../components/projects/ProjectCard"
import gbdypic from "../assets/images/projects/golfbuddy.png"
import qrikupic from "../assets/images/projects/qriku.png"
import mastermindpic from "../assets/images/projects/mastermind.png"
import tooforatepic from "../assets/images/projects/tooforate.png"
import bbbpic from "../assets/images/projects/beepbeepboop.png"

const ProjectsPage = () => {
  const projects = [
    {
      name: "golf buddy",
      date: "Dec 2023",
      description: "⛳️ A mobile web app to help golfers calculate their stats and keep track of each stroke they play.",
      image: gbdypic,
      tags: ["JavaScript", "React", "tailwindcss", "Express", "MongoDB", "npm"],
      links: {
        demo: "https://golf-buddy.onrender.com",
        github: "https://github.com/juju927/golf-scorecard",
        reflections: "",
      },
    },
    {
      name: "Qriku",
      date: "Jun 2023",
      description: "🎶 A song request web app for audiences to browse and request for songs that a live performer can perform.",
      image: qrikupic,
      tags: ["JavaScript", "Python", "React", "tailwindcss", "Flask", "PostgreSQL", "npm"],
      links: {
        demo: "",
        github: "https://github.com/juju927/qriku",
        reflections: "",
      },
    },
    {
      name: "mastermind",
      date: "dec 2023",
      description: "🕵🏻 A digitalised version of the popular puzzle game, Mastermind.",
      image: mastermindpic,
      tags: ["HTML", "CSS", "JavaScript"],
      links: {
        demo: "https://game-mastermind.vercel.app/",
        github: "https://github.com/juju927/game-mastermind",
        reflections: "",
      },
    },
    {
      name: "to o for ate",
      date: "dec 2023",
      description: "A replica of the sliding tile puzzle game, 2048.",
      image: tooforatepic,
      tags: ["HTML", "CSS", "JavaScript"],
      links: {
        demo: "https://game-2048-red.vercel.app/",
        github: "https://github.com/juju927/game-2048",
        reflections: "",
      },
    },
    {
      name: "beep beep boop",
      date: "dec 2023",
      description: "A simple version of Simon Says, a memory game.",
      image: bbbpic,
      tags: ["HTML", "CSS", "JavaScript"],
      links: {
        demo: "https://game-simon-says.vercel.app/",
        github: "https://github.com/juju927/game-simon-says",
        reflections: "",
      },
    },
  ];


  return (
    <div className="flex flex-col gap-2">
      <PageHeader text="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
        { projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage