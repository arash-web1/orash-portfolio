import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import orashImage from "../assets/orash.png";
import PageTransition from "../components/common/PageTransition";
import SafeImage from "../components/common/SafeImage";
import Seo from "../components/common/Seo";
import ProjectCard from "../components/projects/ProjectCard";
import useLanguage from "../context/useLanguage";
import { credentials } from "../data/credentials";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { localize } from "../utils/localize";

function Home() {
  const {
    language,
    t,
  } = useLanguage();

  const metaCredential =
    credentials.find(
      (credential) =>
        credential.id ===
        "meta-frontend"
    );

  return (
    <PageTransition>
      <Seo
        title={`Qurbonzoda Orash Rizvon — ${t(
          "home.profession"
        )}`}
        description={t(
          "home.description"
        )}
      />

      <section className="hero">
        <div className="hero-copy">
          <div className="availability">
            <span />

            {t("home.status")}
          </div>

          <p className="hero-label">
            {t("home.hello")}
          </p>

          <h1>
            {t(
              "home.firstName"
            )}

            <br />

            <span>
              {t(
                "home.lastName"
              )}
            </span>
          </h1>

          <p className="hero-description">
            {t(
              "home.description"
            )}
          </p>

          <div className="hero-buttons">
            <Link
              className="button-primary"
              to="/projects"
            >
              {t(
                "home.exploreWork"
              )}

              <ArrowUpRight
                size={16}
              />
            </Link>

            <Link
              className="button-secondary"
              to="/about"
            >
              {t(
                "home.aboutMe"
              )}
            </Link>
          </div>

          <div className="hero-meta">
            <div>
              <strong>
                {t(
                  "home.frontend"
                )}
              </strong>

              <span>
                {t(
                  "home.frontendStack"
                )}
              </span>
            </div>

            <div>
              <strong>
                {t(
                  "home.backend"
                )}
              </strong>

              <span>
                {t(
                  "home.backendStack"
                )}
              </span>
            </div>

            <div>
              <strong>
                {t(
                  "home.programming"
                )}
              </strong>

              <span>
                {t(
                  "home.programmingStack"
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-photo-area">
          <div className="hero-glow" />

          <div className="hero-person-ring" />

          <SafeImage
            src={orashImage}
            alt="Qurbonzoda Orash Rizvon"
            className="hero-person"
            fallbackTitle="Qurbonzoda Orash Rizvon"
            eager
          />

          <div className="hero-name-card">
            <span>
              QURBONZODA ORASH RIZVON
            </span>

            <strong>
              {t(
                "home.profession"
              )}
            </strong>
          </div>

          <div className="floating-tech floating-tech-one">
            <span>⚛</span>

            {t(
              "home.react"
            )}
          </div>

          <div className="floating-tech floating-tech-two">
            <span>AI</span>

            {t(
              "home.ai"
            )}
          </div>

          <div className="floating-tech floating-tech-three">
            <span>
              {"</>"}
            </span>

            {t(
              "home.softwareEngineering"
            )}
          </div>
        </div>

        <a
          className="hero-scroll"
          href="#work"
        >
          {t(
            "common.explore"
          )}

          <ArrowDown size={14} />
        </a>
      </section>

      <section
        className="section"
        id="work"
      >
        <div className="section-heading">
          <div>
            <span>01</span>

            <div>
              <p>
                {t(
                  "home.selectedWork"
                )}
              </p>

              <h2>
                {t(
                  "home.projectsTitle"
                )}
              </h2>
            </div>
          </div>

          <Link to="/projects">
            {t(
              "common.viewAll"
            )}

            <ArrowUpRight
              size={15}
            />
          </Link>
        </div>

        <div className="home-projects">
          {projects
            .filter(
              (project) =>
                project.featured
            )
            .map((project) => (
              <ProjectCard
                key={
                  project.slug
                }
                project={
                  project
                }
              />
            ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span>02</span>

            <div>
              <p>
                {t(
                  "home.techStack"
                )}
              </p>

              <h2>
                {t(
                  "home.technologiesTitle"
                )}
              </h2>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map(
            (skill, index) => (
              <article
                className="skill-card"
                key={index}
              >
                <span>
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

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
                      <p
                        key={
                          itemIndex
                        }
                      >
                        {localize(
                          item,
                          language
                        )}
                      </p>
                    )
                  )}
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <section className="section learning-section">
        <div className="learning-intro">
          <div className="meta-logo">
            M
          </div>

          <p>
            {t(
              "home.learning"
            )}
          </p>

          <h2>
            Meta
            <br />
            <span>
              Coursera.
            </span>
          </h2>

          <p className="learning-description">
            {t(
              "home.learningDescription"
            )}
          </p>

          <Link
            to="/credentials"
            className="text-link"
          >
            {t(
              "home.credentials"
            )}

            <ArrowUpRight
              size={14}
            />
          </Link>
        </div>

        <div className="course-list">
          {metaCredential.courses.map(
            (course, index) => (
              <div
                className="course-row"
                key={index}
              >
                <span>
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div>
                  <strong>
                    {localize(
                      course,
                      language
                    )}
                  </strong>

                  <p>
                    Meta · Coursera
                  </p>
                </div>

                <small>
                  {t(
                    "common.learningPath"
                  )}
                </small>
              </div>
            )
          )}
        </div>
      </section>

      <section className="section home-cta">
        <p>
          {t(
            "home.nextChallenge"
          )}
        </p>

        <h2>
          {t("home.build")}
          <br />

          {t("home.learn")}
          <br />

          <span>
            {t(
              "home.improve"
            )}
          </span>
        </h2>

        <p>
          {t(
            "home.nextDescription"
          )}
        </p>

        <Link
          className="button-primary"
          to="/contact"
        >
          {t(
            "home.connect"
          )}

          <ArrowUpRight
            size={16}
          />
        </Link>
      </section>
    </PageTransition>
  );
}

export default Home;