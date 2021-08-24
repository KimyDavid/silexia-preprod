import React, { useState } from 'react';

import Question from './question';

const Category = ({category, index, categoriesLength, onNextCategory}) => {
    const progress = ((index+1)/categoriesLength);
    const [question, setQuestion] = useState(0);
    const [answers, setAnswers] = useState({});

    function goToQuestion(question) {
        setQuestion(question);
    }

    function nextStep() {
        if (question === category.questions.length-1) {
            setQuestion(0);
            onNextCategory(answers);
        } else {
            setQuestion(question+1);
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
                    { question > 0 ? <p onClick={() => goToQuestion(question-1)} className="link">Question précédente</p> : '' }
                    <Question question={category.questions[question]} index={question} emitResponses={handleQuestionResponse} currentChoices={answers[question]} />
                </div>
                <footer className="autodiag-footer row align-items-center justify-content-between">
                    <div className="col-12 col-md-9">
                        <div className="autodiag-progressbar"><span style={{transform: 'scaleX(' + progress + ')'}}></span></div>
                    </div>
                        <div className="col-12 col-md-3 mt-2 mt-md-0 d-flex justify-content-end">
                        <button onClick={nextStep} className="autodiag-next btn btn-primary btn-small shadow w-100">{ (progress === 1) ? 'Voir les résultats' : 'Prochaine question'}</button>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Category;