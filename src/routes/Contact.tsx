import MainNav from "../components/MainNav";
import PageContent from "../components/PageContent";
import {content} from "../resources/content";
import "../styles/MainNav.css"

const Contact = () => {
  return (
    <>
      <MainNav />
      {PageContent(content.titles.contact(), content.bodies.contact())}
    </>
  );
};

export default Contact;
