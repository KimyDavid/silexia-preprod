import React, { useEffect, useState } from 'react'
import SectionTitle from '../components/section-title';
import { AnalyticsDashboard } from 'react-analytics-charts';
import { SessionsByDateChart, BounceRateChart, PageViewsPerPathChart, SessionDurationChart, SessionsGeoChart } from 'react-analytics-charts';
import Widget from '../components/widget'

const Index = () => {
  const [period, setPeriod] = useState(28);

  const updatePeriod = (e) => {
    const selector = e.target;
    setPeriod(selector.value);
  };

  return (
    <>
      <SectionTitle title="Tableau de bord" subtitle="Dashboard" />

        <div className="form-element mb-5">
          <div className="form-label">Période</div>
          <select className="form-select" name="period" onChange={(e) => updatePeriod(e)} defaultValue="28">
            <option value="1">Hier</option>
            <option value="7">Cette semaine</option>
            <option value="28">Ce mois</option>
            <option value="84">Ces 3 derniers mois</option>
            <option value="168">Ces 6 derniers mois</option>
            <option value="360">Cette année</option>
          </select>
        </div>

      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        <AnalyticsDashboard 
          authOptions={{ clientId: "832765596023-vo0gpi6e6ohsulc4mnq8n7rgqsnecbgf.apps.googleusercontent.com" }}
          renderCharts={(gapi, viewId) => {
            return (
              <div key={period}>
                <Widget>
                  <SectionTitle subtitle="Nombre de sessions et pages vues" />
                  <SessionsByDateChart gapi={gapi} viewId={viewId} showPageViews showUsers days={period} />
                </Widget>
                <Widget>
                  <SectionTitle subtitle="Taux de rebons" />
                  <BounceRateChart gapi={gapi} viewId={viewId} days={period} />
                </Widget>
                <Widget>
                  <SectionTitle subtitle="Pages vues" />
                  <PageViewsPerPathChart gapi={gapi} viewId={viewId} days={period} />
                </Widget>
                <Widget>
                  <SectionTitle subtitle="Durée des sessions" />
                  <SessionDurationChart gapi={gapi} viewId={viewId} days={period} />
                </Widget>
                <Widget>
                  <SectionTitle subtitle="Sessions et pages vues par pays" />
                  <SessionsGeoChart gapi={gapi} viewId={viewId} days={period} showPageViews />
                </Widget>
              </div>
            );
          }}
        />
      </div>
    </>
  );
};
export default Index
