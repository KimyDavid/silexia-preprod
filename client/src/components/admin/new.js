import React, { useState, useEffect } from 'react'
import SectionTitle from '../section-title'
import Breadcrumb from '../breadcrumbs'
import Widget from '../widget'
import {useTranslation} from "react-i18next";

import Form from './form'

const CreateElement = ({slug, fields, isFormData}) => {
  const { t } = useTranslation('admin');
  const [loaded, setLoaded] = useState(false);
  const slugTrans = slug.replace('/', '.');

  const breadcrumbs = [
    {title: 'Dashboard', url: '/admin', last: false},
    {title: t(`${slugTrans}.label`), url: `/admin/${slug}`, last: false},
    {title: t(`${slugTrans}.new`), url: `/admin/${slug}/new`, last: true},
  ]
    
  useEffect(() => {
    fields.forEach((_field) => {
        _field.value = null;
    });
    setLoaded(true);
  }, [])

  return (
    <>
      <Breadcrumb items={breadcrumbs} home={true} icon="chevron" />

      <SectionTitle title={t(`${slugTrans}.label`)} subtitle={t(`${slugTrans}.new`)} />

      <Widget>
        <div className="w-full flex">
          <div className="w-full">
          { loaded ? 
              <Form url={`${slug}`} fields={fields} isFormData={isFormData} />
            : '' }
          </div>
        </div>
      </Widget>
    </>
  )
}
export default CreateElement
