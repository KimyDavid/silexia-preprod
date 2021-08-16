import React, { Component } from 'react';
import Pageheading from '../../widgets/Pageheading';

class CGV extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative">
                <Pageheading foldername={"Légals"} title={"Conditions générales de vente"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*privacy start*/}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <p className="my-5">Les présentes CGV entrent en application à partir du 10/03/2021 et valent pour contrat entre Silexia et ses clients sauf dispositions contraires précisées dans un devis ou un contrat spécifique.</p>
                                    <h4 className="mt-5 text-primary">Article 1 : Dispositions générales</h4>
                                    <p>Les présentes Conditions Générales de Vente de prestations de services, ci-après dénommées CGV, constituent l’accord régissant pendant sa durée, les relations entre les consultants de l’agence Silexia, ci-après dénommé le Prestataire et ses clients dans le cadre de la vente de prestations de services.</p>
                                    <p>À défaut de contrat conclu entre le Prestataire et son Client, les prestations effectuées sont soumises aux CGV décrites ci-après. Toute commande passée ainsi que tout contrat conclu avec l’agence Silexia implique l’adhésion pleine et entière et sans réserve du Client à ces CGV.</p>
                                    <h4 className="mt-5 text-primary">Article 2 : Nature des prestations</h4>
                                    <p>L’agence Silexia accompagne les entreprises et plus particulièrement les TME/PME dans leur :‬</p>
                                    <ul>
                                        <li>stratégie de transition numérique ;</li>
                                        <li>gestion de projets innovation ;</li>
                                        <li>analyses de données ;</li>
                                        <li>équipement de logiciels métiers et de gestion d’entreprise ;</li>
                                        <li>conformité RGPD.</li>
                                    </ul>
                                    <h4 className="mt-5 text-primary">Article 3 : Devis, prise de commande et facturation</h4>
                                    <p>Le Prestataire intervient sur demande expresse du Client après présentation d’un devis de mission. Un devis valant pour contrat est réalisé pour toute prestation. Sont présentées dans le devis les présentes CGV, également disponibles sur le site web <a href="https://silexia.fr">www.silexia.fr</a>. Dans ce devis présenté au Client par le Prestataire, sont précisés : </p>
                                    <ul>
                                        <li>la nature de la prestation ;</li>
                                        <li>le prix de la prestation hors taxes ;</li>
                                        <li>le montant de remises éventuelles ;</li>
                                        <li>les modalités de paiement et les échéances ;</li>
                                        <li>la date de fin de prestation envisagée ;</li>
                                        <li>le rappel de l’adhésion pleine et entière du Client aux CGV ;</li>
                                        <li>pour confirmer sa commande de manière ferme et définitive, le Client devra retourner ce devis signé précédé de la mention « bon pour accord et exécution ».</li>
                                    </ul>
                                    <p>La validation du devis peut être réalisée par signature électronique sur proposition du Prestataire et acceptation du Client. Dans le cas d’un refus du Client, une signature manuscrite pourra être réalisée en présentiel ou par correspondance postale.</p>
                                    <p>Dès réception du devis signé, le Prestataire invitera le Client à régler l’acompte de 35 % par virement bancaire ou lien de paiement communiqué par mail, sauf exigence contraire qui serait précisée dans le devis.</p>
                                    <p>Sans document contractuel supplémentaire les présentes CGV ont valeur de contrat.</p>
                                    <p>Une facture sera communiquée par le Prestataire à chaque versement effectué par le Client. Le règlement de l'acompte déclenche le démarrage de la prestation.</p>
                                    <p>A défaut de réception de la signature du Client et de l’acompte, ou bien à compter de la date d’expiration du devis, la proposition de devis est considérée comme annulée et le prestataire se réserve le droit de ne pas commencer sa prestation.</p>
                                    <h4 className="mt-5 text-primary">Article 4 : Prix et modalités de règlement</h4>
                                    <p>Les prix des services sont ceux détaillés dans les devis, acceptés par le Client. Ils sont exprimés en euros et ne sont pas soumis à la TVA. Les prix peuvent être calculés au forfait, à l’heure, ou à la journée. Il est convenu entre les parties que le règlement par le Client de la totalité des honoraires du Prestataire vaut réception et acceptation définitive des prestations. </p>
                                    <p>En aucun cas le tarif de la prestation ne peut être renégocié après que la prestation soit réalisée. Les prix sont révisable chaque année au 1er Janvier par le Prestataire.</p>
                                    <p>Les factures d’acompte et de solde sont délivrées dès réception des règlements. Le paiement s’effectue par virement bancaire ou par lien de paiement web. Aucun escompte ne sera consenti en cas de paiement anticipé.</p>
                                    <p>Les échéances de règlement sont explicitées dans le devis et se déroule en trois (3) règlements sauf dispositions contraires négociées par les Parties et inscrites dans le devis.</p>
                                    <p>En cas d’absence d’indication de délai de règlement sur le devis, la Loi de modernisation de l’économie prévoit les conditions suivantes : les paiements entre professionnels sont plafonnés par l'article L441-6 du code de commerce, « sauf dispositions contraires figurant aux conditions de vente ou convenues entre les parties, le délai de règlement des sommes dues est fixé au trentième jour suivant la date de réception des marchandises ou d'exécution de la prestation demandée. »</p>
                                    <h4 className="mt-5 text-primary">Article 5 : Retard de règlement</h4>
                                    <p>Tout retard ou défaut de paiement entraînera de plein droit : </p>
                                    <ul>
                                        <li>l’exigibilité immédiate de toute somme restant due ;</li>
                                        <li>le calcul et le paiement d’une pénalité de retard sous forme d’intérêts à un taux équivalent à trois (3) fois le taux d’intérêt légal (en vigueur au jour de la facturation des prestations) ;</li>
                                        <li>le taux d’intérêt légal est fixé à 0,79 % pour l’année 2021 pour information ;</li>
                                        <li>cette pénalité est calculée sur le montant hors taxes de la somme restant due, et court à compter du jour suivant la date de règlement portée sur la facture, jusqu’à son paiement total, sans qu’aucun rappel ou mise en demeure préalable ne soient nécessaires ;</li>
                                        <li>le taux applicable est calculé au prorata temporis ;</li>
                                        <li>le droit pour le Prestataire de suspendre l’exécution de la prestation en cours et de surseoir à toute nouvelle commande ou livraison. </li>
                                    </ul>
                                    <h4 className="mt-5 text-primary">Article 6 : Obligations mutuelles et confidentialité</h4>
                                    <p>Le Prestataire s’engage à : </p>
                                    <ul>
                                        <li>respecter les délais fixés ;</li>
                                        <li>respecter la plus stricte confidentialité concernant les informations fournies par le Client ;</li>
                                        <li>ne divulguer aucune information sur les prestations de services réalisés pour ses clients ;</li>
                                        <li>restituer tout document fourni par le Client à la fin de la mission ;</li>
                                        <li>signer un accord de confidentialité si le Client le souhaite.</li>
                                    </ul>
                                    <p>Les clauses et modalités spécifiques encadrant une prestation sont réputées confidentielles, et à ce titre ne peuvent être communiquées à des tiers non autorisés. </p>
                                    <p>Le Client s’engage à : </p>
                                    <ul>
                                        <li>respecter les dates et heures des rendez-vous fixés pour le bon déroulement du dispositif souscrit : toute action non honorée mais non décommandée dans les quarante-huit (48) heures précédant la date de sa réalisation reste due au Prestataire ;</li>
                                        <li>la réalisation ultérieure de cette action entrainera son paiement en sus ;</li>
                                        <li>tout mettre en œuvre pour replanifier dans un délai conforme au bon déroulement du dispositif les actions annulées avec le préavis de quarante-huit (48) heures évoqué. </li>
                                        <li>régler toute prestation dûe à réception de facture ;</li>
                                        <li>valider les livrables et travaux que le Prestataire lui remettra, sans retour du Client dans un délais de 6 jours ouvrés, les travaux soumis seront considérés comme implicitement validés.</li>
                                    </ul>
                                    <h4 className="mt-5 text-primary">Article 7 : Durée et résiliation</h4>
                                    <p>La durée des prestations est définie dans le devis valant pour contrat.</p>
                                    <p>Chacune des Parties pourra résilier immédiatement le contrat en cas de cessation d’activité de l’une des Parties, cessation de paiement, redressement judiciaire, liquidation judiciaire ou toute autre situation produisant les mêmes effets, après l’envoi d’une mise en demeure adressée à l’administrateur judiciaire (ou liquidateur) restée plus d’un mois sans réponse, conformément aux dispositions légales en vigueur.</p>
                                    <p>En cas d’arrivée du terme ou de la résiliation du contrat : </p>
                                    <ul>
                                        <li>le contrat de prestation de service cessera automatiquement à la date correspondante ;</li>
                                        <li>le Prestataire est dégagé de ses obligations relatives à l’objet du devis dont il est question à la date de résiliation ou d’expiration du devis ;</li>
                                        <li>le Prestataire s’engage à restituer au Client au plus tard dans les trente (30) jours ouvrés qui suivent la résiliation ou l’expiration du contrat, l’ensemble des documents ou informations remis par le Client sauf dispositions contraires qui auraient été précisées dans un contrat propre. </li>
                                    </ul>
                                    <p>En cas de résiliation de la prestation par le Client, seront dues par le Client les sommes correspondantes aux prestations réalisées jusqu’à la date de prise d’effet de la résiliation et qui restent impayées. </p>
                                    <p>Pour toute prestation relative à de l’hébergement web, serveur ou logiciel, l'arrêt de la prestation à l'initiative du Client entrainera une facturation de 90 % du montant du solde de la prestation engagée et validée par le devis signé précédé de la mention « bon pour accord et exécution ».</p>
                                    <h4 className="mt-5 text-primary">Article 7 : Durée et résiliation</h4>
                                    <p>Les réunions, restitutions, ateliers auront lieu dans les locaux du Prestataire, ceux du Client ou en visioconférence selon le planning présenté et les besoins opérationnels.</p>
                                    <p>L’élaboration des livrables sera réalisée dans les locaux du Prestataire.</p>
                                    <p>Les frais de déplacements ne sont pas facturés pour la région Île de France.</p>
                                    <h4 className="mt-5 text-primary">Article 9 : Propriété intellectuelle</h4>
                                    <p>Le Prestataire cède à son Client, à la livraison des livrables, un droit personnel et non exclusif d’utilisation des livrables, ainsi que des éventuels documents réalisés au titre de la présente mission, pour la durée des droits d’auteur et pour le monde entier.</p>
                                    <p>Ce droit comprend un droit de reproduction et de représentation ainsi qu’un droit de traduction, adaptation, arrangement ou modification de quelques manières que ce soit.</p>
                                    <p>Ces droits sont cédés pour le besoin propre du Client à l’exclusion d’une mise sur le marché à titre gratuit ou onéreux.</p>
                                    <p>En cas de modification des livrables par le Client ou par un tiers sans autorisation ni contrôle du Prestataire, le Prestataire n’apporte aucune garantie sur les œuvres dérivées issues des livrables initiaux.</p>
                                    <p>Concernant des prestations relatives à la réservation d’un nom de domaine, d’un hébergement serveur ou web ainsi que de la création d’un site web, les droits de propriété intellectuelle ne sont pas cédés au Client en vertu de l’article L 112-2 13° du code de la propriété intellectuelle. Le code source ne sera ainsi pas livré au Client qui en ferait la demande.</p>
                                    <h4 className="mt-5 text-primary">Article 10 : Sous-traitance de traitement de données à caractère personnel</h4>
                                    <p>Il est rappelé aux Parties leur obligation mutuelle de se conformer au cadre en vigueur en matière de protection des données et plus particulièrement au Règlement Général sur la Protection des Données.</p>
                                    <p>Dans le cadre de l’exécution de la prestation, le Prestataire peut être amené à accéder aux données dont disposent le Client et qui sont concernées par la prestation souscrite. Le Prestataire peut être amené à effectuer un traitement de données à caractère personnel pour le compte du Client, le Client déterminant seul les finalités et les moyens du traitement. Dans ce cas, le Client est responsable du traitement et le Prestataire est son sous-traitant, au sens de l’article 28 du RGPD.</p>
                                    <p>Ainsi, des données peuvent être amenées à être transférées du Client au Prestataire. Ce dernier s’engage à mettre en œuvre toutes les mesures de sécurité nécessaires pour protéger ces données. Les données seront supprimées définitivement du système d’information du Prestataire dès la fin de l’exécution de ce contrat. À la demande du Client, un contrat de sous-traitance de traitement.s peut être conclu avec le Prestataire afin d’encadrer davantage les obligations de chacune des Parties.</p>
                                    <h4 className="mt-5 text-primary">Article 11 : Responsabilités</h4>
                                    <p>Considérant la nature des prestations réalisées, l’obligation du Prestataire est une obligation de moyen. Le Prestataire s’engage à réaliser les prestations conformément aux règles en vigueur et à l’état de l’art dans ses domaines de compétences.</p>
                                    <p>Le Client s’engage à mettre à disposition du Prestataire dans les délais convenus, l’ensemble des informations et documents indispensables à la bonne réalisation de la prestation ainsi qu’à la bonne compréhension des problématiques et enjeux posés. </p>
                                    <p>La responsabilité du Prestataire ne pourra pas être engagée pour : </p>
                                    <ul>
                                        <li>une erreur engendrée par un manque d’information ou des informations erronées émises par le Client ;</li>
                                        <li>un retard occasionné par le Client qui entrainerait l’impossibilité de respecter les délais convenus ou prescrits par la loi.</li>
                                    </ul>
                                    <p>La responsabilité du Prestataire, si elle est prouvée, sera limitée à la moitié de la somme totale hors taxes effectivement payée par le Client pour le service fourni par le Prestataire à la date de la réclamation par lettre recommandée avec accusé réception. </p>
                                    <p>Chacune des Parties est responsable envers l’autre de tout manquement aux obligations mises à sa charge. </p>
                                    <p>Il est rappelé au Client que le bon déroulé de la prestation dépend de sa collaboration et de sa disponibilité ainsi que celles de ses collaborateurs.</p>
                                    <h4 className="mt-5 text-primary">Article 12 : Litiges</h4>
                                    <p>Les présentes CGV et le devis signé entre les Parties sont régis par le droit français. À défaut d’épuisement de toute résolution amiable, tout différend persistant entre les parties à propos de l’exécution ou de l’interprétation des CGV et du devis sera de la compétence des tribunaux du défendant.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*privacy end*/}
                </div>
                {/*body content end*/}
            </div>

        );
    }
}

export default CGV;