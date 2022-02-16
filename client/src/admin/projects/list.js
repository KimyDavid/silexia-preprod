import React, { useState, useEffect } from 'react'
import { API_GET, API_REMOVE } from '../../functions/apiRequest';
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
        API_GET("partners").then(response => setItems(response));
    }, []);

    function deleteItem(id) {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
            API_REMOVE(`${slug}/${id}`);
        }
    }

    return (
        <>
            <Breadcrumb items={ breadcrumbs } home={ true } icon="chevron" />

            <SectionTitle title={ t(`${slugTrans}.label`) } subtitle={ t(`${slugTrans}.all`) } />

            { items ? items.map((type, i) => {
                if (type.label === 'Projets clients') {
                    return (
                    <Widget key={i}>
                        <Link to={ {pathname: `/admin/${slug}/new`, state: {partner_type: type.id} }} className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white btn-rounded mb-2">
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
                                { type.partners ? type.partners.map((item, i) => ( 
                                    <tr key={ i }> 
                                        { fields.map((field, j) => (
                                            <td key={ j }> { item[field.key] } </td>
                                        ))} 
                                        <td className="text-right">
                                            <Link className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised"
                                            title="Modifier l'article" to={ { pathname: `/admin/${slug}/update/${item['id']}`, state: { partner_type: type.id } } }>
                                            <FiEdit className = "stroke-current" /></Link>
                                            <button className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised ml-3"
                                            title="Supprimer l'article" onClick={() => { deleteItem(item['id']) }}>
                                            <FiDelete className="stroke-current" />
                                            </button>
                                        </td>
                                    </tr>
                                )) : null }
                            </tbody>
                        </table>
                    </Widget> )
                }

            }) : ''}
        </>
    )
}

export default ListElement