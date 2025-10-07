import { useLayoutEffect, useState } from "react";

export interface Dimensions {
  innerWidth: number;
  innerHeight: number;
}

function getWindowDimensions(): Dimensions {
  const { innerWidth, innerHeight } = window;
  console.log(innerHeight, innerWidth);
  return { innerWidth, innerHeight };
}

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState<Dimensions>(
    getWindowDimensions()
  );

  useLayoutEffect(() => {
    function handleResize() {
      const currDimensions = getWindowDimensions();
      if (dimensions !== currDimensions) {
        setDimensions(currDimensions);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}
