import React, { Component } from 'react';
import Herosection from '../widgets/legal-generator/herosection';
import Feature from '../widgets/legal-generator/feature';
import Faq from '../widgets/legal-generator/faq';

const LegalGenerator = () => {
  return (
    <>
      <Herosection />
      
      <div className="page-content">
            <Feature />
            
            <section id="legal-generator" className="py-0">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-12 col-lg-10 mb-0">
                            <div className="mb-4 mb-lg-8">
                                <h2 className="mt-3 font-w-6 h3 text-primary">C'est parti pour la génération de vos mentions légales</h2>
                                <p className="lead mb-0">On vous promet que dans moins de 10 minutes, vous aurez reçu vos mentions légales !</p>
                            </div>
                        </div>
                    </div>
                    <iframe id="JotFormIFrame-212733900685053" title="Vos mentions légales" onLoad={window.parent.scrollTo(0,0)} allowtransparency={"true"} allowFullScreen={true} allow="geolocation; microphone; camera" src="https://form.jotform.com/212733900685053?isIframeEmbed=1" style={{minWidth: '100%', height: '650px', border: 'medium none'}} scrolling="no" frameBorder={"0"}></iframe>
                </div>
            </section>
            
            <section id="generator-faq" className="py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-12 col-lg-10 mb-0">
                            <div className="mb-4 mb-lg-8">
                                <h2 className="mt-3 font-w-6 h3 text-primary">Nos réponses à vos questions</h2>
                                <p className="lead mb-0">N'hésitez pas à nous contacter pour toutes informations complémentaires</p>
                            </div>
                            <Faq />
                        </div>
                    </div>
                </div>
            </section>
      </div>
    </>
  )
}

export default LegalGenerator;