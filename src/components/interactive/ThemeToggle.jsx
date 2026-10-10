import {
  Moon,
  Sun,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";
import useLanguage from "../../context/useLanguage";

function ThemeToggle() {
  const { t } =
    useLanguage();

  const [theme, setTheme] =
    useState(() => {
      return (
        localStorage.getItem(
          "portfolio-theme"
        ) || "dark"
      );
    });

  useEffect(() => {
    document.documentElement.dataset.theme =
      theme;

    localStorage.setItem(
      "portfolio-theme",
      theme
    );
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() =>
        setTheme(
          (current) =>
            current ===
            "dark"
              ? "light"
              : "dark"
        )
      }
      aria-label={t(
        "accessibility.theme"
      )}
    >
      {theme === "dark" ? (
        <Sun size={17} />
      ) : (
        <Moon size={17} />
      )}
    </button>
  );
}

export default ThemeToggle;