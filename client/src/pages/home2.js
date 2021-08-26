import React, { Component } from 'react';
import Herosection from '../widgets/sections/home2/herosection';
import About from '../widgets/sections/home2/about';
import Blog from '../widgets/sections/blog';
import Skillbox from '../widgets/sections/home2/skillbox';
import BrandLogo from '../widgets/sections/home2/brand';

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
                <Herosection />
                <div className="page-content">
                    <section className="pt-0">
                        <div className="container">
                            <Skillbox />
                        </div>
                    </section>

                    <section className="pt-0">
                        <About />
                    </section>

                    <div className="row justify-content-center text-center mt-10">
                        <div className="col-12 col-md-12 col-lg-8 mb-5 mb-lg-0">
                            <div className="mb-8">
                                <span className="badge badge-primary-soft p-2 font-w-6">Bootsland Team</span>
                                <h2 className="mt-3 font-w-6">Meet Our Team Of Expert</h2>
                                <p className="mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam. Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant. et cum superatis difficultatibus arduis ad supercilia venissent fluvii Melanis alti et verticosi</p>
                            </div>
                        </div>
                    </div>

                    {/*client start*/}
                    <section className="text-center">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                    <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                        Brand Logo
                                        </span>
                                        <h2 className="mt-3">Market leaders use app to nrich their brand &amp; business.</h2>
                                    </div>
                                </div>
                            </div>
                            <BrandLogo />
                        </div>
                    </section>
                    {/*client end*/}

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