import { useState } from "react";
import EffectRef from "../components/EffectRef";

const EffectRefPage = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <EffectRef />
      </div>
    </div>
  );
};

export default EffectRefPage;
