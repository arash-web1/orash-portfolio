function ProjectMetrics({ metrics }) {
  if (!metrics?.length) {
    return null;
  }

  return (
    <div className="project-metrics">
      {metrics.map((metric) => (
        <article
          className="project-metric"
          key={metric.label}
        >
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </article>
      ))}
    </div>
  );
}

export default ProjectMetrics;