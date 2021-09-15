import * as yup from 'yup';
import yup_test from '#models/utils/yup_test.js';

import apiController from '#controllers/utils/api.controllers.js';

//yup_test.test({yup:yup, label:'partner_type', type:'number', _function:apiController.getItem, key:'id'})

const contactPartnerSchema = yup.object({
    prenom: yup.string().required(),
    nom:yup.string().required(),
    organisation:yup.string().required(),
    partner_type:yup.string().required(),
    message: yup.string(),
})

const contactNewsletterSchema = yup.object({
  prenom: yup.string().required(),
  nom:yup.string().required(),
  email: yup.string().email().required(),
  organisation:yup.string(),
})

const contactOffreSchema = yup.object({
  prenom: yup.string().required(),
  nom:yup.string().required(),
  email: yup.string().email().required(),
  organisation:yup.string().required(),
  message: yup.string(),
  offre: yup.string(),
})

export { 
  contactPartnerSchema,
  contactNewsletterSchema,
  contactOffreSchema,
}