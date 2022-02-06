import attnLogo from "../resources/logos/Attentive_Logo-Circle_Black-Yellow_RGB.svg"
import githubLogo from "../resources/logos/github-icon.svg"
import gitlabLogo from "../resources/logos/gitlab-icon-1-color-white-rgb.png";

export const content = {
  titles: {
    welcome: () => "WELCOME 👋",
    about: () => "ABOUT 📝",
    work: () => "WORK 💪",
    contact: () => "CONTACT 📬",
  },
  bodies: {
    about: () =>
      "One of those weirdos that actually likes their job, Avery is most interested in full stack web development. \n\nProficient in many languages and frameworks including TypeScript, JavaScript, Python, and Java with React, Angular, and SpringBoot respectively. \n\nThey are also an avid climber, runner, and hiker when they can spare the time.",
    contact: () =>
      "If you want to reach me, my personal email is: \navery [at] averyf [dot] dev",
  },
};
export interface Job {
  company?: string;
  title?: string;
  description?: string;
  logo?: string;
  url: string;
}

export const work: Job[] = [
  {
    company: "Attentive Mobile",
    title: "Solutions Engineer I",
    description: "Tasked with ",
    logo: attnLogo,
    url: ""
  },
  {
    company: "Personal Site - averyf.dev",
    title: "Front End Designer & Developer",
    description: "Built this nonsense",
    logo: githubLogo,
    url: "",
  },
  {
    company: "Thea's Food Pantry - Senior Capstone Project",
    title: "Front End Designer & Developer",
    description: "Built this nonsense",
    logo: gitlabLogo,
    url: "https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry/archived/visitsystem-2020/checkout",
  },
];
