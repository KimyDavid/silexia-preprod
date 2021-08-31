import React from 'react'
import SectionTitle from '../components/section-title'
import Widget1 from '../components/dashboard/widget-1'
import {FiActivity, FiUsers, FiExternalLink, FiClock} from 'react-icons/fi'

const Index = () => (
  <>
    <SectionTitle title="Tableau de bord" subtitle="Dashboard" />
    <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        {/* <div className="w-full lg:w-1/4">
          <Widget1
            title="Users"
            description={588}
            right={
              <FiUsers size={24} className="stroke-current text-grey-500" />
            }
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Sessions"
            description={(1, 435)}
            right={
              <FiActivity size={24} className="stroke-current text-grey-500" />
            }
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Bounce rate"
            description="40.5%"
            right={
              <FiExternalLink
                size={24}
                className="stroke-current text-grey-500"
              />
            }
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Session duration"
            description="1m 24s"
            right={
              <FiClock size={24} className="stroke-current text-grey-500" />
            }
          />
        </div> */}
    </div>

  </>
)
export default Index
