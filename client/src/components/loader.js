import React, { useEffect } from 'react';

const Loader = () => {
    useEffect(() => {
        return () => {
            document.querySelector('#loader-wrapper').classList.add('loaded');
            document.querySelector('.body').classList.add('loaded');
        }
    }, []);

    return <></>;
}

export default Loader;