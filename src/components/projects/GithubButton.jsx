import { SiGithub } from "react-icons/si";

const GithubButton = ({ link }) => {
  return (
    <a
      className="cursor:pointer flex items-center gap-2 bg-indigo-500 border border-indigo-200 px-2 py-1 rounded-md text-lg text-white shadow shadow-white/50"
      title="View on GitHub"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <SiGithub />
    </a>
  );
};

export default GithubButton;
