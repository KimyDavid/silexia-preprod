import React, { useEffect, useState } from 'react';
import SignUpForm from '../../widgets/account/signup';
import useToken from '../../functions/useTokenAccount';
import { API_GET } from '../../functions/apiRequest';

const Response = ({ profile }) => {
    const { token, setToken } = useToken();
    const [userAutodiag, setUserAutodiag] = useState();

    useEffect(() => {
        if (profile.id) {
            API_GET(`autodiag/user/${profile.id}`).then(response => setUserAutodiag(response));
        }
    }, [profile]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Duration of loading
        const timeout = 8000;
    
        const loadingBlock = document.querySelector('.autodiag-loading');
        const resultBlock = document.querySelector('.autodiag-result');

        setTimeout(() => {
            loadingBlock.querySelector('p:first-child').classList.add('hide');
            loadingBlock.querySelector('p:nth-child(2)').classList.remove('hide');
        }, timeout/2);
    
        setTimeout(() => {
            loadingBlock.classList.add('d-none');
            resultBlock.classList.remove('d-none');
        }, timeout);
    }, []);

    return (
        <>
            <div className="autodiag-loading">
                <p>Nous analysons vos réponses...</p>
                <p className="hide">Nous construisons votre diagnostic...</p>
                <div className="autodiag-loading-logo">
                    <div className="loader clear-loader">
                        <span />
                    </div>
                </div>
            </div>
            <div className="autodiag-result d-none">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                        <img src={require(`../../assets/images/about/result.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <div>
                            <h3 className="font-w-4">Bravo, votre diagnostic s’est déroulé avec succès !</h3>
                            {userAutodiag ? <p className="lead">{userAutodiag.global.tier}</p> : ''}
                        </div>
                        <a href="#create-account" className="btn btn-primary mt-5">Voir mon tableau de bord</a>
                    </div>
                </div>
                <div id="create-account" className="row align-items-center justify-content-between autodiag-form">
                    <div className="col-12">
                        <div className="text-center">
                            <h3 className="font-w-4">Création de votre compte</h3>
                            <p className="lead">Pour vous permettre d’accéder à votre Tableau de Bord, vous devez créer un compte pour enregistrer votre diagnostic</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <SignUpForm profile={profile} setToken={setToken} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Response;