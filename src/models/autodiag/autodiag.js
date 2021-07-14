import * as yup from 'yup';
import yup_test from '#models/utils/yup_test.js';

import apiController from '#controllers/utils/api.controllers.js';

yup_test.test({yup:yup, label:'exists', type:'number', _function:apiController.getItem, key:'id'})

const autodiagSchema = yup.object({
    answers:yup.array().of(yup.number().required().exists('Autodiag_Answers'))
})

export { 
    autodiagSchema
}