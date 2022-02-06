import attnLogo from "../resources/logos/Attentive_Logo-Circle_Black-Yellow_RGB.svg";
import githubLogo from "../resources/logos/github-icon.svg";
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
      "One of those weirdos that actually likes their job, Avery is most interested in full stack web development. \n\nProficient in many languages and frameworks including TypeScript, JavaScript, Python, and Java with React, Angular, and SpringBoot respectively. \n\nThey are also an avid climber 🧗, runner 🏃, and hiker 🥾 when they can spare the time.",
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
    description:
      "\nTasked with configuring more bespoke implementations of our existing offerings for clients. Utilize numerous languages such as TypeScript, Python, and Java, as well as frameworks like React and SpringBoot.",
    logo: attnLogo,
    url: "https://www.attentivemobile.com/",
  },
  {
    company: "Personal Site - averyf.dev",
    title: "Front End Designer & Developer",
    description:
      "\nBuilt this site using TypeScript React/React-Router/MUI within a few days with a cleaner presentation, better performance, and better scaling across devices. Still utilizing Netlify for deployment.",
    logo: githubLogo,
    url: "https://github.com/averyfairbanks/personal-site-v4",
  },
  {
    company: "Thea's Food Pantry - Senior Capstone Project",
    title: "Full Stack Web Developer",
    description:
      "\nMainly focused on the design and development of the Angular front-end but contributed large portions of code and plenty of guidance for the SpringBoot back-end.",
    logo: gitlabLogo,
    url: "https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry/archived/visitsystem-2020/checkout",
  },
];
