// import { useCallback, useEffect, useMemo } from "react";
// import Home from "./components/home.jsx";
// import Play from "./components/play.jsx";

import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar.jsx";
import SearchTerm from "./components/SearchTerm";

function App() {
  // const summation = () => {
  //   console.log(2 + 3);
  // };

  // useEffect(() => {
  //   console.log("This is the use effect hook running...");
  // }, []);

  // useMemo(() => {}, []);

  // useCallback(() => {
  //   summation();
  //   console.log("This is the use callback hook running..");
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SearchTerm />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>

      {/* <div>
        <NavLink to={"/home"}>Home</NavLink>
      </div> */}
    </>
  );
}

export default App;
