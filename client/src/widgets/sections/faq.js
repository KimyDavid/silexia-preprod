import React, { useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import questions from '../../page_content/Faq';

const Faq = ({setShowAutodiag, token}) =>  {
    const schemaGoogle = {
        "@context":"https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    }

    useEffect(() => {
        questions.forEach((item, i) => {
            schemaGoogle.mainEntity.push(
                {
                    "@type":"Question","name": item.question,
                    "acceptedAnswer": {
                        "@type":"Answer",
                        "text": item.answer
                    }
                }
            )
        });

        document.querySelector('#faq-section-google-schema').append(JSON.stringify(schemaGoogle));
    }, []);

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
                                <div>{ faq.answer }</div>
                            </AccordionItemBody>
                        </AccordionItem>
                    )) }
                </Accordion>

                <script id="faq-section-google-schema" type="application/ld+json">
                </script>
                
                {token ? '' : <a onClick={() => setShowAutodiag(true)} className="btn btn-secondary mt-5 ml-auto">Répondre au questionnaire</a> }
                
            </>
        );
}

export default Faq;