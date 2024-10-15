import "../styles/App.css";
import { Link } from "react-router-dom";
import { content } from "../resources/content";

const Home = () => {
  return (
    <Link className="title clean-link" to="/about">
      {content.titles.welcome}
    </Link>
  );
};

export default Home;