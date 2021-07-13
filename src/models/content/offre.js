import * as yup from 'yup';
import { parseJSON } from '#utils/functions.js';
import yup_test from '#models/utils/yup_test.js';

import imageController from '#controllers/utils/image.controllers.js';
import apiController from '#controllers/utils/api.controllers.js';

function Offre(data, extraData) {
    this.id                 = data.id;
    this.title              = data.title
    this.image              = imageController.getImage("offres_" + data.id, data.version)
    this.text               = data.text
    this.abstract           = data.abstract
    this.order              = data.order
}

yup_test.exists(yup, {table:'Offres', model:Offre}, apiController.getItem)

const createOffreSchema = yup.object({
    title: yup.string().max(100).required(),
    text:yup.string().required(),
    abstract:yup.string(100).required(),
    order: yup.number().integer().positive().required(),
    image: yup_test.image(yup, true)
})


const updateOffreSchema = yup.object({
    id:yup.number().required().exists(),
    title: yup.string().max(100),
    abstract:yup.string(100),
    order: yup.number().integer().positive(),
    text:yup.string(),
    image: yup_test.image(yup, false)
})

export { 
    Offre, createOffreSchema, updateOffreSchema
}