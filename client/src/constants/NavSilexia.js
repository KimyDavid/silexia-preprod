/**
 *  Main Menu Json
 */
export default [
   {
      "menu_title": "Ce que nous faisons",
      "path": "/numerique",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/acquisition-clients",
            "menu_title": "Entrer en relation avec vos cibles clients",
         },
         {
            "path": "/relation-client",
            "menu_title": "Fluidifier votre relation client",
         },
         {
            "path": "/automatisation",
            "menu_title": "Automatiser vos tâches à faible valeur ajoutée",
         },
         {
            "path": "/pilotage-entreprise",
            "menu_title": "Optimiser votre pilotage d'entreprise",
         },
         {
            "path": "/protection-donnees",
            "menu_title": "Assurer la protection de vos données",
         },
      ]
   },
   {
      "menu_title": "Pour qui",
      "path": "/",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/numerique",
            "menu_title": "TPE, PME, start-up",
         },
         {
            "path": "/avocats",
            "menu_title": "Avocats, cabinets et DPO",
         },
         {
            "path": "/associations",
            "menu_title": "Entreprises de l'ESS, ONG et associations",
         },
      ]
   },
   {
      "menu_title": "Notre histoire",
      "path": "/",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/success-story",
            "menu_title": "Un parcours original",
         },
         {
            "path": "/success-story#valeurs",
            "menu_title": "Engagé pour un numérique éthique",
         },
         {
            "path": "/reseau-partenaires",
            "menu_title": "Un réseau et de tech et d'experts made in Europe",
         }
      ]
   },
   {
      "menu_title": "Nos services en ligne",
      "path": "/",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "https://outlook.office365.com/owa/calendar/Silexia@silexia.onmicrosoft.com/bookings/",
            "menu_title": "Prenez rendez-vous avec nous",
         },
         {
            "path": "/diagnostic",
            "menu_title": "Le diagnostic de votre organisation",
         },
         {
            "path": "/generateur-mentions-legales",
            "menu_title": "Le générateur de mentions légales",
         },
      ]
   },
   {
      "menu_title": "Connexion",
      "path": "/profile",
      "modal": "login",
   }
]
