import "../styles/App.css";
import { Link } from "react-router-dom";
import { content } from "../resources/content";

const Home: React.FC = () => {
  const {
    welcome: { title },
  } = content;

  return (
    <Link className="title clean-link" to="/about">
      {title}
    </Link>
  );
};

export default Home;
