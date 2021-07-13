import * as yup from 'yup';
import util from 'util';
import yup_test from '#models/utils/yup_test.js';
import { parseJSON } from '#utils/functions.js';

import apiController from '#controllers/utils/api.controllers.js';

import { Answer, updateAnswerSchema, createAnswerSchema } from '#models/autodiag/answer.js';

yup_test.test({yup:yup, label:'exists', type:'number', _function:apiController.getItem, key:'id'})

function Question(data, extraData) {
    this.id                 = data.id;
    this.label              = data.label
    this.order              = data.order
    this.category           = data.category
    this.answers            = data.answers ? parseJSON(data.answers) : []

    for(let i=0; i<this.answers.length;i++){
        this.answers[i] = new Answer(this.answers[i])
    }
}

const createQuestionSchema = yup.object({
    label: yup.string().max(255).required(),
    order: yup.number().integer().positive().required(),
    id_category: yup.number().integer().positive().required().exists('Autodiag_Categories'),
    answers:yup.array().of(createAnswerSchema).required()
})

const updateQuestionSchema = yup.object({
    id:yup.number().required().exists('Autodiag_Questions'),
    label: yup.string().max(255).required(),
    order: yup.number().integer().positive().required(),
    id_category: yup.number().integer().positive().required().exists('Autodiag_Categories'),
    answers:yup.array().of(updateAnswerSchema).required()
})


export { 
    Question, createQuestionSchema, updateQuestionSchema
}