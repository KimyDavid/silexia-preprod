import React from 'react';

const Answer = ({answer, onChange}) => {
    return (
        <>
            <li className="autodiag-choice-box">
                <input onChange={onChange} type="checkbox" className="autodiag-choice" id={answer.id} />
                <label htmlFor={answer.id} className="autodiag-choice-label">{answer.label}</label>
            </li>
        </>
    );
}

export default Answer;