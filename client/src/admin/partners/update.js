import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { API_GET } from '../../functions/apiRequest';

import SectionTitle from '../../components/section-title'
import Breadcrumb from '../../components/breadcrumbs'
import Widget from '../../components/widget'
import Form from '../../components/admin/form'

const UpdateElement = ({slug, fields, method = 'PATCH'}) => {
  const { t } = useTranslation('admin');
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);

  const { state } = useLocation();
  const slugTrans = slug.replace('/', '.');

  const breadcrumbs = [
    {title: 'Dashboard', url: '/admin', last: false},
    {title: t(`${slugTrans}.label`), url: `/admin/${slug}`, last: false},
    {title: t(`${slugTrans}.update`), url: `/admin/${slug}/update/:id`, last: true},
  ]

  useEffect(() => {
    API_GET(`partners/${id}`).then(response => {
      console.log(response);
      fields.map((_field) => {
        _field.value = response[_field['name']] ?? '';
        _field.error = {}
      });
  
      fields.push({
        label: '',
        error: {required: ''},
        name: 'partner_type',
        type: 'number',
        value: state.partner_type,
        hidden: true
      });
      setLoaded(true);
    });
  }, []);

  return (
    <>
      <Breadcrumb items={breadcrumbs} home={true} icon="chevron" />

      <SectionTitle title={t(`${slugTrans}.label`)} subtitle={t(`${slugTrans}.update`)} />

      <Widget>
        <div className="w-full flex">
          <div className="w-full">
            { loaded ? 
              <Form url={`${slug}/${id}`} fields={fields} method={method} isFormData={true} />
            : '' }
          </div>
        </div>
      </Widget>
    </>
  )
}
export default UpdateElement
