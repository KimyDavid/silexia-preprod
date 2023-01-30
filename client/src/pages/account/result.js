import React, { useEffect, useState } from 'react';
import Constants from '../../constants/Config';
import {Radar} from 'react-chartjs-2'
import Modal from '../../widgets/common/modal';
import Blog from '../../widgets/sections/blog';

const AutodiagResult = ({token}) => {
    const [ result, setResult ] = useState();
    const [ details, setDetails ] = useState();

    // Modal handler
    const [showGlobal, setShowGlobal] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    let categoriesLabel = [];
    let graphScores = [];

    useEffect(() => {
        fetch(`${Constants.api_url}/autodiag/user/${token.id}`)
            .then(res => res.json())
            .then(result => {
                setResult(result);
            })
    }, [])

    if (result) {
        categoriesLabel = result.autodiag.map((category) => {
            return category.label;
        });
        graphScores = result.autodiag.map((category) => {
            return Math.round((category.score_user/category.score_total)*100);
        });
    }

    const data = {
      labels: categoriesLabel,
      datasets: [
        {
          label: 'Votre score',
          backgroundColor: '#cc4d4435',
          borderColor: '#dd3e3e',
          pointBackgroundColor: '#cc4d4435',
          pointBorderColor: '#dd3e3e',
          pointHoverBackgroundColor: '#dd3e3e',
          pointHoverBorderColor: '#dd3e3e',
          borderWidth: 1,
          data: graphScores
        },
      ]
    }

    const options = {
        scales: {
            r: {
                beginAtZero: true,
                suggestedMax: 100
            }
        }
    }

    const displayDetails = (id) => {
        const card = document.querySelector(`.account-sidebar-card-${id}`);
        card.classList.toggle('active');
    }
    
    return (
        <>
            { result ?
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-center h4 mt-5 shadow py-3 font-w-5 account-score" onClick={ () => setShowGlobal(true) }>Votre score global est de <strong className="text-primary">{Math.round((result.global.score_user/result.global.score_total)*100)}%</strong>
                                <i className="action-score-infos las la-question-circle"></i></h2>
                            </div>
                            <div className="col-12 col-lg-7">
                                <h3 className="mt-4 mb-0">Bonjour {token.first_name} !</h3>
                                <p className="mb-5">Voici le résultat de votre diagnostic</p>
                                <div className="account-graph">
                                    <Radar
                                        data={data}
                                        options={options}
                                    />
                                </div>
                                <p className="text-center mt-5"></p>
                                {/* <div className="account-score-categories">
                                    { categories.map((category, i) => (
                                        <div key={i} className="account-score-category shadow">
                                            <p className="text-primary">{category}</p>
                                            <p>{result.autodiag[i].tier ? result.autodiag[i].tier.text : ''}</p>
                                        </div>
                                    )) }
                                </div> */}
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="account-sidebar bg-primary p-4">
                                    <h3 className="my-2 h5 font-w-5 text-white"><strong>Détails</strong> de vos résultats par catégories.</h3>
                                    <p className="text-white">Cliquez sur les catégories pour obtenir plus de détails.</p>
                                    { result.autodiag.map((category, i) => (
                                        <div key={i} onClick={() => displayDetails(i)} className={`account-sidebar-card-${i}`}>
                                            <div className={`account-sidebar-card px-3 py-2 bg-white ${category.flags.length > 0 ? 'warning' : ''}`}>
                                                { category.flags.length > 0 ? <span className="account-sidebar-card-warning la la-exclamation-triangle"></span> : ''}
                                                <span className="account-score-number">{Math.round((category.score_user/category.score_total)*100)}%</span>
                                                <p className="mb-0"><strong className="text-black">{ category.label }</strong></p>
                                                <p className="account-sidebar-card-abstract abstract abstract-2 mb-0">{ category.tier ? category.tier.text : '' }</p>
                                                <div className="account-sidebar-card-details">
                                                    { category.flags.map((_flag, i) => 
                                                        <p key={i} className="message warning shadow"><span className="message-icon la la-exclamation-triangle"></span>{ _flag }</p>
                                                    )}
                                                </div>
                                                {/* <div className="account-sidebar-progressbar">
                                                    <span style={{width: 10 + '%'}}>10%</span>
                                                </div> */}
                                            </div>
                                            
                                            {/* <Modal show={show} onHide={handleClose}/> */}
                                        </div>
                                    )) }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*blog start*/}
                    <section>
                        <div className="container">
                            <div className="row align-items-end mb-5">
                                <div className="col-12 col-md-12 col-lg-8">
                                    <div>
                                        <span className="badge badge-primary-soft p-2"><i className="la la-bold ic-3x rotation" /></span>
                                        <h2 className="mt-4 mb-0 h3">Notre blog dédié à la transition numérique des TPE/PME</h2>
                                    </div>
                                </div>
                            </div>
                            {/* / .row */}
                            <Blog />
                        </div>
                    </section>
                    {/*blog end*/}

                    <Modal 
                        title="Plus d'informations à propos de votre score."
                        body={result.global.tier}
                        closeButton="Entendu !"
                        show={showGlobal}
                        setShow={setShowGlobal}
                    />

                    {/* { details ? 
                    <Modal 
                        title={details.category}
                        body={
                            <>
                                <p>{details.description}</p>
                                { details.flag.map((_flag, i) => 
                                    <p key={i} className="message warning shadow"><span className="message-icon la la-exclamation-triangle"></span>{ _flag }</p>
                                )}
                            </>
                        }
                        closeButton="Entendu !"
                        show={showDetails}
                        setShow={setShowDetails}
                    /> : '' } */}
                </>
            : 
            <div className="autodiag-loading">
                <p>Chargement de vos résultats</p>
                <div className="autodiag-loading-logo">
                    <div className="loader clear-loader">
                        <span />
                    </div>
                </div>
            </div> }
        </>
    )
}

export default AutodiagResult;