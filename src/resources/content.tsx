import attnLogo from "../resources/logos/Attentive_Logo-Circle_Black-Yellow_RGB.svg";

export interface PageContent {
  title: string;
  body?: string;
}

export type PageContentKey = "welcome" | "about" | "work" | "contact";

export const content: Record<PageContentKey, PageContent> = {
  welcome: {
    title: "WELCOME 👋",
  },
  about: {
    title: "ABOUT 📝",
    body: `One of those weirdos that actually likes their job.
      
      Proficient in many languages, frameworks, and libraries including  the usual suspects: Java with SpringBoot, TypeScript React, and numerous flavors of SQL.
      
      An avid climber 🧗, runner 🏃, and hiker 🥾 when I can spare the time.`,
  },
  work: {
    title: "WORK 💪",
  },
  contact: {
    title: "CONTACT 📬",
    body: `If you want to reach me, my personal email is: 
      
      avery [at] averyf [dot] dev`,
  },
};

export interface Job {
  company: string;
  title: string;
  dateRange: string;
  description: string[];
  url: string;
  logo?: string;
}

export const jobs: Job[] = [
  {
    company: "Attentive Mobile",
    title: "Software Engineer II - Tactical Engineering",
    dateRange: "Mar 2025 - Present",
    description: [
      `Integral to both of the team's key initiatives - including Provision API which automates and orchestrates tasks necessary to onboard new companies and the Access Control project completely overhauling UI permissions by user - maintaining product momentum and ensuring tight delivery deadlines are hit.`,
      `Provision API:`,
      `-Collaborated extensively with several relevant product teams to architect and implement novel functionality to "clone" complex domain objects from one company to another.`,
      `-Contributed numerous smaller features, code optimizations, refactors, and bug fixes, again keeping us on target and ensuring what we deliver is as polished as possible.`,
      `Access Control:`,
      `-Planned and implemented numerous BE methods and UI utilization, allowing us to hit key deadlines for an internal product meeting and testing with the first client company.`,
      `-Re-architected service and repository layers for clarity, extensibility, and graph relation support.`,
      `Identified gaps and shortcomings in our internal localdev experience and wrote solutions to address them with the approval of the owning team; including adding support for leveraging our gateway locally, health checks for local java services, and better process ordering and orchestration to prevent specific race conditions.`,
    ],
    url: "https://www.attentivemobile.com/",
    logo: attnLogo,
  },
  {
    company: "Attentive Mobile",
    title: "Software Engineer I - Tactical Engineering",
    dateRange: "Apr 2023 - Mar 2025",
    description: [
      `Designed and developed a new SMS-distributed digital wallet loyalty product - creating a new revenue stream per client of $3k+ a month, in addition to the engineering hours charged, which continues to attract new brands.`,
      `Re-designed and re-wrote large swaths of existing SMS-distributed digital coupons functionality that eliminated 70% of billed third party vendor calls, allowing us to pass on that savings to one of our biggest clients.`,
      `Proposed new team-wide interface-driven design patterns that have since been adopted across the majority of Tactical-owned services, standardizing large portions of the code and simplifying collaboration.`,
      `Adapted company standard cursor-based pagination pattern to support sorting based on multiple fields, including arbitrary fields like strings, delivering functionality requested by clients and enabling native compatibility with graph-connected UI components provided by our platform team.`,
      `Coordinated between our team and several other engineering teams to add additional functionality to their domain-specific services to unblock a project automating the onboarding of over 10,000 new billable company accounts.`,
    ],
    url: "https://www.attentivemobile.com/",
    logo: attnLogo,
  },
  {
    company: "Attentive Mobile",
    title: "Solutions Engineer II - Solutions Engineering",
    dateRange: "Sep 2022 - Apr 2023",
    description: [
      `Designed and developed self-service fullstack solutions to cover gaps in the product or as internal tools, ultimately eliminating around 15 ticket types and creating team bandwidth.`,
      `Worked effectively across engineering teams to contribute code to their domain-specific services, in line with their best-practices and existing infrastructure.`,
    ],
    url: "https://www.attentivemobile.com/",
    logo: attnLogo,
  },
  {
    company: "Attentive Mobile",
    title: "Solutions Engineer I - Solutions Engineering",
    dateRange: "Jan 2022 - Sep 2022",
    description: [
      `Completed numerous daily support tasks manually that were not covered by the product or any internal tools, leading to continued client satisfaction and preventing churn.`,
      `Collaborated with client-facing staff to translate client requests into actionable work and translate technical concepts for all involved.`,
    ],
    logo: attnLogo,
    url: "https://www.attentivemobile.com/",
  },
];
