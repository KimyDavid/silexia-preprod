import React, { Component } from 'react';
import Constants from '../../constants/Config';
import Pageheading from '../../widgets/Pageheading';
import { Link } from 'react-router-dom';

class Bloglisting1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)

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
      <div>
        {/*hero section start*/}
        <section className="position-relative">
        <Pageheading foldername={"Blog"} title={"Nos articles"} />
          
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row">
                  {/* Blog Card */}

                  {items.slice(0, 3).map((item, i) => (
                      <>
                      <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                        <div key={i} className="card border-0 bg-transparent">
                          <Link to={{pathname: `/blog/${item['id']}`, state: { items: item }}}><img className="card-img-top shadow rounded" src={item['image']} alt={item['title']} /></Link>
                          <div className="card-body pt-5">
                            <h2 className="h5 font-weight-medium">
                              <Link className="link-title" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>{item['title']}</Link>
                            </h2>
                            <div dangerouslySetInnerHTML={{__html: item['text']}}></div> 
                          </div>
                        </div>

                          <hr className="my-8" />
                        </div>
                      </>
                    ))}
                  {/* End Blog Card */}

              </div>
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Bloglisting1;