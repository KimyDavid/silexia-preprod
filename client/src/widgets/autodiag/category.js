import React, { useState, useEffect } from 'react';

import Question from './question';

const Category = ({currentCategory, index, nbCategoriesTotal, progressTotal, setNextCategory, goPrevCategory, currentAnswers = {}}) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(currentAnswers);
    const [error, setError] = useState();
    const [progression, setProgression] = useState(1);
    const [oldIndex, setOldIndex] = useState(0);

    useEffect(() => {
        setAnswers(currentAnswers);
        if (oldIndex === index+1) {
            setProgression(progression - 1);
            setQuestionIndex(currentCategory.questions.length - 1);
        } else {
            setQuestionIndex(0);
        }
        setOldIndex(index);
    }, [index]);

    function goToQuestion(_question) {
        const diff = questionIndex - _question;
        setQuestionIndex(_question);
        setProgression(progression - diff);
    }

    function nextStep() {
        if (!answers[questionIndex] || answers[questionIndex].length < 1) {
            setError('Merci de sélectionner au moins une réponse');
        } else {
            setError();
            if (questionIndex === currentCategory.questions.length-1) {
                setQuestionIndex(0);
                setNextCategory(answers);
            } else {
                setQuestionIndex(questionIndex+1);
            }

            if (progression < progressTotal) {
                setProgression(progression + 1);
            }
        }
    }

    const prevStep = () => {
        if (questionIndex === 0) {
            goPrevCategory();
        } else {
            goToQuestion(questionIndex-1);
        }
    }

    const handleQuestionResponse = (questionId, answer) => {
        const newQuestionAnswer = answers;
        newQuestionAnswer[questionId] = answer;
        setAnswers(newQuestionAnswer);
    };

    return (
        <>
            <div className="autodiag-container">
                <header className="autodiag-header row align-items-center justify-content-between">
                    <div className="col-9">
                        <p className="autodiag-category-title"><strong>{currentCategory.label}</strong></p>
                        <p className="autodiag-category-description"><strong>{currentCategory.description}</strong></p>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <p className="autodiag-number">{ index+1 }/{nbCategoriesTotal}</p>
                    </div>
                </header>
                <div className="autodiag-body">
                    { progression > 1 ? <p onClick={prevStep} className="btn btn-primary autodiag-question-before"><i className="las la-arrow-left"></i>Précédent</p> : '' }
                    { error ? <p className="error message">{error}</p> : '' }
                    <Question question={currentCategory.questions[questionIndex]} index={questionIndex} emitResponses={handleQuestionResponse} currentChoices={answers[questionIndex]} />
                </div>
                <footer className="autodiag-footer row align-items-center justify-content-between">
                    <div className="col-12 col-lg-9">
                        <p className="text-primary text-center font-w-6 mb-0">{Math.round((progression/progressTotal) * 100)}%</p>
                        <div className="autodiag-progressbar"><span style={{transform: 'scaleX(' + (progression/progressTotal) + ')'}}></span></div>
                    </div>
                    <div className="col-12 col-lg-3 mt-2 mt-lg-0 d-flex justify-content-end">
                        <button onClick={nextStep} className="autodiag-next btn btn-primary btn-small shadow w-100">{ (progression/progressTotal === 1) ? 'Voir les résultats' : 'Prochaine question'}<i className="las la-arrow-right ml-2"></i></button>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Category;