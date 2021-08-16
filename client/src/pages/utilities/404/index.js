import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    constructor(props) {
        super(props)
      }
      componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <section className="fullscreen-banner p-0 my-5">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 text-center h-100 d-flex align-items-center">
                            <div className="w-100">
                                <img className="page404-image img-fluid d-inline mb-5" src={require(`../../../assets/images/404.png`)} alt="" />
                                <h2>Cette page n'existe pas</h2>
                                <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                                    <h6>Il est possible que l'URL soit incorrecte ou que cette page n'existe plus.</h6>
                                    <Link className="btn btn-primary mt-3" to="/">Retour à l'accueil</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PageNotFound;