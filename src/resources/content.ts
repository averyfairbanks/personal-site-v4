import attnLogo from "../resources/logos/Attentive_Logo-Circle_Black-Yellow_RGB.svg";
import githubLogo from "../resources/logos/github-icon.svg";
import gitlabLogo from "../resources/logos/gitlab-icon-1-color-white-rgb.png";

export const content = {
  titles: {
    welcome: "WELCOME 👋",
    about: "ABOUT 📝",
    work: "WORK 💪",
    contact: "CONTACT 📬",
  },
  bodies: {
    about:
      "One of those weirdos that actually likes their job, Avery is most interested in full stack web development. \n\nProficient in many languages and frameworks including TypeScript, JavaScript, Python, and Java with React, Angular, and SpringBoot respectively. \n\nThey are also an avid climber 🧗, runner 🏃, and hiker 🥾 when they can spare the time.",
    contact:
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
    title: "Software Engineer I",
    description:
      "\nTasked with configuring more bespoke implementations of our existing offerings for clients. Utilize numerous languages such as TypeScript, Python, and Java, as well as frameworks like React and SpringBoot.",
    logo: attnLogo,
    url: "https://www.attentivemobile.com/",
  },
  {
    company: "Attentive Mobile",
    title: "Solutions Engineer II",
    description:
      "\nTasked with configuring more bespoke implementations of our existing offerings for clients. Utilize numerous languages such as TypeScript, Python, and Java, as well as frameworks like React and SpringBoot.",
    logo: attnLogo,
    url: "https://www.attentivemobile.com/",
  },
  {
    company: "Attentive Mobile",
    title: "Solutions Engineer I",
    description:
      "\nTasked with configuring more bespoke implementations of our existing offerings for clients. Utilize numerous languages such as TypeScript, Python, and Java, as well as frameworks like React and SpringBoot.",
    logo: attnLogo,
    url: "https://www.attentivemobile.com/",
  },
];
