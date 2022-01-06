import React, { useEffect, useState } from 'react'

import { API_GET } from '../../functions/apiRequest';
import SectionTitle from '../../components/section-title'
import Breadcrumb from '../../components/breadcrumbs'
import Widget from '../../components/widget'

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserDetail = () => {
    const [profile, setProfile] = useState();
    const { t } = useTranslation('admin');

    const { state } = useLocation();
    const user = state.elem;

    const date = new Date(user.user.date);
    const id = user.user.id;

    const breadcrumbs = [
        { title: 'Dashboard', url: '/admin', last: false },
        { title: t(`users.label`), url: `/admin/users`, last: false },
        { title: `${user.user.first_name} ${user.user.last_name}`, url: `/admin/users:id`, last: true },
    ]

    useEffect(() => {
        API_GET(`autodiag/user/${id}`).then(response => {
            if (response) {
                setProfile(response);
            }
        });
    }, [id]);

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

                                    {/* <div className="text-sm font-light text-grey-500 mt-3">Téléphone</div>
                                    <div className="text-sm font-bold">{ profile.user.phone ?? '??' }</div> */}

                                    <div className="text-sm font-light text-grey-500 mt-3">Date de réponse à l'autodiag</div>
                                    <div className="text-sm font-bold">{ date.getDate() }/{ date.getMonth() }/{ date.getYear() }</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="flex flex-col">
                                    <div className="text-sm font-light text-grey-500">Email</div>
                                    <div className="text-sm font-bold">{ user.user.email }</div>
                                    
                                    <div className="text-sm font-light text-grey-500 mt-3">Entreprise</div>
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
                            <div className="col-12 col-md-4">
                                <div className="flex flex-col">
                                    <div className="text-sm font-light text-grey-500">Score global</div>
                                    <div className="text-sm font-bold">{ profile.global.score_user }/{ profile.global.score_total }</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="flex flex-col">
                                    <div className="text-sm font-light text-grey-500">Niveau</div>
                                    <div className="text-sm font-bold">{ profile.global.tier }</div>
                                </div>
                            </div>

                            { profile.autodiag.map((_category, i) =>
                                <div key={i} className="col-12">
                                    <div className="row">
                                        <div className="col-12 border-top mt-3">
                                            <div className="flex flex-col">
                                                <div className="text-sm font-light text-grey-500 mt-3">Catégorie</div>
                                                <div className="text-sm font-bold">{ _category.label }</div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="flex flex-col">
                                                <div className="text-sm font-light text-grey-500 mt-3">Score</div>
                                                <div className="text-sm font-bold">{ _category.score_user }/{ _category.score_total ?? '???' }</div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="flex flex-col">
                                                <div className="text-sm font-light text-grey-500 mt-3">Niveau</div>
                                                <div className="text-sm font-bold">{ _category.tier ? _category.tier.text : '???' }</div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12">
                                            <div className="flex flex-col">
                                                <div className="text-sm font-light text-grey-500 mt-3 mb-1">Réponses aux questions</div>
                                                { _category.answers.map((answer, k) =>
                                                    <div className="text-sm" key={k}>- { answer.answer }</div>
                                                )}
                                            </div>
                                        </div>
                                        { _category.flags.length > 0 ?
                                            <div className="col-12 col-md-12">
                                                <div className="flex flex-col">
                                                    <div className="text-sm font-light text-grey-500 mt-3 mb-1">Points d'alerte</div>
                                                    { _category.flags.map((flag, j) =>
                                                        <div className="text-sm" key={j}>- { flag }</div>
                                                    )}
                                                </div>
                                            </div>
                                        : '' }
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

export default UserDetail