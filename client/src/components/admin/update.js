import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import SectionTitle from '../section-title'
import Breadcrumb from '../breadcrumbs'
import Widget from '../widget'
import Form from './form'

const UpdateElement = ({slug, fields}) => {
  const { t } = useTranslation('admin');
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);

  const { state } = useLocation();
  const item = state.elem;
  const slugTrans = slug.replace('/', '.');

  const breadcrumbs = [
    {title: 'Dashboard', url: '/admin', last: false},
    {title: t(`${slugTrans}.label`), url: `/admin/${slug}`, last: false},
    {title: t(`${slugTrans}.update`), url: `/admin/${slug}/update/:id`, last: true},
  ]
    
  useEffect(() => {
    fields.map((_field) => {
      if (_field['type'] !== 'file') {
        _field.value = item[_field['name']];
      }
    });
    setLoaded(true);
  }, [])

  return (
    <>
      <Breadcrumb items={breadcrumbs} home={true} icon="chevron" />

      <SectionTitle title={t(`${slugTrans}.label`)} subtitle={t(`${slugTrans}.update`)} />

      <Widget>
        <div className="w-full flex">
          <div className="w-full lg:w-1/2">
            { loaded ? 
              <Form url={`${slug}/${id}`} fields={fields} method="PUT"/>
            : '' }
          </div>
        </div>
      </Widget>
    </>
  )
}
export default UpdateElement
