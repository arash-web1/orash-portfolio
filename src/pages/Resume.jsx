import {
  Download,
} from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import useLanguage from "../context/useLanguage";
import {
  skills,
} from "../data/skills";
import { localize } from "../utils/localize";

function Resume() {
  const {
    language,
    t,
  } = useLanguage();

  return (
    <PageTransition className="page">
      <Seo
        title={`${t(
          "nav.resume"
        )} — Qurbonzoda Orash Rizvon`}
        description={`${t(
          "resume.title1"
        )} ${t(
          "resume.title2"
        )}`}
      />

      <section className="page-hero resume-hero">
        <p>
          {t(
            "resume.eyebrow"
          )}
        </p>

        <h1>
          {t(
            "resume.title1"
          )}

          <br />

          <span>
            {t(
              "resume.title2"
            )}
          </span>
        </h1>

        <a
          href="/resume/Orash-Rizvon-CV.pdf"
          className="button-primary"
          download
        >
          {t(
            "resume.download"
          )}

          <Download size={16} />
        </a>
      </section>

      <section className="resume-layout">
        <aside className="resume-sidebar">
          <div>
            <span>
              {t(
                "resume.location"
              )}
            </span>

            <strong>
              {t(
                "resume.locationValue"
              )}
            </strong>
          </div>

          <div>
            <span>
              {t(
                "resume.focus"
              )}
            </span>

            <strong>
              {t(
                "resume.focusValue"
              )}
            </strong>
          </div>

          <div>
            <span>
              {t(
                "resume.education"
              )}
            </span>

            <strong>
              {t(
                "resume.student"
              )}
            </strong>
          </div>

          <div>
            <span>
              {t(
                "resume.languages"
              )}
            </span>

            <strong>
              {t(
                "resume.languagesValue"
              )}
            </strong>
          </div>
        </aside>

        <div className="resume-main">
          <section className="resume-block">
            <p>
              {t(
                "resume.education"
              )}
            </p>

            <article>
              <span>
                {t(
                  "resume.present"
                )}
              </span>

              <div>
                <h2>
                  {t(
                    "resume.institute"
                  )}
                </h2>

                <strong>
                  {t(
                    "resume.specialty"
                  )}
                </strong>

                <p>
                  {t(
                    "resume.instituteDescription"
                  )}
                </p>
              </div>
            </article>
          </section>

          <section className="resume-block">
            <p>
              {t(
                "resume.professionalLearning"
              )}
            </p>

            <article>
              <span>
                {t(
                  "resume.currentYear"
                )}
              </span>

              <div>
                <h2>
                  Alif Academy
                </h2>

                <strong>
                  {t(
                    "resume.alifTitle"
                  )}
                </strong>

                <p>
                  {t(
                    "resume.alifDescription"
                  )}
                </p>
              </div>
            </article>

            <article>
              <span>
                {t(
                  "resume.learningPath"
                )}
              </span>

              <div>
                <h2>
                  Meta · Coursera
                </h2>

                <strong>
                  {t(
                    "resume.metaTitle"
                  )}
                </strong>

                <p>
                  {t(
                    "resume.metaDescription"
                  )}
                </p>
              </div>
            </article>
          </section>

          <section className="resume-block">
            <p>
              {t(
                "resume.skills"
              )}
            </p>

            <div className="resume-skills">
              {skills.map(
                (
                  skill,
                  index
                ) => (
                  <article
                    key={
                      index
                    }
                  >
                    <h3>
                      {localize(
                        skill.category,
                        language
                      )}
                    </h3>

                    <div>
                      {skill.items.map(
                        (
                          item,
                          itemIndex
                        ) => (
                          <span
                            key={
                              itemIndex
                            }
                          >
                            {localize(
                              item,
                              language
                            )}
                          </span>
                        )
                      )}
                    </div>
                  </article>
                )
              )}
            </div>
          </section>
        </div>
      </section>
    </PageTransition>
  );
}

export default Resume;