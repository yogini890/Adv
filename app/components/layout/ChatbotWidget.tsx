'use client';

import { useState } from 'react';
import { NYAYA_SETU_NAME, NYAYA_SETU_URL } from '@/lib/constants';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  const handleYes = () => {
    window.open(NYAYA_SETU_URL, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#B8952A] text-white shadow-lg hover:bg-[#8B6914] hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        aria-label={`Open ${NYAYA_SETU_NAME} chatbot`}
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#EDE8DF] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0D1B2A] px-5 py-4 sm:px-6 sm:py-5">
              <h2 id="chatbot-title" className="text-white text-lg sm:text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                {NYAYA_SETU_NAME}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Government of India — Legal Assistance Portal</p>
            </div>

            <div className="px-5 py-5 sm:px-6 sm:py-6 space-y-4">
              <p className="text-[#0D1B2A] text-sm sm:text-base leading-relaxed text-justify">
              This website may contain links to external resources and legal assistance platforms for public convenience and awareness purposes.
<br />
<br />
“Nyaya Setu” is a Government-supported legal assistance chatbot intended to improve access to basic legal guidance, legal awareness, and public legal information. The link has been provided solely with the intention of helping users access trusted legal support resources.
              </p>
              {/* <p className="text-[#B8952A] text-sm sm:text-base font-medium break-all">{NYAYA_SETU_URL}</p> */}
              <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed">
                Do you want to continue to <strong className="text-[#0D1B2A]">{NYAYA_SETU_NAME}</strong>?
              </p>

              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 py-2.5 sm:py-3 px-4 rounded-lg border border-[#EDE8DF] text-[#0D1B2A] text-sm font-medium hover:bg-[#F8F4EE] transition-colors"
                >
                  No
                </button>
                <button
                  type="button"
                  onClick={handleYes}
                  className="flex-1 py-2.5 sm:py-3 px-4 rounded-lg bg-[#B8952A] text-white text-sm font-medium hover:bg-[#8B6914] transition-colors"
                >
                  Yes, continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
