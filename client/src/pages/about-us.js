import React, { Component } from 'react';
import Memberaboutus from '../widgets/sections/home2/about-us';
import Testimonial from '../widgets/sections/home2/testimonial';
import Pageheading from '../widgets/Pageheading';
import ModalVideo from 'react-modal-video';

class Aboutus extends Component {
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
            <div>
                <section className="position-relative">
                    <Pageheading foldername={"Company"} title={"About Us"}/>
                </section>
                <div className="page-content">
                    {/*about start*/}
                    <section>
                        <div className="container">
                            <Memberaboutus />

                            <div className="row justify-content-center text-center mt-10">
                              <div className="col-12 col-md-12 col-lg-8 mb-4 mb-lg-0">
                                <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                  Bootsland Team
                                      </span>
                                  <h2 className="mt-3 font-w-6">Meet Our Team Of Expert</h2>
                                  <p className="mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam. Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant. et cum superatis difficultatibus arduis ad supercilia venissent fluvii Melanis alti et verticosi</p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </section>
                    {/*about end*/}
                    {/*testimonial start*/}
                    <section className="position-relative">
                        <div className="shape-2 transform-md-rotate" style={{ overflow: 'hidden' }}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#cc4c44' }} />
                            </svg>
                        </div>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0">
                                    <div> <span className="badge badge-light-soft p-2">
                                        <i className="la la-users ic-3x rotation" />
                                    </span>
                                        <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                                        <p className="lead mb-0 text-white">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                    </div>
                                </div>
                                <Testimonial />
                            </div>
                            {/* / .row */}
                        </div>
                    </section>
                    {/*testimonial end*/}

                    <section>
                      <div className="container">
                        <div className="row">
                          <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => this.setState({ isOpen: false })} />

                          <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <img src={require(`../assets/images/about/10.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                              </div>
                              <div className="col-6">
                                <img src={require(`../assets/images/about/11.jpg`)} className="img-fluid rounded shadow-lg mb-5" alt="..." />
                                <img src={require(`../assets/images/about/12.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-lg-6 py-11 z-index-1">
                          {/* Heading */}
                            <div className="video-btn ml-5"> 
                              <a className="play-btn popup-youtube" onClick={this.openModal}><i className="la la-play" /></a>
                              <div className="spinner-eff">
                                <div className="spinner-circle circle-2" />
                              </div>
                            </div>
                            <h1 className="display-4 mt-8 font-w-5">
                                Bootsland All In One Solution For Your Website
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
                          </div>
                        </div>
                      </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Aboutus;