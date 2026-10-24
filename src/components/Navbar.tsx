import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export type ActiveView =
  | { type: 'home'; section?: string }
  | { type: 'case-study'; id: string }
  | { type: 'resume' };

interface NavbarProps {
  activeView: ActiveView;
  onNavigateHome: (sectionId?: string) => void;
  onOpenResume: () => void;
  onDownloadResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigateHome,
  onOpenResume,
  onDownloadResume,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  const isWorkActive =
    activeView.type === 'case-study' ||
    (activeView.type === 'home' && (!activeView.section || activeView.section === 'work'));
  const isAboutActive = activeView.type === 'home' && activeView.section === 'about';
  const isContactActive = activeView.type === 'home' && activeView.section === 'contact';
  const isResumeActive = activeView.type === 'resume';

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0c10]/95 backdrop-blur-md border-b border-[#171b24]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={() => handleNavClick(() => onNavigateHome())}
          className="text-left group focus:outline-none cursor-pointer flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#16181f] border border-[#262c3a] shrink-0">
            <img
              src="https://raw.githubusercontent.com/shoc064/September28/main/Tanmay_website_Sept26_profilephoto.jpg"
              alt="Tanmay Choudhury"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
          <div>
            <div className="text-[14px] font-semibold tracking-[-0.01em] text-white group-hover:text-[#60a5fa] transition-colors leading-tight">
              {PORTFOLIO_DATA.profile.name}
            </div>
            <div className="text-[11px] text-[#64748b] leading-tight">
              Product marketing leader
            </div>
          </div>
        </button>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          <button
            type="button"
            onClick={() => onNavigateHome('work')}
            className={`text-[13px] transition-colors cursor-pointer ${
              isWorkActive && !isResumeActive
                ? 'text-white font-medium'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => onNavigateHome('about')}
            className={`text-[13px] transition-colors cursor-pointer ${
              isAboutActive
                ? 'text-white font-medium'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => onNavigateHome('contact')}
            className={`text-[13px] transition-colors cursor-pointer ${
              isContactActive
                ? 'text-white font-medium'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenResume}
            className={`px-3.5 py-1.5 rounded text-[13px] font-medium border transition-colors cursor-pointer ${
              isResumeActive
                ? 'bg-[#1e2536] border-[#3b82f6] text-white'
                : 'bg-[#131720] hover:bg-[#1a202c] border-[#242a38] hover:border-[#353e52] text-[#cbd5e1] hover:text-white'
            }`}
          >
            Résumé
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-3.5 py-1.5 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[13px] font-medium text-white transition-colors cursor-pointer"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenResume}
            className="px-2.5 py-1 rounded bg-[#131720] border border-[#242a38] text-[12px] font-medium text-[#cbd5e1]"
          >
            Résumé
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded bg-[#131720] border border-[#242a38] text-[#cbd5e1] hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1118] border-b border-[#1e2433] px-4 pt-3 pb-5 space-y-2">
          <div className="flex flex-col space-y-1">
            <button
              type="button"
              onClick={() => handleNavClick(() => onNavigateHome('work'))}
              className="text-left py-2 px-3 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#151924] rounded"
            >
              Work
            </button>
            <button
              type="button"
              onClick={() => handleNavClick(() => onNavigateHome('about'))}
              className="text-left py-2 px-3 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#151924] rounded"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNavClick(() => onNavigateHome('contact'))}
              className="text-left py-2 px-3 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#151924] rounded"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => handleNavClick(onOpenResume)}
              className="text-left py-2 px-3 text-sm text-[#cbd5e1] hover:text-white hover:bg-[#151924] rounded"
            >
              Résumé
            </button>
          </div>
          <div className="pt-2 border-t border-[#1e2433] flex gap-2">
            <button
              type="button"
              onClick={() => handleNavClick(onDownloadResume)}
              className="flex-1 py-2 rounded bg-[#141821] border border-[#252b3b] text-xs font-medium text-[#cbd5e1] text-center"
            >
              Download résumé
            </button>
            <button
              type="button"
              onClick={() => handleNavClick(onOpenContact)}
              className="flex-1 py-2 rounded bg-[#1d63ff] text-xs font-medium text-white text-center"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
