import React from 'react'

import SectionTitle from '../../components/section-title'
import Breadcrumb from '../../components/breadcrumbs'
import Widget from '../../components/widget'

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ListElement = () => {
    const { t } = useTranslation('admin');

    const { state } = useLocation();
    const profile = state.elem;

    console.log(profile);

    const date = new Date(profile.user.date);

    const breadcrumbs = [
        { title: 'Dashboard', url: '/admin', last: false },
        { title: t(`users.label`), url: `/admin/users`, last: false },
        { title: `${profile.user.first_name} ${profile.user.last_name}`, url: `/admin/users:id`, last: true },
    ]

    return (
        <>
            {profile ? 
                <>
                    <Breadcrumb items={ breadcrumbs } home={ true } icon="chevron" />

                    <SectionTitle title={ t(`users.label`) } subtitle={ `${profile.user.first_name} ${profile.user.last_name}` } />

                    <Widget>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="flex flex-col">
                                    <div className="text-sm font-light text-grey-500">Nom</div>
                                    <div className="text-sm font-bold">{ profile.user.first_name } { profile.user.last_name }</div>

                                    <div className="text-sm font-light text-grey-500 mt-3">Email</div>
                                    <div className="text-sm font-bold">{ profile.user.email }</div>

                                    {/* <div className="text-sm font-light text-grey-500 mt-3">Téléphone</div>
                                    <div className="text-sm font-bold">{ profile.user.phone ?? '??' }</div> */}

                                    <div className="text-sm font-light text-grey-500 mt-3">Date de réponse à l'autodiag</div>
                                    <div className="text-sm font-bold">{ date.getDate() }/{ date.getMonth() }/{ date.getYear() }</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="flex flex-col">
                                    <div className="text-sm font-light text-grey-500">Entreprise</div>
                                    <div className="text-sm font-bold">{ profile.user.company}</div>

                                    {/* <div className="text-sm font-light text-grey-500 mt-3">Fonction</div>
                                    <div className="text-sm font-bold">{ profile.user.function ?? '??' }</div>

                                    <div className="text-sm font-light text-grey-500 mt-3">Taille de l'entreprise</div>
                                    <div className="text-sm font-bold">{ profile.user.size ?? '??' }</div>

                                    <div className="text-sm font-light text-grey-500 mt-3">Sector de l'entreprise</div>
                                    <div className="text-sm font-bold">{ profile.user.sector ?? '??' }</div> */}
                                </div>
                            </div>
                        </div>
                    </Widget> 

                    <SectionTitle title='Autodiag' subtitle="Résultat de l'autodiag" />

                    <Widget>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="flex flex-col">
                                    <div className="text-sm font-light text-grey-500 mt-3">Score global</div>
                                    <div className="text-sm font-bold">{ profile.score_user_total }/{ profile.score_total }</div>
                                </div>
                            </div>

                            { profile.autodiag.map((_category, i) => 
                                <div className="col-12 col-md-6">
                                    <div className="flex flex-col">
                                        <div className="text-sm font-light text-grey-500 mt-3">{_category.category.label}</div>
                                        <div className="text-sm font-bold">{ _category.score }/{ _category.score_total }</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Widget> 
                </>
            : '' }
        </>
    )
}

export default ListElement