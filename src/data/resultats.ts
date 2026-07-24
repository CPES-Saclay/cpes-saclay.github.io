export interface Bilingue {
  fr: string;
  en: string;
}

export interface LigneResultat {
  nom: string;
  detail?: string;
  n: number;
}

export interface Famille {
  id: string;
  nom: Bilingue;
  total: number;
  exemples: Bilingue;
  detailSousTitre?: Bilingue;
  lignes: LigneResultat[];
}

export interface Orientation {
  num: string;
  nom: Bilingue;
  desc: Bilingue;
}

export interface PromoResultats {
  id: string;
  diplomes: number;
  partages: number;
  totalAdmissions: number;
  pdf?: string;
  familles: Famille[];
  orientation: Orientation[];
}

export const resultats: PromoResultats[] = [
  {
    id: "CPES26",
    diplomes: 33,
    partages: 29,
    totalAdmissions: 185,
    pdf: "/assets/documents/debouches/cpes_paris-saclay_debouches_cpes26.pdf",
    familles: [
      {
        id: "universites",
        nom: { fr: "Universités & instituts", en: "Universities & institutes" },
        total: 117,
        exemples: { fr: "Paris-Saclay, Sorbonne, IP Paris…", en: "Paris-Saclay, Sorbonne, IP Paris…" },
        detailSousTitre: { fr: "24 établissements", en: "24 institutions" },
        lignes: [
          { nom: "Université Paris-Saclay", detail: "BIBS-IA, Maths & Apprentissage Statistique, Maths & IA, ISADS, Santé publique…", n: 38 },
          { nom: "Sorbonne Université", detail: "Actuariat, BIM, IMA, MIND, Sciences des données (SCDA/SCDI)…", n: 15 },
          { nom: "Institut Polytechnique de Paris", detail: "Sociologie quantitative & démographie, DS4Health, Data-AI…", n: 11 },
          { nom: "Université Paris Cité", detail: "Ingénierie mathématique & biostatistique, ISIFAR, Cryptologie, MMAS…", n: 10 },
          { nom: "Paris 1 Panthéon-Sorbonne", detail: "IMMAEF, MAEF, Humanités numériques, Démographie, Économétrie", n: 9 },
          { nom: "Aix-Marseille Université", detail: "Bio-informatique, Ingénierie maths & actuariat, MASSPOP", n: 6 },
          { nom: "Université de Rennes", detail: "Santé publique, Biologie-santé", n: 3 },
          { nom: "Université Paris 8", detail: "MIASHS, IA & sciences des données", n: 3 },
          { nom: "PSL", detail: "Mathématiques appliquées, Actuariat", n: 2 },
          { nom: "+ 15 autres établissements", detail: "Dauphine, CNAM, EHESS, Strasbourg, Lyon 2, Rennes 1-2, Grenoble Alpes…", n: 20 },
        ],
      },
      {
        id: "ingenieurs",
        nom: { fr: "Grandes écoles d'ingénieurs", en: "Engineering grandes écoles" },
        total: 30,
        exemples: { fr: "Polytechnique, CentraleSupélec, Télécom…", en: "Polytechnique, CentraleSupélec, Télécom…" },
        detailSousTitre: { fr: "17 écoles", en: "17 schools" },
        lignes: [
          { nom: "École Polytechnique", n: 1 },
          { nom: "CentraleSupélec", n: 4 },
          { nom: "ENSAE Paris", n: 3 },
          { nom: "Télécom Paris", n: 4 },
          { nom: "ENSTA Paris", n: 1 },
          { nom: "ENSAI", n: 3 },
          { nom: "IMT Atlantique", n: 1 },
          { nom: "Télécom SudParis", n: 2 },
          { nom: "ENSIMAG (Grenoble INP)", n: 2 },
          { nom: "Groupe Centrale · Lyon, Lille, Nantes, Marseille", n: 4 },
          { nom: "Arts et Métiers · ESTP · EIVP · UTC", n: 5 },
        ],
      },
      {
        id: "masters",
        nom: { fr: "Masters sélectifs", en: "Selective master's" },
        total: 17,
        exemples: { fr: "PSL, IP Paris, Centrale-ESSEC, ENS Ulm…", en: "PSL, IP Paris, Centrale-ESSEC, ENS Ulm…" },
        lignes: [
          { nom: "ENS Ulm", detail: "Master IMaLiS · Biologie", n: 1 },
          { nom: "Institut Polytechnique de Paris", detail: "Applied Maths & Statistics · QMI · MaQI", n: 4 },
          { nom: "PSL", detail: "IA & société · Sciences de la durabilité · ST4Health", n: 6 },
          { nom: "Université Paris-Saclay", detail: "Maths & IA · Maths & Apprentissage Statistique · ISADS · BIBS-IA", n: 22 },
          { nom: "Centrale · ESSEC", detail: "DSBA · Data Sciences & Business Analytics", n: 3 },
          { nom: "Sciences Po", detail: "Sociologie", n: 1 },
          { nom: "EHESS", detail: "Quantifier en sciences sociales", n: 1 },
          { nom: "Paris-Dauphine", detail: "Master 203 · Financial Markets · Mathématiques & applications", n: 2 },
          { nom: "Université Paris Cité", detail: "Biomedical Engineering", n: 1 },
        ],
      },
      {
        id: "commerce",
        nom: { fr: "Écoles de commerce", en: "Business schools" },
        total: 13,
        exemples: { fr: "HEC Paris, EDHEC, EMLyon, ESSEC", en: "HEC Paris, EDHEC, EMLyon, ESSEC" },
        detailSousTitre: { fr: "4 écoles", en: "4 schools" },
        lignes: [
          { nom: "HEC Paris", detail: "Programme Grande École (PGE)", n: 4 },
          { nom: "EDHEC", detail: "Programme Grande École (PGE)", n: 4 },
          { nom: "EMLyon", detail: "Programme Grande École (PGE)", n: 4 },
          { nom: "ESSEC", detail: "Programme Grande École (PGE)", n: 1 },
        ],
      },
      {
        id: "international",
        nom: { fr: "International", en: "International" },
        total: 6,
        exemples: { fr: "Suède, Royaume-Uni", en: "Sweden, United Kingdom" },
        detailSousTitre: { fr: "Suède, Royaume-Uni", en: "Sweden, United Kingdom" },
        lignes: [
          { nom: "KTH Royal Institute of Technology", detail: "Biostatistics & Data Science · Data-Driven Health", n: 3 },
          { nom: "Karolinska Institutet", detail: "Health Informatics", n: 2 },
          { nom: "King's College London", detail: "Urban Informatics", n: 1 },
        ],
      },
      {
        id: "ens",
        nom: { fr: "ENS Paris-Saclay", en: "ENS Paris-Saclay" },
        total: 2,
        exemples: { fr: "2 normaliens (Informatique & Mathématiques)", en: "2 students (Computer Science & Mathematics)" },
        detailSousTitre: { fr: "2 normaliens", en: "2 students admitted" },
        lignes: [
          { nom: "ENS Paris-Saclay", detail: "Master Informatique · 1 normalien", n: 1 },
          { nom: "ENS Paris-Saclay", detail: "Master Mathématiques · 1 normalien", n: 1 },
        ],
      },
    ],
    orientation: [
      { num: "01", nom: { fr: "Mathématiques appliquées", en: "Applied mathematics" }, desc: { fr: "Modélisation, analyse, apprentissage statistique", en: "Modelling, analysis, statistical learning" } },
      { num: "02", nom: { fr: "Data science & Intelligence artificielle", en: "Data science & Artificial intelligence" }, desc: { fr: "IA, machine learning, science des données", en: "AI, machine learning, data science" } },
      { num: "03", nom: { fr: "Statistique & Actuariat", en: "Statistics & Actuarial science" }, desc: { fr: "Économétrie, finance quantitative, ISADS, ENSAE", en: "Econometrics, quantitative finance, ISADS, ENSAE" } },
      { num: "04", nom: { fr: "Bio-informatique & Biostatistique", en: "Bioinformatics & Biostatistics" }, desc: { fr: "Santé computationnelle, ingénierie du vivant", en: "Computational health, life-science engineering" } },
      { num: "05", nom: { fr: "Santé publique", en: "Public health" }, desc: { fr: "Épidémiologie, données de santé", en: "Epidemiology, health data" } },
      { num: "06", nom: { fr: "Sciences sociales quantitatives", en: "Quantitative social sciences" }, desc: { fr: "Sociologie, démographie, humanités numériques", en: "Sociology, demography, digital humanities" } },
    ],
  },
];
