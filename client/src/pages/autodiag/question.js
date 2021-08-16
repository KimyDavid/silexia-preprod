import React, { useState } from 'react';
import Answer from './answer';
import { sortByOrder } from '../../functions/sort';

const Question = ({question, index, setAnswers}) => {
    const [choices, setChoices] = useState([]);

    function onAnswerChange(e) {
        const answer = e.target;
        if (answer.checked) {
            setChoices(choices.push(answer.id));
        } 
    }

    return (
        <>
            <div className="autodiag-question">
                <p className="autodiag-question-title">Question {index + 1} : {question.label}</p>
                <p><em>Plusieurs réponses possibles</em></p>
                <ul className="autodiag-choices text-center">
                    { question.answers ? sortByOrder(question.answers).map((answer, j) => (
                        <Answer key={j} answer={answer} onChange={onAnswerChange} />
                    )) : '' }
                </ul>
            </div>
        </>
    );
}

export default Question;