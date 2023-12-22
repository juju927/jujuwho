import TechStackItem from "./TechStackItem"

const TechStackSection = () => {
  const techStack = [
    {
      category: "Core",
      tags: ["Python", "JavaScript"]
    },
    {
      category: "Frontend",
      tags: ["React", "tailwindcss", "HTML", "CSS"]
    },
    {
      category: "Backend",
      tags: ["MongoDB", "Express", "Flask"]
    },
    {
      category: "VCS",
      tags: ["GitHub", "Git"]
    },
  ]

  return (
    <div className="flex flex-col px-4 md:flex-row md:gap-2">
      { techStack.map((tech, idx) => (
        <TechStackItem key={idx} tech={tech} />
      ))}

    </div>
  )
}

export default TechStackSection