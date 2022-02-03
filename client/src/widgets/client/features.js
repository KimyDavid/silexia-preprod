import React, {  } from 'react';
import { Link } from 'react-router-dom';

const FeatureServices = ({list}) => {
        return (
            <div className="row align-items-center">
                {list.map((_item, i) => 
                    <div key={i} className="col-xs-12 col-md-6 col-lg-4 mb-lg-0">
                        <div className={`px-4 py-3 py-md-7 rounded hover-translate text-center`}>
                            <div>
                                { _item.image ?
                                    <img className="img-fluid w-75" src={require(`../../assets/images/about/${_item.image}.svg`)} alt={_item.title} loading="lazy"/>
                                : '' }
                            </div>
                            <h5 className="mt-4 mb-3">{_item.title}</h5>
                            <p>{_item.description}</p>
                        </div>
                    </div>
                )}
            </div>
        );
}

export default FeatureServices;