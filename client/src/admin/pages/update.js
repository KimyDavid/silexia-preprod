import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useTranslation } from "react-i18next";
import { API_GET } from '../../functions/apiRequest';

import SectionTitle from '../../components/section-title'
import Breadcrumb from '../../components/breadcrumbs'
import Widget from '../../components/widget'
import Form from '../../components/admin/form'

const UpdateElement = ({slug, fields}) => {
  const { t } = useTranslation('admin');
  const { type } = useParams();
  const [loaded, setLoaded] = useState(false);

  const [currentFields, setCurrentFields] = useState(fields);

  const slugTrans = slug.replace('/', '.');

  const breadcrumbs = [
    {title: 'Dashboard', url: '/admin', last: false},
    {title: t(`${slugTrans}.label`), url: `/admin/pages`, last: false},
    {title: `${t(`${slugTrans}.update`)} : ${t(`${slugTrans}.pages.${type}`)}`, url: `/admin/pages/update/${type}`, last: true},
  ]

  useEffect(() => {
    API_GET(`${slug}/${type}`).then(response => {
      fields.map((_field) => {
        if (_field['type'] !== 'file') {
          _field.value = response[_field['name']];
        }
      });
      setCurrentFields(fields);
      setLoaded(true);
    });
  }, [])

  return (
    <>
      <Breadcrumb items={breadcrumbs} home={true} icon="chevron" />

      <SectionTitle title={t(`${slugTrans}.update`)} subtitle={t(`${slugTrans}.pages.${type}`)} />

      <Widget>
        <div className="w-full flex">
          <div className="w-full">
            { loaded ? 
              <Form url={`${slug}/${type}`} fields={currentFields} method='PUT' />
            : '' }
          </div>
        </div>
      </Widget>
    </>
  )
}
export default UpdateElement
