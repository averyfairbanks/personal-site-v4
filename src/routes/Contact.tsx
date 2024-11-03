import PageContent from "../components/PageContent";
import { content } from "../resources/content";
import "../styles/MainNav.css";

const Contact = () => {
  const { contact } = content;

  return <PageContent pageContent={contact} />;
};

export default Contact;
