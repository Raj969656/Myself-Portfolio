import { useEffect, useState } from "react";

export default function TypingText({ text, speed = 90 }) {
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // typing
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  // blinking cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className="whitespace-nowrap">
      {text.slice(0, index)}
      <span className="text-purple-500">
        {cursorVisible ? "|" : " "}
      </span>
    </span>
  );
}
