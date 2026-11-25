/**
 * Convierte un texto en un slug URL amigable y seguro.
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Reemplaza espacios con guiones
    .replace(/[^\w-]+/g, '') // Elimina caracteres no alfanuméricos
    .replace(/--+/g, '-') // Reemplaza múltiples guiones con uno solo
    .replace(/^-+|-+$/g, ''); // Quita guiones iniciales y finales
}
