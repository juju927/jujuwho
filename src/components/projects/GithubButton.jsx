import { SiGithub } from "react-icons/si";

const GithubButton = ({ link }) => {
  return (
    <a
      className="cursor:pointer flex items-center gap-2 bg-indigo-500 border border-indigo-200 px-2 py-1 rounded-md text-white"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <SiGithub />
      <span className="hidden xl:block">View on GitHub</span>
    </a>
  );
};

export default GithubButton;
