import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import { API_POST } from '../../../functions/apiRequest';

const ContactOffer = () => {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [message, setMessage] = useState('');

    const submitForm = data => {
        API_POST('contact/offre', 'POST', data, false).then(result => setMessage('Votre demande a bien été envoyé.'))
    }

    const fields = [
        {
            'name': 'prenom',
            'type': 'text',
            'label': 'Prénom',
            'required': 'Votre prénom est obligatoire'
        },
        {
            'name': 'nom',
            'type': 'text',
            'label': 'Nom',
            'required': 'Votre nom est obligatoire'
        },
        {
            'name': 'organisation',
            'type': 'text',
            'label': 'Organisation',
            'required': 'Le nom de votre organisation est obligatoire'
        },
        {
            'name': 'email',
            'type': 'email',
            'label': 'Email',
            'required': "l'email est obligatoire",
        },
        {
            'name': 'message',
            'type': 'textarea',
            'label': 'Message',
            'required': 'Le message est obligatoire'
        },
        {
            'name': 'offre',
            'type': 'text',
            'label': 'Offre',
            'required': "L'offre est obligatoire",
            'value': 'Formulaire homepage'
        },
    ]

        return (
            <div className="row justify-content-center text-left shadow px-5 py-5 px-xl-10">
                <div className="col-12 ">
                    <h3 className="h4 text-primary font-w-5">Parlez nous de vous...</h3>
                    <p className="text-muted mb-5">... pour planifier une consultation innovation de 20 minutes autour de vos enjeux numériques.</p>
                    <form id="contact-form" className="row" method="post" onSubmit={handleSubmit(submitForm)}>
                        { message ? <div className="messages col-12">
                            <p className="valid message">{message}</p>
                        </div> : '' }
                        { fields.map((item, i) => { 
                            if (item.type === 'textarea') {
                                return (
                                    <div key={i} className="form-group col-12">
                                        <textarea
                                        {...register(item.name, {required: item.required})}
                                        id={`partner-${item.name}`} 
                                        type={item.type}
                                        className={`form-control ${errors[item.name] ? 'error' : ''}`}
                                        placeholder={item.label} >
                                        </textarea>
                                        {errors[item.name] ? <span className="form-error error">{item.required}</span> : '' }
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={i} className="form-group col-md-6">
                                        <input 
                                        {...register(item.name, {required: item.required})}
                                        id={`partner-${item.name}`} 
                                        defaultValue={item.value ?? ''}
                                        type={item.type}
                                        className={`form-control ${errors[item.name] ? 'error' : ''} ${item.value ? 'd-none': ''}`}
                                        placeholder={item.label} />
                                        {errors[item.name] ? <span className="form-error error">{item.required}</span> : '' }
                                    </div>)
                            }
                        })}
                        <div className="d-flex justify-content-center col-12">
                            <button type="submit" className="btn btn-primary">Envoyer ma demande</button>
                        </div>
                    </form>
                </div>
            </div>
        );
}

export default ContactOffer;