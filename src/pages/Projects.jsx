import {
  useMemo,
  useState,
} from "react";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import ProjectCard from "../components/projects/ProjectCard";
import useLanguage from "../context/useLanguage";
import { projects } from "../data/projects";

function Projects() {
  const { t } =
    useLanguage();

  const [filter, setFilter] =
    useState("all");

  const filters = [
    {
      key: "all",
      label:
        "projects.filters.all",
    },
    {
      key: "web",
      label:
        "projects.filters.web",
    },
    {
      key: "accessibility",
      label:
        "projects.filters.accessibility",
    },
    {
      key: "education",
      label:
        "projects.filters.education",
    },
    {
      key: "ai",
      label:
        "projects.filters.ai",
    },
  ];

  const visible =
    useMemo(() => {
      if (filter === "all") {
        return projects;
      }

      return projects.filter(
        (project) =>
          project.categories.includes(
            filter
          )
      );
    }, [filter]);

  return (
    <PageTransition className="page">
      <Seo
        title={`${t(
          "nav.projects"
        )} — Qurbonzoda Orash Rizvon`}
        description={t(
          "projects.intro"
        )}
      />

      <section className="page-hero projects-hero">
        <p>
          {t(
            "projects.eyebrow"
          )}
        </p>

        <h1>
          {t(
            "projects.title1"
          )}

          <br />

          <span>
            {t(
              "projects.title2"
            )}
          </span>
        </h1>

        <p className="page-intro">
          {t(
            "projects.intro"
          )}
        </p>

        <div className="filters">
          {filters.map(
            (item) => (
              <button
                key={item.key}
                className={
                  filter ===
                  item.key
                    ? "filter-active"
                    : ""
                }
                onClick={() =>
                  setFilter(
                    item.key
                  )
                }
              >
                {t(
                  item.label
                )}
              </button>
            )
          )}
        </div>
      </section>

      <section className="project-list">
        {visible.map(
          (project) => (
            <ProjectCard
              key={
                project.slug
              }
              project={
                project
              }
            />
          )
        )}
      </section>
    </PageTransition>
  );
}

export default Projects;