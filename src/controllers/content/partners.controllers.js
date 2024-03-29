import db from '#config/db.js';
import mysql from 'mysql';
import { Partner, PartnerType } from '#models/content/partner.js';

function getPartners(data, callback) {

  var strsql = ' SELECT pt.id, pt.label, ';
      strsql += ' IF(partners.id IS NULL, NULL, CONCAT("[", GROUP_CONCAT(JSON_OBJECT(';
      strsql += '   "id", partners.id,';
      strsql += '   "name", partners.name,';
      strsql += '   "abstract", partners.abstract,';
      strsql += '   "url", partners.url,';
      strsql += '   "version", partners.version';
      strsql += ' ) ORDER BY partners.order), "]")) AS partners';
      strsql += ' FROM partners_type pt';
      strsql += ' LEFT JOIN partners ON partners.partner_type = pt.id AND partners.deleted IS NULL';
      strsql += ' WHERE pt.deleted IS NULL';
      if (data.page) {
        strsql += ' AND pt.page = ' + mysql.escape(data.page)
      }
      strsql += ' GROUP BY pt.id';
      strsql += ' ORDER BY pt.order';


      db.query(strsql, null, function (error, results) { 
        for(let i=0; i<results.length; i++){
          results[i] = new PartnerType(results[i])
        }
        callback(error, results)
      });

}

function getPartner(data, callback) {

  var strsql = ' SELECT pt.* ';
      strsql += ' FROM partners pt';
      strsql += ' WHERE pt.deleted IS NULL';
      strsql += ' AND pt.id = ' + data.id;
      
      db.query(strsql, null, function (error, results) { 
        callback(error, results.length === 1 ? new Partner(results[0]) : null)
      });

}

function getPartnersByPage(data, callback) {

  var strsql = ' SELECT pt.* ';
      strsql += ' FROM partners pt';
      strsql += ' WHERE pt.deleted IS NULL';
      strsql += ' AND pt.page = ' + mysql.escape(data.page);
      
      db.query(strsql, null, function (error, results) { 
        for(let i=0; i<results.length; i++){
          results[i] = new Partner(results[i]) 
        }
        callback(error, results)
      });

}

export default { 
  getPartners,
  getPartner,
  getPartnersByPage
}