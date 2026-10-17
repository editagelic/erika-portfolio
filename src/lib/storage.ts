/** Sigurno čitanje/pisanje u localStorage (privatni način rada zna baciti grešku). */
export const storage = {
  get(key: string): string | null {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      /* ignoriraj */
    }
  },
};
