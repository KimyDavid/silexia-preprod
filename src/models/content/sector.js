import * as yup from 'yup';
import { parseJSON } from '#utils/functions.js';
import yup_test from '#models/utils/yup_test.js';

import apiController from '#controllers/utils/api.controllers.js';

function Sector(data, extraData) {
    this.id                 = data.id;
    this.label              = data.label
}

yup_test.exists(yup, {table:'Sectors', model:Sector}, apiController.getItem)

const createSectorSchema = yup.object({
    label: yup.string().max(255).required()
})


const updateSectorSchema = yup.object({
    id:yup.number().required().exists(),
    label: yup.string().max(255)
})

export { 
    Sector, createSectorSchema, updateSectorSchema
}