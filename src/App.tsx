import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { CaseStudyView } from './components/CaseStudyView';
import { ResumeView } from './components/ResumeView';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

type ViewMode =
  | { type: 'home' }
  | { type: 'case-study'; slug: string }
  | { type: 'resume' };

export default function App() {
  const [view, setView] = useState<ViewMode>({ type: 'home' });
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Sync URL hash for bookmarkable case studies & browser back button support
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('case-study/')) {
        const slug = hash.replace('case-study/', '');
        const exists = PORTFOLIO_DATA.caseStudies.some((c) => c.slug === slug);
        if (exists) {
          setView({ type: 'case-study', slug });
          return;
        }
      } else if (hash === 'resume') {
        setView({ type: 'resume' });
        return;
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleNavigateHome = (sectionId?: string) => {
    if (view.type !== 'home') {
      window.history.pushState(null, '', window.location.pathname);
      setView({ type: 'home' });
      setTimeout(() => {
        if (sectionId && sectionId !== 'top') {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      if (sectionId && sectionId !== 'top') {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSelectCaseStudy = (slug: string) => {
    window.location.hash = `case-study/${slug}`;
    setView({ type: 'case-study', slug });
  };

  const handleOpenResume = () => {
    window.location.hash = 'resume';
    setView({ type: 'resume' });
  };

  const activeCaseStudy =
    view.type === 'case-study'
      ? PORTFOLIO_DATA.caseStudies.find((c) => c.slug === view.slug) ||
        PORTFOLIO_DATA.caseStudies[0]
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0D12] text-white selection:bg-[#155EEF] selection:text-white">
      <Navbar
        currentView={view.type}
        onNavigateHome={handleNavigateHome}
        onOpenResume={handleOpenResume}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <main className="flex-1">
        {view.type === 'home' && (
          <HomeView
            onSelectCaseStudy={handleSelectCaseStudy}
            onOpenResume={handleOpenResume}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}

        {view.type === 'case-study' && activeCaseStudy && (
          <CaseStudyView
            caseStudy={activeCaseStudy}
            onBackHome={() => handleNavigateHome('work')}
            onSelectCaseStudy={handleSelectCaseStudy}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}

        {view.type === 'resume' && (
          <ResumeView
            onBackHome={() => handleNavigateHome('top')}
            onOpenContact={() => setContactModalOpen(true)}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        )}
      </main>

      <Footer
        onNavigateHome={handleNavigateHome}
        onOpenResume={handleOpenResume}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
