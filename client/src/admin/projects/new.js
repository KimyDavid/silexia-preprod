import React, { useState, useEffect } from 'react'
import SectionTitle from '../../components/section-title'
import Breadcrumb from '../../components/breadcrumbs'
import Widget from '../../components/widget'
import {useTranslation} from "react-i18next";
import { useLocation } from "react-router-dom";

import Form from '../../components/admin/form'

const CreateElement = ({slug, fields}) => {
  const { t } = useTranslation('admin');
  const [loaded, setLoaded] = useState(false);
  const slugTrans = slug.replace('/', '.');

  const { state } = useLocation();

  const breadcrumbs = [
    {title: 'Dashboard', url: '/admin', last: false},
    {title: t(`${slugTrans}.label`), url: `/admin/${slug}`, last: false},
    {title: t(`${slugTrans}.new`), url: `/admin/${slug}/new`, last: true},
  ]
    
  useEffect(() => {
    fields.forEach((_field) => {
      if (_field['type'] !== 'file') {
        _field.value = null;
      }
    });

    if (fields[fields.length - 1].name === 'partner_type') {
        fields[fields.length - 1].value = state.partner_type;
    } else {
        fields.push({
            label: '',
            error: {required: ''},
            name: 'partner_type',
            type: 'number',
            value: state.partner_type,
            hidden: true
        });
    }

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
              <Form url={'partners'} fields={fields} isFormData={true} />
            : '' }
          </div>
        </div>
      </Widget>
    </>
  )
}
export default CreateElement
