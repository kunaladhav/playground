import { useState } from "react";
import Keydown from "../components/Keydown";

const KeydownPage = () => {
  const [keydown, setKeydown] = useState();
  const [hide, setHide] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setHide(!hide)}>{hide ? "Hide" : "Show"}</button>
        {hide && <Keydown keydown={keydown} setKeydown={setKeydown} />}
      </div>
    </div>
  );
};

export default KeydownPage;
