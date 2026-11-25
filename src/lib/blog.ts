import { getCollection } from 'astro:content';
import { getPosts, getFeaturedImageUrl, getPostCategories, getAuthorName, hasValidCategory, type WPPost } from './wordpress';
import { slugify } from '../utils/slugify';

export interface UnifiedPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  pubDate: Date;
  author: string;
  image: string;
  category: string;
  tags: string[];
  isMarkdown: boolean;
  entry?: any;
}

/**
 * Obtiene todas las publicaciones unificadas de Markdown (.md/.mdx) y WordPress.
 */
export async function getAllUnifiedPosts(): Promise<UnifiedPost[]> {
  const postsMap = new Map<string, UnifiedPost>();

  // 1. Cargar publicaciones locales de Content Collections (Markdown / MDX)
  try {
    const mdEntries = await getCollection('blog');
    for (const entry of mdEntries) {
      const cleanSlug = entry.id.replace(/\.(md|mdx)$/, '');
      postsMap.set(cleanSlug, {
        slug: cleanSlug,
        title: entry.data.title,
        description: entry.data.description,
        content: entry.body || '',
        pubDate: new Date(entry.data.pubDate),
        author: entry.data.author || 'Equipo FUNDELIBERTAD',
        image: entry.data.image || 'https://lh3.googleusercontent.com/d/1mzMGHUgDdHcX8hpf8DTMLIs2Dv53CCsd',
        category: entry.data.category || 'Derechos Humanos',
        tags: entry.data.tags || [],
        isMarkdown: true,
        entry,
      });
    }
  } catch (err) {
    console.warn('Colección de blog local no encontrada o vacía');
  }

  // 2. Cargar publicaciones remotas desde WordPress API
  try {
    const rawWpPosts = await getPosts(100);
    const validWp = rawWpPosts.filter(hasValidCategory);
    for (const wp of validWp) {
      if (!postsMap.has(wp.slug)) {
        const cats = getPostCategories(wp);
        postsMap.set(wp.slug, {
          slug: wp.slug,
          title: wp.title.rendered,
          description: wp.excerpt.rendered.replace(/<[^>]*>?/gm, '').trim(),
          content: wp.content.rendered,
          pubDate: new Date(wp.date),
          author: getAuthorName(wp) || 'FUNDELIBERTAD',
          image: getFeaturedImageUrl(wp, 'https://lh3.googleusercontent.com/d/1mzMGHUgDdHcX8hpf8DTMLIs2Dv53CCsd'),
          category: cats[0] || 'General',
          tags: cats,
          isMarkdown: false,
        });
      }
    }
  } catch (err) {
    console.warn('No se pudieron obtener posts de WordPress en build time, usando fallback local.');
  }

  // Ordenar por fecha descendente
  return Array.from(postsMap.values()).sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );
}
