import React from 'react';
import Herosection from '../widgets/sections/home2/herosection';
import About from '../widgets/sections/home2/about';
import Blog from '../widgets/sections/blog';
import Skillbox from '../widgets/sections/home2/skillbox';
import BrandLogo from '../widgets/common/clientlogo';
import FeatureServices from '../widgets/sections/home2/services';

const Index = ({setShowAutodiag}) => {
        return (
            <div>
                <Herosection />
                <div className="page-content">
                    <section className="py-0">
                        <div className="container">
                            <Skillbox />
                        </div>
                    </section>

                    <section className="p-0">
                        <div className="container">
                            <div className="row align-items-end mb-lg-5">
                                <div className="col-12">
                                    <div className="text-left">
                                        <span className="badge badge-primary-soft p-2"><i className="la la-clipboard-list ic-3x rotation" /></span>
                                        <h2 className="mt-4 mb-0 h4">Nos offres</h2>
                                    </div>
                                </div>
                            </div>
                            <FeatureServices />
                        </div>
                    </section>

                    <section>
                        <About />
                    </section> 
                    
                    <section id="banner" className="custom-pb-1 custom-pt-1 bg-primary position-relative">
                        <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                            </svg>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-xl-10 mb-5 mb-lg-0">
                                    <div className="mb-3 mb-lg-8">
                                        <h2 className="text-white mt-3 h4">Le numérique peut devenir le moteur de votre croissance s'il est déployé dans une stratégie adaptée à vos enjeux. </h2>
                                        <div className="mb-0 mt-5 columns-2">
                                            <p className="text-white">Pour les TPE/PME, le numérique peut apparaître comme un réel Far West où il est parfois compliqué de se repérer et de s'orienter. Avec la profusion de "solutions numériques" dans tous les domaines d'activité de l'entreprise, comment exercer un choix libre et non faussé des technologies et marques à privilégier ? </p>
                                            <p className="text-white">Chez Silexia, nous vous accompagnons dans ces choix stratégiques qui conditionnent les futurs usages et pratiques de votre entreprise. Nous exerçons une veille permanente sur les technologies numériques émergentes, nous testons les produits du marché et vous recommandons ceux les plus adaptés à votre situation. </p>
                                            <p className="text-white">Cette assistance au déploiement et à la prise en main de logiciels performants nous invite à dessiner avec vous la vision stratégique de votre entreprise avec le numérique en son cœur pour booster votre chiffre d'affaires. Cela passe par une dynamique d'audit permanente et par une feuille de route précise. </p>
                                            <p className="text-white">La donnée est devenue l'enjeu majeur de toute stratégie numérique. Elle permet des gains de productivité par l'échange collaboratif autour d'informations structurées et augmente vos ventes par une meilleure connaissance des attentes de vos clients. Ainsi, nous mettons en valeur vos données ou construisons avec vous vos assets informationnels afin de vous aider à prendre les bonnes décisions qui répondent à l'exigence de vos clients.</p>
                                            <p className="text-white">Pour assurer notre mission de faciliter l'innovation en toute conformité chez nos clients, nous mettons un point d'honneur à vous aider à respecter les normes en vigueur en protection des données et à maîtriser votre risque cyber. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                            </svg>
                        </div>
                    </section>

                    {/*client start*/}
                    <section className="text-center py-4">
                        <div className="container">
                            <BrandLogo />
                        </div>
                    </section>
                    {/*client end*/}

                    {/*blog start*/}
                    <section>
                        <div className="container">
                            <div className="row align-items-end mb-5">
                                <div className="col-12 col-md-12 col-lg-8">
                                    <div>
                                        <span className="badge badge-primary-soft p-2"><i className="la la-bold ic-3x rotation" /></span>
                                        <h2 className="mt-4 mb-0 h4">Notre blog dédié à la transition numérique des TPE/PME</h2>
                                    </div>
                                </div>
                            </div>
                            {/* / .row */}
                            <Blog />
                        </div>
                    </section>
                    {/*blog end*/}
                </div>
            </div>
        );

}

export default Index;