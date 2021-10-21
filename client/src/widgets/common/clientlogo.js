import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class Clientlogo extends Component {
    render() {
        return (
            // <div className="owl-carousel mt-8 no-pb" data-dots="false" data-items={4} data-md-items={4} data-sm-items={3} data-xs-items={2} data-margin={30} data-autoplay="true">
              <OwlCarousel
                    className={`owl-carousel mt-${this.props.margintop} no-pb`}
                    dotData={false}
                    items={4}
                    autoplay={true}
                    margin={30}
                    dots={false}
                    loop={true}
                >
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/activateur.png`)} alt="Activateur France Num" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/pepite.png`)} alt="Pepite France" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/psl-lab.png`)} alt="PSL Lab" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/axonaut.png`)} alt="Axonaut" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/ionos.png`)} alt="Ionos" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/wizishop.png`)} alt="Wizishop" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/crowdfire.png`)} alt="Crowdfire" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/kinsta.png`)} alt="Kinsta" />
                    </div>
                </div>
                </OwlCarousel> 

        );
    }
}

export default Clientlogo;