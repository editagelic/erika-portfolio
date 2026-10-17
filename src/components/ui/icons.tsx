const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };

export const SunIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = () => (
  <svg {...base}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const ArrowRight = () => (
  <svg {...base} width="18" height="18">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** Figma-stil kursor za hero */
export const CursorIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
    <path d="M2 1l15 7-6.5 2L8 17z" fill={color} stroke="#fff" strokeWidth="1.5" />
  </svg>
);
