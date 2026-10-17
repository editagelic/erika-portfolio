import { useCallback, useEffect, useRef, useState } from 'react';

export type CopyState = 'idle' | 'copied' | 'selected';

/**
 * Kopira tekst u međuspremnik. Ako preglednik to ne dopusti,
 * označi tekst u zadanom elementu da ga korisnik kopira sam.
 */
export function useCopyToClipboard(resetAfter = 2000) {
  const [state, setState] = useState<CopyState>('idle');
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string, fallbackEl?: HTMLElement | null) => {
      const finish = (s: CopyState) => {
        setState(s);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setState('idle'), resetAfter);
      };
      try {
        await navigator.clipboard.writeText(text);
        finish('copied');
      } catch {
        if (fallbackEl) {
          const range = document.createRange();
          range.selectNodeContents(fallbackEl);
          const sel = window.getSelection();
          sel?.removeAllRanges();
          sel?.addRange(range);
        }
        finish('selected');
      }
    },
    [resetAfter],
  );

  return { state, copy };
}
