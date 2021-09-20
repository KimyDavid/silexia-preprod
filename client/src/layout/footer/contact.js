import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import { API_POST } from '../../functions/apiRequest';

const Newsletter = () => {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [message, setMessage] = useState('');

    const submitForm = data => {
        API_POST('contact/newsletter', 'POST', data, false).then(result => setMessage('Votre souscription a été prise en compte.'))
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
            'required': "L'email est obligatoire"
        },
    ]

    return (
        <div className="subscribe-form bg-warning-soft p-5 rounded">
            <h5 className="mb-2 text-white">Newsletter</h5>
            <h6 className="text-light">Souscrivez à notre newsletter pour ne rien rater !</h6>
            <form id="contact-form" className="row" method="post" onSubmit={handleSubmit(submitForm)}>
                { message ? <div className="messages col-12">
                    <p className="valid message">{message}</p>
                </div> : '' }
                { fields.map((item, i) => {
                                return (
                                    <div key={i} className="form-group col-md-6">
                                        <input 
                                        {...register(item.name, {required: item.required})}
                                        id={`partner-${item.name}`} 
                                        type={item.type}
                                        className={`form-control ${errors[item.name] ? 'error' : ''}`}
                                        placeholder={item.label} />
                                        {errors[item.name] ? <span className="form-error error">{item.required}</span> : '' }
                                    </div>)
                        })}
                        
                <div className="d-flex justify-content-center col-12">
                    <button type="submit" className="btn btn-outline-light btn-block mb-2">Souscrire</button>
                </div>
            </form>
        </div>
        );
}

export default Newsletter;