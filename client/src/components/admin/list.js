import React, { useState, useEffect } from 'react'
import { API_GET, API_REMOVE } from '../../functions/apiRequest';
import { Link } from 'react-router-dom'
import { FiDelete, FiEdit } from 'react-icons/fi'
import useToken from '../../functions/useTokenAdmin';

import SectionTitle from '../section-title'
import Breadcrumb from '../breadcrumbs'
import Widget from '../widget'

import { useTranslation } from "react-i18next";

const ListElement = ({ slug, fields, showBreadcrumbs = true }) => {
    const {token, setToken} = useToken();
    const { t } = useTranslation('admin');
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(false);
    const slugTrans = slug.replace('/', '.');

    const breadcrumbs = [
        { title: 'Dashboard', url: '/admin', last: false },
        { title: t(`${slugTrans}.label`), url: `/admin/${slug}`, last: true },
    ]

    useEffect(() => {
        setLoading(true)
        API_GET(slug).then(response => {
            if (response.error) {
                setToken();
            } else {
                setLoading(false)
                setItems(response)
            }
        });
    }, []);

    function deleteItem(id) {
       if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
        API_REMOVE(`${slug}/${id}`);
       }
    }

    return (
        <>
            { showBreadcrumbs ?
            <Breadcrumb items={ breadcrumbs } home={ true } icon="chevron" />
            : '' }

            <Link to = { `/admin/${slug}/new` } className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded float-right">
                <span>{ t(`${slugTrans}.new`) }</span>
            </Link>

            <SectionTitle title={ t(`${slugTrans}.label`) } subtitle={ t(`${slugTrans}.all`) } />

            <Widget>
                { items ?
                    <table className={`table no-border striped ${loading ? 'loading' : '' }`}>
                        <thead>
                            <tr> 
                                { fields.map((field, i) => (
                                    <th key={ i }> { field.name } </th>
                                ))}
                            </tr> 
                        </thead>
                        <tbody> 
                            { items.map((item, i) => ( 
                                <tr key = { i }> 
                                    { fields.map((field, j) => (
                                        <td key={ j }> { item[field.key] } </td>
                                    ))} 
                                    <td className="text-right">
                                        <Link className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised"
                                        title={t(`${slugTrans}.update`)} to={ { pathname: `/admin/${slug}/update/${item['id']}`, state: { elem: item } } }>
                                        <FiEdit className = "stroke-current" /></Link>
                                        <button className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised ml-3"
                                        title={t(`${slugTrans}.delete`)} onClick={() => { deleteItem(item['id']) }}>
                                        <FiDelete className="stroke-current" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                : '' }
            </Widget> 
        </>
    )
}

export default ListElement