import attnLogo from "../resources/Attentive_Logotype_White_RGB.png"
import githubLogo from "../resources/github.svg"

export const content = {
  titles: {
    welcome: () => "WELCOME 👋",
    about: () => "ABOUT 📝",
    work: () => "WORK 💪",
    contact: () => "CONTACT 📬",
  },
  bodies: {
    about: () =>
      "One of those weirdos that actually likes their job, Avery is most interested in full stack web development. Proficient in many languages and frameworks including TypeScript, JavaScript, Python, and Java with React, Angular, and SpringBoot respectively. They are also an avid climber, runner, and hiker when they can spare the time.",
    contact: () =>
      "If you want to reach me, my personal email is: \navery[at]averyf.dev",
  },
};
export interface Job {
  company?: string;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const work: Job[] = [
  {
    company: "Attentive Mobile",
    title: "Solutions Engineer I",
    description: "Tasked with ",
    image: attnLogo,
    url: ""
  },
  {
    company: "Personal Site - averyf.dev",
    title: "Front End Designer & Developer",
    description: "Built this nonsense",
    image: githubLogo,
    url: "",
  },
  {
    company: "Thea's Food Pantry - Senior Capstone Project",
    title: "Front End Designer & Developer",
    description: "Built this nonsense",
    image: "src/resources/github.svg",
    url: "",
  },
];
