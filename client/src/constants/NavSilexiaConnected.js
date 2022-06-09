/**
 *  Main Menu Json
 */
export default [
    {
        "menu_title": "Offres",
        "menu_subtitle": "Le numérique pour ...",
        "path": "/numerique",
        "type": "subMenu",
        "child_routes": [
           {
              "path": "/acquisition-clients",
              "menu_title": "Entrer en relation avec vos <strong>cibles clients</strong>",
           },
           {
              "path": "/relation-client",
              "menu_title": "Adopter une <strong>relation client</strong> phygitale",
           },
           {
              "path": "/automatisation",
              "menu_title": "<strong>Automatiser</strong> vos tâches à faible valeur ajoutée",
           },
           {
              "path": "/pilotage-entreprise",
              "menu_title": "Intégrer les <strong>outils de pilotage</strong> adaptés à votre organisation",
           },
           {
              "path": "/protection-donnees",
              "menu_title": "Assurer la <strong>protection de vos données</strong>",
           },
        ]
     },
     {
        "menu_title": "Partenaires",
        "menu_subtitle": "Un partenaire de confiance au service...",
        "path": "/",
        "type": "subMenu",
        "child_routes": [
           {
              "path": "/numerique",
              "menu_title": "Du développement des <strong>entreprises</strong> françaises",
           },
           {
              "path": "/avocats",
              "menu_title": "De la transformation du métier d'<strong>avocat</strong>",
           },
           {
              "path": "/associations",
              "menu_title": "Du rayonnement de votre <strong>association</strong>",
           },
        ]
     },
     {
        "menu_title": "À propos",
        "menu_subtitle": "Notre bureau de gestion de projets numériques",
        "path": "/",
        "type": "subMenu",
        "child_routes": [
           {
              "path": "/success-story",
              "menu_title": "A une <strong>histoire</strong> originale",
           },
           {
              "path": "/success-story#valeurs",
              "menu_title": "Engagé pour un numérique <strong>éthique</strong>",
           },
           {
              "path": "/reseau-partenaires",
              "menu_title": "Coordonne un <strong>réseau d'experts</strong> du numérique made in Europe",
           }
        ]
     },
     {
        "menu_title": "Services en ligne",
        "menu_subtitle": "Nos services en ligne",
        "path": "/",
        "type": "subMenu",
        "child_routes": [
           {
              "path": "https://outlook.office365.com/owa/calendar/Silexia@silexia.onmicrosoft.com/bookings/",
              "menu_title": "Prenez <strong>rendez-vous</strong> avec nous",
           },
           {
              "path": "/diagnostic",
              "menu_title": "Le <strong>diagnostic</strong> de votre organisation",
           },
           {
              "path": "/generateur-mentions-legales",
              "menu_title": "Le <strong>générateur de mentions légales</strong>",
           },
        ]
     },
   {
      "menu_title": "Mon compte",
      "path": "/",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/profile/details",
            "menu_title": "Mes informations",
         },
         {
            "path": "/profile/logout",
            "menu_title": "Se déconnecter",
         },
      ]
   }
]
