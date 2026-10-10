import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import {
  Link,
  useParams,
} from "react-router-dom";
import PageTransition from "../components/common/PageTransition";
import SafeImage from "../components/common/SafeImage";
import Seo from "../components/common/Seo";
import ProjectArchitecture from "../components/projects/ProjectArchitecture";
import ProjectGallery from "../components/projects/ProjectGallery";
import useLanguage from "../context/useLanguage";
import {
  getProject,
} from "../data/projects";
import { localize } from "../utils/localize";

function ProjectDetails() {
  const { slug } =
    useParams();

  const {
    language,
    t,
  } = useLanguage();

  const project =
    getProject(slug);

  if (!project) {
    return (
      <PageTransition className="not-found">
        <h1>
          {t(
            "notFound.title"
          )}
        </h1>

        <Link to="/projects">
          {t(
            "common.allProjects"
          )}
        </Link>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="page">
      <Seo
        title={`${project.title} — Qurbonzoda Orash Rizvon`}
        description={localize(
          project.description,
          language
        )}
        image={project.cover}
      />

      <section className="project-detail-hero">
        <Link
          className="back-link"
          to="/projects"
        >
          <ArrowLeft
            size={14}
          />

          {t(
            "common.allProjects"
          )}
        </Link>

        <div className="project-detail-grid">
          <div className="project-detail-copy">
            <div className="project-detail-meta">
              <span>
                {project.number}
              </span>

              <span>
                {localize(
                  project.type,
                  language
                )}
              </span>

              <span>
                {t(
                  `common.status.${project.status}`
                )}
              </span>
            </div>

            <h1>
              {project.title}
            </h1>

            <p>
              {localize(
                project.description,
                language
              )}
            </p>

            <div className="project-role">
              <span>
                {t(
                  "common.myRole"
                )}
              </span>

              <strong>
                {localize(
                  project.role,
                  language
                )}
              </strong>
            </div>

            <div className="project-tags">
              {project.technologies.map(
                (
                  technology,
                  index
                ) => (
                  <span
                    key={index}
                  >
                    {localize(
                      technology,
                      language
                    )}
                  </span>
                )
              )}
            </div>

            {project.live && (
              <a
                className="button-primary"
                href={
                  project.live
                }
                target="_blank"
                rel="noreferrer"
              >
                {t(
                  "common.viewProject"
                )}

                <ArrowUpRight
                  size={16}
                />
              </a>
            )}
          </div>

          <div className="project-detail-cover">
            <SafeImage
              src={
                project.cover
              }
              alt={
                project.title
              }
              fallbackTitle={
                project.title
              }
              eager
            />
          </div>
        </div>
      </section>

      <section className="project-metrics">
        {project.metrics.map(
          (metric, index) => (
            <article
              className="project-metric"
              key={index}
            >
              <strong>
                {localize(
                  metric.value,
                  language
                )}
              </strong>

              <span>
                {localize(
                  metric.label,
                  language
                )}
              </span>
            </article>
          )
        )}
      </section>

      <section className="case-section">
        <div className="case-heading">
          <span>01</span>

          <div>
            <p>
              {t(
                "projects.challenge"
              )}
            </p>

            <h2>
              {t(
                "projects.challengeTitle"
              )}
            </h2>
          </div>
        </div>

        <p className="case-text">
          {localize(
            project.challenge,
            language
          )}
        </p>
      </section>

      <section className="case-section">
        <div className="case-heading">
          <span>02</span>

          <div>
            <p>
              {t(
                "projects.solution"
              )}
            </p>

            <h2>
              {t(
                "projects.solutionTitle"
              )}
            </h2>
          </div>
        </div>

        <p className="case-text">
          {localize(
            project.solution,
            language
          )}
        </p>
      </section>

      <section className="case-section">
        <div className="case-heading">
          <span>03</span>

          <div>
            <p>
              {t(
                "projects.features"
              )}
            </p>

            <h2>
              {t(
                "projects.featuresTitle"
              )}
            </h2>
          </div>
        </div>

        <div className="feature-grid">
          {project.features.map(
            (
              feature,
              index
            ) => (
              <article
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

                <strong>
                  {localize(
                    feature,
                    language
                  )}
                </strong>
              </article>
            )
          )}
        </div>
      </section>

      <section className="case-section">
        <div className="case-heading">
          <span>04</span>

          <div>
            <p>
              {t(
                "projects.architecture"
              )}
            </p>

            <h2>
              {t(
                "projects.architectureTitle"
              )}
            </h2>
          </div>
        </div>

        <ProjectArchitecture
          architecture={project.architecture.map(
            (item) =>
              localize(
                item,
                language
              )
          )}
        />
      </section>

      <section className="case-section gallery-section">
        <div className="case-heading">
          <span>05</span>

          <div>
            <p>
              {t(
                "projects.gallery"
              )}
            </p>

            <h2>
              {t(
                "projects.galleryTitle"
              )}
            </h2>
          </div>
        </div>

        <ProjectGallery
          images={
            project.gallery
          }
          title={
            project.title
          }
        />
      </section>

      <section className="case-section">
        <div className="case-heading">
          <span>06</span>

          <div>
            <p>
              {t(
                "projects.lessons"
              )}
            </p>

            <h2>
              {t(
                "projects.lessonsTitle"
              )}
            </h2>
          </div>
        </div>

        <p className="case-text">
          {localize(
            project.learned,
            language
          )}
        </p>
      </section>

      <section className="next-project">
        <p>
          {t(
            "projects.exploreMore"
          )}
        </p>

        <Link to="/projects">
          {t(
            "common.allProjects"
          )}

          <ArrowUpRight
            size={25}
          />
        </Link>
      </section>
    </PageTransition>
  );
}

export default ProjectDetails;