import { Link } from "react-router-dom";
import { content } from "../resources/content";
import "../styles/App.css";

import { animate, splitText, stagger } from "animejs";
import { useEffect } from "react";
import useWindowDimensions from "../util/useWindowDimensions";

const Home: React.FC = () => {
  const { innerWidth } = useWindowDimensions();
  
  const {
    welcome: { title },
  } = content;
  
  const { chars } = splitText(".anim-target", {
    words: false,
    chars: true,
  });
  
  const anim = animate(chars, {
    x: [{ to: 10, delay: stagger(30), ease: "inOutElastic" }],
    duration: 1200,
    loop: true,
    alternate: true,
    autoplay: true,
  });

  useEffect(() => {
    if (innerWidth <= 630) {
      anim.cancel();
      anim.revert();
    } else {
      anim.resume();
    }
  }, [innerWidth]);

  return (
    <Link className="title clean-link anim-target" to="/about">
      {title}
    </Link>
  );
};

export default Home;
