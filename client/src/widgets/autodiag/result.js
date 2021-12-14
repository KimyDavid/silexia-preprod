import React, { useEffect, useState } from 'react';
import SignUpForm from '../../widgets/account/signup';
import { API_GET } from '../../functions/apiRequest';
import useAutodiagToken from '../../functions/useAutodiagToken';

const Response = ({profile}) => {
    const [userAutodiag, setUserAutodiag] = useState();
    const { autodiagToken, setAutodiagToken } = useAutodiagToken();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (profile.id) {
            loaderHandler();
            API_GET(`autodiag/user/${profile.id}`).then(response => setUserAutodiag(response));
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const loaderHandler = () => {
        // Duration of loading
        const timeout = 8000;
        const loadingBlock = document.querySelector('.autodiag-loading');

        setTimeout(() => {
            loadingBlock.querySelector('p:first-child').classList.add('hide');
            loadingBlock.querySelector('p:nth-child(2)').classList.remove('hide');
            setLoaded(true);
        }, timeout/2);
    }

    return (
        <>
            {/* { userAutodiag ? */}
            { !loaded ?
                <div className="autodiag-loading text-center">
                    <p>Nous analysons vos réponses...</p>
                    <p className="hide">Nous construisons votre diagnostic...</p>
                    <div className="autodiag-loading-logo">
                        <div className="loader clear-loader">
                            <span />
                        </div>
                    </div>
                </div>
            : 
                <div className="autodiag-result">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                            <img src={require(`../../assets/images/about/result.png`)} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-5">
                            <div>
                                <h3 className="font-w-4">Bravo, votre diagnostic s’est déroulé avec succès !</h3>
                                {userAutodiag ? <p className="lead">{userAutodiag.global.tier}</p> : ''}
                            </div>
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
                            <SignUpForm profile={profile} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Response;