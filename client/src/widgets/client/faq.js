import React, { useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

const Faq = ({questions}) =>  {
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
                            "text": item.short_answer
                        }
                    }
                )
            });
        }, []);

        return (
            <>
                <Accordion className="text-left">
                    { questions.map((faq, i) => (
                        <AccordionItem key={i} className="accordion__item mb-2">
                            <AccordionItemTitle className="border mb-0 card-header bg-light text-primary">
                                <h6 className="mb-0">
                                    <a className="text-dark" data-toggle="collapse" data-parent="#accordion" aria-expanded="true">{ faq.question }</a>
                                </h6>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <div dangerouslySetInnerHTML={{__html: faq.answer}}></div>
                            </AccordionItemBody>
                        </AccordionItem>
                    )) }
                </Accordion>

                <script type="application/ld+json">
                    { JSON.stringify(schemaGoogle) }
                </script>
            </>
        );
}

export default Faq;