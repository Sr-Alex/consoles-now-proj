import { Link } from "react-router-dom";

import Logo from "../assets/icons/logo.svg";
import HomeIcon from "../assets/icons/HomeIcon";
import NotifyIcon from "../assets/icons/NotifyIcon";
import ProfileMiniature from "./Profile/ProfileMiniature";

function Navbar() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-4 bg-proj-white dark:bg-proj-black">
      <figure className="flex items-center">
        <img className="w-8 h-8" src={Logo} alt="Consoles Now" />
        <h3 className="relative hidden h-8 ml-4 text-lg before:absolute before:-left-2 before:inline-block before:h-full before:w-[0.1rem] before:bg-proj-purple lg:inline-block lg:before:bg-proj-orange">
          Consoles Now
        </h3>
      </figure>
      <nav className="flex items-center justify-between max-w-48 w-2/3 h-full">
        <Link to={"/"} className="iconButton">
          <HomeIcon className="iconButton-icon" />
        </Link>
        <Link to={"/"} className="iconButton">
          <NotifyIcon className="iconButton-icon" />
        </Link>
        <ProfileMiniature className="fill-proj-darkGray dark:fill-proj-lightGray" />
      </nav>
    </header>
  );
}

export default Navbar;
