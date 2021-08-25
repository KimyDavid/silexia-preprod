import React, { useState, useEffect } from 'react';
import Pageheading from '../../widgets/Pageheading';
import { API_GET } from '../../functions/apiRequest';
import { useTranslation } from "react-i18next";

const Page = ({slug}) => {
    const [content, setContent] = useState('');
    const { t } = useTranslation('admin');

    useEffect(() => {
        window.scrollTo(0, 0)
        API_GET(`administrative/${slug}`).then(response => setContent(response));
    }, []);

        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative">
                <Pageheading foldername={"Légal"} title={t(`administrative.pages.${content.type}`)} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*privacy start*/}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 cms" dangerouslySetInnerHTML={{__html: content.text}}>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*privacy end*/}
                </div>
                {/*body content end*/}
            </div>

        );
}

export default Page;