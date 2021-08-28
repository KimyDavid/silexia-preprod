import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_GET } from '../../functions/apiRequest'

const Blog = ({currentArticle = null}) => {
  const [articles, setArticles] = useState({});
  const [loaded, setLoaded] = useState(false);

  const current = currentArticle
  
  useEffect(() => {
    API_GET('articles').then(result => {
      if (current) {
        result.splice(result.indexOf(result.find((x) => x.id === current)), 1);
      }
      setArticles(result)
      setLoaded(true);
    });
  }, [ current ]);

  return (
          <div className="row">
            {/* Blog Card */}
            { loaded ? 
              articles.slice(0, 3).map((item, i) => (
                <div key={i} className="col-12 col-lg-4 mb-6 mb-lg-0">
                  <Link className="link-title" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>
                    <div className="card border-0 p-3 shadow">
                    <img className="card-img-top shadow rounded" src={item['image']} alt={item['title']} />
                      <div className="card-body pt-3">
                        <h2 className="h5 font-weight-medium">{item['title']}</h2>
                        {/* <p className="mb-5">{item['text']}</p> */}
                        <div className="d-flex justify-content-end align-items-center">En savoir plus</div>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))
              : '' }
            {/* End Blog Card */}
          </div>
        );
}

export default Blog;