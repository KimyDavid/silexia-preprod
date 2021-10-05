import React, { useState, useEffect } from 'react';

import Question from './question';

const Category = ({category, index, categoriesLength, progressLength, onNextCategory, currentAnswers = {}}) => {
    const [progress, setProgress] = useState(index+1);
    const [question, setQuestion] = useState(0);
    const [answers, setAnswers] = useState(currentAnswers);
    const [error, setError] = useState();

    console.log('progress : ' + progress);

    useEffect(() => {
        setAnswers(currentAnswers);
        if (index !== 0) {
            const diff = category.questions.length;
            console.log(diff);
            setProgress(progress + index - diff);
        }
    }, [index]);

    function goToQuestion(_question) {
        const diff = question - _question;
        setQuestion(_question);
        setProgress(progress - diff);
    }

    function nextStep() {
        if (!answers[question] || answers[question].length < 1) {
            setError('Merci de sélectionner au moins une réponse');
        } else {
            setError();
            if (question === category.questions.length-1) {
                setQuestion(0);
                onNextCategory(answers);
            } else {
                setQuestion(question+1);
            }
            setProgress(progress + 1);
        }
    }

    const handleQuestionResponse = (questionId, answer) => {
        const newQuestionAnswer = answers;
        newQuestionAnswer[questionId] = answer;
        setAnswers(newQuestionAnswer);
    };

    return (
        <>
            <div className="autodiag-container mb-5">
                <header className="autodiag-header row align-items-center justify-content-between">
                    <div className="col-9">
                        <p className="autodiag-category-title"><strong>{category.label}</strong></p>
                        <p className="autodiag-category-description"><strong>{category.description}</strong></p>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <p className="autodiag-number">{ index+1 }/{categoriesLength}</p>
                    </div>
                </header>
                <div className="autodiag-body">
                    { question > 0 ? <p onClick={() => goToQuestion(question-1)} className="link"><i className="las la-arrow-left"></i> Question précédente</p> : '' }
                    { error ? <p className="error message">{error}</p> : '' }
                    <Question question={category.questions[question]} index={question} emitResponses={handleQuestionResponse} currentChoices={answers[question]} />
                </div>
                <footer className="autodiag-footer row align-items-center justify-content-between">
                    <div className="col-12 col-md-9">
                        <div className="autodiag-progressbar"><span style={{transform: 'scaleX(' + (progress/progressLength) + ')'}}></span></div>
                    </div>
                        <div className="col-12 col-md-3 mt-2 mt-md-0 d-flex justify-content-end">
                        <button onClick={nextStep} className="autodiag-next btn btn-primary btn-small shadow w-100">{ (progress/progressLength === 1) ? 'Voir les résultats' : 'Prochaine question'}<i className="las la-arrow-right"></i></button>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Category;