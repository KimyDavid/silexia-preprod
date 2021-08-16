import React, { useEffect, useState } from 'react';
import Pageheading from '../../widgets/Pageheading';
import useToken from '../../functions/useTokenAccount';
import { Link } from 'react-router-dom';
import Constants from '../../constants/Config';

const Profile = () => {
    const { token, setToken } = useToken();
    const [sectors, setSectors] = useState([]);
    const [types, setTypes] = useState([]);
    const [sizes, setSizes] = useState([]);

    useEffect(() => {
      fetch(`${Constants.api_url}/sectors`)
        .then(res => res.json())
        .then(
          (result) => {
            setSectors(result);
          },
        )
      
      fetch(`${Constants.api_url}/types`)
        .then(res => res.json())
        .then(
          (result) => {
            setTypes(result);
          },
        )
        
      fetch(`${Constants.api_url}/sizes`)
        .then(res => res.json())
        .then(
          (result) => {
            setSizes(result);
          },
        )
    }, []);
    
        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative">
                    <Pageheading title={"Mon compte"} />
                </section>
                {/*body content start*/}
                <div className="page-content">
                    <div className="container">
                        <h2>Bonjour {token.first_name} !</h2>
                        <p>Gérez ci-dessous les paramètres et informations de votre compte.</p>
                        <h3 className="mt-5">Mes informations</h3>
                        <div className="row">
                            <div className="col-5">
                                <div className="card shadow my-3 border-0">
                                    <div className="card-body">
                                        <p><strong>{token.first_name} {token.last_name}</strong></p>
                                        <p className="m-0"><i className="la la-envelope mr-3" />{token.email}</p>
                                        <p className="m-0"><i className="la la-phone mr-3" />{token.phone}</p>
                                        <p><i className="la la-building mr-3" />{token.function}, {token.company}</p>
                                        <p className="m-0">Type d'entreprise : {types[token.type]?.label }</p>
                                        <p className="m-0">Taille d'entreprise : {sizes[token.size]?.label }</p>
                                        <p className="m-0">Secteur d'entreprise : {sectors[token.sector]?.label }</p>
                                    </div>
                                </div>
                                <Link to="/profile/edit" className="btn btn-primary shadow mt-2">Modifier mes informations</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*body content end*/}
            </div>
        );
}

export default Profile;