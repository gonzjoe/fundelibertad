/**
 * Helper to generate correct URLs whether running on root domain or under GitHub Pages subpath (/fundelibertad/)
 * and enforcing canonical trailing slashes for SEO compliance.
 */

export const BASE_URL = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export function url(path: string = ''): string {
  if (!path || path === '/') {
    return BASE_URL ? `${BASE_URL}/` : '/';
  }
  let cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Si no es un archivo (con extensión como .xml, .png, .jpg) y no termina en '/', añadir '/'
  if (!cleanPath.includes('.') && !cleanPath.endsWith('/')) {
    cleanPath += '/';
  }
  return `${BASE_URL}${cleanPath}`;
}
