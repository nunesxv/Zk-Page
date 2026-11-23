import React from 'react';

export const ZykonLogo = ({ size = 'md', showTagline = false, className = '' }) => {
  const sizes = {
    sm: { iconW: 44, iconH: 32, title: 'text-lg', sub: 'text-[7px] tracking-[0.42em]', dividerH: 'h-7' },
    md: { iconW: 54, iconH: 38, title: 'text-xl', sub: 'text-[8px] tracking-[0.46em]', dividerH: 'h-9' },
    lg: { iconW: 72, iconH: 50, title: 'text-3xl', sub: 'text-[10px] tracking-[0.5em]', dividerH: 'h-12' },
  }[size] || { iconW: 54, iconH: 38, title: 'text-xl', sub: 'text-[8px] tracking-[0.46em]', dividerH: 'h-9' };

  return (
    <div className={`inline-flex flex-col select-none group ${className}`}>
      <div className="flex items-center gap-3.5">
        {/* Stylized Z emblem matching uploaded brand identity */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-2 bg-purple-600/25 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <svg
            width={sizes.iconW}
            height={sizes.iconH}
            viewBox="0 0 130 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 overflow-visible"
          >
            <defs>
              <linearGradient id="zykonWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>
              <linearGradient id="zykonPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="35%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#3B0764" />
              </linearGradient>
              <linearGradient id="zykonBottomPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4C1D95" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6D28D9" />
              </linearGradient>
              <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Top Bar - Left White / Right Electric Purple */}
            <path
              d="M24 12 L118 12 L72 58 L48 58 L80 26 L10 26 Z"
              fill="url(#zykonPurpleGrad)"
              filter="url(#neonGlow)"
            />
            <path
              d="M24 12 L76 12 L62 26 L10 26 Z"
              fill="url(#zykonWhiteGrad)"
            />

            {/* Left Metallic Slash */}
            <path
              d="M42 36 L68 36 L28 78 L2 78 Z"
              fill="url(#zykonWhiteGrad)"
            />

            {/* Bottom Purple Wing */}
            <path
              d="M50 64 L120 64 L106 78 L36 78 Z"
              fill="url(#zykonBottomPurple)"
              filter="url(#neonGlow)"
            />

            {/* Subtle top & bottom lens flare sparkles */}
            <ellipse cx="68" cy="12" rx="14" ry="1.8" fill="#E9D5FF" opacity="0.9" />
            <ellipse cx="64" cy="78" rx="12" ry="1.5" fill="#C084FC" opacity="0.85" />
          </svg>
        </div>

        {/* Vertical glowing divider line */}
        <div className={`relative w-[1.5px] ${sizes.dividerH} bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-80`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-3 bg-purple-400 blur-[3px] rounded-full" />
        </div>

        {/* ZYKON TECNOLOGIA Typography - Purple ONLY on "Z" */}
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-display font-bold tracking-[0.18em] text-white flex items-center ${sizes.title}`}>
            <span className="bg-gradient-to-tr from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.45)]">
              Z
            </span>
            <span>YKON</span>
          </div>
          <span className={`text-gray-300 font-light uppercase mt-1.5 pl-0.5 ${sizes.sub}`}>
            TECNOLOGIA
          </span>
        </div>
      </div>

      {showTagline && (
        <div className="mt-3 flex flex-col items-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">
            CONECTANDO IDEIAS. <strong className="text-white font-semibold">CRIANDO O FUTURO.</strong>
          </p>
          <div className="mt-1.5 w-48 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>
      )}
    </div>
  );
};

export default ZykonLogo;
