import React, { useState, useEffect } from 'react';
import Pageheading from '../../widgets/Pageheading';
import { API_GET } from '../../functions/apiRequest';
import { useTranslation } from "react-i18next";

const Page = ({slug}) => {
    const [content, setContent] = useState('');
    const [loaded, setLoaded] = useState(false);
    const { t } = useTranslation('admin');

    useEffect(() => {
        window.scrollTo(0, 0)
        API_GET(`administrative/${slug}`).then(response => setContent(response));
        setLoaded(true);
    }, []);

        return (
            <div>
                { loaded ?
                    <>
                        <section className="position-relative">
                            <Pageheading foldername={"Légal"} title={t(`administrative.pages.${content.type}`)} />
                        </section>
                        <div className="page-content">
                            <section>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 cms" dangerouslySetInnerHTML={{__html: content.text}}>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </>
                : '' }
            </div>
        );
}

export default Page;