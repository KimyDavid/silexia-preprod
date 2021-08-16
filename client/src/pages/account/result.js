import React, { useEffect, useState } from 'react';
import Constants from '../../constants/Config';
import useToken from '../../functions/useTokenAccount';
import {Radar} from 'react-chartjs-2'

const AutodiagResult = () => {
    const { token, setToken } = useToken();
    const [ autodiag, setAutodiag ] = useState();

    let categories = [];

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
    }

    const data = {
      labels: ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5'],
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
          data: [2, 5, 3, 8, 1]
        },
      ]
    }

    const options = {
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h2 className="mt-4 mb-0 h3">Bonjour {token.first_name} !</h2>
                        <p>Voici le résultat de votre diagnostic</p>
                        <Radar
                            data={data}
                            options={options}
                        />
                    </div>
                    <div className="col-4">
                        <div className="account-sidebar">
                            <h3 className="account-sidebar-title mt-4 mb-0 h3"><strong className="text-primary ">Nos recommendations</strong> à partir de votre diagnostic</h3>
                            <div className="account-sidebar-card shadow p-3">
                                Thème 1 : Recommendation
                            </div>
                            <div className="account-sidebar-card shadow p-3">
                                Thème 1 : Recommendation
                            </div>
                            <div className="account-sidebar-card shadow p-3">
                                Thème 1 : Recommendation
                            </div>
                            <div className="account-sidebar-card shadow p-3">
                                Thème 1 : Recommendation
                            </div>
                            <div className="account-sidebar-card shadow p-3">
                                Thème 1 : Recommendation
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AutodiagResult;