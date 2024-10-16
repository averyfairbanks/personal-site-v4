import MainNav from "../components/MainNav";
import PageContent from "../components/PageContent";
import "../styles/MainNav.css";
import { content } from "../resources/content";

const About = () => {
  return (
    <>
      <MainNav />
      {PageContent(content.titles.about, content.bodies.about)}
    </>
  );
};

export default About;
