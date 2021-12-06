import React, { useEffect, useState } from 'react';
import Pageheading from '../../widgets/Pageheading';
import { Link } from 'react-router-dom';
import Constants from '../../constants/Config';
import Modal from '../../widgets/common/modal';
import { API_REMOVE } from '../../functions/apiRequest';

const Profile = ({ token }) => {
    const [sectors, setSectors] = useState([]);
    const [types, setTypes] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [message, setMessage] = useState('');

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

    const deleteAccount = () => {
      API_REMOVE(`users/${token.id}`)
        .then(response => {
            console.log(response);
            if (response.error) {
              setMessage(response.details);
            } else {
              setMessage();
              setTimeout(() => {
                document.location.reload();
              }, 1500);
            }
            setShowConfirm(false);
          });
    }
    
        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative py-6">
                    <Pageheading title={"Mon compte"} />
                </section>
                {/*body content start*/}
                { token ? 
                  <div className="page-content">
                      <div className="container">
                          <div className="row">
                              <div className="col-xs-12 col-md-10 col-lg-7 mx-auto text-center">
                                  { message ? <p className="full message error text-center"></p> : '' }
                                  <h3>Bonjour {token.first_name} !</h3>
                                  <p>Gérez ci-dessous les paramètres et informations de votre compte.</p>
                                  <div className="card shadow my-3 border-0">
                                      <div className="card-body">
                                          <div className="row">
                                            <div className="col-6">
                                              <p className="m-0 account-field-value"><span className="account-field-label">Prénom Nom</span>{token.first_name} {token.last_name}</p>
                                            </div>
                                            <div className="col-6">
                                              <p className="m-0 account-field-value"><span className="account-field-label">Email</span>{token.email}</p>
                                            </div>
                                            <div className="col-6">
                                              <p className="m-0 account-field-value"><span className="account-field-label">Téléphone</span>{token.phone}</p>
                                            </div>
                                            <div className="col-6">
                                              <p className="m-0 account-field-value"><span className="account-field-label">Entreprise</span>{token.company}</p>
                                            </div>
                                            <div className="col-6">
                                              <p className="m-0 account-field-value"><span className="account-field-label">Fonction</span>{token.function}</p>
                                            </div>
                                            {/* <div className="col-6">
                                              <p className="account-field-value"><span className="account-field-label">Type d'entreprise</span>{types.filter(type => type.id === token.type)[0]?.label }</p>
                                            </div> */}
                                            <div className="col-6">
                                              <p className="m-0 account-field-value"><span className="account-field-label">Taille d'entreprise</span>{sizes.filter(size => size.id === token.size)[0]?.label }</p>
                                            </div>
                                            <div className="col-6">
                                              <p className="m-0 account-field-value"><span className="account-field-label">Secteur d'entreprise</span>{sectors.filter(sector => sector.id === token.sector)[0]?.label }</p>
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                                  <Link to="/profile/edit" className="btn btn-primary shadow mt-2">Modifier mes informations</Link>
                                  <a className="d-block link text-gray mt-2" onClick={() => setShowConfirm(true)}>Supprimer mon compte</a>
                              </div>
                          </div>
                      </div>
                  </div>
                : '' }
            
                <Modal 
                    title={`Supprimer votre compte`}
                    body="Êtes-vous sûr de vouloir supprimer votre compte ? Les résultats de votre questionnaire seront également supprimés."
                    closeButton="Annuler"
                    submitButton="Valider"
                    onSubmit={deleteAccount}
                    show={showConfirm}
                    setShow={setShowConfirm}
                />
                {/*body content end*/}
            </div>
        );
}

export default Profile;