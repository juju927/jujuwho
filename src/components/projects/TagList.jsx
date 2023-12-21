import Tag from "./Tag"


const TagList = ({ taglist }) => {
  return (
    <div className="flex gap-2 flex-wrap w-full">
      { taglist?.map((tag, idx) => (
        <Tag key={idx} tag={tag} />
      ))}

    </div>
  )
}

export default TagList