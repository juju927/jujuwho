import { SiLinkedin, SiTwitter, SiGithub, SiGmail } from "react-icons/si";

const SocialsBar = () => {
  const socials = {
    gmail: {
      icon: <SiGmail />,
      link: "mailto:juj.codes+jujuwho@gmail.com",
    },
    github: {
      icon: <SiGithub />,
      link: "https://github.com/juju927",
    },
    linkedIn: {
      icon: <SiLinkedin />,
      link: "https://linkedin.com/in/jujcodes/",
    },
    twitter: {
      icon: <SiTwitter />,
      link: "https://twitter.com/jujcodes",
    },
  };
  return (
    <div className="w-fit pt-2 flex gap-6">
      {Object.keys(socials).map((social) => (
        <a
          key={social}
          className="text-2xl cursor-pointer text-black/80 dark:text-white/80 hover:text-sky-600"
          href={socials[social].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {socials[social].icon}
        </a>
      ))}
    </div>
  );
};

export default SocialsBar;
