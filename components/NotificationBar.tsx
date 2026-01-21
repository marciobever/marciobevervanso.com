import React, { useState } from 'react';
import { X, Bell, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface NotificationBarProps {
  onNavigate: (view: ViewState) => void;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs md:text-sm py-2 px-4 relative z-50 shadow-md animate-fade-in-down">
      <div className="container mx-auto flex items-center justify-between gap-2">
        
        {/* Clickable Area for Navigation */}
        <div 
          className="flex items-center gap-2 flex-grow cursor-pointer group min-w-0" 
          onClick={() => onNavigate('calendarios')}
          role="button"
          aria-label="Ver calendário antecipado urgente"
        >
          <span className="bg-white/20 p-1 rounded animate-pulse shrink-0">
            <Bell size={14} className="text-white" />
          </span>
          <p className="font-medium truncate">
            <span className="font-bold text-yellow-300 mr-1">URGENTE:</span> 
            Calendário antecipado
          </p>
          <span className="flex items-center gap-1 font-bold underline decoration-white/50 group-hover:decoration-white ml-auto md:ml-2 whitespace-nowrap shrink-0">
            Verificar <ArrowRight size={14} />
          </span>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
          className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors shrink-0 ml-2"
          aria-label="Fechar notificação"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};