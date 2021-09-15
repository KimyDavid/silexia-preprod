import React, { Component } from 'react';
import Herosection from '../widgets/sections/home2/herosection';
import About from '../widgets/sections/home2/about';
import Blog from '../widgets/sections/blog';
import Skillbox from '../widgets/sections/home2/skillbox';
import BrandLogo from '../widgets/sections/home2/brand';

class Index extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Herosection />
                <div className="page-content">
                    <section className="pt-0">
                        <div className="container">
                            <Skillbox />
                        </div>
                    </section>

                    <section className="pt-0">
                        <About />
                    </section>

                    <div className="container">
                        <div className="row justify-content-center text-center mt-10">
                            <div className="col-12 mb-5 mb-lg-0">
                                <div className="mb-8">
                                    {/* <span className="badge badge-primary-soft p-2 font-w-6">Bootsland Team</span> */}
                                    <h2 className="mt-3 font-w-6 h4">Le numérique peut devenir le moteur de votre croissance s'il est déployé dans une stratégie adaptée à vos enjeux. </h2>
                                    <div className="mb-0 mt-5 columns-3">
                                        <p>Pour les TPE/PME, le numérique peut apparaître comme un réel Far West où il est parfois compliqué de se repérer et de s'orienter. Avec la profusion de "solutions numériques" dans tous les domaines d'activité de l'entreprise, comment exercer un choix libre et non faussé des technologies et marques à privilégier ? </p>
                                        <p>Chez Silexia, nous vous accompagnons dans ces choix stratégiques qui conditionnent les futurs usages et pratiques de votre entreprise. Nous exerçons une veille permanente sur les technologies numériques émergentes, nous testons les produits du marché et vous recommandons ceux les plus adaptés à votre situation. </p>
                                        <p>Cette assistance au déploiement et à la prise en main de logiciels performants nous invite à dessiner avec vous la vision stratégique de votre entreprise avec le numérique en son cœur pour booster votre chiffre d'affaires. Cela passe par une dynamique d'audit permanente et par une feuille de route précise. </p>
                                        <p>La donnée est devenue l'enjeu majeur de toute stratégie numérique. Elle permet des gains de productivité par l'échange collaboratif autour d'informations structurées et augmente vos ventes par une meilleure connaissance des attentes de vos clients. Ainsi, nous mettons en valeur vos données ou construisons avec vous vos assets informationnels afin de vous aider à prendre les bonnes décisions qui répondent à l'exigence de vos clients.</p>
                                        <p>Pour assurer notre mission de faciliter l'innovation en toute conformité chez nos clients, nous mettons un point d'honneur à vous aider à respecter les normes en vigueur en protection des données et à maîtriser votre risque cyber. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*client start*/}
                    <section className="text-center">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                    <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                        Brand Logo
                                        </span>
                                        <h2 className="mt-3">Nous travaillons à leurs côtés</h2>
                                    </div>
                                </div>
                            </div>
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
                                        <h2 className="mt-4 mb-0 h3">Notre blog dédié à la transition numérique des TPE/PME</h2>
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
}

export default Index;