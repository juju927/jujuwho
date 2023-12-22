import TagList from "../projects/TagList"


const TechStackItem = ({ tech }) => {
  return (
    <div>
      <h1 className="text-xl font-semibold tracking-tight">{tech?.category}</h1>
      <TagList taglist={tech?.tags} />
    </div>
  )
}

export default TechStackItem