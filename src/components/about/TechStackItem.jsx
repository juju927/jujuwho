import TagList from "../projects/TagList"

const TechStackItem = ({ tech }) => {
  return (
    <div className="pb-2">
      <h1 className="relative w-fit pr-3 text-xl font-semibold tracking-tight text-black dark:text-white">{tech?.category}
        <span className={`absolute -right-0 bottom-1 w-2.5 h-0.5 animate-pulse ${tech?.style}`}></span>
      </h1>
      <TagList taglist={tech?.tags} />
    </div>
  )
}

export default TechStackItem