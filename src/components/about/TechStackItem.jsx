import TagList from "../projects/TagList"


const TechStackItem = ({ tech }) => {
  return (
    <div className="pb-2">
      <h1 className="text-xl font-semibold tracking-tight text-black dark:text-white">{tech?.category}{" "}<span className={tech?.style}>_</span></h1>
      <TagList taglist={tech?.tags} />
    </div>
  )
}

export default TechStackItem