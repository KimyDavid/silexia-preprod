import React, { useState, useEffect } from 'react';
import Pageheading from './heading';
import { API_GET, API_POST } from '../../functions/apiRequest';
import { sortByOrder } from '../../functions/sort';
import useAutodiagToken from '../../functions/useAutodiagToken';

import Steps from './steps';
import Category from './category';
import Result from './result';

const Autodiag = () => {
    const { autodiagToken, setAutodiagToken } = useAutodiagToken();
    const [profile, setProfile] = useState();
    const [autodiag, setAutodiag] = useState();
    const [category, setCategory] = useState(0);
    const [autodiagLoading, setAutodiagLoading] = useState(false);

    const [message, setMessage] = useState();

    const [progressionTotal, setProgressionTotal] = useState();

    useEffect(() => {
        API_GET('autodiag').then(response => {
            setAutodiag(sortByOrder(response));
            let nbQuestions = 0;
            response.forEach((category) => {
                nbQuestions = nbQuestions + category.questions.length;
            });

            setProgressionTotal(nbQuestions);
        });
    }, []);

    function goToCategory(category) {
        setCategory(category);
    }

    const updateAutodiagResponse = response => {
        const newResponse = autodiagToken;
        newResponse[category] = response;
        setAutodiagToken(newResponse);

        if ((category === autodiag.length-1)) {
            submitAutodiag();
        } else {
            setCategory(category+1);
        }
    }

    const goPrevCategory = () => {
        setCategory(category-1);
    }

    const submitAutodiag = () => {
        let data = [];
        for (const category in autodiagToken) {
            for (const question in autodiagToken[category]) {
                data = data.concat(autodiagToken[category][question]);
            }
        }
        setAutodiagLoading(true);
        API_POST('autodiag', 'POST', {answers: data})
            .then(response => {
                setAutodiagLoading(false);
                if (response.error) {
                    setMessage(response.details);
                } else {
                    setMessage();
                    setCategory('done');
                    setProfile(response);
                }
            });
        }

    return (
        <>
            <section className="position-relative py-2">
                <Pageheading title={"Autodiagnostic de votre entreprise"} />
                { autodiag ? <p className="autodiag-popup-subtitle lead text-black text-center mb-0">Un questionnaire en {progressionTotal} questions</p> : '' }
            </section>

            {/*body content start*/}
            <section className={`${autodiagLoading ? 'loading' : ''} page-content py-2 d-flex`}>
                <div className="px-0 px-lg-2 d-flex">
                    <div className="autodiag-content col-12 px-0 px-lg-2">
                        { autodiag ? 
                        <>
                            
                            { profile ? '' : 
                                <>
                                    <Steps steps={autodiag} currentStep={category} goStep={goToCategory}/>
                                </>
                            }
                            { autodiag[category] && !autodiagToken.id ?
                                <Category currentCategory={autodiag[category]} 
                                    index={category} 
                                    nbCategoriesTotal={autodiag.length} 
                                    progressTotal={progressionTotal} 
                                    setNextCategory={updateAutodiagResponse}
                                    goPrevCategory={goPrevCategory} 
                                    currentAnswers={autodiagToken[category]} />
                            : '' }
                            {/* { autodiagToken[0] && category === 0 ? <p className="text-center mb-1 font-italic">(Autodiag préremplis grâce à vos précédentes réponses.)</p> : '' } */}
                            { message ? <p className="error message">{message}</p> : '' }
                            { profile ?
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
        </>

        
    );
}

export default Autodiag;