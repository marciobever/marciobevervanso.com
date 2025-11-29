import React from 'react';

interface SchemaMarkupProps {
  data: Record<string, any> | Record<string, any>[];
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};