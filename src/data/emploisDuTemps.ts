// Semaine type de chaque année, d'après les emplois du temps 2026-2027 (Pronote) d'un groupe
// (parcours Société en L1 et L2, Santé en L3). Horaires arrondis à la demi-heure, sans enseignants ni salles.
//
// Les intitulés ne sont pas saisis ici : chaque créneau pointe vers l'`id` d'un cours de
// programme-fr.json / programme-en.json, pour reprendre exactement les intitulés de la maquette
// (l'emploi du temps Pronote utilise d'autres libellés).

export type Semestre = 'S1' | 'S2';

export interface Creneau {
  /** 0 = lundi … 4 = vendredi */
  jour: 0 | 1 | 2 | 3 | 4;
  /** "HH:MM" */
  debut: string;
  fin: string;
  /** Ids des cours du programme. Plusieurs ids : cours au choix ou en alternance sur le créneau. */
  cours: string[];
  /** Absent : toute l'année. */
  semestres?: Semestre[];
  /** Période du calendrier (B1, B2, B4, B5…) pendant laquelle le cours a lieu. */
  periode?: string;
  /** N'a pas lieu toutes les semaines (conférences, une semaine sur deux). */
  partiel?: boolean;
  /** Libellé de groupe, quand les cours du créneau sont au choix (ex. électifs HEC). */
  libelle?: { fr: string; en: string };
}

const parcoursL1 = ['parcours-sante', 'parcours-societe'];
const parcoursL2 = ['parcours-sante-l2', 'parcours-societe-l2'];
const parcoursL3 = ['parcours-sante-l3', 'parcours-societe-l3'];

export const emploisDuTemps: Partial<Record<'L1' | 'L2' | 'L3', Creneau[]>> = {
  L1: [
    // Lundi
    { jour: 0, debut: '08:00', fin: '10:00', cours: ['informatique-1'] },
    { jour: 0, debut: '10:00', fin: '12:00', cours: parcoursL1 },
    { jour: 0, debut: '12:00', fin: '13:00', cours: ['economie-politiques-sociales-et-sante'] },
    { jour: 0, debut: '13:30', fin: '18:00', cours: ['introduction-a-la-science-des-donnees'], semestres: ['S2'] },
    // Mardi
    { jour: 1, debut: '08:00', fin: '09:00', cours: ['informatique-1'] },
    { jour: 1, debut: '09:00', fin: '12:00', cours: ['mathematiques-1'] },
    { jour: 1, debut: '12:00', fin: '13:00', cours: ['mathematiques-1'], semestres: ['S2'] },
    { jour: 1, debut: '14:00', fin: '17:00', cours: ['mathematiques-1'] },
    { jour: 1, debut: '17:00', fin: '18:00', cours: ['economie-politiques-sociales-et-sante'] },
    // Mercredi
    { jour: 2, debut: '08:00', fin: '09:00', cours: ['mathematiques-1'] },
    { jour: 2, debut: '10:00', fin: '11:00', cours: ['mathematiques-1'] },
    { jour: 2, debut: '11:00', fin: '12:00', cours: ['anglais'] },
    { jour: 2, debut: '13:00', fin: '16:30', cours: ['introduction-a-la-statistique'], semestres: ['S2'] },
    { jour: 2, debut: '14:00', fin: '16:30', cours: ['projet-solidaire-l1'], semestres: ['S1'], partiel: true },
    // Jeudi
    { jour: 3, debut: '08:00', fin: '10:00', cours: ['informatique-1'] },
    { jour: 3, debut: '10:00', fin: '11:00', cours: ['anglais'] },
    { jour: 3, debut: '13:00', fin: '14:00', cours: ['economie-politiques-sociales-et-sante'] },
    { jour: 3, debut: '15:30', fin: '18:00', cours: ['decouverte-de-lia'], semestres: ['S1'] },
    // Vendredi
    { jour: 4, debut: '08:00', fin: '10:00', cours: parcoursL1 },
    { jour: 4, debut: '11:00', fin: '12:00', cours: ['informatique-1'] },
    { jour: 4, debut: '14:00', fin: '18:00', cours: ['data-science-exploration-visualisation'], semestres: ['S2'] },
  ],
  L2: [
    // Lundi
    { jour: 0, debut: '08:30', fin: '11:30', cours: ['introduction-programmation-objet'], semestres: ['S1'] },
    { jour: 0, debut: '09:00', fin: '12:00', cours: ['mathematiques-chaines-de-markov'], semestres: ['S2'] },
    { jour: 0, debut: '14:00', fin: '16:00', cours: parcoursL2 },
    { jour: 0, debut: '16:00', fin: '18:00', cours: ['informatique-2'] },
    // Mardi
    { jour: 1, debut: '08:00', fin: '10:00', cours: ['informatique-2'] },
    { jour: 1, debut: '10:00', fin: '11:00', cours: parcoursL2 },
    { jour: 1, debut: '13:00', fin: '16:00', cours: ['statistiques-2'], semestres: ['S1'], periode: 'B1' },
    {
      jour: 1, debut: '13:00', fin: '18:00', semestres: ['S1'], periode: 'B2',
      cours: ['opt-droit-du-travail', 'opt-politique-crises-communication', 'opt-storytelling-marketing', 'opt-industrie-pharmaceutique'],
      libelle: { fr: 'Électif HEC Paris (au choix)', en: 'HEC Paris elective (one to choose)' },
    },
    { jour: 1, debut: '14:00', fin: '17:00', cours: ['langages-formels'], semestres: ['S2'] },
    // Mercredi
    { jour: 2, debut: '08:00', fin: '09:00', cours: ['anglais-l2'] },
    { jour: 2, debut: '09:00', fin: '13:00', cours: ['mathematiques-2'] },
    { jour: 2, debut: '14:00', fin: '17:00', cours: ['sciences-des-donnees-l2'] },
    // Jeudi
    { jour: 3, debut: '08:00', fin: '11:00', cours: ['mathematiques-2'] },
    { jour: 3, debut: '11:00', fin: '12:00', cours: ['anglais-l2'] },
    { jour: 3, debut: '14:00', fin: '16:00', cours: ['economie-politiques-sociales-et-sante-l2'] },
    { jour: 3, debut: '16:00', fin: '17:00', cours: ['economie-politiques-sociales-et-sante-l2'], partiel: true },
    // Vendredi
    { jour: 4, debut: '08:00', fin: '18:00', cours: ['methodes-entrepreneur-hec'], semestres: ['S1'], periode: 'B1' },
    { jour: 4, debut: '09:00', fin: '12:00', cours: ['statistiques-2'], semestres: ['S1'], periode: 'B2' },
    { jour: 4, debut: '08:30', fin: '12:30', cours: ['introduction-r-rstudio'], semestres: ['S2'] },
    { jour: 4, debut: '13:00', fin: '15:00', cours: ['affaires-europeennes'], semestres: ['S2'], periode: 'B5' },
    { jour: 4, debut: '15:00', fin: '18:00', cours: ['data-modeling'], semestres: ['S2'], periode: 'B4' },
  ],
  L3: [
    // Lundi
    { jour: 0, debut: '08:30', fin: '11:30', cours: ['opt-sante-publique-epidemiologie'], semestres: ['S1'] },
    { jour: 0, debut: '14:00', fin: '16:00', cours: ['anglais-l3'] },
    { jour: 0, debut: '16:00', fin: '18:00', cours: parcoursL3, semestres: ['S1'] },
    // Mardi
    { jour: 1, debut: '09:00', fin: '11:00', cours: ['sociologie-quantitative'], semestres: ['S1'] },
    { jour: 1, debut: '09:00', fin: '11:00', cours: ['sociologie-computationnelle'], semestres: ['S2'] },
    { jour: 1, debut: '11:00', fin: '12:00', cours: ['mathematiques-3'] },
    { jour: 1, debut: '13:00', fin: '15:00', cours: ['mesures-integration-probabilites', 'theorie-information-optimisation'], semestres: ['S1'] },
    { jour: 1, debut: '15:00', fin: '17:00', cours: parcoursL3, semestres: ['S1'] },
    { jour: 1, debut: '13:30', fin: '17:30', cours: ['bases-de-donnees'], semestres: ['S2'] },
    // Mercredi
    { jour: 2, debut: '08:00', fin: '12:00', cours: ['mesures-integration-probabilites'], semestres: ['S1'] },
    { jour: 2, debut: '08:00', fin: '12:00', cours: ['equations-differentielles-ordinaires'], semestres: ['S2'] },
    { jour: 2, debut: '14:00', fin: '17:00', cours: ['theorie-information-optimisation'], semestres: ['S1'] },
    {
      jour: 2, debut: '13:30', fin: '17:30', semestres: ['S2'],
      cours: ['opt-analyse-info-donnees-biologiques', 'opt-fairness-ia', 'opt-informatique-theorique', 'opt-ia-symbolique', 'opt-biologie-s6'],
      libelle: { fr: 'Option Université Paris-Saclay (au choix)', en: 'Université Paris-Saclay option (one to choose)' },
    },
    // Jeudi
    { jour: 3, debut: '08:00', fin: '10:00', cours: ['economie-politiques-sociales-et-sante-l3'] },
    { jour: 3, debut: '13:00', fin: '16:00', cours: ['mathematiques-3'] },
    // Vendredi
    { jour: 4, debut: '08:00', fin: '18:00', cours: ['projet-capstone'] },
  ],
};

// Formatage de la grille (EmploiDuTemps).
export type Langue = 'fr' | 'en';

export const JOURS: Record<Langue, string[]> = {
  fr: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
};

export const minutes = (h: string) => {
  const [H, M] = h.split(':').map(Number);
  return H * 60 + M;
};

/** "13:30" → "13h30" (fr) ou "13:30" (en). */
export function heure(h: string, lang: Langue) {
  const [H, M] = h.split(':').map(Number);
  return lang === 'fr' ? `${H}h${M ? String(M).padStart(2, '0') : ''}` : `${H}:${String(M).padStart(2, '0')}`;
}

export const horaire = (c: Creneau, lang: Langue) => `${heure(c.debut, lang)} – ${heure(c.fin, lang)}`;

/** Mentions affichées sur un créneau : semestre(s) puis période. */
export const etiquettes = (c: Creneau) => [...(c.semestres ?? []), ...(c.periode ? [c.periode] : [])];
