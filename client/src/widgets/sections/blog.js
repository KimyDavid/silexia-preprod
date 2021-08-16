import React, { Component } from 'react';
import Constants from '../../constants/Config';
import { Link } from 'react-router-dom';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  
  componentDidMount() {
    fetch(`${Constants.api_url}/articles`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        },
      )
  }

    render() {
      const { items } = this.state;

        return (
          <div className="row">
            {/* Blog Card */}
            {items.slice(0, 3).map((item, i) => (
              <div key={i} className="col-12 col-lg-4 mb-6 mb-lg-0">
                <Link className="link-title" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>
                  <div className="card border-0 p-3 shadow">
                  <img className="card-img-top shadow rounded" src={item['image']} alt={item['title']} />
                    <div className="card-body pt-3">
                      <h2 className="h5 font-weight-medium">{item['title']}</h2>
                      <p className="mb-5">{item['text']}</p>
                      <div className="d-flex justify-content-end align-items-center">En savoir plus</div>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            {/* End Blog Card */}
          </div>
        );
    }
}

export default Blog;