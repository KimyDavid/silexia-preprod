import React, { useEffect, useState } from 'react';
import { API_POST } from '../../functions/apiRequest';
import { Link } from 'react-router-dom';

const VerifAccount = () => {
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const params =  new URLSearchParams(window.location.search);
    const key = params.get('key');

    useEffect(() => {
        API_POST('verif_account', 'POST', {'key': key}, false).then(result => {
            if (result.error) {
                setError(true);
            } else {
                setVerified(true);
            }
        });
    }, [])

    return (
        <section className="fullscreen-banner p-0 my-5">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 text-center h-100 d-flex align-items-center">
                        { verified ? 
                            <div className="w-100">
                                <h2 className="text-primary font-w-5 h3 mt-10">Votre compte a été validé !</h2>
                                <p className="lead text-muted">Merci pour l'intéret que vous portez à Silexia. Retrouvez le résultat de votre autodiagnostic en vous connectant à votre compte.</p>
                                <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                                    <Link className="btn btn-primary mt-3" to="/profile">Se connecter</Link>
                                </div>
                            </div>
                        :
                            error ?
                                <div className="w-100">
                                    <h2 className="text-primary font-w-5 h3 mt-10">Oops !</h2>
                                    <p className="lead text-muted">Une erreur est parvenue lors de la validation de votre compte. Si le problème persiste, n'hésitez pas à nous contacter.</p>
                                    <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                                        <Link className="btn btn-primary mt-3" to="/">Retour</Link>
                                    </div>
                                </div>
                            : 
                                <div className="autodiag-loading-logo">
                                    <div className="loader clear-loader">
                                        <p className="lead text-muted">Vérification de votre compte...</p>
                                        <span />
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VerifAccount;