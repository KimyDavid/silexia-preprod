import React from 'react';

const Steps = ({steps, currentStep, goStep}) => {
    return (
        <ul className="autodiag-steps">
            { steps ? steps.map((step, i) => (
                <li key={i} onClick={() => goStep(i)} className={`autodiag-step ${i === currentStep ? 'autodiag-step--active' : ''}`}>{i+1} <span>{step.label}</span></li>
            )) : '' }
        </ul>
    );
}

export default Steps;