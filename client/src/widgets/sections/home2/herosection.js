import React, { Component } from 'react';
import Videobox from './videobox';
import Typed from 'react-typed';

class Herosection5 extends Component {
    render() {
        return (
            <section className="pb-2">
            <div className="container">
              <div className="row justify-content-center mb-3">
                <div className="col-12 col-lg-5 col-xl-5 order-lg-2 mb-8 mb-lg-0">
                  {/* Image */}
                  <img src={require(`../../../assets/images/hero/04.svg`)} className="img-fluid" alt="Silexia, fournisseur de solutions numériques" width="500" height="500" />
                </div>

                <div className="col-12 col-lg-7 text-left order-lg-1">
                  {/* Heading */}
                  <p className="h5 mt-lg-5 text-black">Prêt à accélerer votre <Typed
                    className="text-primary"
                    strings={['transition numérique','acquisition de clients','développement']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                  </Typed> ?</p>
                  <h1 className="h2 mt-3 font-w-5">
                    <span className="text-primary">Silexia</span>, fournisseur de solutions numériques
                      </h1>
                  {/* Text */}
                  <p className="lead text-muted">Nous faisons du numérique une opportunité de développement pour votre organisation.</p>
                </div>
                
              </div>
              {/* / .row */}
              {/* <Videobox /> */}
            </div>
            {/* / .container */}
          </section>
       
        );
    }
}

export default Herosection5;