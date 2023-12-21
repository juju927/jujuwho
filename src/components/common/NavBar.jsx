const NavBar = () => {
  const navs = {
    about: "",
    projects: "",
    work: "",
  };

  return (
    <div className="w-fit flex gap-4">
      {Object.keys(navs).map((nav) => (
        <div key={nav} className="text-lg font-medium tracking-widest">
          {nav}
        </div>
      ))}
    </div>
  );
};

export default NavBar;
