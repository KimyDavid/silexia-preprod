import * as yup from 'yup'
import { parseJSON } from '../utils/functions.js';

function List(data, extraData) {
    this.id                 = data.id;
    this.label         		= data.label
    this.order         		= data.order
}

const listSchema = yup.object({
    label: yup.string().max(255).required(),
    order: yup.number().integer().positive()
})

export { 
    List, listSchema
}