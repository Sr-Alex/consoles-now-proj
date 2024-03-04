import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ThemeSwitcher />
    </>
  );
}

export default App;
