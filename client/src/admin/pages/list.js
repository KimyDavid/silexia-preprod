import React, { useState, useEffect } from 'react'
import Constants from '../../constants/Config';
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'

import SectionTitle from '../../components/section-title'
import Breadcrumb from '../../components/breadcrumbs'
import Widget from '../../components/widget'

import { useTranslation } from "react-i18next";

const ListElement = ({ slug, fields }) => {
    const { t } = useTranslation('admin');
    const slugTrans = slug.replace('/', '.');

    const breadcrumbs = [
        { title: 'Dashboard', url: '/admin', last: false },
        { title: t(`${slugTrans}.label`), url: `/admin/pages`, last: true },
    ]

    return (
        <>
            <Breadcrumb items={ breadcrumbs } home={ true } icon="chevron" />

            <SectionTitle title={ t(`${slugTrans}.label`) } subtitle={ t(`${slugTrans}.all`) } />

            <Widget>
                <table className="table no-border striped">
                    <thead>
                        <tr> 
                            <th>Page name</th>
                        </tr> 
                    </thead>
                    <tbody>
                        { fields.map((page, i) => 
                            <tr key={i}> 
                                <td>{page.name}</td>
                                <td className="text-right">
                                    <Link className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised"
                                    title="Modifier la page" to={`/admin/pages/update/${page.slug}`}>
                                    <FiEdit className = "stroke-current" /></Link>
                                </td>
                            </tr>
                         )}
                    </tbody>
                </table>
            </Widget> 
        </>
    )
}

export default ListElement