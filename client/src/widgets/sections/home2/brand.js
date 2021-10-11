import React, { Component } from 'react';

class BrandLogo extends Component {
    render() {
        return (

            <div>
                <div className="row">
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <div className="clients-logo">
                            <img className="img-fluid" src={require(`../../../assets/images/client/activateur.png`)} alt="Activateur France Num" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <div className="clients-logo">
                            <img className="img-fluid" src={require(`../../../assets/images/client/psl-lab.png`)} alt="PSL lab research university paris" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <div className="clients-logo">
                            <img className="img-fluid" src={require(`../../../assets/images/client/axonaut.png`)} alt="Axonaut" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <div className="clients-logo">
                            <img className="img-fluid" src={require(`../../../assets/images/client/ionos.png`)} alt="Ionos" />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <div className="clients-logo">
                            <img className="img-fluid" src={require(`../../../assets/images/client/wizishop.png`)} alt="Wisizishop" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <div className="clients-logo">
                            <img className="img-fluid" src={require(`../../../assets/images/client/crowdfire.png`)} alt="Crowdfire" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <div className="clients-logo">
                            <img className="img-fluid" src={require(`../../../assets/images/client/kinsta.png`)} alt="Kinsta" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <div className="clients-logo">
                            <img className="img-fluid" src={require(`../../../assets/images/client/pepite.png`)} alt="Pépite France" />
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default BrandLogo;