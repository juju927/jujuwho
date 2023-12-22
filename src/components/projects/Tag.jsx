import {
  SiReact,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiExpress,
  SiNpm,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiFlask,
  SiGithub,
  SiScratch,
  SiSwift,
  SiAmazonaws,
  SiGit
} from "react-icons/si";

const Tag = ({ tag }) => {
  const tagLogoCol = {
    React: {
      logo: <SiReact />,
      color: "bg-sky-700",
    },
    JavaScript: {
      logo: <SiJavascript />,
      color: "bg-yellow-400",
    },
    Python: {
      logo: <SiPython />,
      color: "bg-blue-600",
    },
    MongoDB: {
      logo: <SiMongodb />,
      color: "bg-lime-500",
    },
    Express: {
      logo: <SiExpress />,
      color: "bg-slate-800",
    },
    npm: {
      logo: <SiNpm />,
      color: "bg-red-500",
    },
    tailwindcss: {
      logo: <SiTailwindcss />,
      color: "bg-sky-400",
    },
    HTML: {
      logo: <SiHtml5 />,
      color: "bg-orange-500",
    },
    CSS: {
      logo: <SiCss3 />,
      color: "bg-blue-600",
    },
    PostgreSQL: {
      logo: <SiPostgresql />,
      color: "bg-blue-800",
    },
    Flask: {
      logo: <SiFlask />,
      color: "bg-blue-400",
    },
    GitHub: {
      logo: <SiGithub />,
      color: "bg-black",
    },
    Scratch: {
      logo: <SiScratch />,
      color: "bg-amber-500",
    },
    Swift: {
      logo: <SiSwift />,
      color: "bg-orange-500",
    },
    AWS: {
      logo: <SiAmazonaws />,
      color: "bg-blue-950",
    },
    Git: {
      logo: <SiGit />,
      color: "bg-orange-600",
    },
  };

  return (
    <div
      className={`rounded-md flex gap-1 px-1 w-fit h-fit text-white text-xs items-center font-mono ${tagLogoCol[tag]?.color}`}
    >
      <>{tagLogoCol[tag]?.logo}</>
      <span>{tag}</span>
    </div>
  );
};

export default Tag;
