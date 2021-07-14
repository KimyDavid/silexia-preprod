import * as yup from 'yup';

function Answer(data) {
    this.id                 = data.id;
    this.label              = data.label
    this.order              = data.order
    this.flag               = data.flag
    this.score              = data.score
}

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


export { 
    Answer, createAnswerSchema, updateAnswerSchema
}
