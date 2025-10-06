import { Link } from "react-router-dom";
import { content } from "../resources/content";
import "../styles/App.css";

import { animate, splitText, stagger } from "animejs";
import { useEffect } from "react";

const Home: React.FC = () => {
  const {
    welcome: { title },
  } = content;

  useEffect(() => {
    const { chars } = splitText(".anim-target", {
      words: false,
      chars: true,
    });

    animate(chars, {
      x: [{ to: 10, delay: stagger(30), ease: "inOutElastic" }],
      duration: 1200,
      // delay: stagger(30),
      loop: true,
      alternate: true,
      autoplay: true,
    });
  }, []);

  return (
    <Link className="title clean-link anim-target" to="/about">
      {title}
    </Link>
  );
};

export default Home;
