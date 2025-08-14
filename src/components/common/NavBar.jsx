import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navs = {
    about: {
      label: "about",
      abbrvLabel: "abt",
      linkTo: "/about",
    },
    projects: {
      label: "projects",
      abbrvLabel: "proj",
      linkTo: "/projects",
    },
    experience: {
      label: "experience",
      abbrvLabel: "exp",
      linkTo: "/experience",
    },
  };

  return (
    <div className="w-fit my-1 flex gap-4 text-black dark:text-white">
      {Object.keys(navs).map((nav) => (
        <NavLink
          to={navs[nav].linkTo}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline decoration-pink-500 decoration-2"
              : ""
          }
          key={nav}
        >
          <div className="hidden md:block">
            <div className="text-lg font-mono font-medium tracking-widest">
              {navs[nav].label}
            </div>
          </div>
          <div className="block md:hidden">
            <div className="text-lg font-mono font-medium tracking-widest">
              {navs[nav].abbrvLabel}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
