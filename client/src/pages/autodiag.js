import React, { useState, useEffect } from 'react';
import Pageheading from '../widgets/Pageheading';
import { API_GET, API_POST } from '../functions/apiRequest';
import { sortById } from '../functions/sort';

import Steps from './autodiag/steps';
import Category from './autodiag/category';
import Result from './autodiag/result';

const Autodiag = () => {
    const [autodiag, setAutodiag] = useState([]);
    const [category, setCategory] = useState(0);
    const [autodiagResponse, setAutodiagResponse] = useState({});
    const [profile, setProfile] = useState({});
    const [message, setMessage] = useState();
    const [progressionTotal, setProgressionTotal] = useState();
    const [progression, setProgression] = useState(0);

    useEffect(() => {
        API_GET('autodiag').then(response => {
            setAutodiag(sortById(response));
            let length = 0;
            response.forEach((category) => {
                length = length + 1;
                category.questions.forEach(() => length = length + 1);
            });
            setProgressionTotal(length);
        });
    }, []);

    function goToCategory(category) {
        setCategory(category);
    }

    const updateAutodiagResponse = response => {
        const newResponse = autodiagResponse;
        newResponse[category] = response;
        setAutodiagResponse(newResponse);

        if (category === autodiag.length-1) {
            let data = [];
            for (const category in autodiagResponse) {
                for (const question in autodiagResponse[category]) {
                    data = data.concat(autodiagResponse[category][question]);
                }
            }
            API_POST('autodiag', 'POST', {answers: data})
                .then(response => {
                    if (response.error) {
                        setMessage(response.details);
                    } else {
                        setMessage();
                        setCategory('done');
                        setProfile(response);
                    }
                });
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
                            { category > 0 ? <p onClick={() => goToCategory(category-1)} className="link"><i className="las la-arrow-left"></i> Catégorie précédente</p> : '' }
                            { autodiag[category] ?
                            <Category category={autodiag[category]} index={category} categoriesLength={autodiag.length} progressLength={progressionTotal} onNextCategory={updateAutodiagResponse} currentAnswers={autodiagResponse[category]} />
                            : '' }
                            { message ? <p className="error message">{message}</p> : '' }
                            { category === 'done' ?
                            <Result profile={profile}/>
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