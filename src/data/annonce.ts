// Annonce affichée dans la bannière en haut de toutes les pages (AnnouncementBanner)
// et dans le hero de l'accueil. Elle disparaît d'elle-même après `fin`.
// Pour une nouvelle annonce : changer `id` (sinon les visiteurs qui ont fermé l'ancienne ne la verront pas).

export const annonce = {
  id: 'jpo-lipps-2026',
  /** Fin de l'événement (heure de Paris) : l'annonce n'est plus affichée après. */
  fin: '2026-12-12T13:00:00+01:00',
  lien: 'https://www.lipsp.fr/',
  fr: {
    texte:
      'La Journée Portes Ouvertes du Lycée International de Palaiseau Paris-Saclay (LIPPS) se déroulera le samedi 12 décembre 2026, de 9h à 13h.',
    court: 'Journée Portes Ouvertes du LIPPS',
    date: 'Samedi 12 décembre 2026, 9h-13h',
    cta: 'Site du lycée',
    fermer: "Fermer l'annonce",
  },
  en: {
    texte:
      'The Lycée International de Palaiseau Paris-Saclay (LIPPS) Open Day will take place on Saturday 12 December 2026, from 9 am to 1 pm.',
    court: 'LIPPS Open Day',
    date: 'Saturday 12 December 2026, 9 am-1 pm',
    cta: 'School website',
    fermer: 'Dismiss announcement',
  },
};

/** Vrai tant que l'événement n'est pas passé (évalué au build ; le navigateur revérifie). */
export const annonceActive = () => Date.now() < new Date(annonce.fin).getTime();
