import React, { Component } from 'react';
import Videobox from './videobox';
import Typed from 'react-typed';

class Herosection5 extends Component {
    render() {
        return (
            <section className="pb-2">
            <div className="container">
              <div className="row justify-content-center mb-3">
                <div className="col-12 col-lg-8 text-center">
                  {/* Heading */}
                  <h4>Prêt à accélerer votre <Typed
                    className="text-primary"
                    strings={['transition numérique','acquisition de clients','développement']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                  </Typed> ?</h4>
                  <h1 className="display-4 mt-3 font-w-5">
                    <span className="text-primary">Silexia</span>, fournisseur de solutions numériques
                      </h1>
                  {/* Text */}
                  <p className="lead text-muted">Nous faisons du numérique une opportunité de développement pour votre organisation.</p>
                </div>
              </div>
              {/* / .row */}
              <Videobox />
            </div>
            {/* / .container */}
          </section>
       
        );
    }
}

export default Herosection5;