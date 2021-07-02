import * as yup from 'yup'
import { parseJSON } from '../utils/functions.js';

import imageController from '../controllers/image.controllers.js';

function Article(data, extraData) {
    this.id                 = data.id;
    this.title         		= data.title
    this.image          	= imageController.getImage("article_" + data.id, data.version)
    this.text              	= data.text
}

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

const createArticleSchema = yup.object({
    title: yup.string().max(100).required(),
    text:yup.string().required(),
    image: yup
        .mixed()
        .required("An image is required")
        .test(
          "fileSize",
          "File too large",
          value => value && value.size <= FILE_SIZE
        )
        .test(
          "fileFormat",
          "Unsupported Format",
          value => value && SUPPORTED_FORMATS.includes(value.mimetype)
        )
})

export { 
    Article, createArticleSchema
}