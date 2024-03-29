import React, { useEffect, useState } from 'react';
import { API_GET } from '../../functions/apiRequest';
import { Link } from 'react-router-dom';

const Index = () => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    API_GET('logout').then(() => {
        document.location.reload();
    });
  }, []);

  return (
    <section className="fullscreen-banner p-0 my-5">
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12 text-center h-100 d-flex align-items-center">
                    { verified ? 
                        <div className="w-100">
                            <h2 className="text-primary font-w-5 h3 mt-10">Vous êtes déconnecté !</h2>
                            <p className="lead text-muted">Vous pouvez vous reconnecter via le formulaire de <Link className="link link-primary" to="login">connexion</Link>.</p>
                            <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                                <a className="btn btn-primary mt-3" href="/">Retour à l'accueil</a>
                            </div>
                        </div>
                    :
                        error ?
                            <div className="w-100">
                                <h2 className="text-primary font-w-5 h3 mt-10">Oops !</h2>
                                <p className="lead text-muted">Une erreur est parvenue lors de la déconnexion de votre compte. Si le problème persiste, n'hésitez pas à nous contacter.</p>
                                <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                                    <Link className="btn btn-primary mt-3" to="/">Retour à l'accueil</Link>
                                </div>
                            </div>
                        : 
                            <div className="autodiag-loading-logo">
                                <div className="loader clear-loader">
                                    <p className="lead text-muted">Déconnexion de votre compte...</p>
                                    <span />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Index
