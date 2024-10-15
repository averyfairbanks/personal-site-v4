import attnLogo from "../resources/logos/Attentive_Logo-Circle_Black-Yellow_RGB.svg";

export const content = {
  titles: {
    welcome: "WELCOME 👋",
    about: "ABOUT 📝",
    work: "WORK 💪",
    contact: "CONTACT 📬",
  },
  bodies: {
    about:
      `One of those weirdos that actually likes their job.\
      
      Proficient in many languages, frameworks, and libraries including  the usual suspects: Java with SpringBoot, TypeScript React, and numerous flavors of SQL. \
      
      An avid climber 🧗, runner 🏃, and hiker 🥾 when I can spare the time.`,
    contact:
      `If you want to reach me, my personal email is: 
      
      avery [at] averyf [dot] dev`,
  },
};

export interface Job {
  company: string;
  title: string;
  description?: string[];
  logo?: string;
  url: string;
}

export const work: Job[] = [
  {
    company: "Attentive Mobile",
    title: "Software Engineer I - Tactical Engineering",
    description: [
      `Designed and developed a new SMS-distributed digital wallet loyalty product - creating a new revenue stream \
        per client of $3k+ a month, in addition to the engineering hours charged, which continues to attract new brands.`,
      `Re-designed and re-wrote large swaths of existing SMS-distributed digital coupons functionality that eliminated \
        70% of billed third party vendor calls, allowing us to pass on that savings to one of our biggest clients.`,
      `Proposed new team-wide interface-driven design patterns that have since been adopted across the majority of \
        Tactical-owned services, standardizing large portions of the code and simplifying collaboration.`,
      `Adapted company standard cursor-based pagination pattern to support sorting based on multiple fields, including \
        arbitrary fields like strings, delivering functionality requested by clients and enabling native compatibility with \
        graph-connected UI components provided by our platform team.`,
      `Coordinated between our team and several other engineering teams to add additional functionality to their \
        domain-specific services to unblock a project automating the onboarding of over 10,000 new billable company accounts.`,
    ],
    logo: attnLogo,
    url: "https://www.attentivemobile.com/",
  },
  {
    company: "Attentive Mobile",
    title: "Solutions Engineer II - Solutions Engineering",
    description: [
      `Designed and developed self-service fullstack solutions to cover gaps in the product or as internal tools, \
      ultimately eliminating around 15 ticket types and creating team bandwidth.`,
      `Worked effectively across engineering teams to contribute code to their domain-specific services, in line \
      with their best-practices and existing infrastructure.`,
    ],
    logo: attnLogo,
    url: "https://www.attentivemobile.com/",
  },
  {
    company: "Attentive Mobile",
    title: "Solutions Engineer I - Solutions Engineering",
    description: [
      `Completed numerous daily support tasks manually that were not covered by the product or any internal tools, \
        leading to continued client satisfaction and preventing churn.`,
      `Collaborated with client-facing staff to translate client requests into actionable work and translate technical \
        concepts for all involved.`,
    ],
    logo: attnLogo,
    url: "https://www.attentivemobile.com/",
  },
];
