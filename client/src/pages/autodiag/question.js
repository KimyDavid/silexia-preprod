import React from 'react';
import Answer from './answer';
import { sortByOrder } from '../../functions/sort';

const Question = ({question, index, emitResponses, currentChoices = []}) => {
    const choices = [];

    console.log(currentChoices);

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
                <p className="autodiag-question-title">Question {index + 1} : {question.label}</p>
                <p><em>Plusieurs réponses possibles</em></p>
                <ul className="autodiag-choices text-center">
                    { question.answers ? sortByOrder(question.answers).map((answer, j) => (
                        <Answer key={j} answer={answer} onChange={onAnswerChange} isChecked={currentChoices.contains(answer.id)} />
                    )) : '' }
                </ul>
            </div>
        </>
    );
}

export default Question;