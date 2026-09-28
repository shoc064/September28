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
  const isResumeActive = activeView.type === 'resume';

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0c10]/95 backdrop-blur-md border-b border-[#171b24]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={() => handleNavClick(() => onNavigateHome())}
          className="text-left group focus:outline-none"
        >
          <div className="text-[13px] font-bold tracking-[0.08em] text-white uppercase leading-none group-hover:text-[#60a5fa] transition-colors">
            {PORTFOLIO_DATA.profile.name}
          </div>
          <div className="text-[8.5px] font-mono tracking-[0.18em] text-[#64748b] uppercase mt-1 leading-none">
            {PORTFOLIO_DATA.profile.roleKicker}
          </div>
        </button>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <button
            type="button"
            onClick={() => onNavigateHome('work')}
            className={`text-[11px] uppercase tracking-[0.12em] transition-colors cursor-pointer ${
              isWorkActive
                ? 'text-white font-semibold'
                : 'text-[#8e98ab] hover:text-white font-medium'
            }`}
          >
            WORK
          </button>
          <button
            type="button"
            onClick={() => onNavigateHome('about')}
            className={`text-[11px] uppercase tracking-[0.12em] transition-colors cursor-pointer ${
              isAboutActive
                ? 'text-white font-semibold'
                : 'text-[#8e98ab] hover:text-white font-medium'
            }`}
          >
            ABOUT
          </button>
          <button
            type="button"
            onClick={onOpenResume}
            className={`text-[11px] uppercase tracking-[0.12em] transition-colors cursor-pointer ${
              isResumeActive
                ? 'text-white font-semibold'
                : 'text-[#8e98ab] hover:text-white font-medium'
            }`}
          >
            RESUME
          </button>
          <button
            type="button"
            onClick={() => onNavigateHome('contact')}
            className="text-[11px] uppercase tracking-[0.12em] text-[#8e98ab] hover:text-white font-medium transition-colors cursor-pointer"
          >
            CONTACT
          </button>
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onDownloadResume}
            className="px-3.5 py-2 rounded bg-[#131720] hover:bg-[#1a202c] border border-[#242a38] hover:border-[#353e52] text-[10px] font-semibold tracking-[0.1em] text-[#cbd5e1] hover:text-white uppercase transition-colors cursor-pointer"
          >
            DOWNLOAD RESUME
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-4 py-2 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[10px] font-semibold tracking-[0.1em] text-white uppercase transition-colors cursor-pointer"
          >
            CONTACT
          </button>
          <button
            type="button"
            onClick={() => onNavigateHome('about')}
            title="Tanmay Choudhury — Executive Profile"
            aria-label="Executive Profile"
            className="w-7 h-7 rounded-full overflow-hidden bg-[#16181f] border border-[#262c3a] hover:border-[#60a5fa] transition-colors shrink-0 ml-1 cursor-pointer"
          >
            <img
              src="https://raw.githubusercontent.com/shoc064/September28/main/Tanmay_website_Sept26_profilephoto.jpg"
              alt="Tanmay Choudhury"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2.5 md:hidden">
          <button
            type="button"
            onClick={onOpenContact}
            className="px-3 py-1.5 rounded bg-[#1d63ff] text-[10px] font-semibold tracking-[0.1em] text-white uppercase"
          >
            CONTACT
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
        <div className="md:hidden bg-[#0e1118] border-b border-[#1e2433] px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              type="button"
              onClick={() => handleNavClick(() => onNavigateHome('work'))}
              className="text-left py-2.5 px-2 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#151924] rounded"
            >
              WORK
            </button>
            <button
              type="button"
              onClick={() => handleNavClick(() => onNavigateHome('about'))}
              className="text-left py-2.5 px-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8] hover:text-white hover:bg-[#151924] rounded"
            >
              ABOUT
            </button>
            <button
              type="button"
              onClick={() => handleNavClick(onOpenResume)}
              className="text-left py-2.5 px-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8] hover:text-white hover:bg-[#151924] rounded"
            >
              RESUME
            </button>
            <button
              type="button"
              onClick={() => handleNavClick(() => onNavigateHome('contact'))}
              className="text-left py-2.5 px-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8] hover:text-white hover:bg-[#151924] rounded"
            >
              CONTACT
            </button>
          </div>
          <div className="pt-2 border-t border-[#1e2433] flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleNavClick(onDownloadResume)}
              className="w-full py-2.5 rounded bg-[#141821] border border-[#252b3b] text-[11px] font-semibold tracking-[0.1em] text-[#cbd5e1] uppercase text-center"
            >
              DOWNLOAD RESUME
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
