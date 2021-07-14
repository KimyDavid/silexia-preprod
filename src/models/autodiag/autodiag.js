import * as yup from 'yup';
import { parseJSON } from '#utils/functions.js';

import { Category } from '#models/autodiag/category.js';

function Result(data) {
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