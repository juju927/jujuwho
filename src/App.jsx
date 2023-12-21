import "./App.css";
import NavBar from "./components/common/NavBar";
import SocialsBar from "./components/common/SocialsBar";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-indigo-200">
      <div className="relative w-11/12 h-5/6 px-2 py-1 rounded-lg bg-white/50 flex flex-col">
        <h1 className="absolute -top-6 left-0 text-2xl text-white font-serif tracking-wide font-semibold">someheader</h1>
        <h1 className="absolute -bottom-4 right-0 text-xs text-black/50">© 2023 Joanna</h1>
        <div className="self-end"><NavBar /></div>

        <div className="grow">
          {/* outlet */}
        </div>

        <div className="self-start">
          <SocialsBar />
        </div>
      </div>
    </div>
  );
}

export default App;
