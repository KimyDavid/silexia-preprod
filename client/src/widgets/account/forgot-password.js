import React, { useState } from 'react';
import Constants from '../../constants/Config';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = ({setToken}) => {
    
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    function signIn(e) {
        e.preventDefault();
        fetch(`${Constants.api_url}/forgot_password`, {
            method: 'POST',
            body: JSON.stringify({
                email: email
            }),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(result => {
                if (result.error) {
                    setMessage(result.details);
                } else if (setToken) {
                    setToken(result);
                }
            })
    }

    return (
        <div>
            <form id="contact-form" onSubmit={signIn}>
                    <div className="form-group">
                        <label>Adresse email</label>
                        <input id="form_name" type="text" name="email" className="form-control" placeholder="Email" required="required" data-error="Email is required." onChange={e => setEmail(e.target.value)} />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="text-center error mb-3">{message}</div>
                    <button type="submit" className="btn btn-primary btn-block">Réinitialiser mon mot de passe</button>
            </form>
            <div className="mt-4">
                <Link to="/profile">Retour à la connexion</Link>
            </div>
        </div>
    );
}

export default ForgotPasswordForm;