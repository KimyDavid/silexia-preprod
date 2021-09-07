import React, { Component } from 'react';
import Pageheading from '../widgets/Pageheading';
import FeatureServices from '../widgets/sections/home2/services';

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
                {/*hero section start*/}
                <section className="position-relative">
                    <Pageheading title={"Nos offres"} />
                </section>
                {/*hero section end*/}

                <div className="page-content">
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-12">
                                    <img className="img-fluid w-75" src={require(`../assets/images/about/06.png`)} alt="" />
                                </div>
                                <div className="col-lg-7 col-12">
                                    <h2 className="title">Ce que nous faisons pour nos clients ?</h2>
                                    <p className="lead mb-5">Activer les leviers numériques à fort impact sur leur organisation ! Découvrez comment le numérique est capable de faire évoluer votre organisation.</p>
                                </div>
                            </div>
                            
                            {/* / .row */}
                            <FeatureServices />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Index;