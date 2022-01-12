import React, {  } from 'react';

const Herosection = ({header}) => {
        return (
            <section className="position-relative overflow-hidden py-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 py-md-9 pb-5 pb-md-0 z-index-1">
                            <h1 className="h2 mt-8 font-w-5 text-primary">PRÊT À METTRE LE NUMÉRIQUE <span className="font-w-5 text-black d-block">{header.subtitle} ?</span></h1>
                            <p className="h6">{header.description}</p>
                            <a href="#banner" className="btn btn-primary mt-5">En savoir plus</a>
                        </div>
                        <div className="col-12 col-md-6 py-md-9 pb-5 pb-md-0 z-index-1 d-flex align-items-center ">
                            <img className="w-100 thumbnail" src={require(`../../assets/images/about/${header.image}`)} alt="Générateur de mentions légales" />
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Herosection;