import React, { useState, useEffect } from 'react'
import { API_GET } from '../../functions/apiRequest';
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import useToken from '../../functions/useTokenAdmin';

import SectionTitle from '../../components/section-title'
import Breadcrumb from '../../components/breadcrumbs'
import Widget from '../../components/widget'

import { useTranslation } from "react-i18next";

const ListElement = ({ slug }) => {
    const {token, setToken} = useToken();
    const { t } = useTranslation('admin');
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(false);

    const breadcrumbs = [
        { title: 'Dashboard', url: '/admin', last: false },
        { title: t(`users.label`), url: `/admin/users`, last: true },
    ]

    useEffect(() => {
        setLoading(true)
        API_GET(slug).then(response => {
            console.log(response);
            if (response.error) {
                setToken();
            } else {
                setLoading(false)
                console.log(response);
                setItems(response)
            }
        });
    }, []);

    return (
        <>
            <Breadcrumb items={ breadcrumbs } home={ true } icon="chevron" />

            <SectionTitle title={ t(`users.label`) } subtitle={ t(`users.all`) } />

            <Widget>
                { items ?
                    <table className={`table no-border striped ${loading ? 'loading' : '' }`}>
                        <thead>
                            <tr> 
                                <th>Nom</th>
                                <th>Email</th>
                                {/* <th>Téléphone</th> */}
                                <th>Score</th>
                            </tr> 
                        </thead>
                        <tbody> 
                            { items.map((item, i) => ( 
                                <tr key={i}> 
                                    <td>{ item.user.first_name } { item.user.last_name }</td>
                                    <td>{ item.user.email ?? '' }</td>
                                    {/* <td>{ item.user.phone ?? '' }</td> */}
                                    <td>{ item.score_user_total }/{ item.score_total }</td>
                                    <td className="text-right">
                                        <Link className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised"
                                        title={t(`users.detail`)} to={ { pathname: `/admin/users/${item.user.id}`, state: { elem: item } } }>
                                        <FiUser className = "stroke-current" /></Link>
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