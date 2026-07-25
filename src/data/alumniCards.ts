import { logosDebouches } from './logosDebouches';

// Traduction EN des formations (l'établissement, nom propre, reste inchangé).
export const formationEn: Record<string, string> = {
  "Cycle ingénieur": "Engineering programme",
  "Santé publique": "Public Health",
  "Programme grande école (MiM)": "Grande École programme (MiM)",
  "Programme grande école": "Grande École programme",
  "Master Sociologie Quantitative et Démographie (SQD)": "Master in Quantitative Sociology and Demography (SQD)",
  "Master IA et Société": "Master in AI and Society",
  "Master Informatique pour la Data Science (ISD), voie alternance": "Master in Computer Science for Data Science (ISD), apprenticeship track",
  "Master Data Science and Business Analytics": "Master in Data Science and Business Analytics",
  "Master Data Driven Health": "Master in Data Driven Health",
};

export const trFormation = (f: string | null | undefined, lang: string): string | undefined => {
  if (!f) return undefined;
  return lang === 'en' ? (formationEn[f] ?? f) : f;
};

export const buildLogos = (e: any, lang: string) => {
  const etab = (e.etablissement as string | undefined) ?? '';
  const formation = trFormation(e.formation, lang) ?? '';
  const label = formation ? `${etab} · ${formation}` : etab;
  return ((e.logos as string[] | undefined) ?? []).map((name: string) => ({
    src: `/assets/debouches/${name}.webp`,
    ratio: logosDebouches[name] ?? 2,
    label,
  }));
};
