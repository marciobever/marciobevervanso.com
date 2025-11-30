
import React, { useEffect } from 'react';

interface MetaHeadProps {
  title: string;
  description: string;
  imageUrl?: string;
  url?: string;
}

export const MetaHead: React.FC<MetaHeadProps> = ({ 
  title, 
  description, 
  imageUrl = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&h=630&auto=format&fit=crop", 
  url = window.location.href 
}) => {
  
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update meta tag content
    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Description
    updateMeta('description', description);
    updateMeta('og:description', description, 'property');
    updateMeta('twitter:description', description);

    // Title
    updateMeta('og:title', title, 'property');
    updateMeta('twitter:title', title);

    // Image (Crucial for Discover - Needs to be high res)
    updateMeta('og:image', imageUrl, 'property');
    updateMeta('twitter:image', imageUrl);
    updateMeta('og:image:width', '1200', 'property');
    updateMeta('og:image:height', '630', 'property');

    // URL
    updateMeta('og:url', url, 'property');
    updateMeta('twitter:url', url);

  }, [title, description, imageUrl, url]);

  return null;
};
