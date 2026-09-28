import React, { useState } from 'react';
import { X, Mail, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(
      `Product Marketing Leadership Inquiry — ${organization || name || 'Strategic Briefing'}`
    );
    const body = encodeURIComponent(
      `Hi Tanmay,\n\n${message}\n\nBest regards,\n${name}\n${organization ? `${organization}\n` : ''}${email}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#11141C] border border-white/15 rounded-xl overflow-hidden shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#141822]">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#60A5FA]">
              NEXT OPPORTUNITY · STRATEGIC BRIEFING
            </div>
            <h2 className="text-lg font-bold text-white mt-0.5">
              Connect with Tanmay Choudhury
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Open to <strong className="text-white">Product Marketing Lead</strong> and{' '}
            <strong className="text-white">Director of Product Marketing</strong> roles, as well as strategic GTM advisory engagements across Data, AI Infrastructure, and Cybersecurity.
          </p>

          {/* Direct Email & LinkedIn Quick Bar */}
          <div className="p-3.5 rounded-lg bg-[#0D1017] border border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-xs font-mono text-white">
              <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
              <span>{PORTFOLIO_DATA.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-white/[0.06] hover:bg-white/10 text-[11px] font-mono text-slate-200 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Email
                  </>
                )}
              </button>
              <a
                href={PORTFOLIO_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#155EEF]/20 hover:bg-[#155EEF]/30 border border-[#155EEF]/40 text-[11px] font-mono text-[#60A5FA] transition-colors"
              >
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="p-5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <div className="text-sm font-bold text-white">
                Briefing Request Prepared
              </div>
              <p className="text-xs text-slate-300">
                Your email client has been opened with your message addressed to{' '}
                <span className="font-mono text-white">{PORTFOLIO_DATA.contact.email}</span>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded bg-white/10 text-xs font-mono uppercase text-white cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Rivera"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1017] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3B82F6]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1017] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3B82F6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Company &amp; Role Scope
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. Director of Product Marketing — Series B AI Infrastructure"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1017] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3B82F6]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Message / Briefing Context
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details on the role, product, or GTM challenge you'd like to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1017] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3B82F6]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#155EEF] hover:bg-[#1D63FF] text-xs font-mono uppercase tracking-wider text-white font-medium transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Briefing Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
