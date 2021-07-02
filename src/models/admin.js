import * as yup from 'yup'
import { parseJSON } from '../utils/functions.js';

function Admin(data, extraData) {
    this.id                 = data.id;
    this.first_name         = data.first_name
    this.last_name          = data.last_name
    this.email              = data.email
    this.admin              = true
}

const adminLoginSchema = yup.object({
    email: yup.string().email().required(),
    password:yup.string().required()
})

export { 
    Admin, adminLoginSchema
}