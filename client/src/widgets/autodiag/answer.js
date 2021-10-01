import React, { useState, useEffect } from 'react';

const Answer = ({answer, currentChoices, onChange}) => {
    const [checked, setChecked] = useState(currentChoices.includes(`${answer.id}`));

    useEffect(() => {
        setChecked(currentChoices.includes(`${answer.id}`));
    }, [currentChoices]);

    return (
        <>
            <li className="autodiag-choice-box">
                <input onChange={(e) => {
                    setChecked(e.target.checked);
                    onChange(e);
                }} type="checkbox" className="autodiag-choice" id={answer.id} checked={checked}/>
                <label htmlFor={answer.id} className="autodiag-choice-label">{answer.label}</label>
            </li>
        </>
    );
}

export default Answer;