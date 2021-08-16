import React, { useEffect, useState } from 'react';
import Constants from '../../constants/Config';
import {useForm} from 'react-hook-form';

const SignUpForm = ({profile = null}) => {
  const {handleSubmit, errors, register} = useForm();

  const [sectors, setSectors] = useState([]);
  const [types, setTypes] = useState([]);
  const [sizes, setSizes] = useState([]);

  const submitForm = data => {
    console.log(JSON.stringify(data));
    if (validatePassword()) {
      if (profile) {
        fetch(`${Constants.api_url}/users/${profile.id}`,
            {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            },
          )
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
            },
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )
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

  useEffect(() => {
    fetch(`${Constants.api_url}/sectors`)
      .then(res => res.json())
      .then(
        (result) => {
          setSectors(result);
        },
      )
    
    fetch(`${Constants.api_url}/types`)
      .then(res => res.json())
      .then(
        (result) => {
          setTypes(result);
        },
      )
      
    fetch(`${Constants.api_url}/sizes`)
      .then(res => res.json())
      .then(
        (result) => {
          setSizes(result);
        },
      )
  }, []);
  
        return (
            <div className="row">
            <div className="col-lg-8 col-md-10 ml-auto mr-auto">
              <div className="register-form text-center">
                <form id="contact-form" method="post" onSubmit={handleSubmit(submitForm)}>
                  <div className="messages" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Prénom</label>
                        <input 
                          defaultValue={profile ? profile.first_name : ''} 
                          id="form_name" 
                          type="text" 
                          name="first_name" 
                          className={`form-control ${errors['first_name'] ? 'error' : ''}`}
                          placeholder="Prénom" 
                          required="required"
                          ref={register({required: 'Le prénom est obligatoire.'})} />
                          {errors['first_name'] ? <span className="form-error error">Le prénom est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Nom</label>
                        <input 
                          defaultValue={profile ? profile.last_name : ''} 
                          id="form_name" 
                          type="text" 
                          name="last_name" 
                          className={`form-control ${errors['last_name'] ? 'error' : ''}`}
                          placeholder="Nom" 
                          required="required" 
                          ref={register({required: 'Le nom est obligatoire.'})} />
                          {errors['last_name'] ? <span className="form-error error">Le nom est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          defaultValue={profile ? profile.email : ''}
                          id="form_name"
                          type="text"
                          name="email"
                          className={`form-control ${errors['email'] ? 'error' : ''}`}
                          placeholder="Email"
                          required="required"
                          ref={register({required: "L'email est obligatoire."})} />
                          {errors['email'] ? <span className="form-error error">L'email est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Téléphone</label>
                        <input
                          defaultValue={profile ? profile.phone : ''}
                          id="form_name"
                          type="text"
                          name="phone"
                          className={`form-control ${errors['phone'] ? 'error' : ''}`}
                          placeholder="Téléphone"
                          required="required"
                          ref={register({required: 'Le téléphone est obligatoire.'})} />
                          {errors['phone'] ? <span className="form-error error">Le téléphone est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Fonction</label>
                        <input
                          defaultValue={profile ? profile.function : ''}
                          id="form_name"
                          type="text"
                          name="function"
                          className={`form-control ${errors['function'] ? 'error' : ''}`}
                          placeholder="Fonction"
                          required="required"
                          ref={register({required: 'La fonction est obligatoire.'})} />
                          {errors['function'] ? <span className="form-error error">La fonction est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Entreprise</label>
                        <input 
                          defaultValue={profile ? profile.company : ''}
                          id="form_name"
                          type="text"
                          name="company"
                          className={`form-control ${errors['company'] ? 'error' : ''}`}
                          placeholder="Nom de l'entreprise"
                          required="required"
                          ref={register({required: "L'entreprise est obligatoire."})} />
                          {errors['company'] ? <span className="form-error error">L'entreprise est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Secteur de l'entreprise</label>
                        <select className={`form-control ${errors['sector'] ? 'error' : ''}`} defaultValue={profile ? profile.sector : ''} ref={register({required: "Le secteur de l'entreprise est obligatoire."})} name="sector">
                          {profile ? '' : <option value="">Secteur de l'entreprise</option> }
                          { sectors ? sectors.map((sector, i) => (
                              <option key={i} value={sector.id}>{sector.label}</option>
                           )) : '' }
                        </select>
                          {errors['sector'] ? <span className="form-error error">Le secteur est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Type d'entreprise</label>
                        <select className={`form-control ${errors['type'] ? 'error' : ''}`} defaultValue={profile ? profile.type : ''} ref={register({required: "Le type de l'entreprise est obligatoire."})} name="type">
                          { profile ? '' : <option value="">Type d'entreprise</option> }
                          { types ? types.map((type, i) => (
                              <option key={i} value={type.id}>{type.label}</option>
                          )) : '' }
                        </select>
                          {errors['type'] ? <span className="form-error error">Le type est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Taille de l'entreprise</label>
                        <select className={`form-control ${errors['size'] ? 'error' : ''}`} defaultValue={profile ? profile.size : ''} ref={register({required: "La taille de l'entreprise est obligatoire."})} name="size">
                          {profile ? '' : <option value="">Taille de l'entreprise</option>}
                          { sizes ? sizes.map((size, i) => (
                            <option key={i} value={size.id}>{size.label}</option>
                          )) : '' }
                        </select>
                          {errors['size'] ? <span className="form-error error">La taille est obligatoire.</span> : '' }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Mot de passe</label>
                        <input id="form_password" type="password" name="password" className="form-control" placeholder="Mot de passe" required="required" ref={register({required: "Le mot de passe est obligatoire."})}/>
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
                  { profile ? '' : 
                  <div className="row mt-5">
                    <div className="col-md-12">
                      <div className="remember-checkbox clearfix mb-5">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label" htmlFor="customCheck1">I agree to the term of use and privacy policy</label>
                        </div>
                      </div> 
                    </div>
                  </div>
                  }
                  <div className="row">
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary">{profile ? 'Mettre à jour' : 'Créer' } mon compte</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
     
        );
}

export default SignUpForm;