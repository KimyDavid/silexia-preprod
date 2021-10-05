import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import SectionTitle from '../../../components/section-title'
import Breadcrumb from '../../../components/breadcrumbs'
import Widget from '../../../components/widget'
import Form from '../../../components/admin/form'

const UpdateElement = ({slug, fields, method = 'PUT', isFormData}) => {
  const { t } = useTranslation('admin');
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);

  const { state } = useLocation();
  const item = state.item.elem;
  const slugTrans = slug.replace('/', '.');

  let newFields = fields;

  const breadcrumbs = [
    {title: 'Dashboard', url: '/admin', last: false},
    {title: t(`${slugTrans}.label`), url: `/admin/${slug}`, last: false},
    {title: t(`${slugTrans}.update`), url: `/admin/${slug}/update/:id`, last: true},
  ]

  useEffect(() => {
    newFields = fields;
    console.log(item);
    fields.map((_field) => {
      _field.value = item[_field['name']];
    });

    const fieldCategory = newFields[newFields.length-1];
    if (!(fieldCategory.name === 'id_category')) {
      newFields.push(
        {
          label: '',
          error: {required: ''},
          name: 'id_category',
          type: 'number',
          value: state.item.id_category,
          hidden: true,
          options: [
            {value: [], label: ''},
          ]
        }
      );
    } else if (fieldCategory.value !== state.item.id_category) {
      fieldCategory.value = state.item.id_category
    }

    setLoaded(true);
  }, [])

  return (
    <>
      <Breadcrumb items={breadcrumbs} home={true} icon="chevron" />

      <SectionTitle title={t(`${slugTrans}.label`)} subtitle={t(`${slugTrans}.update`)} />

      <Widget>
        <div className="w-full flex">
          <div className="w-full">
            { loaded ? 
              <Form url={`${slug}/${id}`} fields={fields} method={method} isFormData={isFormData}/>
            : '' }
          </div>
        </div>
      </Widget>
    </>
  )
}
export default UpdateElement
