import MainNav from "../components/MainNav";
import PageContent from "../components/PageContent";
import { content } from "../resources/content";
import "../styles/MainNav.css";

const Contact = () => {
  const {
    titles: { contact },
    bodies: { contact },
  } = content;

  return (
    <>
      <MainNav />
      <PageContent
        title={content.titles.contact}
        body={content.bodies.contact}
      />
    </>
  );
};

export default Contact;
