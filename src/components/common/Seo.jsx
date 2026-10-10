import { Helmet } from "react-helmet-async";

function Seo({
  title = "Qurbonzoda Orash Rizvon",
  description = "Developer portfolio of Qurbonzoda Orash Rizvon.",
  image = "/images/og-cover.jpg",
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Helmet>
  );
}

export default Seo;