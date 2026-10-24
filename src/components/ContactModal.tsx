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
            <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#60a5fa] mb-1">
              Direct inquiry
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Connect with {PORTFOLIO_DATA.profile.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded bg-[#161a26] hover:bg-[#1e2436] text-[#94a3b8] hover:text-white cursor-pointer"
            aria-label="Close modal"
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
              <div className="text-[11px] text-[#64748b]">
                Direct email
              </div>
              <div className="text-sm font-mono text-white">
                {PORTFOLIO_DATA.profile.email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181d2a] hover:bg-[#202637] border border-[#283044] text-[12px] text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10b981]" />
                  <span className="text-[#10b981]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#60a5fa]" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181d2a] hover:bg-[#202637] border border-[#283044] text-[12px] text-[#cbd5e1] hover:text-white transition-colors"
            >
              <span>LinkedIn</span>
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
              Message prepared
            </h3>
            <p className="text-[14px] text-[#94a3b8] leading-relaxed mb-5">
              Thank you, {formState.name || 'for reaching out'}. Click below to send directly via your mail client or email{' '}
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
                className="px-4 py-2 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[13px] font-medium text-white"
              >
                Open in mail client
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-4 py-2 rounded bg-[#161a26] border border-[#252c3e] text-[13px] text-[#cbd5e1] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] text-[#cbd5e1] mb-1.5">
                  Your name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-[14px] text-white placeholder-[#525c70]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-[#cbd5e1] mb-1.5">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={formState.organization}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, organization: e.target.value }))
                  }
                  placeholder="Enterprise Tech Co."
                  className="w-full px-3.5 py-2 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-[14px] text-white placeholder-[#525c70]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] text-[#cbd5e1] mb-1.5">
                  Work email *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder="jane@company.com"
                  className="w-full px-3.5 py-2 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-[14px] text-white placeholder-[#525c70]"
                />
              </div>
              <div>
                <label className="block text-[12px] text-[#cbd5e1] mb-1.5">
                  Engagement focus
                </label>
                <select
                  value={formState.inquiryType}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, inquiryType: e.target.value }))
                  }
                  className="w-full px-3.5 py-2 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-[14px] text-white"
                >
                  <option value="Director / Lead PMM Opportunity">
                    Director / Lead PMM Opportunity
                  </option>
                  <option value="Senior PMM Role">Senior PMM Role</option>
                  <option value="Advisory / GTM Consultation">
                    Advisory / GTM Consultation
                  </option>
                  <option value="Executive Briefing">Executive Briefing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[12px] text-[#cbd5e1] mb-1.5">
                Role or project context *
              </label>
              <textarea
                rows={3}
                required
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                placeholder="Share details on the product domain (Data, AI Infrastructure, Cybersecurity) or GTM mandate..."
                className="w-full px-3.5 py-2 rounded bg-[#141822] border border-[#23293a] focus:border-[#3b82f6] focus:outline-none text-[14px] text-white placeholder-[#525c70] resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded bg-[#151922] hover:bg-[#1c212d] border border-[#252b3b] text-[13px] text-[#cbd5e1] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#1d63ff] hover:bg-[#1550d6] text-[13px] font-medium text-white cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
