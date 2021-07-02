import * as yup from 'yup';
import util from 'util';
import { parseJSON } from '../utils/functions.js';

import autodiagController from '../controllers/autodiag.controllers.js';


const asyncCategoryExists = util.promisify(autodiagController.getAutodiagCategory);

yup.addMethod(yup.number, 'category_exists', function (propertyName, message) {
  return this.test('category_exists', message, function (value) {
    return asyncCategoryExists({id:value})
            .then((results) => {
                if(!results || results.length === 0){
                    return false
                }else{
                    return true
                }
            })
            .catch((error) => {
                return false
            })
  });
});

const asyncQuestionExists = util.promisify(autodiagController.getAutodiagQuestions);

yup.addMethod(yup.number, 'question_exists', function (propertyName, message) {
  return this.test('question_exists', message, function (value) {
    return asyncQuestionExists({id:value})
            .then((results) => {
                if(!results || results.length === 0){
                    return false
                }else{
                    return true
                }
            })
            .catch((error) => {
                return false
            })
  });
});

function Category(data, extraData) {
    this.id                 = data.id;
    this.label              = data.label
    this.questions          = data.questions ? parseJSON(data.questions) : []

    for(let i=0; i<this.questions.length;i++){
        this.questions[i] = new Question(this.questions[i])
    }
}

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

function Answer(data, extraData) {
    this.id                 = data.id;
    this.label              = data.label
    this.order              = data.order
    this.flag               = data.flag
    this.score              = data.score
}

const createCategorySchema = yup.object({
    label: yup.string().max(255).required()
})

const updateCategorySchema = yup.object({
    id:yup.number().required().category_exists(),
    label: yup.string().max(255).required()
})



const createAnswerSchema = yup.object({
    label: yup.string().max(255).required(),
    order: yup.number().integer().positive().required(),
    score: yup.number().integer().positive().required()
})

const updateAnswerSchema = yup.object({
    id:yup.number().nullable().default(null),
    label: yup.string().max(255).required(),
    order: yup.number().integer().positive().required(),
    score: yup.number().integer().positive().required()
})


const createQuestionSchema = yup.object({
    label: yup.string().max(255).required(),
    order: yup.number().integer().positive().required(),
    id_category: yup.number().integer().positive().required().category_exists(),
    answers:yup.array().of(createAnswerSchema).required()
})

const updateQuestionSchema = yup.object({
    id:yup.number().required().question_exists(),
    label: yup.string().max(255).required(),
    order: yup.number().integer().positive().required(),
    id_category: yup.number().integer().positive().required().category_exists(),
    answers:yup.array().of(updateAnswerSchema).required()
})




const autodiagSchema = yup.object({
    answers:yup.array().of(yup.number().positive()).required()
})




export { 
    Category, createCategorySchema, updateCategorySchema,
    Question, createQuestionSchema, updateQuestionSchema,
    Answer, createAnswerSchema,
    autodiagSchema
}