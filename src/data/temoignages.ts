// Témoignages de diplômés. Les citations sont recueillies en français ;
// la version anglaise en est une traduction, les noms propres d'établissements
// restant inchangés.
export interface Temoignage {
  id: string;
  auteur: string;
  photo: string;
  promo: string;
  /* Le parcours, d'un lycée d'origine vers l'établissement actuel. */
  trajectoire: { fr: string; en: string };
  /* Destination actuelle : intitulé et logos de /assets/debouches. Plusieurs
     logos quand le diplôme est co-délivré par plusieurs établissements. */
  ecole: { nom: string; logos: string[] };
  citation: { fr: string[]; en: string[] };
}

export const temoignages: Temoignage[] = [
  {
    id: 'othmane-nammous',
    auteur: 'Othmane NAMMOUS',
    photo: '/assets/etudiants/othmanenammous.webp',
    promo: 'CPES26',
    ecole: { nom: 'Télécom SudParis', logos: ['telecom-sudparis'] },
    trajectoire: {
      fr: "Du lycée Louis de Broglie, à Marly-le-Roi, à Télécom SudParis, école d'ingénieurs de l'Institut Polytechnique de Paris",
      en: 'From Lycée Louis de Broglie in Marly-le-Roi to Télécom SudParis, an engineering school of the Institut Polytechnique de Paris',
    },
    citation: {
      fr: [
        "La pluridisciplinarité des cours et le nombre d'établissements dans lesquels j'ai pu suivre des enseignements m'ont donné une capacité d'adaptation immédiate.",
        "Les cours de mathématiques, théorie de la mesure, probabilités, analyse, m'ont permis d'arriver en école d'ingénieur avec toutes les bases nécessaires. Les projets que j'ai menés au CPES, en informatique, le projet solidaire et surtout le Capstone, m'ont appris à conduire un projet conséquent de A à Z, à délivrer des résultats et à travailler en équipe.",
        "J'y ai gagné une maturité opérationnelle et une aisance sur les projets complexes que je n'aurais jamais acquises dans un cursus théorique classique.",
      ],
      en: [
        'The breadth of the courses and the number of institutions where I was able to study gave me an immediate capacity to adapt.',
        'The mathematics courses in measure theory, probability and analysis meant I arrived at engineering school with every foundation I needed. The projects I carried out at the CPES, in computer science, the solidarity project and above all the Capstone, taught me to run a substantial project from start to finish, to deliver results and to work as a team.',
        'I gained an operational maturity and an ease with complex projects that I would never have acquired in a conventional theoretical course.',
      ],
    },
  },
  {
    id: 'lia-biscafe-park',
    auteur: 'Lia BISCAFÉ-PARK',
    photo: '/assets/etudiants/liabiscafepark.webp',
    promo: 'CPES26',
    ecole: { nom: 'École Polytechnique', logos: ['ecole-polytechnique'] },
    trajectoire: {
      fr: "Du lycée Notre-Dame de Bellegarde, à Neuville-sur-Saône près de Lyon, à l'École Polytechnique, école d'ingénieurs de l'Institut Polytechnique de Paris",
      en: 'From Lycée Notre-Dame de Bellegarde in Neuville-sur-Saône near Lyon to École Polytechnique, an engineering school of the Institut Polytechnique de Paris',
    },
    citation: {
      fr: [
        "Ce que je retiens du CPES, c'est l'ouverture disciplinaire sur les débouchés : la possibilité de passer les écoles de commerce, les ENS, les écoles d'ingénieurs ou les masters.",
      ],
      en: [
        'What I take away from the CPES is how wide it leaves your options: the possibility of sitting the entrance exams for business schools, the ENS or engineering schools, or going on to a master’s.',
      ],
    },
  },
  {
    id: 'charlotte-gaspalou',
    auteur: 'Charlotte GASPALOU',
    photo: '/assets/etudiants/charlottegaspalou.webp',
    promo: 'CPES26',
    ecole: { nom: 'Institut Polytechnique de Paris', logos: ['ip-paris'] },
    trajectoire: {
      fr: "Du lycée Sainte-Marie d'Antony au master Sociologie quantitative et démographie de l'Université Paris-Saclay, de l'ENSAE (Institut Polytechnique de Paris) et de l'ENS Paris-Saclay",
      en: "From Lycée Sainte-Marie d'Antony to the master's in Quantitative Sociology and Demography run by Université Paris-Saclay, ENSAE (Institut Polytechnique de Paris) and ENS Paris-Saclay",
    },
    citation: {
      fr: [
        "Ce que j'ai trouvé au CPES et que je n'aurais trouvé nulle part ailleurs, c'est le projet Capstone de troisième année, mené avec l'Open Data University. Il m'a permis de conduire un projet de grande ampleur sur un an et de m'adresser à de vrais clients.",
      ],
      en: [
        'What I found at the CPES and would have found nowhere else is the third-year Capstone project, run with the Open Data University. It let me carry out a large-scale project over a year and deal with real clients.',
      ],
    },
  },
  {
    id: 'tharushan-uthayakumar',
    auteur: 'Tharushan UTHAYAKUMAR',
    photo: '/assets/etudiants/tharushanuthayakumar.webp',
    promo: 'CPES26',
    ecole: { nom: 'HEC Paris', logos: ['hec-paris'] },
    trajectoire: {
      fr: "Du lycée Rocroy Saint-Vincent de Paul au Programme Grande École d'HEC Paris, Master in Management",
      en: "From Lycée Rocroy Saint-Vincent de Paul to the HEC Paris Grande École programme, Master in Management",
    },
    citation: {
      fr: [
        "Ce que j'ai le plus apprécié au CPES, c'est d'avoir pu découvrir les différents établissements partenaires. Ça m'a permis de me projeter concrètement et de faire un choix éclairé pour la suite de mes études. Les parcours très variés de la première promotion en sont la preuve. Si j'avais un conseil à donner à un élève de terminale encore indécis, ce serait de foncer : pour moi, c'est la formation idéale pour prendre le temps de bien choisir.",
      ],
      en: [
        'What I appreciated most at the CPES was getting to discover the different partner institutions. It let me picture my future concretely and make an informed choice about what to study next. The wide range of paths taken by the first cohort is the proof. If I had one piece of advice for an undecided final-year pupil, it would be to go for it: to me, this is the ideal programme for taking the time to choose well.',
      ],
    },
  },
  {
    id: 'eleana-tran',
    auteur: 'Eléana TRAN',
    photo: '/assets/etudiants/eleanatran.webp',
    promo: 'CPES26',
    ecole: { nom: 'CentraleSupélec et ESSEC', logos: ['centrale-supelec', 'essec'] },
    trajectoire: {
      fr: "Du Lycée International de l'Est Parisien, à Noisy-le-Grand, au master Data Sciences & Business Analytics de CentraleSupélec et de l'ESSEC",
      en: "From Lycée International de l'Est Parisien in Noisy-le-Grand to the Data Sciences & Business Analytics master's run by CentraleSupélec and ESSEC",
    },
    citation: {
      fr: [
        "Le CPES m'a apporté une vraie aisance et une forte capacité d'adaptation pour naviguer entre différents univers, que ce soit les sciences dures ou économiques et sociales, et ça m'a permis d'accéder à des opportunités que je n'aurais pas crues possibles si j'étais passée par une autre voie.",
      ],
      en: [
        'The CPES gave me real ease and a strong capacity to adapt, moving between different worlds, the hard sciences as much as economics and the social sciences, and it opened up opportunities I would not have thought possible had I taken another route.',
      ],
    },
  },
];
