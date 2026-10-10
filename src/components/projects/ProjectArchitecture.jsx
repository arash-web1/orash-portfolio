import {
  ArrowDown,
} from "lucide-react";

function ProjectArchitecture({
  architecture,
}) {
  if (!architecture?.length) {
    return null;
  }

  return (
    <div className="architecture-flow">
      {architecture.map(
        (item, index) => (
          <div
            className="architecture-item"
            key={item}
          >
            <div className="architecture-step">
              <span>
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <strong>{item}</strong>
            </div>

            {index <
              architecture.length - 1 && (
              <ArrowDown
                size={17}
                className="architecture-arrow"
              />
            )}
          </div>
        )
      )}
    </div>
  );
}

export default ProjectArchitecture;