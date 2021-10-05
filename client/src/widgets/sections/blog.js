import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_GET } from '../../functions/apiRequest';
import OwlCarousel from 'react-owl-carousel';

const Blog = ({currentArticle = null}) => {
  const [articles, setArticles] = useState();
  const [loaded, setLoaded] = useState(false);
    
  const responsive = {
      0:{
          items:1,
      },
      768:{
          items:3,
      },
  }

  const current = currentArticle;
  
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
          <>
            {/* Blog Card */}
            { loaded && articles ? 
              <OwlCarousel className="owl-carousel" autoplayHoverPause={true} dots={false} nav={true} autoplay={true} margin={20} responsive={responsive}>
                { articles.slice(0, 6).map((item, i) => {
                  let abstract = document.createElement('div');
                  abstract.innerHTML = item['text'];

                  return (
                    <div key={i}>
                      <Link className="link-title" to={{pathname: `/blog/${item['id']}`, state: { items: item }}}>
                        <div className="card border-0 p-3">
                        <img className="card-img-top shadow rounded" src={item['image']} alt={item['title']} />
                          <div className="card-body p-0 pt-3">
                            <h2 className="h5 font-weight-medium">{item['title']}</h2>
                            <div className="mb-2 abstract abstract-3 text-muted">{ abstract.innerText }</div>
                            <div className="d-flex justify-content-end align-items-center">En savoir plus</div>
                          </div>
                        </div>
                        </Link>
                      </div> )
                    })
                  }
                </OwlCarousel>
              : '' }
              <div className="w-100 d-flex justify-content-center mt-6 mt-md-0">
              <Link className="btn btn-primary" to={"blog"}>Voir tous les articles</Link>
              </div>
            {/* End Blog Card */}
          </>
        );
}

export default Blog;