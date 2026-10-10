import {
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import { localize } from "../../utils/localize";
import SafeImage from "../common/SafeImage";

function ProjectCard({
  project,
}) {
  const {
    language,
    t,
  } = useLanguage();

  return (
    <Link
      className="project-card"
      to={`/projects/${project.slug}`}
    >
      <div className="project-card-image">
        <SafeImage
          src={project.cover}
          alt={project.title}
          fallbackTitle={project.title}
        />

        <div className="project-card-top">
          <span>
            {project.number}
          </span>

          <span>
            {t(
              `common.status.${project.status}`
            )}
          </span>
        </div>

        <div className="project-card-arrow">
          <ArrowUpRight
            size={19}
          />
        </div>
      </div>

      <div className="project-card-content">
        <span>
          {localize(
            project.type,
            language
          )}
        </span>

        <h3>
          {project.title}
        </h3>

        <p>
          {localize(
            project.short,
            language
          )}
        </p>

        <div className="project-tags">
          {project.technologies
            .slice(0, 4)
            .map(
              (
                technology,
                index
              ) => (
                <span
                  key={`${project.slug}-${index}`}
                >
                  {localize(
                    technology,
                    language
                  )}
                </span>
              )
            )}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;