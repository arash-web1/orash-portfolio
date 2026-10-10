import {
  ArrowLeft,
} from "lucide-react";
import {
  Link,
} from "react-router-dom";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import useLanguage from "../context/useLanguage";

function NotFound() {
  const { t } =
    useLanguage();

  return (
    <PageTransition className="not-found">
      <Seo
        title={`404 — Qurbonzoda Orash Rizvon`}
      />

      <span>404</span>

      <h1>
        {t(
          "notFound.title"
        )}
      </h1>

      <p>
        {t(
          "notFound.description"
        )}
      </p>

      <Link
        className="button-secondary"
        to="/"
      >
        <ArrowLeft
          size={15}
        />

        {t(
          "notFound.button"
        )}
      </Link>
    </PageTransition>
  );
}

export default NotFound;