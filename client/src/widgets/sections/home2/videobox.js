import React, { Component } from 'react';

import ModalVideo from 'react-modal-video'
import { Spinner, Button } from 'reactstrap';

class Videobox2 extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
        
                <div className="row justify-content-center">
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => this.setState({ isOpen: false })} />
                         
                    <div className="col-12 col-lg-10">
                        <div>
                            {/* Image */}
                            <img src={require(`../../../assets/images/about/07.png`)} className="img-fluid" alt="..." />
                            <div className="video-btn video-btn-pos"> 
                                <a className="play-btn popup-youtube" onClick={this.openModal} ><i className="la la-play" /></a>
                                <div className="spinner-eff">
                                    {/* <div className="spinner-circle circle-1" /> */}
                                    <div className="spinner-circle circle-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         
     
        );
    }
}

export default Videobox2;