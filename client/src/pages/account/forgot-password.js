import React from 'react';
import ForgotPasswordForm from '../../widgets/account/forgot-password';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/Pageheading';

const ForgotPassword = ({setToken}) => {
        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative py-6">
                    <Pageheading foldername={"Compte"} title={"Mot de passe oublié"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*login start*/}
                    <section>
                        <Container>
                            <Row  className="justify-content-center">
                                <Col className="col-5">
                                  <ForgotPasswordForm setToken={setToken} />
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