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
                    items={this.props.logoitems}
                    autoplay={true}
                    margin={30}
                    dots={false}
                    loop={true}
                >
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/07.png`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/08.png`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/09.png`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/10.png`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/11.png`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" src={require(`../../assets/images/client/12.png`)} alt="" />
                    </div>
                </div>
                </OwlCarousel> 

        );
    }
}

export default Clientlogo;