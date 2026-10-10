import {
  Award,
  BriefcaseBusiness,
  FileText,
  Home,
  Mail,
  Search,
  User,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  useNavigate,
} from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import {
  projects,
} from "../../data/projects";
import { localize } from "../../utils/localize";

function CommandPalette() {
  const navigate =
    useNavigate();

  const {
    language,
    t,
  } = useLanguage();

  const [open, setOpen] =
    useState(false);

  const [query, setQuery] =
    useState("");

  const commands =
    useMemo(
      () => [
        {
          title: t(
            "nav.home"
          ),

          subtitle: t(
            "command.homeSubtitle"
          ),

          path: "/",

          icon: Home,
        },

        {
          title: t(
            "nav.projects"
          ),

          subtitle: t(
            "command.projectsSubtitle"
          ),

          path: "/projects",

          icon:
            BriefcaseBusiness,
        },

        {
          title: t(
            "nav.about"
          ),

          subtitle: t(
            "command.aboutSubtitle"
          ),

          path: "/about",

          icon: User,
        },

        {
          title: t(
            "nav.credentials"
          ),

          subtitle: t(
            "command.credentialsSubtitle"
          ),

          path: "/credentials",

          icon: Award,
        },

        {
          title: t(
            "nav.resume"
          ),

          subtitle: t(
            "command.resumeSubtitle"
          ),

          path: "/resume",

          icon: FileText,
        },

        {
          title: t(
            "nav.contact"
          ),

          subtitle: t(
            "command.contactSubtitle"
          ),

          path: "/contact",

          icon: Mail,
        },

        ...projects.map(
          (project) => ({
            title:
              project.title,

            subtitle:
              localize(
                project.type,
                language
              ),

            path:
              `/projects/${project.slug}`,

            icon:
              BriefcaseBusiness,
          })
        ),
      ],
      [
        language,
        t,
      ]
    );

  const filtered =
    commands.filter(
      (command) =>
        `${command.title} ${command.subtitle}`
          .toLowerCase()
          .includes(
            query.toLowerCase()
          )
    );

  const closePalette =
    () => {
      setOpen(false);
      setQuery("");
    };

  const openPalette =
    () => {
      setQuery("");
      setOpen(true);
    };

  useEffect(() => {
    const handleKeyboard =
      (event) => {
        if (
          (event.ctrlKey ||
            event.metaKey) &&
          event.key.toLowerCase() ===
            "k"
        ) {
          event.preventDefault();

          setQuery("");

          setOpen(
            (current) =>
              !current
          );
        }

        if (
          event.key ===
          "Escape"
        ) {
          setOpen(false);
          setQuery("");
        }
      };

    const handleCustomOpen =
      () => {
        openPalette();
      };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    window.addEventListener(
      "open-command-palette",
      handleCustomOpen
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );

      window.removeEventListener(
        "open-command-palette",
        handleCustomOpen
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      open
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [open]);

  const choose = (path) => {
    navigate(path);

    closePalette();

    window.scrollTo({
      top: 0,
    });
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="command-overlay"
      onMouseDown={
        closePalette
      }
    >
      <div
        className="command-palette"
        onMouseDown={(
          event
        ) =>
          event.stopPropagation()
        }
      >
        <div className="command-search">
          <Search
            size={18}
          />

          <input
            value={query}
            onChange={(
              event
            ) =>
              setQuery(
                event.target
                  .value
              )
            }
            placeholder={t(
              "command.placeholder"
            )}
            autoFocus
          />

          <button
            onClick={
              closePalette
            }
            aria-label={t(
              "accessibility.close"
            )}
          >
            <X size={18} />
          </button>
        </div>

        <div className="command-results">
          {filtered.length ? (
            filtered.map(
              (command) => {
                const Icon =
                  command.icon;

                return (
                  <button
                    key={`${command.path}-${command.title}`}
                    onClick={() =>
                      choose(
                        command.path
                      )
                    }
                  >
                    <span className="command-icon">
                      <Icon
                        size={
                          16
                        }
                      />
                    </span>

                    <span>
                      <strong>
                        {
                          command.title
                        }
                      </strong>

                      <small>
                        {
                          command.subtitle
                        }
                      </small>
                    </span>

                    <kbd>
                      ↵
                    </kbd>
                  </button>
                );
              }
            )
          ) : (
            <div className="command-empty">
              {t(
                "command.noResults"
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;