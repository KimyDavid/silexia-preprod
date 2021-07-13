import * as yup from 'yup';
import { parseJSON } from '#utils/functions.js';
import yup_test from '#models/utils/yup_test.js';

import imageController from '#controllers/utils/image.controllers.js';
import apiController from '#controllers/utils/api.controllers.js';

function Article(data, extraData) {
    this.id                 = data.id;
    this.title         		= data.title
    this.image          	= imageController.getImage("articles_" + data.id, data.version)
    this.text              	= data.text
}

yup_test.exists(yup, {table:'Articles', model:Article}, apiController.getItem)

const createArticleSchema = yup.object({
    title: yup.string().max(100).required(),
    text:yup.string().required(),
    image: yup_test.image(yup, true)
})


const updateArticleSchema = yup.object({
	id:yup.number().required().exists(),
    title: yup.string().max(100),
    text:yup.string(),
    image: yup_test.image(yup, false)
})

export { 
    Article, createArticleSchema, updateArticleSchema
}