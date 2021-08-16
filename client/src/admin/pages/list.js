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
        { title: t(`${slugTrans}.label`), url: `/admin/pages`, last: true },
    ]

    return (
        <>
            <Breadcrumb items={ breadcrumbs } home={ true } icon="chevron" />

            <SectionTitle title={ t(`${slugTrans}.label`) } subtitle={ t(`${slugTrans}.all`) } />

            <Link to = { `/admin/pages/new` } className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded mb-2 float-right">
                <span>{ t(`${slugTrans}.new`) }</span>
            </Link>
        </>
    )
}

export default ListElement