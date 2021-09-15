import express from 'express';
import validateResourceMW from '#middleware/validateObject.middleware.js';
import mailController from '#controllers/utils/mail.controllers.js';

import { contactPartnerSchema, contactOffreSchema, contactNewsletterSchema } from '#models/contact/contact.js';

const router = express.Router();

router.route('/contact/partner')
  .post(validateResourceMW(contactPartnerSchema), function(req, res){
    mailController.sendEmailContactPartner(req.body, function(err, results){
      res.status(200).json(results)
    })
  })

router.route('/contact/offre')
  .post(validateResourceMW(contactOffreSchema), function(req, res){
    mailController.sendEmailContactOffre(req.body, function(err, results){
      res.status(200).json(results)
    })
  })

router.route('/contact/newsletter')
  .post(validateResourceMW(contactNewsletterSchema), function(req, res){
    mailController.sendEmailContactNewsletter(req.body, function(err, results){
      res.status(200).json(results)
    })
  })

export default router;