import React, { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { API_GET, API_POST } from '../../functions/apiRequest';

const ContactPartner = () => {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [message, setMessage] = useState('');
    const [partnerTypes, setPartnerTypes] = useState();

    useEffect(() => {
        API_GET('partners_type').then((result) => {
            let types = []
            result.forEach((item, i) => {
                types.push({
                    'label': item.label,
                    'value': item.value
                });
            });
            setPartnerTypes(types);
        });
    }, []);

    const submitForm = data => {
        API_POST('contact/partner', 'POST', data, false).then(result => setMessage('Votre demande a bien été envoyé.'))
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
            'name': 'partner_type',
            'type': 'select',
            'label': 'Type de partenaire',
            'required': 'Le message est obligatoire',
            'choices': partnerTypes
        },
        {
            'name': 'message',
            'type': 'textarea',
            'label': 'Message',
            'required': 'Le message est obligatoire'
        },
    ]

        return (
            <div className="row justify-content-center text-center">
                <div className="col-12 col-lg-6">
                    <form id="contact-form" className="row" method="post" onSubmit={handleSubmit(submitForm)}>
                        { message ? <div className="messages col-12">
                            <p className="valid message">{message}</p>
                        </div> : '' }
                        { fields.map((item, i) => { 
                            if (item.type === 'text') {
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
                            } else if (item.type === 'select') {
                                return (
                                    <div key={i} className="form-group col-md-6">
                                        <select
                                        className={`form-control ${errors[item.name] ? 'error' : ''}`}
                                        {...register(item.name, {required: item.required})}>
                                            <option>{item.label}</option>
                                            { item.choices ? item.choices.map((item, j) => 
                                                <option key={j} value={item.value}>{item.label}</option>
                                            ) : '' }
                                        </select>
                                        {errors[item.name] ? <span className="form-error error">{item.required}</span> : '' }
                                    </div>
                                )
                            } else if (item.type === 'textarea') {
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

export default ContactPartner;