import logo from "../assets/icons/logo.svg";

function Navbar() {

    const toggleTheme = () => {
        const htmlClasses = document.documentElement.classList;
        return htmlClasses.contains("dark") ? htmlClasses.remove("dark") : htmlClasses.add("dark");
    }

    return <header className="flex items-center justify-between w-full h-16 px-4 bg-proj-white dark:bg-proj-black">
    <figure className="flex items-center">
        <img className="w-8 h-8" src={logo} alt="Consoles Now" />
        <h3 className="relative hidden h-8 ml-4 text-lg before:absolute before:-left-2 before:inline-block before:h-full before:w-[0.1rem] before:bg-proj-purple lg:inline-block lg:before:bg-proj-orange">Consoles Now</h3>
    </figure>
    <button onClick={toggleTheme}>
        Toggle
    </button>
    </header>
}

export default Navbar;