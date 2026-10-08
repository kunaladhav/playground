import { useEffect, useRef, useState } from "react";

const InputRef = () => {
  const [text, setText] = useState("");
  const prevText = useRef("");

  useEffect(() => {
    // setText((prev) => (prevText.current = prev));
    prevText.current = text;
  }, [text]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Previous Text: {prevText.current}</p>
      </div>
    </div>
  );
};

export default InputRef;
