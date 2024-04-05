import { useEffect, useState } from "react";
import { ToDoList } from "./components/ToDoList";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="scroll flex h-[100dvh] items-center justify-center p-12 font-sans text-3xl dark:bg-[var(--darkMode-bg)]">
      <img
        className="fixed left-0 right-0 top-0 z-[0] h-[45%] w-full"
        src={`./public/images/${theme === "light" ? "bg-desktop-light.jpg" : "bg-desktop-dark.jpg"}`}
        alt="header-bg-img"
      />

      <ToDoList toggleTheme={toggleTheme} theme={theme} />
    </main>
  );
}

export default App;
