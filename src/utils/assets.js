export const getAsset = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') + '/';
  const clean = path.replace(/^\//, '');
  return base + clean;
};
