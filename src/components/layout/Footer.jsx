import {
  ArrowUp,
} from "lucide-react";
import {
  Link,
} from "react-router-dom";
import useLanguage from "../../context/useLanguage";

function Footer() {
  const { t } =
    useLanguage();

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>
          {"<OR />"}
        </strong>

        <span>
          {t(
            "footer.developed"
          )}
        </span>
      </div>

      <div className="footer-links">
        <Link to="/projects">
          {t(
            "footer.projects"
          )}
        </Link>

        <Link to="/about">
          {t(
            "footer.about"
          )}
        </Link>

        <Link to="/contact">
          {t(
            "footer.contact"
          )}
        </Link>

        <button onClick={top}>
          {t(
            "footer.top"
          )}

          <ArrowUp
            size={13}
          />
        </button>
      </div>
    </footer>
  );
}

export default Footer;