import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import { Link } from 'react-router-dom';
import questions from '../../constants/Faq';

class Faq extends Component {
    render() {
        return (
            <>
                <Accordion className="text-left">
                    { questions.map((faq, i) => (
                        <AccordionItem key={i} className="accordion__item mb-2">
                            <AccordionItemTitle className="border mb-0 bg-transparent card-header">
                                <h6 className="mb-0">
                                    <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">{ faq.question }</a>
                                </h6>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <div className="text-muted">{ faq.answer }</div>
                            </AccordionItemBody>
                        </AccordionItem>
                    )) }
                </Accordion>
                
                <Link to="/autodiag" className="btn btn-primary shadow mt-5 ml-auto">Répondre au questionnaire</Link>
            </>
        );
    }
}

export default Faq;