import orashImage from "../assets/orash.png";
import PageTransition from "../components/common/PageTransition";
import SafeImage from "../components/common/SafeImage";
import Seo from "../components/common/Seo";
import useLanguage from "../context/useLanguage";
import {
  timeline,
} from "../data/timeline";
import { localize } from "../utils/localize";

function About() {
  const {
    language,
    t,
  } = useLanguage();

  return (
    <PageTransition className="page">
      <Seo
        title={`${t(
          "nav.about"
        )} — Qurbonzoda Orash Rizvon`}
        description={t(
          "about.main"
        )}
      />

      <section className="page-hero about-hero">
        <p>
          {t(
            "about.eyebrow"
          )}
        </p>

        <h1>
          {t(
            "about.developer"
          )}

          <br />

          {t(
            "about.learner"
          )}

          <br />

          <span>
            {t(
              "about.builder"
            )}
          </span>
        </h1>
      </section>

      <section className="about-profile">
        <div className="about-photo">
          <SafeImage
            src={orashImage}
            alt="Qurbonzoda Orash Rizvon"
            fallbackTitle="Qurbonzoda Orash Rizvon"
          />
        </div>

        <div className="about-profile-text">
          <p className="large-copy">
            {t(
              "about.main"
            )}
          </p>

          <p>
            {t(
              "about.paragraph1"
            )}
          </p>

          <p>
            {t(
              "about.paragraph2"
            )}
          </p>
        </div>
      </section>

      <section className="journey-section">
        <div className="section-heading">
          <div>
            <span>01</span>

            <div>
              <p>
                {t(
                  "about.journey"
                )}
              </p>

              <h2>
                {t(
                  "about.journeyTitle"
                )}
              </h2>
            </div>
          </div>
        </div>

        <div className="timeline">
          {timeline.map(
            (item, index) => (
              <article
                className="timeline-item"
                key={index}
              >
                <span className="timeline-index">
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div className="timeline-line">
                  <span />
                </div>

                <div className="timeline-content">
                  <small>
                    {localize(
                      item.year,
                      language
                    )}
                  </small>

                  <h3>
                    {localize(
                      item.title,
                      language
                    )}
                  </h3>

                  <p>
                    {localize(
                      item.description,
                      language
                    )}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </section>
    </PageTransition>
  );
}

export default About;