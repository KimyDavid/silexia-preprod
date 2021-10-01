import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_POST } from '../../functions/apiRequest';
import useToken from '../../functions/useTokenAccount';

const ResetPasswordForm = ({profile, resetKey}) => {
    const { token, setToken } = useToken();
    
    const [password, setPassword] = useState();
    const [verifPassword, setVerifPassword] = useState();
    const [message, setMessage] = useState();

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (password !== verifPassword) {
            setMessage('Les mots de passe ne sont pas identiques');
        } else {
            API_POST(`users/${profile.id}`, 'PATCH', {'key': resetKey, 'password': password}, false).then(result => {
                console.log(result);
                if (result.error) {
                    setMessage(result.details);
                } else {
                    setMessage('Votre mot de passe a été mis à jour.');
                    setTimeout(() => {
                        window.location.href = `${window.location.origin}/profile`;
                    }, 500);
                }
            });
        }
    }

    return (
        <div>
            <form id="contact-form" onSubmit={handleResetPassword}>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input id="form_password" type="password" name="password" className="form-control" placeholder="Mot de passe" required="required" onChange={e => setPassword(e.target.value)}/>
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                        <label>Confirmation mot de passe</label>
                        <input id="form_password_confirm" type="password" name="confirm_password" className="form-control" placeholder="Confirmation mot de passe" required="required" onChange={e => setVerifPassword(e.target.value)}/>
                        <div className="help-block with-errors" />
                    </div>
                    {message ? <div className="text-center error mb-3">{message}</div> : '' }
                    <button type="submit" className="btn btn-primary btn-block">Modifier mon mot de passe</button>
            </form>
            <div className="mt-4">
                <Link to="/profile">Retour à la connexion</Link>
            </div>
        </div>
    );
}

export default ResetPasswordForm;