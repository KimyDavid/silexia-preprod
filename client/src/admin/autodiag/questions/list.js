import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiDelete, FiEdit } from 'react-icons/fi'
import { API_GET, API_REMOVE } from '../../../functions/apiRequest';

import SectionTitle from '../../../components/section-title'
import Breadcrumb from '../../../components/breadcrumbs'
import Widget from '../../../components/widget'

import { useTranslation } from "react-i18next";

const ListElement = ({ url, slug, fields }) => {
    const { t } = useTranslation('admin');
    const [autodiag, setAutodiag] = useState([]);
    const [categories, setCategories] = useState([]);
    const [questions, setQuestions] = useState([]);
    const slugTrans = slug.replace('/', '.');

    const breadcrumbs = [
        { title: 'Dashboard', url: '/admin', last: false },
        { title: t(`${slugTrans}.label`), url: `/admin/${slug}`, last: true },
    ]

    useEffect(() => {
        API_GET('autodiag/categories').then(response => setCategories(response));
        API_GET('autodiag/questions').then(response => setQuestions(response));
        API_GET('autodiag').then(response => setAutodiag(response));
    }, []);

    function deleteItem(id) {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
            API_REMOVE(`${url}/questions/${id}`);
        }
    }

    return (
        <>
            <Breadcrumb items={ breadcrumbs } home={ true } icon="chevron" />

            <SectionTitle title={ t(`${slugTrans}.label`) } subtitle={ t(`${slugTrans}.all`) } />

            { categories.map((category, i) => {
                const detailsCategory = autodiag.find(_cat => _cat.id === category.id);
                const categoryQuestions = detailsCategory ? detailsCategory.questions : '';
                return(
                    <Widget key={i} title={'Catégorie'} description={category.label}>
                        <Link to = {{ pathname: `/admin/${slug}/new`, state: {id_category: category.id} }} className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white btn-rounded mb-2">
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
                                {}
                                { categoryQuestions ? categoryQuestions.map((item, i) => ( 
                                    <tr key={ i }> 
                                        { fields.map((field, j) => (
                                            <td key={ j }> { item[field.key] } </td>
                                        ))} 
                                        <td className="text-right">
                                            <Link className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised"
                                            title="Modifier la question" to={ { pathname: `/admin/${slug}/update/${item['id']}`, state: { item: {id_category: category.id, elem: questions.find(x => x.id === item.id)}}}}>
                                            <FiEdit className = "stroke-current" /></Link>
                                            <button className="btn btn-circle bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-raised ml-3"
                                            title="Supprimer la question" onClick={() => { deleteItem(item.id) }}>
                                            <FiDelete className="stroke-current" />
                                            </button>
                                        </td>
                                    </tr>
                                )) : null }
                            </tbody>
                        </table>
                    </Widget>
                )
            })}
        </>
    )
}

export default ListElement