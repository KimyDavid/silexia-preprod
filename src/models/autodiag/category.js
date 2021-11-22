import * as yup from 'yup';
import yup_test from '#models/utils/yup_test.js';
import { parseJSON } from '#utils/functions.js';

import apiController from '#controllers/utils/api.controllers.js';

import { Question } from '#models/autodiag/question.js';

yup_test.test({yup:yup, label:'exists', type:'number', _function:apiController.getItem, key:'id'})


function Tier(data) {
    this.id                 = data.id;
    this.text               = data.text
    this.order              = data.order
}


function Category(data, extraData) {
    this.id                 = data.id;
    this.label              = data.label
    this.description        = data.description
    this.order              = data.order

    if(extraData && extraData.autodiag){
        this.questions          = data.questions ? parseJSON(data.questions) : []
        for(let i=0; i<this.questions.length;i++){
            this.questions[i] = new Question(this.questions[i])
        }
    }else if(extraData && extraData.results){
        this.score_user         = data.score_user || 0
        this.score_total        = data.score_total
        this.answers            = parseJSON(data.answers) || []
        this.flags              = parseJSON(data.flags) || []
        this.flags = this.flags.map((item) => item.flag)
        this.flags = this.flags.filter((item) => item && item.length>0)
        
        let tiers = parseJSON(data.tiers)
        let ind   = Math.floor(data.score_user/data.score_total*tiers.length)
        this.tier               = tiers[ind === tiers.length ? ind - 1 : ind]

    }else{
        this.tiers              = data.tiers ? parseJSON(data.tiers) : []
        for(let i=0; i<this.tiers.length;i++){
            this.tiers[i] = new Tier(this.tiers[i])
        }
    }
}

const TierSchema = yup.object({
    id:yup.number().integer().positive(),
    text: yup.string().required(),
    order:yup.number().integer().positive().required()
})

const createCategorySchema = yup.object({
    label: yup.string().max(255).required(),
    description: yup.string().max(255).required(),
    tiers:yup.array().of(TierSchema).required(),
    order: yup.number().integer().positive().required()
})

const updateCategorySchema = yup.object({
    id:yup.number().required().exists('Autodiag_Categories'),
    label: yup.string().max(255).required(),
    description: yup.string().max(255).required(),
    tiers:yup.array().of(TierSchema).required(),
    order: yup.number().integer().positive().required()
})


export { 
    Category, createCategorySchema, updateCategorySchema, 
    Tier, TierSchema
}