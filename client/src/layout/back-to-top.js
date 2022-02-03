import React, { Component } from 'react';

class Scrolltop extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            visible: false,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    ToptoBottom()
    {
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
    componentDidMount() {
        if (window.innerWidth < 768) {
            document.addEventListener('touchstart', this.handleScroll, {passive: true});
        } else {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
    componentWillUnmount() {
        if (window.innerWidth < 768) {
            document.addEventListener('touchstart', this.handleScroll, {passive: true});
        } else {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
    handleScroll() {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        if (scrollTop > 150) {
            this.setState({
                visible: true
            });
        }
        else {
            this.setState({
                visible: false
            });
        }
    }
    render() {
        return (
            <div className={`scroll-top-to-bottom ${(this.state.visible) ? 'scroll-visible' : '' }`} onClick={this.ToptoBottom}>
                <p className="smoothscroll" >
                    <i className="las la-angle-up" />
                </p>
            </div>
        );
    }
}

export default Scrolltop;