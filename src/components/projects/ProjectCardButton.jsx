import { AiOutlineGlobal } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

const ProjectCardButton = ({ type, link }) => {
	const TYPES = {
		demo: {
			title: "View demo",
			icon: <AiOutlineGlobal />,
		},
		github: {
			title: "View on GitHub",
			icon: <SiGithub />,
		},
	};

	return (
		<a
			className="cursor:pointer flex items-center gap-2 bg-sky-500 px-2 py-1 rounded-md text-white shadow shadow-white/50"
			title={TYPES[type].title}
			href={link}
			target="_blank"
			rel="noreferrer noopener"
		>
			{TYPES[type].icon}
		</a>
	);
};
export default ProjectCardButton;
