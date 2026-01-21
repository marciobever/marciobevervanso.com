
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaHeadProps {
  title: string;
  description: string;
  imageUrl?: string;
  url?: string;
  canonicalUrl?: string;
  schema?: object;
  noIndex?: boolean;
}

export const MetaHead: React.FC<MetaHeadProps> = ({
  title,
  description,
  imageUrl = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&h=630&auto=format&fit=crop",
  url = typeof window !== 'undefined' ? window.location.href : '',
  canonicalUrl,
  schema,
  noIndex = false
}) => {

  const siteTitle = "Guia Social Brasil";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Schema.org / JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
