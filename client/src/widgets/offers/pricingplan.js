import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ContactOffre from './contact';
import Modal from '../../widgets/common/modal';

const Pricingplan = ( {title, offer} ) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedFormule, setSelectedFormule] = useState('');
  const [showContact, setShowContact] = useState(false);

  const updateContactForm = (name) => {
    setSelectedFormule(`${title} : ${name}`);
    setShowContact(true);
  }
  
        return (
          <>
          <div className="text-center mb-6">
            <div>
              <span className="badge badge-primary-soft p-2">
                <i className="la la-users ic-3x rotation" />
              </span>
              <h2 className="mt-4 font-w-5 h3">Nos formules d'accompagnement</h2>
            </div>
          </div>

          <Nav tabs className="d-flex justify-content-center border-0">
            { offer.map((item, i) => 
              <NavItem key={i} active={i === '1'}>
                <NavLink className={`mt-2 border-0 `+ ((selectedTab === i) ? 'active' : '') } onClick={() => setSelectedTab(i) } >{item.title}</NavLink>
              </NavItem>
            )}
          </Nav>

          <TabContent activeTab={selectedTab} className="mt-8">
            { offer.map((item, i) => 
            <TabPane tabId={i} key={i} className="fade show" active={(i === '1').toString()}>
              <div className="row align-items-center justify-content-between mb-10">
                <div className="col-12 col-md-12 col-lg-6 mb-8 mb-lg-0">
                  <div className="mb-0">
                    { item.image ? <img src={require(`../../assets/images/offers/offre_${item.image}.svg`)} className="img-fluid w-75 mb-5" alt={`Offre Silexia ${item.title}`}  loading="lazy"/> : '' }
                    <h2 className="mt-3">{item.title}</h2>
                    <p className="lead mb-0">{item.description}</p>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                      {/* Card */}
                      <div className="card border-0 shadow">
                        {/* Body */}
                        <div className="card-body py-5 px-6">
                          {/* Features */}
                          { item.content.map((feature, j) => 
                            <div key={j} className="d-flex align-items-start justify-content-between">
                              {/* Text */}
                              <p>{feature}</p>
                              {/* Check */}
                              <div className="ml-4"> <i className="la la-check text-primary font-weight-bold" />
                              </div>
                            </div>
                          )}
                          { item.more ? 
                            <>
                              <p className="mt-4"><strong>Prestations complémentaires</strong></p>
                              { item.more.map((feature, j) => 
                                <div key={j}>
                                  <div key={j} className="d-flex align-items-start justify-content-between">
                                    {/* Text */}
                                    <p>{feature}</p>
                                  </div>
                                </div>
                              )}
                            </>
                          : '' }
                          <a className="btn btn-block btn-primary mt-5" onClick={ () => updateContactForm(item.title) }>Plus d'informations</a>
                        </div>
                      </div>
                </div>
              </div>
            </TabPane>
            )}
          </TabContent>

          <Modal 
                title={`Demande d'information - ${selectedFormule}`}
                body={<ContactOffre offre={selectedFormule}/>}
                show={showContact}
                setShow={setShowContact}
            />
        </>
        
        );
}

export default Pricingplan;