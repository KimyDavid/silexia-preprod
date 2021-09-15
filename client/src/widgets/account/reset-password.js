import React, { useState } from 'react';
import Constants from '../../constants/Config';
import { Link } from 'react-router-dom';

const ResetPasswordForm = ({userID}) => {
    
    const [password, setPassword] = useState();
    const [verifPassword, setVerifPassword] = useState();
    const [message, setMessage] = useState();

    function signIn(e) {
        e.preventDefault();
        if (password !== verifPassword) {
            setMessage('Les mots de passe ne sont pas identiques');
        } else {
            fetch(`${Constants.api_url}/users/${userID}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    password: password
                }),
                headers: { 'Content-Type': 'application/json' },
              })
                .then(res => res.json())
                .then(result => {
                    if (result.error) {
                        setMessage(result.details);
                    } else {
                        window.location.href = `${window.location.origin}/profile`;
                    }
                })
        }
    }

    return (
        <div>
            <form id="contact-form" onSubmit={signIn}>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input id="form_name" type="password" name="password" className="form-control" placeholder="Mot de passe" required="required" onChange={e => setPassword(e.target.value)}/>
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                        <label>Confirmation mot de passe</label>
                        <input id="form_name" type="password" name="confirm_password" className="form-control" placeholder="Confirmation mot de passe" required="required" onChange={e => setVerifPassword(e.target.value)}/>
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

export default ResetPasswordForm;