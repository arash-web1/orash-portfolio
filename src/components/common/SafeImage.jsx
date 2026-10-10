import { useState } from "react";

function SafeImage({
  src,
  alt = "",
  className = "",
  fallbackTitle = "Preview unavailable",
  eager = false,
}) {
  const [failedSrc, setFailedSrc] = useState(null);

  const failed = !src || failedSrc === src;

  if (failed) {
    return (
      <div className={`image-fallback ${className}`}>
        <div className="fallback-grid" />

        <div className="fallback-content">
          <span>OR</span>
          <p>{fallbackTitle}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      onError={() => setFailedSrc(src)}
    />
  );
}

export default SafeImage;