import { AiOutlineGlobal } from "react-icons/ai";

const DemoButton = ({ link }) => {
  return (
    <a
      className="cursor:pointer flex items-center gap-2 bg-indigo-500 border border-indigo-200 px-2 py-1 rounded-md text-white shadow shadow-white/50"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <AiOutlineGlobal />
      {/* <span className="hidden xl:block">View Demo</span> */}
    </a>
  )
}

export default DemoButton