import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import questions from '../../constants/Faq';

const Faq = ({setShowAutodiag, token}) =>  {
        return (
            <>
                <Accordion className="text-left">
                    { questions.map((faq, i) => (
                        <AccordionItem key={i} className="accordion__item mb-2">
                            <AccordionItemTitle className="border mb-0 card-header bg-white text-primary">
                                <h6 className="mb-0">
                                    <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">{ faq.question }</a>
                                </h6>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <div className="text-white">{ faq.answer }</div>
                            </AccordionItemBody>
                        </AccordionItem>
                    )) }
                </Accordion>
                
                {token ? '' : <a onClick={() => setShowAutodiag(true)} className="btn btn-secondary mt-5 ml-auto">Répondre au questionnaire</a> }
                
            </>
        );
}

export default Faq;