import React, { Component } from 'react';
import Pageheading from '../widgets/Pageheading';
import FeatureServices from '../widgets/sections/home2/services';

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
                {/*hero section start*/}
                <section className="position-relative">
                    <Pageheading title={"Nos offres"} />
                </section>
                {/*hero section end*/}

                <div className="page-content">
                    <section>
                        <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                            <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                Ce que nous proposons
                                </span>
                                <h2 className="mt-3 font-w-5">Creative Design And Creative Services</h2>
                                <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                            </div>
                            </div>
                        </div>
                        {/* / .row */}
                        <FeatureServices />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Index;