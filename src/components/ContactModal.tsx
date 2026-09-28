import React, { useState } from 'react';
import { X, Mail, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    inquiryType: 'Director / Lead PMM Opportunity',
    message: '',
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#10131b] border border-[#23293a] rounded-xl p-6 sm:p-8 my-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 mb-6 border-b border-[#1c2230]">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#60a5fa] mb-1">
              STRATEGIC BRIEFING &amp; EXECUTIVE INQUIRIES
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Connect with {PORTFOLIO_DATA.profile.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded bg-[#161a26] hover:bg-[#1e2436] text-[#94a3b8] hover:text-white cursor-pointer"
            aria-label="Close contact modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Contact Channels */}
        <div className="bg-[#141822] border border-[#1f2536] rounded-lg p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#10192e] border border-[#1e3463] flex items-center justify-center text-[#60a5fa]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748b]">
                DIRECT EMAIL
              </div>
              <div className="text-xs sm:text-sm font-mono font-semibold text-white">
                {PORTFOLIO_DATA.profile.email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181d2a] hover:bg-[#202637] border border-[#283044] text-[10.5px] font-mono text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span className="text-[#10b981]">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#60a5fa]" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181d2a] hover:bg-[#202637] border border-[#283044] text-[10.5px] font-mono text-[#cbd5e1] hover:text-white transition-colors"
            >
              <span>LINKEDIN</span>
              <ExternalLink className="w-3 h-3 text-[#60a5fa]" />
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="bg-[#121927] border border-[#1e3a7a] rounded-lg p-6 text-center">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/15 border border-[#10b981]/40 text-[#10b981] flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">
              Briefing Request Prepared
            </h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed mb-5">
              Thank you, {formState.name || 'for reaching out'}. Your message details are
              ready—click below to send directly via your email client or reach out at{' '}
              <span className="text-white font-mono">
                {PORTFOLIO_DATA.profile.email}
              </span>
              .
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
                  `[${formState.inquiryType}] ${formState.name} — ${formState.organization}`
                )}&body=${encodeURIComponent(
                  `${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
                )}`}
                className="px-4 py-2 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[11px] font-semibold uppercase tracking-wider text-white"
              >
                OPEN IN MAIL CLIENT
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-4 py-2 rounded bg-[#161a26] border border-[#252c3e] text-[11px] font-semibold uppercase tracking-wider text-[#cbd5e1] cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8e98ab] mb-1.5">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2.5 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-xs text-white placeholder-[#525c70]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8e98ab] mb-1.5">
                  COMPANY / ORGANIZATION *
                </label>
                <input
                  type="text"
                  required
                  value={formState.organization}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, organization: e.target.value }))
                  }
                  placeholder="Enterprise Tech Co."
                  className="w-full px-3.5 py-2.5 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-xs text-white placeholder-[#525c70]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8e98ab] mb-1.5">
                  WORK EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder="jane@company.com"
                  className="w-full px-3.5 py-2.5 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-xs text-white placeholder-[#525c70]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8e98ab] mb-1.5">
                  ENGAGEMENT FOCUS
                </label>
                <select
                  value={formState.inquiryType}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, inquiryType: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-xs text-white"
                >
                  <option value="Director / Lead PMM Opportunity">
                    Director / Lead PMM Opportunity
                  </option>
                  <option value="Senior PMM Role">Senior PMM Role</option>
                  <option value="Fractional / Advisory GTM">
                    Fractional / Advisory GTM
                  </option>
                  <option value="Strategic Briefing">Strategic Briefing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8e98ab] mb-1.5">
                CONTEXT / ROLE DETAILS *
              </label>
              <textarea
                rows={3}
                required
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                placeholder="Share details on the role, product domain (Data, AI Infrastructure, Cybersecurity), or GTM challenge..."
                className="w-full px-3.5 py-2.5 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-xs text-white placeholder-[#525c70] resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded bg-[#151922] hover:bg-[#1c212d] border border-[#252b3b] text-[11px] font-semibold tracking-[0.1em] text-[#cbd5e1] uppercase cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[11px] font-semibold tracking-[0.1em] text-white uppercase cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND BRIEFING REQUEST</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
