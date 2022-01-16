import React, { Component } from 'react';

class Memberaboutus extends Component {
    render() {
        return (
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0 order-lg-1">
                  <div className="row align-items-center">
                    <div className="col-6">
                      {/* <div className="filter-red rounded"> */}
                        <img src={require(`../../../assets/images/about/silexia-filter-1.png`)} className="img-fluid rounded shadow-lg" alt="Silexia" />
                      {/* </div> */}
                    </div>
                    <div className="col-6">
                    </div>
                    <div className="col-10 ml-auto mr-auto mt-n6">
                      {/* <div className="filter-red rounded"> */}
                        <img src={require(`../../../assets/images/about/silexia-filter-2.png`)} className="img-fluid rounded shadow-lg" alt="Silexia" />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div> <span className="badge badge-primary-soft p-2">
                      <i className="la la-exclamation ic-3x rotation" />
                    </span>
                    <h2 className="mt-3 font-w-5">Spécialiste de la transition numérique</h2>
                    <p className="lead">Nous apportons aux petites organisations <strong>des compétences</strong> et <strong>une expertise</strong> trop souvent réservées aux grands groupes.</p>
                    <p className="mb-0">Nous construisons avec des clients exigeants les bases de leur succès par le numérique ! Aux côtés de nos partenaires, nous fournissons des solutions clés en main aux petites organisations dans le cadre de stratégies performantes sur-mesure...</p>
                  </div>
                </div>
              </div>
          
        );
    }
}

export default Memberaboutus;