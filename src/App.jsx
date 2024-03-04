import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./App.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    let rootClasses = document.documentElement.classList;
    if(rootClasses.contains("dark")){
      rootClasses.remove("dark")
    }
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
