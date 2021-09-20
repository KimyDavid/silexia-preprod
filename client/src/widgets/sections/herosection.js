import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import Typed from 'react-typed';

class Herosection6 extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    return (

      <div className="row align-items-center">
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => this.setState({ isOpen: false })} />

        <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
          {/* Image */}
          <img src={require(`../../assets/images/hero/04.svg`)} className="img-fluid" alt="..." />
        </div>
        <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
          {/* Heading */}
          <h1 className="display-5 mt-3">Prêt à accélerer votre <br/><Typed
                    className="text-primary font-w-5"
                    strings={['transition numérique','acquisition de clients','développement']}
                    typeSpeed={80}
                    backSpeed={50}
                    loop ></Typed> ?</h1>
          {/* Text */}
          <p className="lead text-muted">Il n'a jamais été aussi simple de faire du numérique un allié du quotidien.</p>
          {/* Buttons */} 
          <Link to="/autodiag" className="btn btn-primary shadow mr-1">C'est parti !</Link>
        </div>
      </div>


    );
  }
}

export default Herosection6;