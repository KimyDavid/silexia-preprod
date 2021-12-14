import React, { useEffect, useState } from 'react';
import HomeForm from './form';
import { API_GET } from '../../../functions/apiRequest';

const Skillbox = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        API_GET('offres').then(response => setOffers(response));
    }, []);

        return (
            <section className="pt-0 pt-lg-8">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5 order-lg-1">
                            <HomeForm />
                        </div>
                        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                            <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="d-flex align-items-start">
                                            {/* <div className="mr-3 p-3 border rounded border-light shadow-primary">
                                                <img className="img-fluid" src={require(`../../../assets/images/icon/01.svg`)} alt="Adaptation à votre contexte" />
                                            </div> */}
                                            <div>
                                                <h5 className="mb-2">Adaptation à votre contexte</h5>
                                                <p className="mb-0">Votre situation est unique. Nous nous adaptons à vos enjeux en  concevant une stratégie sur-mesure en fonction du diagnostic établi ensemble.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="d-flex align-items-start">
                                            {/* <div className="mr-3 p-3 border rounded border-light shadow-primary">
                                                <img className="img-fluid" src={require(`../../../assets/images/icon/01.svg`)} alt="Agilité et disponibilité" />
                                            </div> */}
                                            <div>
                                                <h5 className="mb-2">Agilité et disponibilité</h5>
                                                <p className="mb-0">Nous déterminons avec vous les objectifs à court et moyen terme de votre organisation, projet ou produit pour lancer la dynamique qui permettra de les atteindre.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-5">
                                        <div className="d-flex align-items-start">
                                            {/* <div className="mr-3 p-3 border rounded border-light shadow-primary">
                                                <img className="img-fluid" src={require(`../../../assets/images/icon/01.svg`)} alt="Identification des actions à fort impact" />
                                            </div> */}
                                            <div>
                                                <h5 className="mb-2">Identification des actions à fort impact</h5>
                                                <p className="mb-0">Nous identifions, vous proposons et mettons en œuvre les actions numériques capables d'accélérer la réalisation de vos projets et le développement de vos activités.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-5">
                                        <div className="d-flex align-items-start">
                                            {/* <div className="mr-3 p-3 border rounded border-light shadow-primary">
                                                <img className="img-fluid" src={require(`../../../assets/images/icon/01.svg`)} alt="L'innovation au cœur de votre entreprise" />
                                            </div> */}
                                            <div>
                                                <h5 className="mb-2">L'innovation au cœur de votre entreprise</h5>
                                                <p className="mb-0">Grâce à une veille permanente autour des pratiques numériques émergentes, vous bénéficiez d'un service innovation à votre écoute et au fait de vos enjeux.</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
}

export default Skillbox;