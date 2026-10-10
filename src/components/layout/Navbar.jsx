import {
  Command,
  Menu,
  X,
} from "lucide-react";
import {
  useState,
} from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import ThemeToggle from "../interactive/ThemeToggle";

function Navbar() {
  const [open, setOpen] =
    useState(false);

  const {
    language,
    setLanguage,
    t,
  } = useLanguage();

  const close = () =>
    setOpen(false);

  const openCommand = () => {
    window.dispatchEvent(
      new CustomEvent(
        "open-command-palette"
      )
    );
  };

  return (
    <header className="navbar">
      <Link
        className="brand"
        to="/"
        onClick={close}
      >
        <span className="brand-mark">
          {"<OR />"}
        </span>

        <div>
          <strong>
           Qurbonzoda Orash Rizvon
          </strong>

          <small>
            {t(
              "nav.portfolio"
            )}
          </small>
        </div>
      </Link>

      <nav
        className={
          open
            ? "nav-links nav-links-open"
            : "nav-links"
        }
      >
        <NavLink
          to="/"
          onClick={close}
        >
          {t("nav.home")}
        </NavLink>

        <NavLink
          to="/projects"
          onClick={close}
        >
          {t(
            "nav.projects"
          )}
        </NavLink>

        <NavLink
          to="/about"
          onClick={close}
        >
          {t("nav.about")}
        </NavLink>

        <NavLink
          to="/credentials"
          onClick={close}
        >
          {t(
            "nav.credentials"
          )}
        </NavLink>

        <NavLink
          to="/resume"
          onClick={close}
        >
          {t(
            "nav.resume"
          )}
        </NavLink>

        <NavLink
          to="/contact"
          onClick={close}
        >
          {t(
            "nav.contact"
          )}
        </NavLink>
      </nav>

      <div className="nav-actions">
        <div className="language-switcher">
          {[
            "ru",
            "tj",
            "en",
          ].map((item) => (
            <button
              key={item}
              className={
                language ===
                item
                  ? "language-active"
                  : ""
              }
              onClick={() =>
                setLanguage(
                  item
                )
              }
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          className="command-trigger"
          onClick={
            openCommand
          }
          aria-label={t(
            "accessibility.command"
          )}
        >
          <Command
            size={15}
          />

          <span>
            Ctrl K
          </span>
        </button>

        <ThemeToggle />

        <button
          className="mobile-menu"
          onClick={() =>
            setOpen(
              (value) =>
                !value
            )
          }
          aria-label={t(
            "accessibility.menu"
          )}
        >
          {open ? (
            <X size={20} />
          ) : (
            <Menu
              size={20}
            />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;