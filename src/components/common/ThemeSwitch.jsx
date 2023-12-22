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
    <div onClick={toggleDarkMode}>
      {isDark ? <img src={capooSleep} className="-translate-y-6 w-24" /> : <img src={capooWork} className="w-24"/>}
    </div>
  );
};

export default ThemeSwitch;
