import React, { useEffect, useState } from 'react';
import Constants from '../../constants/Config';
import useToken from '../../functions/useTokenAccount';
import {Radar} from 'react-chartjs-2'
import Modal from '../../widgets/common/modal';

const AutodiagResult = () => {
    const { token, setToken } = useToken();
    const [ autodiag, setAutodiag ] = useState();

    console.log(autodiag);

    // Modal handler
    const [showDetails, setShowDetails] = useState(false);

    let categories = [];
    let scoreTotal = 0;
    let scoreUser = 0;
    let scores = [];

    useEffect(() => {
        fetch(`${Constants.api_url}/autodiag/user/1`)
            .then(res => res.json())
            .then(result => {
                setAutodiag(result);
            })
    }, [])

    if (autodiag) {
        categories = autodiag.map((category) => {
            return category.label;
        });

        scores = autodiag.map((category) => {
            return category.score_user ?? 0;
        });

        autodiag.forEach((category) => {
            scoreTotal = scoreTotal + category.score_total;
            scoreUser = scoreUser + category.score_user;
            console.log(category);
        });
    }

    const data = {
      labels: categories,
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
          data: scores
        },
      ]
    }

    const options = {
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center h4 mt-5 shadow py-3 font-w-5 account-score">Votre score global est <strong className="text-primary">{scoreUser}/{scoreTotal}</strong>
                        <i className="action-score-infos las la-question-circle" onClick={ () => setShowDetails(true) }></i></h2>
                    </div>
                    <div className="col-12 col-lg-7">
                        <h3 className="mt-4 mb-0">Bonjour {token.first_name} !</h3>
                        <p className="mb-5">Voici le résultat de votre diagnostic</p>
                        <Radar
                            data={data}
                            options={options}
                        />
                        <p className="text-center mt-5">Détails de vos résultats par catégories.</p>
                        <div className="account-score-categories">
                            { categories.map((category, i) => (
                                <div key={i} className="account-score-category shadow">
                                    <p className="text-primary">{category}</p>
                                    <p>{autodiag[i].tier ? autodiag[i].tier.text : ''}</p>
                                </div>
                            )) }
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="account-sidebar bg-primary p-4">
                            <h3 className="my-2 h5 font-w-5 text-white"><strong>Vos actions</strong> à mettre en oeuvre</h3>
                            { categories.map((category, i) => (
                                <div key={i}>
                                    <div className="account-sidebar-card p-3 bg-white">
                                        <p>{ category }</p>
                                        <div className="account-sidebar-progressbar">
                                            <span style={{width: 10 + '%'}}>10%</span>
                                        </div>
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
                body="Woohoo, you're reading this text in a modal!"
                closeButton="Entendu !"
                show={showDetails}
                setShow={setShowDetails}
            />
        </>
    )
}

export default AutodiagResult;