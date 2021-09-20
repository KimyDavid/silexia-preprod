import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Parallax } from 'react-parallax';
import Blog from '../../widgets/sections/blog';

const BlogSingle = () => {
    const [article, setArticle] = useState({});
    const [loaded, setLoaded] = useState(false);

    const { state } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setArticle(state.items);
        setLoaded(true);
    }, [state]);

    return (
        <div>
            {/*body content start*/}
            <div className="page-content">
                <Parallax bgImage={article.image} bgImageAlt={article.title} strength={200}>
                    <div className="article-heading">
                        <h2 className="font-w-5 article-title">{article.title}</h2>
                    </div>
                </Parallax>
            {/*blog start*/}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            { loaded ?
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-body pt-5 px-0">
                                            <div className="cms" dangerouslySetInnerHTML={{__html: article.text}}></div>
                                        </div>
        
                                        {/*blog start*/}
                                        <section>
                                            <div className="row align-items-end mb-5">
                                                <div className="col-12">
                                                    <h2 className="mt-4 mb-0 h3">Ceci pourrait vous intéresser</h2>
                                                </div>
                                            </div>
                                            <Blog currentArticle={article.id}/>
                                        </section>
                                        {/*blog end*/}
                                    </div>
                            : '' }
                            </div>
                        </div>
                    </div>
                </section>
                {/*blog end*/}
            </div>
            {/*body content end*/}
        </div>
    );
}

export default BlogSingle;