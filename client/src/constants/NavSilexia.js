/**
 *  Main Menu Json
 */
export default [
   {
      "menu_title": "À propos",
      "path": "/about-us",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/about-us",
            "menu_title": "Qui sommes-nous ?",
         },
         {
            "path": "/partners",
            "menu_title": "Notre réseau de collaborateurs et partenaires",
         },
      ]
   },
   {
      "menu_title": "Nos offres",
      "path": "/",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/offres",
            "menu_title": "Toutes nos offres",
         },
         {
            "path": "/offres/acquisition-client",
            "menu_title": "Acquisition client",
         },
         {
            "path": "/offres/expérience-et-parcours-client",
            "menu_title": "Expérience et parcours client",
         },
         {
            "path": "/offres/gestion-d'organisation",
            "menu_title": "Gestion d'organisation",
         },
         {
            "path": "/offres/digitalisation-des-métiers",
            "menu_title": "Digitalisation des métiers",
         },
         {
            "path": "/offres/sécurité-et-conformité",
            "menu_title": "Sécurité et conformité",
         },
      ]
   },
   {
      "menu_title": "Nos clients",
      "path": "/",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/offres",
            "menu_title": "Entreprise",
         },
         {
            "path": "/client/associations",
            "menu_title": "Associations",
         },
         {
            "path": "/client/avocats",
            "menu_title": "Avocats",
         }
      ]
   },
   {
      "menu_title": "Outils en ligne",
      "path": "/",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/diagnostic",
            "menu_title": "Le diagnostic",
         },
         {
            "path": "/generateur-mentions-legales",
            "menu_title": "Le générateur de mentions légales",
         },
      ]
   },
   {
      "menu_title": "Prendre rendez-vous",
      "path": "https://outlook.office365.com/owa/calendar/Silexia@silexia.onmicrosoft.com/bookings/"
   },
   {
      "menu_title": "Se connecter",
      "path": "/profile",
      "modal": "login",
   }
]
