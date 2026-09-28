import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeaderAvatar } from './HeadshotPortrait';

interface NavbarProps {
  currentView: string;
  onNavigateHome: (sectionId?: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onOpenResume,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId?: string, action?: () => void) => {
    setMobileMenuOpen(false);
    if (action) {
      action();
    } else {
      onNavigateHome(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0D12]/90 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Brand Zone matching Image 1.png */}
        <button
          type="button"
          onClick={() => handleNavClick('top')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="text-xs sm:text-[13px] font-bold tracking-[0.06em] uppercase text-white group-hover:text-[#78A9FF] transition-colors">
            {PORTFOLIO_DATA.name}
          </div>
          <div className="text-[8.5px] font-mono tracking-[0.16em] uppercase text-slate-400 mt-0.5">
            {PORTFOLIO_DATA.brandSubtitle}
          </div>
        </button>

        {/* Center Navigation Links matching Image 1.png */}
        <nav className="hidden md:flex items-center gap-7 text-[11px] font-mono uppercase tracking-[0.12em]">
          <button
            type="button"
            onClick={() => handleNavClick('work')}
            className={`cursor-pointer transition-colors whitespace-nowrap ${
              currentView === 'home'
                ? 'text-white font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            WORK
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            ABOUT
          </button>
          <button
            type="button"
            onClick={() => handleNavClick(undefined, onOpenResume)}
            className={`cursor-pointer transition-colors whitespace-nowrap ${
              currentView === 'resume'
                ? 'text-white font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            RESUME
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            CONTACT
          </button>
        </nav>

        {/* Right Actions matching Image 1.png */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenResume}
            className="px-3.5 py-2 rounded bg-[#141720] hover:bg-[#1B1F2B] border border-white/15 text-[10px] font-mono uppercase tracking-[0.1em] text-slate-200 transition-colors whitespace-nowrap cursor-pointer"
          >
            DOWNLOAD RESUME
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-4 py-2 rounded bg-[#155EEF] hover:bg-[#1D63FF] text-[10px] font-mono uppercase tracking-[0.1em] text-white font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            CONTACT
          </button>
          <HeaderAvatar />
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2.5">
          <HeaderAvatar />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded bg-[#141720] border border-white/15 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0E1118] px-4 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-xs font-mono uppercase tracking-wider">
            <button
              type="button"
              onClick={() => handleNavClick('work')}
              className="text-left py-1.5 text-white font-semibold"
            >
              WORK
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="text-left py-1.5 text-slate-300"
            >
              ABOUT
            </button>
            <button
              type="button"
              onClick={() => handleNavClick(undefined, onOpenResume)}
              className="text-left py-1.5 text-slate-300"
            >
              RESUME
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="text-left py-1.5 text-slate-300"
            >
              CONTACT
            </button>
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleNavClick(undefined, onOpenResume)}
              className="w-full py-2.5 rounded bg-[#141720] border border-white/15 text-xs font-mono uppercase tracking-wider text-slate-200 text-center"
            >
              DOWNLOAD RESUME
            </button>
            <button
              type="button"
              onClick={() => handleNavClick(undefined, onOpenContact)}
              className="w-full py-2.5 rounded bg-[#155EEF] text-xs font-mono uppercase tracking-wider text-white font-medium text-center"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
