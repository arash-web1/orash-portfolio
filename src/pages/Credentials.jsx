import {
  Award,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SafeImage from "../components/common/SafeImage";
import Seo from "../components/common/Seo";
import useLanguage from "../context/useLanguage";
import {
  credentials,
} from "../data/credentials";
import { localize } from "../utils/localize";

function Credentials() {
  const {
    language,
    t,
  } = useLanguage();

  return (
    <PageTransition className="page">
      <Seo
        title={`${t(
          "nav.credentials"
        )} — Qurbonzoda Orash Rizvon`}
        description={t(
          "credentials.intro"
        )}
      />

      <section className="page-hero">
        <p>
          {t(
            "credentials.eyebrow"
          )}
        </p>

        <h1>
          {t(
            "credentials.title1"
          )}

          <br />

          <span>
            {t(
              "credentials.title2"
            )}
          </span>
        </h1>

        <p className="page-intro">
          {t(
            "credentials.intro"
          )}
        </p>
      </section>

      <section className="credentials-grid">
        {credentials.map(
          (credential) => {
            const completed =
              credential.status ===
              "completed";

            return (
              <article
                className="credential-card"
                key={
                  credential.id
                }
              >
                <div className="credential-image">
                  <SafeImage
                    src={
                      credential.image
                    }
                    alt={
                      credential.organization
                    }
                    fallbackTitle={
                      credential.organization
                    }
                  />
                </div>

                <div className="credential-content">
                  <div className="credential-status">
                    {completed ? (
                      <CheckCircle2
                        size={14}
                      />
                    ) : (
                      <Clock3
                        size={14}
                      />
                    )}

                    {t(
                      `common.status.${credential.status}`
                    )}
                  </div>

                  <span>
                    {
                      credential.organization
                    }

                    {" · "}

                    {localize(
                      credential.platform,
                      language
                    )}
                  </span>

                  <h2>
                    {localize(
                      credential.title,
                      language
                    )}
                  </h2>

                  <div className="credential-courses">
                    {credential.courses.map(
                      (
                        course,
                        index
                      ) => (
                        <div
                          key={
                            index
                          }
                        >
                          <span>
                            {String(
                              index +
                                1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <p>
                            {localize(
                              course,
                              language
                            )}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {completed && (
                    <button className="credential-verified">
                      <Award
                        size={15}
                      />

                      {t(
                        "credentials.verified"
                      )}
                    </button>
                  )}
                </div>
              </article>
            );
          }
        )}
      </section>
    </PageTransition>
  );
}

export default Credentials;