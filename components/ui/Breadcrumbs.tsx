import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (view: any) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center hover:text-brand-blue transition-colors"
          >
            <Home size={14} />
            <span className="sr-only">Início</span>
          </button>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={14} className="mx-1 text-gray-400" />
            {item.href ? (
              <button 
                onClick={() => onNavigate(item.href)}
                className="hover:text-brand-blue transition-colors font-medium"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-brand-blue font-bold px-2 py-0.5 bg-blue-50 rounded-md">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};