/**
 *  Main Menu Json
 */
export default [
   {
      "menu_title": "L'agence",
      "path": "/",
   },
   {
      "menu_title": "Blog",
      "path": "/blog",
   },
   {
      "menu_title": "Mon compte",
      "path": "/",
      "type": "subMenu",
      "child_routes": [
         {
            "path": "/profile",
            "menu_title": "Mes informations",
         },
         {
            "path": "/profile/logout",
            "menu_title": "Se déconnecter",
         },
      ]
   }
]
