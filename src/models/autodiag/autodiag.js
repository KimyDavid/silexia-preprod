import * as yup from 'yup';
import util from 'util';
import yup_test from '#models/utils/yup_test.js';
import { parseJSON } from '#utils/functions.js';

import { Category } from '#models/autodiag/category.js';

/*import apiController from '../controllers/api.controllers.js';

import { Answer, updateAnswerSchema, createAnswerSchema } from './answer.js';

yup_test.test({yup:yup, label:'exists', type:'number', _function:apiController.getItem, key:'id'})*/

function Result(data, extraData) {
    this.id                 = data.id;
    this.score 				= Math.round(data.score*100)/100
    this.tier              	= data.tier
    this.category           = data.category ? parseJSON(data.category) : []

    for(let i=0; i<this.category.length;i++){
        this.category[i].score = Math.round(this.category[i].score*100)/100
        this.category[i] = new Category(this.category[i])
    }
}

const autodiagSchema = yup.object({
    answers:yup.array().of(yup.number().positive()).required()
})


export { 
    Result, autodiagSchema
}