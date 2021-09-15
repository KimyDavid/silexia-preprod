import React from 'react';
import {Link} from 'react-router-dom';
import ResetPasswordForm from '../../widgets/account/reset-password';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/Pageheading';

const ForgotPassword = ({userID}) => {
    console.log(userID)
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
                                    { userID ?
                                        <ResetPasswordForm userID={userID} />
                                    : 
                                        <div className="text-center">
                                            <p className="lead">Lien de réinitialisation de mot de passe obsolète. Merci de repasser par le formulaire de <Link className="link" to="/forgot-password">mot de passe oublié</Link>.</p>
                                            <p><Link className="btn btn-primary" to="/profile">Retour à la connexion</Link></p>
                                        </div>
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

export default ForgotPassword;