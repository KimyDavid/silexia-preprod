import React, { useEffect } from 'react';
import SigninForm from '../../widgets/account/signin';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/Pageheading';

const SignIn1 = ({setShowAutodiag}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative py-6">
                    <Pageheading foldername={"Compte"} title={"Connexion"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*login start*/}
                    <section>
                        <Container>
                            <Row  className="justify-content-center">
                                <Col className="col-12 col-lg-5">
                                  <SigninForm setShowAutodiag={setShowAutodiag} />
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

export default SignIn1;