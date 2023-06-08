let __cache: number | undefined;

const createEl = () => {
  const el = document.createElement('div');
  const s = el.style;

  s.display = 'block';
  s.position = 'absolute';
  s.width = '100px';
  s.height = '100px';
  s.left = '-999px';
  s.top = '-999px';
  s.overflow = 'scroll';

  document.body.appendChild(el);

  return [ el, () => { document.body.removeChild(el); } ] as const;
};

export const scrollbarWidth = (force?: boolean): number | undefined => {
  if (typeof document === 'undefined') return 0;

  // return cached value if we have some
  if (force !== true && typeof __cache === 'number') return __cache;

  const doc = document;

  if (!doc.body || (doc.readyState && doc.readyState === 'loading')) return undefined;

  const [{ clientWidth, offsetWidth }, remove] = createEl();

  // if element still has no width it means DOM is not ready yet
  __cache = clientWidth === 0 ? undefined : offsetWidth - clientWidth;

  remove();

  return __cache;
};
