import { useState, useEffect } from "react";

const useTypewriter = (text, speed) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        setTimeout(type, speed);
      }
    };

    type();

    // Clean up the effect if the component unmounts
    return () => {
      index = text.length; // Stop typing when component unmounts
    };
  }, [text, speed]);

  return displayedText; // Return the displayed text
};

export default useTypewriter;
