import React, { useState, useEffect, useRef } from 'react';
import { Upload } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const STORAGE_KEY = 'tc_portfolio_headshot_data_url';

export function useHeadshotUrl() {
  const [customUrl, setCustomUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const handleStorage = () => {
      try {
        setCustomUrl(localStorage.getItem(STORAGE_KEY));
      } catch {
        // ignore
      }
    };
    window.addEventListener('headshot-updated', handleStorage);
    return () => window.removeEventListener('headshot-updated', handleStorage);
  }, []);

  const updateHeadshot = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        try {
          localStorage.setItem(STORAGE_KEY, reader.result);
          setCustomUrl(reader.result);
          window.dispatchEvent(new Event('headshot-updated'));
        } catch {
          setCustomUrl(reader.result);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  return { customUrl, updateHeadshot };
}

export const HeaderAvatar: React.FC = () => {
  const { customUrl, updateHeadshot } = useHeadshotUrl();
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeSrc = customUrl || (!imgError ? '/headshot.png' : null);

  return (
    <button
      type="button"
      onClick={() => fileInputRef.current?.click()}
      title="Tanmay Choudhury (Click to attach/update local headshot file)"
      className="relative w-8 h-8 rounded-full bg-[#161922] border border-white/15 overflow-hidden flex items-center justify-center shrink-0 hover:border-[#3B82F6] transition-colors cursor-pointer"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) updateHeadshot(file);
        }}
      />
      {activeSrc ? (
        <img
          src={activeSrc}
          alt={PORTFOLIO_DATA.name}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <span className="text-[10px] font-mono font-semibold text-slate-300 tracking-tighter">
          TC
        </span>
      )}
    </button>
  );
};

export const HeroPortraitCard: React.FC = () => {
  const { customUrl, updateHeadshot } = useHeadshotUrl();
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeSrc = customUrl || (!imgError ? '/headshot.png' : null);

  return (
    <div className="w-full max-w-[390px] lg:ml-auto bg-[#12151E] border border-white/[0.08] rounded-2xl p-3.5 shadow-2xl relative group">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) updateHeadshot(file);
        }}
      />

      <div className="relative aspect-[4/4.6] w-full rounded-xl overflow-hidden bg-[#0E1015] border border-white/[0.05]">
        {activeSrc ? (
          <img
            src={activeSrc}
            alt="Tanmay Choudhury — Product Marketing Leadership"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          /* Studio portrait frame when /headshot.png is not yet loaded into public/ or localStorage */
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full flex flex-col items-center justify-center relative cursor-pointer select-none"
            style={{
              background:
                'radial-gradient(circle at 50% 34%, #252A38 0%, #12151E 55%, #090B0E 100%)',
            }}
          >
            {/* Studio rim-lit silhouette composition matching the exact framing of Image 1 */}
            <svg
              viewBox="0 0 360 410"
              className="w-full h-full object-cover"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="studioGlow" cx="50%" cy="36%" r="50%">
                  <stop offset="0%" stopColor="#3B4254" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0B0D12" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="suitGrad" x1="180" y1="240" x2="180" y2="410" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1A1D26" />
                  <stop offset="100%" stopColor="#0B0D12" />
                </linearGradient>
              </defs>
              <rect width="360" height="410" fill="#0D0F14" />
              <circle cx="180" cy="150" r="155" fill="url(#studioGlow)" />
              {/* Shoulders / dark collared shirt */}
              <path
                d="M45 410 C52 308, 108 272, 180 272 C252 272, 308 308, 315 410 Z"
                fill="url(#suitGrad)"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1.5"
              />
              {/* Shirt V-neck / collar lines */}
              <path
                d="M142 274 L180 336 L218 274"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                fill="#11131A"
              />
              {/* Head & beard silhouette */}
              <ellipse
                cx="180"
                cy="165"
                rx="58"
                ry="72"
                fill="#1E2330"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.5"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pb-24">
              <div className="w-12 h-12 rounded-full bg-[#155EEF]/15 border border-[#155EEF]/40 flex items-center justify-center text-[#60A5FA] mb-3 group-hover:scale-105 transition-transform">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold text-white tracking-wide mb-1">
                Tanmay Choudhury
              </p>
              <p className="text-[11px] font-mono text-slate-400 max-w-[220px] leading-relaxed mb-3">
                Click to load your original headshot file (preserved 1:1 without AI alteration)
              </p>
              <span className="px-3 py-1.5 rounded bg-[#155EEF] text-white font-mono text-[10px] uppercase tracking-wider">
                Select Headshot Image
              </span>
            </div>
          </div>
        )}

        {/* Subtle hover button to replace/update headshot at any time */}
        {activeSrc && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1.5 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-slate-200 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            <Upload className="w-3 h-3" />
            Update Photo
          </button>
        )}

        {/* Overlaid bottom status pill matching Image 1.png */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-[#1B1F2A]/95 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 flex items-center gap-3 shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          <div className="min-w-0">
            <div className="text-xs font-semibold text-white truncate">
              {PORTFOLIO_DATA.currentStatus.title}
            </div>
            <div className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
              {PORTFOLIO_DATA.currentStatus.subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
