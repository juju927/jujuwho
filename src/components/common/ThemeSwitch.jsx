import { useEffect, useState } from "react";
import capooSleep from "../../assets/images/extra/capoo-sleep.gif";
import capooWork from "../../assets/images/extra/capoo-work.gif";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  return (
    <div onClick={toggleDarkMode} className="w-24 cursor-pointer">
      {isDark ? <img src={capooSleep} className="-translate-y-6" /> : <img src={capooWork}/>}
    </div>
  );
};

export default ThemeSwitch;
