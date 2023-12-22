import { techStack } from "../../../data/about/techStack"
import TechStackItem from "./TechStackItem"

const TechStackSection = () => {

  return (
    <div className="flex flex-col px-4 pb-4 md:flex-row md:gap-2">
      { techStack.map((tech, idx) => (
        <TechStackItem key={idx} tech={tech} />
      ))}

    </div>
  )
}

export default TechStackSection