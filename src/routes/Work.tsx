import MainNav from "../components/MainNav";
import PageContent from "../components/PageContent";
import content from "../content/content";
import "../styles/MainNav.css";

const Work = () => {
  return (
    <>
      <MainNav />
      {PageContent(content.titles.work(), content.bodies.work().toString())}
    </>
  );
};

export default Work;
