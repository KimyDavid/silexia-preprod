import React, { useState, useEffect } from 'react';
import Pageheading from '../widgets/Pageheading';
import { API_GET } from '../functions/apiRequest';
import { sortById } from '../functions/sort';

import Steps from './autodiag/steps';
import Category from './autodiag/category';
import Result from './autodiag/result';

const Autodiag = () => {
    const [autodiag, setAutodiag] = useState([]);
    const [category, setCategory] = useState(0);
    const [autodiagResponse, setAutodiagResponse] = useState({});

    useEffect(() => {
        API_GET('autodiag').then(response => setAutodiag(sortById(response)));
    }, []);

    function goToCategory(category) {
        setCategory(category);
    }

    const updateAutodiagResponse = response => {
        const newResponse = autodiagResponse;
        newResponse[category] = response;
        setAutodiagResponse(newResponse);

        window.scrollTo(0, 0)
        if (category === autodiag.length-1) {
            
            setCategory('done');
        } else {
            setCategory(category+1);
        }
    }

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading title={"Autodiag"} />
            </section>
            {/*hero section end*/}

            {/*body content start*/}
            <section className="page-content">
                <div className="container">
                    <div className="col-12 col-lg-10 offset-lg-1">
                        { autodiag ? 
                        <>
                            { category === 'done' ? '' : <Steps steps={autodiag} currentStep={category} goStep={goToCategory}/> }
                            { category > 0 ? <p onClick={() => goToCategory(category-1)} className="link">Catégorie précédente</p> : '' }
                            { autodiag[category] ?
                            <Category category={autodiag[category]} index={category} categoriesLength={autodiag.length} onNextCategory={updateAutodiagResponse} currentAnswers={autodiagResponse[category]} />
                            : '' }
                            { category === 'done' ?
                            <Result answers={autodiagResponse}/>
                            : '' }
                        </> : 
                        <div className="autodiag-loading-logo">
                            <div className="loader clear-loader">
                                <p>Chargement</p>
                                <span />
                            </div>
                        </div> }
                    </div>
                </div>
            </section>
            {/*body content end*/}
        </div>
    );
}

export default Autodiag;