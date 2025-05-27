import { Helmet } from 'react-helmet-async';

export const SEO = ({ 
  title = "Prakhar Saxena - Engineering the Future",
  description = "Computer Science student at McMaster University specializing in Machine Learning and AI. Currently interning at EY and researching molecular prediction models achieving 93% accuracy.",
  image = "/og-image.jpg",
  url = "https://prakharsaxena.com",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Prakhar Saxena, Computer Science, Machine Learning, AI, React Developer, McMaster University, EY Intern, Data Science, Formula 1, TheOversteerPodcast" />
      <meta name="author" content="Prakhar Saxena" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Prakhar Saxena Portfolio" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@imprakharr" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
    </Helmet>
  );
};

export default SEO;