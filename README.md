# Tanmay Choudhury — Product Marketing Leadership Portfolio

Personal executive portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

## Quick Start (Local Development)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your headshot file:**
   Place your original photo at:
   ```
   public/assets/Tanmay_website_Sept26_profilephoto.jpg
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production (Netlify, Vercel, Cloudflare Pages, GitHub Pages):**
   ```bash
   npm run build
   ```
   The static production files will be generated in the `dist/` folder.

## Project Structure

- `src/data/portfolioData.ts` — Centralized content file for editing headlines, metrics, case studies, active leadership, advisory mandates, methodology phases, and resume items.
- `src/App.tsx` — Homepage layout (Hero, Metrics, Enterprise Case Studies, Appventory Leadership, Advisory Practice, Methodology, Executive Profile, Let's Connect, and Footer).
- `src/components/Navbar.tsx` — Sticky top navigation bar and mobile menu drawer.
- `src/components/CaseStudyPage.tsx` — Individual case study pages with GTM architecture, deliverables, impact metrics, and artifact lightbox.
- `src/components/ArtifactVisuals.tsx` — High-DPI reproductions of case study work samples (Appsian, Core42, Oracle, Nanoheal, Valiantys, Onboarding Flow).
- `src/components/ResumePage.tsx` — Interactive executive curriculum vitae and downloadable resume generator.
- `src/components/ContactModal.tsx` — Strategic briefing inquiry modal and one-click email/LinkedIn actions.
