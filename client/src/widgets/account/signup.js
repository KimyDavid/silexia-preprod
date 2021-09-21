import React, { useEffect, useState } from 'react';
import Constants from '../../constants/Config';
import {useForm} from 'react-hook-form';
import { API_POST } from '../../functions/apiRequest';

const SignUpForm = ({profile = null, setToken = null}) => {
  const {handleSubmit, formState: { errors }, register} = useForm();

  const [sectors, setSectors] = useState([]);
  const [types, setTypes] = useState([]);
  const [sizes, setSizes] = useState([]);

  const [message, setMessage] = useState();

  const [currentSector, setCurrentSector] = useState(profile.sector);
  const [currentType, setCurrentType] = useState(profile.type);
  const [currentSize, setCurrentSize] = useState(profile.size);

  const submitForm = data => {
    if (validatePassword()) {
      console.log(data)
      if (profile) {
        API_POST('subscribe', 'POST', data)
          .then(response => {
            if (response.error) {
              setMessage(response.details);
            } else if (setToken) {
              setMessage();
              setToken('');
              window.location.href = `${window.location.origin}/profile`;
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
                  { message ? <div className="messages">
                    <p className="error message">{message}</p>
                  </div> : '' }
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Prénom</label>
                        <input 
                          defaultValue={profile ? profile.first_name : ''}
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
                        <label className="form-label">Nom</label>
                        <input 
                          defaultValue={profile ? profile.last_name : ''} 
                          id="form_name" 
                          type="text" 
                          {...register('last_name', {required: 'Le nom est obligatoire.'})}
                          className={`form-control ${errors['last_name'] ? 'error' : ''}`}
                          placeholder="Nom" 
                          required="required" />
                          {errors['last_name'] ? <span className="form-error error">Le nom est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          defaultValue={profile ? profile.email : ''}
                          id="form_name"
                          {...register('email', {required: "L'email est obligatoire."})}
                          type="text"
                          className={`form-control ${errors['email'] ? 'error' : ''}`}
                          placeholder="Email"
                          required="required" />
                          {errors['email'] ? <span className="form-error error">L'email est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Téléphone</label>
                        <input
                          defaultValue={profile ? profile.phone : ''}
                          id="form_name"
                          {...register('phone', {required: 'Le téléphone est obligatoire.'})}
                          type="text"
                          className={`form-control ${errors['phone'] ? 'error' : ''}`}
                          placeholder="Téléphone"
                          required="required" />
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
                          {...register('function', {required: 'La fonction est obligatoire.'})}
                          className={`form-control ${errors['function'] ? 'error' : ''}`}
                          placeholder="Fonction"
                          required="required" />
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
                          className={`form-control ${errors['company'] ? 'error' : ''}`}
                          {...register('company', {required: "Le nom de l'entreprise est obligatoire."})}
                          placeholder="Nom de l'entreprise"
                          required="required" />
                          {errors['company'] ? <span className="form-error error">L'entreprise est obligatoire.</span> : '' }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Secteur de l'entreprise</label>
                        <select className={`form-control ${errors['sector'] ? 'error' : ''}`}
                        value={currentSector}
                        {...register('sector', {required: "Le secteur de l'entreprise est obligatoire."})}
                        onChange={(e) => setCurrentSector(e.target.value)}>
                          <option value="">Secteur de l'entreprise</option>
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
                        <select className={`form-control ${errors['type'] ? 'error' : ''}`}
                        value={currentType}
                        {...register('type', {required: "Le type de l'entreprise est obligatoire."})}
                        onChange={(e) => setCurrentType(e.target.value)}>
                          <option value="">Type d'entreprise</option>
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
                        <select className={`form-control ${errors['size'] ? 'error' : ''}`}
                          value={currentSize}
                          {...register('size', {required: "La taille de l'entreprise est obligatoire."})}
                          onChange={(e) => setCurrentSize(e.target.value)}>
                          <option value="">Taille de l'entreprise</option>
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