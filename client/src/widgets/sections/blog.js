import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_GET } from '../../functions/apiRequest'

const Blog = ({currentArticle = null}) => {
  const [articles, setArticles] = useState();
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
            { loaded && articles ? 
              articles.slice(0, 3).map((item, i) => {
                let abstract = document.createElement('div');
                abstract.innerHTML = item['text'];

                return (
                  <div key={i} className="col-12 col-lg-4 mb-6 mb-lg-0">
                    <Link className="link-title" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>
                      <div className="card border-0 p-3 shadow">
                      <img className="card-img-top shadow rounded" src={item['image']} alt={item['title']} />
                        <div className="card-body pt-3">
                          <h2 className="h5 font-weight-medium">{item['title']}</h2>
                          <div className="mb-5 abstract abstract-3 text-muted">{ abstract.innerText }</div>
                          <div className="d-flex justify-content-end align-items-center">En savoir plus</div>
                        </div>
                      </div>
                      </Link>
                    </div> )
                  })
              : '' }
              <div className="w-100 d-flex justify-content-center">
              <Link className="btn btn-primary" to={"blog"}>Voir tous les articles</Link>
              </div>
            {/* End Blog Card */}
          </div>
        );
}

export default Blog;