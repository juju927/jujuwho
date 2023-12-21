const NavBar = () => {
  const navs = {
    about: {
      label: "about",
      abbrvLabel: "abt",
    },
    projects: {
      label: "projects",
      abbrvLabel: "proj",
    },
    experience: {
      label: "experience",
      abbrvLabel: "exp"
    },
  };

  return (
    <div className="w-fit flex gap-4">
      {Object.keys(navs).map((nav) => (
        <div key={nav} className="text-lg font-mono font-medium tracking-widest">
          {navs[nav].abbrvLabel}
        </div>
      ))}
    </div>
  );
};

export default NavBar;
