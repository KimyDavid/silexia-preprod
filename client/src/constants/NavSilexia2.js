/**
 *  Main Menu Json
 */
export default [
   {
      "menu_title": "À propos",
      "path": "/about-us",
      "icon": "home",
   },
   {
      "menu_title": "Offres",
      "path": "/",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/offres",
            "menu_title": "Toutes les offres",
         },
         {
            "path": "/offres/acquisition-client",
            "menu_title": "Acquisition client",
         },
         {
            "path": "/offres/relation-client",
            "menu_title": "Relation client",
         },
         {
            "path": "/offres/gestion-d'organisation",
            "menu_title": "Gestion d'organisation",
         },
         {
            "path": "/offres/métiers",
            "menu_title": "Métiers",
         },
         {
            "path": "/offres/sécurité-et-conformité",
            "menu_title": "Sécurité et conformité",
         },
      ]
   },
   {
      "menu_title": "Réseau",
      "path": "/reseau",
      "icon": "home",
   },
   {
      "menu_title": "Blog",
      "path": "/blog",
      "icon": "home",
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
