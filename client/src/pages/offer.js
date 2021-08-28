import React, { useEffect } from 'react';
import Pageheading from '../widgets/Pageheading';
import { useLocation } from "react-router-dom";

const Offer = () => {

    const { state } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
            <Pageheading foldername={"Offres"} title={state.offer.title} />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*privacy start*/}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 cms" dangerouslySetInnerHTML={{__html: state.offer.text}}>
                            </div>
                        </div>
                    </div>
                </section>
                {/*privacy end*/}
            </div>
            {/*body content end*/}
        </div>

    );
}

export default Offer;