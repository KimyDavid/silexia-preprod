import React, { useEffect } from 'react';
import Answer from './answer';
import { sortByOrder } from '../../functions/sort';

const Question = ({question, index, emitResponses, currentChoices = []}) => {
    let choices = currentChoices;

    function onAnswerChange(e) {
        const answer = e.target;
        const newChoices = choices;
        if (answer.checked) {
            newChoices.push(answer.id);
        } else {
            newChoices.splice(newChoices.indexOf(answer.id), 1);
        }
        emitResponses(index, newChoices);
    }

    return (
        <>
            <div className="autodiag-question">
                <p className="autodiag-question-title">{question.label}</p>
                <p className="text-center">{question.description} <em>(Plusieurs réponses possibles)</em></p>
                <ul className="autodiag-choices text-center">
                    { question.answers ? sortByOrder(question.answers).map((answer, j) => (
                        <Answer key={j} answer={answer} onChange={onAnswerChange} currentChoices={choices} />
                    )) : '' }
                </ul>
            </div>
        </>
    );
}

export default Question;