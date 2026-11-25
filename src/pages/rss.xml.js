import { getAllUnifiedPosts } from '../lib/blog';

export async function GET(context) {
  const posts = await getAllUnifiedPosts();
  const siteUrl = context.site ? context.site.href.replace(/\/$/, '') : 'https://fundelibertad.org';

  const itemsXml = posts
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}/`;
      const pubDate = new Date(post.pubDate).toUTCString();
      const escapedTitle = (post.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const escapedDesc = (post.description || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const category = (post.category || 'General').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      return `
    <item>
      <title>${escapedTitle}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapedDesc}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${category}</category>
      <author>info@fundelibertad.org (${post.author || 'FUNDELIBERTAD'})</author>
    </item>`;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FUNDELIBERTAD | Blog de Derechos Humanos y Comunidad</title>
    <link>${siteUrl}/blog/</link>
    <description>Publicaciones oficiales, informes y noticias de la Fundación de Derechos Humanos FUNDELIBERTAD en Medellín, Colombia.</description>
    <language>es-CO</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
