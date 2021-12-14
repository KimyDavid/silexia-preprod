import React, { useEffect } from 'react';
import PageHeading from '../widgets/Pageheading';

const Client = ({content}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
                <>
                    <section className="position-relative py-6">
                            <PageHeading title={content.title} />
                    </section>
                    <div className="page-content">
                        
                    </div>
                </>

    );
}

export default Client;