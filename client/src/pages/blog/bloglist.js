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
                <div className="col-12 col-lg-8 mb-6 mb-lg-0">
                  {/* Blog Card */}

                  {items.slice(0, 3).map((item, i) => (
                      <>
                        <div key={i} className="card border-0 bg-transparent">
                          <Link to={{pathname: `/blog/${item['id']}`, state: { items: item }}}><img className="card-img-top shadow rounded" src={item['image']} alt={item['title']} /></Link>
                          <div className="card-body pt-5">
                            <h2 className="h5 font-weight-medium">
                              <Link className="link-title" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>{item['title']}</Link>
                            </h2>
                            <p>{item['text']}</p>
                          </div>
                        </div>

                        <hr className="my-8" />
                      </>
                    ))}
                  {/* End Blog Card */}

                  <div className="row mt-11">
                    <div className="col-12">
                      <nav aria-label="...">
                        <ul className="pagination">
                          <li className="page-item mr-auto"> <Link className="page-link" to="/">Previous</Link>
                          </li>
                          <li className="page-item"><Link className="page-link border-0 rounded text-dark" to="/">1</Link>
                          </li>
                          <li className="page-item active" aria-current="page"> <Link className="page-link border-0 rounded" to="/">2 <span className="sr-only">(current)</span></Link>
                          </li>
                          <li className="page-item"><Link className="page-link border-0 rounded text-dark" to="/">3</Link>
                          </li>
                          <li className="page-item"><Link className="page-link border-0 rounded text-dark" to="/">...</Link>
                          </li>
                          <li className="page-item"><Link className="page-link border-0 rounded text-dark" to="/">5</Link>
                          </li>
                          <li className="page-item ml-auto"> <Link className="page-link" to="/">Next</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>

                {/* <div className="col-12 col-lg-4">
                  <div>
                    <h4 className="mb-5">Recent Stories</h4>
                    <article>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <h5 className="h6">
                            <Link className="link-title" to="/blog-single">Bootsland Perfect Performance landing Page</Link>
                          </h5>
                          <Link className="d-inline-block text-muted small font-w-5" to="/">27 November 2019</Link>
                        </div>
                        <img src={require(`../../assets/images/blog/blog-thumb/01.png`)} className="ml-3" alt="..." />
                      </div>
                    </article>
                    <article className="mt-5">
                      <div className="media align-items-center">
                        <div className="media-body">
                          <h5 className="h6">
                            <Link className="link-title" to="/blog-single">The most powerfull template that make you.</Link>
                          </h5>
                          <Link className="d-inline-block text-muted small font-w-5" to="/">15 November 2019</Link>
                        </div>
                        <img src={require(`../../assets/images/blog/blog-thumb/02.png`)} className="ml-3" alt="..." />
                      </div>
                    </article>
                    <article className="mt-5">
                      <div className="media align-items-center">
                        <div className="media-body">
                          <h5 className="h6">
                            <Link className="link-title" to="/blog-single">A brand for a company is like a reputation person.</Link>
                          </h5>
                          <Link className="d-inline-block text-muted small font-w-5" to="/">5 November 2019</Link>
                        </div>
                        <img src={require(`../../assets/images/blog/blog-thumb/03.png`)} className="ml-3" alt="..." />
                      </div>
                    </article>
                  </div>
                </div> */}
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