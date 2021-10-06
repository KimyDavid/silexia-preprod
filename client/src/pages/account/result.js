import React, { useEffect, useState } from 'react';
import Constants from '../../constants/Config';
import useToken from '../../functions/useTokenAccount';
import {Radar} from 'react-chartjs-2'
import Modal from '../../widgets/common/modal';

const AutodiagResult = () => {
    const { token, setToken } = useToken();
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
            return category.score_user;
        });
    }

    const data = {
      labels: categoriesLabel,
      datasets: [
        {
          label: 'Votre score',
          backgroundColor: '#cc4d4435',
          borderColor: '#cc4c44',
          pointBackgroundColor: '#cc4d4435',
          pointBorderColor: '#cc4c44',
          pointHoverBackgroundColor: '#cc4c44',
          pointHoverBorderColor: '#cc4c44',
          borderWidth: 1,
          data: graphScores
        },
      ]
    }

    const options = {
        scales: {
            r: {
                beginAtZero: true,
                suggestedMax: result ? result.global.score_total : 60
            }
        }
    }

    const displayDetailsModal = (category) => {
        setDetails({
            'category': category.label,
            'description': category.tier ? category.tier.text : '',
            'flag': category.flags ? category.flags : ''
        });
        setShowDetails(true);
    }
    
    return (
        <>
            { result ?
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-center h4 mt-5 shadow py-3 font-w-5 account-score" onClick={ () => setShowGlobal(true) }>Votre score global est <strong className="text-primary">{result.global.score_user}/{result.global.score_total}</strong>
                                <i className="action-score-infos las la-question-circle"></i></h2>
                            </div>
                            <div className="col-12 col-lg-7">
                                <h3 className="mt-4 mb-0">Bonjour {token.first_name} !</h3>
                                <p className="mb-5">Voici le résultat de votre diagnostic</p>
                                <Radar
                                    data={data}
                                    options={options}
                                />
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
                                        <div key={i} onClick={() => displayDetailsModal(category)}>
                                            <div className={`account-sidebar-card px-3 py-2 bg-white ${category.flags ? 'warning' : ''}`}>
                                                <span className="account-score-number">{category.score_user ?? '0'}/{category.score_total ?? '0'}</span>
                                                <p className="mb-0"><strong className="text-black">{ category.label }</strong></p>
                                                <p className="abstract abstract-2 mb-0">{ category.tier ? category.tier.text : '' }</p>
                                                { category.flags ? <span className="account-sidebar-card-warning la la-exclamation-triangle"></span> : ''} 
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

                    <Modal 
                        title="Plus d'informations à propos de votre score."
                        body={result.global.tier}
                        closeButton="Entendu !"
                        show={showGlobal}
                        setShow={setShowGlobal}
                    />

                    { details ? 
                    <Modal 
                        title={details.category}
                        body={
                            <>
                                <p>{details.description}</p>
                                { details.flag ? <p className="message warning shadow"><span className="message-icon la la-exclamation-triangle"></span>{details.flag}</p> : '' }
                            </>
                        }
                        closeButton="Entendu !"
                        show={showDetails}
                        setShow={setShowDetails}
                    /> : '' }
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