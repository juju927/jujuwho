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
			className="h-fit w-fit cursor:pointer flex items-center gap-2 bg-sky-500 hover:bg-sky-700 transition-colors ease-in px-2 py-2 rounded-md text-white shadow shadow-white/50"
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
