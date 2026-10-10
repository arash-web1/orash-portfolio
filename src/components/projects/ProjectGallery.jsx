import {
  useState,
} from "react";
import useLanguage from "../../context/useLanguage";
import SafeImage from "../common/SafeImage";
import Lightbox from "./Lightbox";

function ProjectGallery({
  images,
  title,
}) {
  const [active, setActive] =
    useState(null);

  const { t } =
    useLanguage();

  if (!images?.length) {
    return null;
  }

  return (
    <>
      <div className="project-gallery">
        {images.map(
          (image, index) => (
            <button
              className="gallery-item"
              key={`${image}-${index}`}
              onClick={() =>
                setActive(image)
              }
            >
              <SafeImage
                src={image}
                alt={`${title} ${index + 1}`}
                fallbackTitle={title}
              />

              <span>
                {t("common.view")}
              </span>
            </button>
          )
        )}
      </div>

      <Lightbox
        image={active}
        title={title}
        onClose={() =>
          setActive(null)
        }
      />
    </>
  );
}

export default ProjectGallery;