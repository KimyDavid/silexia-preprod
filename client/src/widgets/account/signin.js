import React, { useState } from 'react';
import Constants from '../../constants/Config';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const SigninForm = ({setToken}) => {
    const { t } = useTranslation('error');
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();

    function signIn(e) {
        e.preventDefault();
        fetch(`${Constants.api_url}/login`, {
            method: 'POST',
            body: JSON.stringify({
                password: password,
                email: email
            }),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(result => {
                if (result.error) {
                    setMessage(t(result.details ?? result.error));
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
                        <input id="form_name" type="text" name="email" className="form-control" placeholder="Email" required="required" data-error="Email is required." onChange={e => setEmail(e.target.value)}/>
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input id="form_password" type="password" name="password" className="form-control" placeholder="Mot de passe" required="required" data-error="Password is required." onChange={e => setPassword(e.target.value)} />
                        <div className="help-block with-errors" />
                    </div>
                    { message ? <div className="text-center message error">{message}</div> : '' }
                    <div className="form-group mt-4 mb-5">
                        <div className="remember-checkbox d-flex align-items-center justify-content-between">
                            <Link to="/forgot-password">Mot de passe oublié ?</Link>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
            </form>
            <div className="mt-4">
                <span className="text-muted mr-1">Vous n'avez pas encore de compte ?</span>
                <Link to="/autodiag">Répondre à l'autodiag</Link>
            </div>
        </div>
    );
}

export default SigninForm;