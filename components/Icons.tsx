export function MirrorIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="20" rx="14" ry="17" stroke="currentColor" strokeWidth="3" />
      <path d="M24 37v7M17 44h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function MugIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 12h20v20a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6V12Z" stroke="currentColor" strokeWidth="3" />
      <path d="M30 16h3a5 5 0 0 1 0 10h-3" stroke="currentColor" strokeWidth="3" />
      <path d="M15 8c0 2-2 2-2 4M22 8c0 2-2 2-2 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function YarnIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="22" cy="24" r="14" stroke="currentColor" strokeWidth="3" />
      <path
        d="M12 18c6 2 12 8 16 16M12 30c6-2 12-8 16-16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M34 34c3 2 5 5 5 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function CanvasIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="8" width="32" height="26" rx="2" stroke="currentColor" strokeWidth="3" />
      <path d="M8 34l10-10 6 6 8-10 8 8" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M16 26v14M32 26v14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 6c1.5 8 4 12 14 14-10 2-12.5 6-14 14-1.5-8-4-12-14-14 10-2 12.5-6 14-14Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.01 2C6.48 2 2 6.44 2 11.92c0 1.87.51 3.61 1.4 5.11L2 22l5.13-1.35a10.02 10.02 0 0 0 4.88 1.25h.01c5.53 0 10.02-4.44 10.02-9.92C22 6.44 17.54 2 12.01 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.05.8.82-2.96-.2-.3a8.06 8.06 0 0 1-1.26-4.35c0-4.47 3.66-8.1 8.2-8.1 4.53 0 8.19 3.63 8.19 8.1 0 4.47-3.66 8.14-8.2 8.14Zm4.5-6.1c-.25-.12-1.45-.71-1.68-.79-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.25-.12-1.05-.38-2-1.22-.74-.65-1.24-1.46-1.39-1.71-.14-.24-.02-.37.11-.5.11-.11.25-.28.37-.42.13-.14.17-.24.25-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.31-.75-1.79-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
