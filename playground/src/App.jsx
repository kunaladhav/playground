import { useCallback, useEffect, useMemo } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/home.jsx";
import Play from "./components/play.jsx";

function App() {
  const summation = () => {
    console.log(2 + 3);
  };

  useEffect(() => {
    console.log("This is the use effect hook running...");
  }, []);

  useMemo(() => {}, []);

  useCallback(() => {
    summation();
    console.log("This is the use callback hook running..");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <div>
        <NavLink to={"/home"}>Home</NavLink>
      </div>
    </>
  );
}

export default App;
