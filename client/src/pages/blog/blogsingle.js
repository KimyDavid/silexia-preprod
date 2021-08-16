import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import Pageheading from '../../widgets/Pageheading';
import Blog from '../../widgets/sections/blog';

const BlogSingle = () => {
    const [article, setArticle] = useState({
        title: '',
        text: '',
        image: '',
    });

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setArticle(location.state.items);
    });

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
            <Pageheading foldername={"Blog"} title={article.title} />
     
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
            {/*blog start*/}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            {/* Blog Card */}
                                <div className="card border-0 bg-transparent">
                                    <img className="card-img-top shadow rounded" src={article.image} alt="Image" />
                                    <div className="card-body pt-5 px-0">
                                        <h2 className="font-weight-medium">{article.title}</h2>
                                        <p>{article.text}</p>
                                    </div>
    
                                    {/*blog start*/}
                                    <section>
                                        <div className="row align-items-end mb-5">
                                            <div className="col-12">
                                                <h2 className="mt-4 mb-0 h3">Ceci pourrait vous intéresser</h2>
                                            </div>
                                        </div>
                                        <Blog />
                                    </section>
                                    {/*blog end*/}
                                </div>
                            {/* End Blog Card */}
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