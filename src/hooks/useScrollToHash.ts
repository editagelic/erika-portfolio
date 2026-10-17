import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Nakon promjene rute skrolaj na #sidro, ili na vrh ako ga nema. */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    // pričekaj da se sekcija iscrta
    const id = decodeURIComponent(hash.slice(1));
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
}
