import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SignUpForm from '../../widgets/account/signup';
import Pageheading from '../../widgets/Pageheading';

const Profile = ({token}) => {
        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative py-6">
                    <Pageheading foldername={"Compte"} title={"Modifier mes informations"} />
                </section>
                {/*body content start*/}
                <div className="page-content">
                    {/*login start*/}
                    <section className="register">
                        <Container>
                            <SignUpForm profile={token} />
                        </Container>
                    </section>
                    {/*login end*/}
                </div>
                {/*body content end*/}
            </div>
        );
}

export default Profile;