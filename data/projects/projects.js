import gbdypic from "../../src/assets/images/projects/golfbuddy.png"
import qrikupic from "../../src/assets/images/projects/qriku.png"
import mastermindpic from "../../src/assets/images/projects/mastermind.png"
import tooforatepic from "../../src/assets/images/projects/tooforate.png"
import bbbpic from "../../src/assets/images/projects/beepbeepboop.png"
import weatherapppic from "../../src/assets/images/projects/weatherdash.png"

export const projects = [
  {
    name: "golf buddy",
    date: "",
    description: "⛳️ A mobile web app to help golfers calculate their stats and keep track of each stroke they play.",
    image: gbdypic,
    tags: ["JavaScript", "React", "tailwindcss", "Express", "MongoDB", "npm"],
    links: {
      demo: "https://golf-buddy.onrender.com",
      github: "https://github.com/juju927/golf-scorecard",
      reflections: "",
    },
  },
  {
    name: "Qriku",
    date: "",
    description: "🎶 A song request web app for audiences to browse and request for songs that a live performer can perform.",
    image: qrikupic,
    tags: ["JavaScript", "Python", "React", "tailwindcss", "Flask", "PostgreSQL", "npm"],
    links: {
      demo: "",
      github: "https://github.com/juju927/qriku",
      reflections: "",
    },
  },
  {
    name: "how's the weather?",
    date: "",
    description: "🌦️ My silly little weather app",
    image: weatherapppic,
    tags: ["JavaScript", "React", "tailwindcss"],
    links: {
      demo: "https://weather-dashboard-zfsy.onrender.com/",
      github: "https://github.com/juju927/weather-dashboard",
      reflections: "",
    },
  },
  {
    name: "mastermind",
    date: "",
    description: "🕵🏻 A digitalised version of the popular puzzle game, Mastermind.",
    image: mastermindpic,
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "https://game-mastermind.vercel.app/",
      github: "https://github.com/juju927/game-mastermind",
      reflections: "",
    },
  },
  {
    name: "to o for ate",
    date: "",
    description: "A replica of the sliding tile puzzle game, 2048.",
    image: tooforatepic,
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "https://game-2048-red.vercel.app/",
      github: "https://github.com/juju927/game-2048",
      reflections: "",
    },
  },
  {
    name: "beep beep boop",
    date: "",
    description: "A simple digitalised version of Simon Says, a memory game.",
    image: bbbpic,
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "https://game-simon-says.vercel.app/",
      github: "https://github.com/juju927/game-simon-says",
      reflections: "",
    },
  },
];
