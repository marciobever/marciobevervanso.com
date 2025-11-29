
import React, { useState, useEffect } from 'react';
import { Type, Moon, Sun, Monitor } from 'lucide-react';

export const AccessibilityBar: React.FC = () => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Apply Font Size
    document.documentElement.style.fontSize = `${fontSize}%`;
    
    // Apply High Contrast
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [fontSize, highContrast]);

  const toggleContrast = () => setHighContrast(!highContrast);
  
  const increaseFont = () => setFontSize(prev => Math.min(prev + 10, 130));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 10, 90));

  return (
    <div className="fixed left-4 bottom-24 z-40 flex flex-col gap-3">
      {/* Container */}
      <div className="bg-white/90 backdrop-blur border border-gray-200 shadow-xl rounded-full p-2 flex flex-col items-center gap-2 transition-all">
        
        <button 
          onClick={toggleContrast}
          className={`p-2 rounded-full transition-colors ${highContrast ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          title="Alto Contraste"
          aria-label="Ativar Alto Contraste"
        >
          {highContrast ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="w-8 h-[1px] bg-gray-300"></div>

        <button 
          onClick={increaseFont}
          className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-brand-blue hover:text-white transition-colors"
          title="Aumentar Fonte"
          aria-label="Aumentar tamanho da fonte"
        >
          <Type size={24} />
        </button>

        <button 
          onClick={decreaseFont}
          className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-brand-blue hover:text-white transition-colors"
          title="Diminuir Fonte"
          aria-label="Diminuir tamanho da fonte"
        >
          <Type size={14} />
        </button>

      </div>
    </div>
  );
};
