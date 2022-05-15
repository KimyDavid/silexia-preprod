import * as yup from 'yup';
import { parseJSON } from '#utils/functions.js';
import yup_test from '#models/utils/yup_test.js';

import imageController from '#controllers/utils/image.controllers.js';
import apiController from '#controllers/utils/api.controllers.js';

function Partner(data) {
    this.id                 = data.id;
    this.name               = data.name
    this.image              = data.version ? imageController.getImage("partners_" + data.id, data.version) : null
    this.url                = data.url
    this.type               = data.partner_type
    this.abstract           = data.abstract
    this.text               = data.text
    this.order              = data.order
    this.page               = data.page
}

function PartnerType(data) {
    this.id                 = data.id;
    this.label              = data.label;
    this.description        = data.description;

    if(data.partners){
        this.partners           = data.partners ? parseJSON(data.partners) : []

        for(let i=0; i<this.partners.length;i++){
            this.partners[i] = new Partner(this.partners[i])
        }
    }

    this.order              = data.order
}


yup_test.test({yup:yup, label:'exists', type:'number', _function:apiController.getItem, key:'id'})

const createPartnerSchema = yup.object({
    name: yup.string().max(100).required(),
    text:yup.string().required(),
    image: yup_test.image(yup, true),
    url:yup.string().url(),
    abstract:yup.string().required(),
    order: yup.number().integer().positive().required(),
    partner_type: yup.number().required().exists('Partners_Type'),
    page: yup.string(),
})


const updatePartnerSchema = yup.object({
    id:yup.number().required().exists('Partners'),
    name: yup.string().max(100),
    text:yup.string(),
    image: yup_test.image(yup),
    url:yup.string().url(),
    abstract:yup.string(),
    order: yup.number().integer().positive(),
    partner_type: yup.number().exists('Partners_Type'),
    page: yup.string(),
})


const createPartnerTypeSchema = yup.object({
    label: yup.string().max(100).required(),
    description: yup.string().required(),
    order: yup.number().integer().positive().required()
})


const updatePartnerTypeSchema = yup.object({
    id:yup.number().required().exists('Partners_Type'),
    label: yup.string().max(100),
    description: yup.string().required(),
    order: yup.number().integer().positive().required()
})

export { 
    Partner, createPartnerSchema, updatePartnerSchema,
    PartnerType, createPartnerTypeSchema, updatePartnerTypeSchema
}