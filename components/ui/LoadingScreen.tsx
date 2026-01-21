import React from 'react';
import { Loader2 } from 'lucide-react';
import { Logo } from '../Logo';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-brand-light">
      <div className="mb-6 animate-pulse">
         <Logo />
      </div>
      <div className="flex items-center gap-3 text-brand-medium">
         <Loader2 className="animate-spin text-brand-blue" size={24} />
         <span className="font-medium text-sm">Carregando conteúdo seguro...</span>
      </div>
    </div>
  );
};