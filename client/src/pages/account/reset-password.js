import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import ResetPasswordForm from '../../widgets/account/reset-password';
import { API_POST } from '../../functions/apiRequest';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/Pageheading';

const ResetPassword = () => {
    const params =  new URLSearchParams(window.location.search);
    const key = params.get('key');

    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const [profile, setProfile] = useState();

    useEffect(() => {
        API_POST('reset_password', 'POST', {'key': key}, false).then(result => {
            console.log(result);
            if (result.error) {
                setError(true);
            } else {
                setVerified(true);
                setProfile(result);
            }
        });
    }, [])

        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative py-6">
                    <Pageheading foldername={"Compte"} title={"Réinitialisation du mot de passe"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*login start*/}
                    <section>
                        <Container>
                            <Row  className="justify-content-center">
                                <Col className="col-5">
                                    { verified ?
                                        <ResetPasswordForm profile={profile} resetKey={key} />
                                    :
                                        error ? 
                                            <div className="text-center">
                                                <p className="lead">Lien de réinitialisation de mot de passe obsolète. Merci de repasser par le formulaire de <Link className="link" to="/forgot-password">mot de passe oublié</Link>.</p>
                                                <p><Link className="btn btn-primary" to="/profile">Retour à la connexion</Link></p>
                                            </div> : ''
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    {/*login end*/}
                </div>
                {/*body content end*/}
            </div>
        );
}

export default ResetPassword;