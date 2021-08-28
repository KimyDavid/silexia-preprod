import React from 'react'
import {
  FiActivity,
  FiCompass,
  FiHelpCircle,
} from 'react-icons/fi'

const initialState = [
  {
    title: 'Tableau de bord',
    items: [
      {
        url: '/admin',
        icon: <FiCompass size={20} />,
        title: 'Dashboard',
        items: []
  },
    ]
  },
  {
    title: 'Contenu du site',
    items: [
      {
        url: '/admin/pages',
        icon: <FiCompass size={20} />,
        title: 'Pages',
        items: []
      },
      {
        url: '/admin/articles',
        icon: <FiCompass size={20} />,
        title: 'Articles',
        items: []
      },
      {
        url: '/admin/offres',
        icon: <FiCompass size={20} />,
        title: 'Offres',
        items: []
      },
      {
        url: '/admin/sectors',
        icon: <FiCompass size={20} />,
        title: 'Secteurs d\'entreprise',
        items: []
      },
      {
        url: '/admin/sizes',
        icon: <FiCompass size={20} />,
        title: 'Tailles d\'entreprise',
        items: []
      },
      {
        url: '/admin/types',
        icon: <FiCompass size={20} />,
        title: 'Types d\'entreprise',
        items: []
      },
      {
        url: '/admin/partners_type',
        icon: <FiCompass size={20} />,
        title: 'Types de partenaires',
        items: []
      },
      {
        url: '/admin/partners',
        icon: <FiCompass size={20} />,
        title: 'Partenaires',
        items: []
      },
    ]
  },
  {
    title: 'Gestion des diag',
    items: [
      {
        url: '/admin/autodiag/categories',
        icon: <FiCompass size={20} />,
        title: 'Catégories',
        items: []
      },
      {
        url: '/admin/autodiag/questions',
        icon: <FiCompass size={20} />,
        title: 'Questions',
        items: []
      },
    ]
  },
  {
    title: 'Données utilisateurs',
    items: [
      {
        url: '/admin/users',
        icon: <FiCompass size={20} />,
        title: 'Utilisateurs',
        items: []
      },
    ]
  },
]

export default function navigation(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
