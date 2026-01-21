import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'color', showText = true }) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? 'text-white' : 'text-slate-900';
  const subTextColor = isWhite ? 'text-blue-200' : 'text-brand-blue';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Main Shield/Container Shape */}
          <path
            d="M8 12C8 8.68629 10.6863 6 14 6H34C37.3137 6 40 8.68629 40 12V36C40 39.3137 37.3137 42 34 42H14C10.6863 42 8 39.3137 8 36V12Z"
            fill={isWhite ? "rgba(255,255,255,0.15)" : "#0B5CAB"}
          />

          {/* Abstract Brazil Elements - Stylized Flag/Progress */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14ZM24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
            fill={isWhite ? "#FFFFFF" : "white"}
            fillOpacity="0.2"
          />

          {/* Checkmark / Growth Curve - symbolizing approval/benefit */}
          <path
            d="M17 25.5L21.5 30L31 20.5"
            stroke={isWhite ? "#FFFFFF" : "#4ADE80"}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Small accent dot (Yellow) */}
          <circle cx="35" cy="11" r="4" fill="#FBBF24" stroke={isWhite ? "transparent" : "#FFFFFF"} strokeWidth="1.5" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`font-bold text-lg md:text-xl leading-none tracking-tight ${textColor}`}>
            Guia Social
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] ${subTextColor}`}>
              Portal Oficial
            </span>
            <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
            <span className="text-[9px] text-gray-400 font-medium hidden md:block">
              DESDE 2024
            </span>
          </div>
        </div>
      )}
    </div>
  );
};