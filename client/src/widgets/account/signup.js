import React, { useEffect, useState } from 'react';
import Constants from '../../constants/Config';
import {useForm} from 'react-hook-form';
import { API_POST } from '../../functions/apiRequest';

const SignUpForm = ({profile = null}) => {
  const {handleSubmit, formState: { errors }, register, setValue} = useForm();

  const [message, setMessage] = useState();

  const submitForm = data => {

    if (validatePassword() && isConsent()) {
      if (!profile.email) {
        API_POST('subscribe', 'POST', data)
          .then(response => {
            if (response.error) {
              setMessage(response.details ?? response.error.message);
            } else {
              setMessage("Inscription réussie ! Merci de confirmer votre compte grâce à l'email reçu dans votre boite mail.");
              setTimeout(() => {
                window.location.href = `${window.location.origin}/profile`;
              }, 1500);
            }
          });
      } else {
        if (data['email'] === profile.email) {
          delete data["email"];
        }
        delete data["password"];

        API_POST(`users/${profile.id}`, 'PATCH', data)
          .then(response => {
            if (response.error) {
              setMessage(response.details ?? response.error.message);
            } else {
              setMessage("Votre compte a bien été mis à jour.");
              setTimeout(() => {
                window.location.href = `${window.location.origin}/profile/details`;
              }, 1500);
            }
          });
      }
    }
  }

    function validatePassword() {
        let valid = true;
        const password = document.querySelector('.register-form [name="password"]');
        const passwordConfirmation = document.querySelector('.register-form [name="password_validation"]');
        if (password.value !== passwordConfirmation.value) {
        valid = false;
        document.querySelector('.form-error.password').classList.remove('d-none');
        } else {
        document.querySelector('.form-error.password').classList.add('d-none');
        }
        return valid;
    }

    function isConsent() {
        let valid = true;
        const consent = document.querySelector('#consent');
        if (consent) {
        if (!consent.checked) {
            valid = false;
            document.querySelector('.form-error.consent').classList.remove('d-none');
        } else {
            document.querySelector('.form-error.consent').classList.add('d-none');
        }
        }
        return valid;
    }
  
        return (
            <div className="row">
            <div className="col-12 col-lg-8 ml-auto mr-auto">
              <div className="register-form text-center">
                <form id="contact-form" method="post" onSubmit={handleSubmit(submitForm)}>
                  { message ? <div className="messages">
                    <p className="error message">{message}</p>
                  </div> : '' }
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Prénom</label>
                        <input 
                          defaultValue={profile.first_name ? profile.first_name : ''}
                          {...register('first_name', {required: 'Le prénom est obligatoire.'})}
                          id="form_name" 
                          type="text"
                          className={`form-control ${errors['first_name'] ? 'error' : ''}`}
                          placeholder="Prénom" 
                          required="required" />
                          {errors['first_name'] ? <span className="form-error error">Le prénom est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Entreprise</label>
                        <input 
                          defaultValue={profile.company ? profile.company : ''}
                          id="form_name"
                          type="text"
                          className={`form-control ${errors['company'] ? 'error' : ''}`}
                          {...register('company', {required: "Le nom de l'entreprise est obligatoire."})}
                          placeholder="Nom de l'entreprise"
                          required="required" />
                          {errors['company'] ? <span className="form-error error">L'entreprise est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          defaultValue={profile.email ? profile.email : ''}
                          id="form_name"
                          {...register('email', {required: "L'email est obligatoire."})}
                          type="text"
                          className={`form-control ${errors['email'] ? 'error' : ''}`}
                          placeholder="Email"
                          required="required" />
                          {errors['email'] ? <span className="form-error error">L'email est obligatoire.</span> : '' }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Mot de passe</label>
                        <input id="form_password" type="password" className="form-control" placeholder="Mot de passe" required="required" {...register('password', {required: "Le mot de passe est obligatoire."})}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Confirmation mot de passe</label>
                        <input id="form_password1" type="password" name="password_validation" className="form-control" placeholder="Confirmation mot de passe" required="required" />
                        <div className="error password form-error d-none">Les mots de passe ne sont pas identiques.</div>
                      </div>
                    </div>
                  </div>
                  { profile.email ? '' : 
                  <div className="row mt-5">
                    <div className="col-md-12">
                      <div className="remember-checkbox clearfix mb-5">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="consent" />
                          <label className="custom-control-label" htmlFor="consent">J'accepte les conditions d'utilisation et la politique de confidentialité.</label>
                        <div className="error consent form-error d-none">Ce champ est obligatoire.</div>
                        </div>
                      </div> 
                    </div>
                  </div>
                  }
                  <div className="row">
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary">{profile.email ? 'Mettre à jour' : 'Créer' } mon compte</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
     
        );
}

export default SignUpForm;