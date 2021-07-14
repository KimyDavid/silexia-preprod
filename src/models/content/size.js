import * as yup from 'yup';
import yup_test from '#models/utils/yup_test.js';

import apiController from '#controllers/utils/api.controllers.js';

function Size(data) {
    this.id                 = data.id;
    this.label              = data.label
    this.order              = data.order
}

yup_test.exists(yup, {table:'Sizes', model:Size}, apiController.getItem)

const createSizeSchema = yup.object({
    label: yup.string().max(255).required(),
    order: yup.number().integer().positive().required()
})


const updateSizeSchema = yup.object({
    id:yup.number().required().exists(),
    label: yup.string().max(255),
    order: yup.number().integer().positive().required()
})

export { 
    Size, createSizeSchema, updateSizeSchema
}