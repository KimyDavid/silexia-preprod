import React, { Component } from 'react';
import Services from '../widgets/sections/services';
import Herosection from '../widgets/sections/herosection';
import Faq from '../widgets/sections/faq';
import Pricingplan from '../widgets/sections/pricingplan';
import Blog from '../widgets/sections/blog';

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
                <section>
                    <div className="container">
                        <Herosection />
                    </div>
                </section>
                <div className="page-content">
                    {/*services start*/}
                    <Services />
                    {/*services end*/}
                    
                    {/*faq start*/}
                    <section className="pt-0">
                        <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                            <img src={require(`../assets/images/about/04.svg`)} alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <Faq />
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*faq end*/}
                    
                    {/*pricing start*/}
                    {/* <section>
                        <div className="container">
                        <div className="row align-items-end justify-content-between">
                            <div className="col-12 col-md-6 col-lg-5 mb-5 mb-md-0">
                            <div>
                                <h2 className="mt-3">Les offres Silexia</h2>
                            </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                            <nav>
                                <div className="nav nav-tabs d-flex justify-content-md-end border-0" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link border-0 active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Monthly</a>
                                    <a className="nav-item nav-link border-0" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Yearly</a>
                                </div>
                            </nav>
                            </div>
                        </div>
                        <Pricingplan />
                        </div>
                    </section> */}
                    {/*pricing end*/}
                    
                    {/*blog start*/}
                    <section>
                        <div className="container">
                        <div className="row align-items-end mb-5">
                            <div className="col-12 col-md-12 col-lg-4">
                            <div> <span className="badge badge-primary-soft p-2">
                                <i className="la la-bold ic-3x rotation" />
                            </span>
                                <h2 className="mt-4 mb-0">Nos derniers articles</h2>
                            </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 ml-auto">
                            <div>
                                <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                            </div>
                            </div>
                        </div>
                        {/* / .row */}
                        <Blog />
                        </div>
                    </section>
                    {/*blog end*/}
                </div>
            </div>
        );
    }
}

export default Index;