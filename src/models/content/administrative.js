import * as yup from 'yup';
import { parseJSON } from '#utils/functions.js';
import yup_test from '#models/utils/yup_test.js';

function Administrative(data, extraData) {
    this.id                 = data.id;
    this.type         		= data.type
    this.text              	= data.text
}

export { 
    Administrative
}