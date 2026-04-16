import React from "react";
import { Sun, Moon } from "lucide-react";

const DarkMode = ({ theme, setTheme }) => {

    const toggleTheme = () => {
        // Agora o setTheme funciona porque veio lá do App.jsx
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
            aria-label="Alternar Tema"
        >
            <Sun
                className={`w-6 h-6 text-yellow-500 transition-all duration-300 text-shadow-sm ${
                    theme === "dark" ? "opacity-0 rotate-45 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
            />
            <Moon
                className={`absolute w-6 h-6 text-slate-200 transition-all duration-300 drop-shadow-sm ${
                    theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-45 scale-50"
                }`}
            />
        </button>
    );
};

export default DarkMode;