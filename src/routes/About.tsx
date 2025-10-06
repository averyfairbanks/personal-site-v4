import PageContent from "../components/PageContent";
import "../styles/MainNav.css";
import { content } from "../resources/content";

const About = () => {
  const { about } = content;
  return <PageContent pageContent={about} />;
};

export default About;
