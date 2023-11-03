import desktop from "../assets/images/projects/Desktop.png";
import ooak from "../assets/images/projects/ooak.png";
import coursia from "../assets/images/projects/Coursia.png";
import explorer from "../assets/images/projects/explorer.png";

const projectData = [
  {
    title: "Desktop",
    image: desktop,
    url: "https://desktop-pcue.onrender.com/",
    github: "https://github.com/aungpaingsoe097238/Desktop",
    text: "Operation style portfolio Project.",
    tools: ["JavaScript", "Vue3", "Vueuse", "FireBase", "TailwindCss"],
  },
  {
    title: "OOAK Store",
    image: ooak,
    url: "https://shop.ooak.jp/",
    github: "https://github.com/aungpaingsoe097238/CMS",
    text: "A Ecomerce plaform project from a remote job.",
    tools: ["JavaScript", "Vue2", "Laravel", "VueBootStrap"],
  },
  {
    title: "Coursia",
    image: coursia,
    url: "https://demo.coursia.ai",
    github: "",
    text: "Video learning plaform like udmey.This is currently developing.",
    tools: ["JavaScript", "Nuxt3", "Laravel9", "BootStrap5"],
  },
  {
    title: "The Explorer",
    image: explorer,
    url: "https://explorer.aungpaingsoe.com/",
    text: "A Simple Blog website project.",
    tools: ["PHP","Laravel9","BootStrap5","JavaScript"]
  }
];

export default projectData;
