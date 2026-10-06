import { useState } from "react";
import Resize from "../components/Resize";

const ResizePage = () => {
  const [dimentions, setDimentions] = useState({
    width: 0,
    height: 0,
  });
  const [showResize, setShowResize] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setShowResize(!showResize)}>
          {showResize ? "Hide" : "Show"}
        </button>
        {showResize && (
          <Resize dimentions={dimentions} setDimentions={setDimentions} />
        )}
      </div>
    </div>
  );
};

export default ResizePage;
