import React, { useState, useEffect } from 'react'
import Constants from '../../constants/Config';
import { Link } from 'react-router-dom'
import { FiDelete, FiEdit } from 'react-icons/fi'

import SectionTitle from '../../components/section-title'
import Breadcrumb from '../../components/breadcrumbs'
import Widget from '../../components/widget'

import { useTranslation } from "react-i18next";

const ListElement = ({ slug, fields }) => {
    const { t } = useTranslation('admin');
    const [items, setItems] = useState([]);
    const slugTrans = slug.replace('/', '.');

    const breadcrumbs = [
        { title: 'Dashboard', url: '/admin', last: false },
        { title: t(`${slugTrans}.label`), url: `/admin/${slug}`, last: true },
    ]

    useEffect(() => {
        fetch(`${Constants.api_url}/${slug}`)
            .then(res => res.json())
            .then(
                (result) => setItems(result)
            )
    }, []);

    return (
        <>
            <Breadcrumb items={ breadcrumbs } home={ true } icon="chevron" />

            <SectionTitle title={ t(`${slugTrans}.label`) } subtitle={ t(`${slugTrans}.all`) } />

            { items.map((item, i) => (
                <Widget key={i} title={item.label} description={`Tous les partenaires du groupe : ${item.label}`}>
                    <Link to = { `/admin/${slug}/new` } className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white btn-rounded mb-2">
                        <span>{ t(`${slugTrans}.new`) }</span>
                    </Link>
                    <table className="table no-border striped">
                        <thead>
                            <tr> 
                                { fields.map((field, i) => (
                                    <th key={ i }> { field.name } </th>
                                ))}
                            </tr> 
                        </thead>
                        <tbody>
                            { item.partners ? item.partners.map((item, i) => ( 
                                <tr key={ i }> 
                                    { fields.map((field, j) => (
                                        <td key={ j }> { item[field.key] } </td>
                                    ))} 
                                    <td className="text-right">
                                        <Link className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised"
                                        title="Modifier l'article" to={ { pathname: `/admin/${slug}/update/${item['id']}`, state: { elem: item } } }>
                                        <FiEdit className = "stroke-current" /></Link>
                                        <button className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised ml-3"
                                        title="Supprimer l'article" onClick={() => {  }}>
                                        <FiDelete className="stroke-current" />
                                        </button>
                                    </td>
                                </tr>
                            )) : null }
                        </tbody>
                    </table>
                </Widget> 
            ))}
        </>
    )
}

export default ListElement