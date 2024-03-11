import MoonIcon from "../assets/icons/MoonIcon.jsx";

function ThemeSwitcher() {
  const toggleTheme = () => {
    const rootClasses = document.documentElement.classList;

    if (rootClasses.contains("dark")) {
      rootClasses.remove("dark");
    } else {
      rootClasses.add("dark");
    }
  };
  return (
    <button
      className="fixed bottom-4 right-4 iconButton"
      onClick={toggleTheme}
    >
      <MoonIcon className={"iconButton-icon w-8 h-auto"} />
    </button>
  );
}

export default ThemeSwitcher;
