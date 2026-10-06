import { useEffect } from "react";

const Resize = ({ dimentions, setDimentions }) => {
  const handleResize = () => {
    setDimentions((prev) => ({
      ...prev,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        <p>
          width : {dimentions.width} height : {dimentions.height}
        </p>
      </div>
    </div>
  );
};

export default Resize;
