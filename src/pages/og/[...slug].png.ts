import type { APIContext, GetStaticPaths } from 'astro';
import { getOgPages } from '../../lib/og-pages';
import { renderOgImage } from '../../lib/og-render';

export const getStaticPaths: GetStaticPaths = () => {
  return getOgPages().map((p) => ({
    params: { slug: p.slug },
    props: { title: p.title, description: p.description },
  }));
};

export async function GET({ props }: APIContext) {
  const { title, description } = props as { title: string; description: string };
  const png = await renderOgImage(title, description);
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
