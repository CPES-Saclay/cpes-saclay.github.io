const SITE_NAME = 'CPES Paris-Saclay';
const DEFAULT_DESCRIPTION =
  "Le Cycle Pluridisciplinaire d'Études Supérieures de Paris-Saclay : une formation d'excellence pluridisciplinaire.";
const DEFAULT_DESCRIPTION_EN =
  'The Cycle Pluridisciplinaire d\'Études Supérieures of Paris-Saclay: a multidisciplinary excellence programme.';

type FrontmatterModule = { frontmatter?: { title?: string; description?: string } };

const mdxModules = import.meta.glob<FrontmatterModule>(
  '../pages/**/*.mdx',
  { eager: true }
);

const astroSources = import.meta.glob<string>(
  '../pages/**/*.astro',
  { eager: true, query: '?raw', import: 'default' }
);

export interface OgPage {
  slug: string;
  title: string;
  description: string;
}

function fileToSlug(filePath: string): string {
  let p = filePath
    .replace(/^\.\.\/pages\//, '')
    .replace(/\.(mdx|astro)$/, '');
  if (p === 'index') return 'index';
  if (p.endsWith('/index')) p = p.slice(0, -'/index'.length);
  return p;
}

function slugIsEnglish(slug: string): boolean {
  return slug === 'en' || slug.startsWith('en/');
}

// Only the opening <DefaultLayout ...> tag carries the page metadata: reading
// attributes from the whole file would pick up any `title="…"` passed to a
// component further down the page.
function extractLayoutTag(content: string): string {
  return content.match(/<DefaultLayout\b[^>]*>/)?.[0] ?? '';
}

function extractAttr(content: string, name: string): string | undefined {
  const re = new RegExp(`(?:^|[\\s])${name}\\s*=\\s*"([^"]*)"`);
  const m = content.match(re);
  return m?.[1] || undefined;
}

export function getOgPages(): OgPage[] {
  const pages = new Map<string, OgPage>();

  for (const [path, mod] of Object.entries(mdxModules)) {
    const slug = fileToSlug(path);
    const fm = mod.frontmatter ?? {};
    pages.set(slug, {
      slug,
      title: fm.title ?? SITE_NAME,
      description:
        fm.description ??
        (slugIsEnglish(slug) ? DEFAULT_DESCRIPTION_EN : DEFAULT_DESCRIPTION),
    });
  }

  for (const [path, raw] of Object.entries(astroSources)) {
    const slug = fileToSlug(path);
    if (pages.has(slug)) continue;
    const layoutTag = extractLayoutTag(raw);
    const title =
      extractAttr(layoutTag, 'fullTitle') ??
      extractAttr(layoutTag, 'title') ??
      SITE_NAME;
    const description =
      extractAttr(layoutTag, 'description') ??
      (slugIsEnglish(slug) ? DEFAULT_DESCRIPTION_EN : DEFAULT_DESCRIPTION);
    pages.set(slug, { slug, title, description });
  }

  return [...pages.values()];
}
