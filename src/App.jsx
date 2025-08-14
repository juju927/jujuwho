import NavBar from "./components/common/NavBar";
import SocialsBar from "./components/common/SocialsBar";
import ThemeSwitch from "./components/common/ThemeSwitch";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-indigo-200 dark:bg-black">
      <div className="relative w-11/12 h-5/6 md:max-w-screen-lg px-2 py-1 rounded-lg bg-white/50 dark:bg-white/10 flex flex-col">
        <h1 className="absolute -top-10 left-0 text-2xl text-white font-serif tracking-wide font-semibold">
          <ThemeSwitch />
        </h1>
        <div className="self-end">
          <NavBar />
        </div>

        <div className="grow pt-2 xl:pt-10 px-1 overflow-y-auto flex justify-center">
          <Outlet />
        </div>

        <div className="self-start">
          <SocialsBar />
        </div>

        <span className="absolute -bottom-4 right-0 text-xs text-black/50 dark:text-white/50">
          © 2025 Joanna
        </span>
      </div>
    </div>
  );
}

export default App;
