function ThemeSwitcher() {
  const toggleTheme = () => {
    const rootClasses = document.documentElement.classList;

    if (rootClasses.contains("dark")) {
      rootClasses.remove("dark");
    } else {
        rootClasses.add("dark")
    }
  };
  return (
    <button className="absolute bottom-4 right-4 block w-8 h-8 bg-proj-purple" onClick={toggleTheme}>
      ThemeSwitcher
    </button>
  );
}

export default ThemeSwitcher;
