import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const Collection = ({ field, onCollectionChange, values, noEdit = false }) => {
  const [customId, setCustomId] = useState(1);
  const [loaded, setLoaded] = useState(false);
  let currentCustomId = customId;
  const collectionFields = field.dataCollection.fields;

  const { t } = useTranslation('field');

  const createModel = () => {
    let newModel = {};
    collectionFields.forEach((_field) => {
        if (_field === 'revert') {
            newModel[_field] = 0;
        } else {
            newModel[_field] = "";
        }
    });
    newModel['customId'] = currentCustomId;
    currentCustomId = currentCustomId + 1;
    return newModel;
  }

  const initModel = () => {
    const firstModel = createModel();
    return [firstModel];
  }

  const [list, setList] = useState(initModel);

  useEffect(() => {
    if (values) {
      const newList = [];

      values.forEach((_val) => {
        const newItem = {};
        collectionFields.forEach((_field) => {
            if (_field === 'revert') {
                newItem[_field] = _val[_field] ?? 0;
            } else {
                newItem[_field] = _val[_field] ?? "";
            }
            if (_val['id']) {
                newItem['id'] = _val['id'];
            }
        });
        newItem['customId'] = currentCustomId;
        currentCustomId = currentCustomId + 1;
        newList.push(newItem);
      });

      setList(newList);
      setCustomId(currentCustomId);
      onCollectionChange(newList, field.name);
    }
    setLoaded(true);
  }, []);

  const handleAddClick = () => {
    setList([...list, createModel()]);
    setCustomId(currentCustomId);
  };

  const handleInputChange = (e, index) => {
    const { name, value, checked, type } = e.target;
    const newlist = [...list];
    if (type === 'checkbox') {
        newlist[index][name] = checked ? 1 : 0;
    } else {
        newlist[index][name] = value;
    }
    setList(newlist);
    onCollectionChange(newlist, field.name);
  };

  const handleRemoveClick = index => {
    const newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist);
    onCollectionChange(newlist, field.name);
  };

    return (
      <>
        <div className="d-flex justify-content-between">
          <p className="form-label mb-2">{field.label} </p>
          { noEdit ? '' : <p onClick={handleAddClick} className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white btn-rounded">Ajouter</p> }
        </div>
        <div className="d-flex flex-wrap m-n2">
            { loaded ? list.map((item, i) => (
                <div key={i} className={`w-50`}>
                    <div className="form-group m-2">
                        { collectionFields.map((field, j) => (
                            <div key={j} className={ field === 'revert' ? "d-flex mb-2" : "form-element"}>
                                { field === 'revert' ? 
                                    <>
                                        <input name={field} id={`${field}-${j}`} type="checkbox" defaultChecked={item[field] === "" ? 0 : item[field]} onChange={e => handleInputChange(e, i)} />
                                        <label htmlFor={`${field}-${j}`} className="ml-2 form-label mb-0">{t(field)}</label>
                                    </>
                                :
                                    <>
                                        <label htmlFor={`${field}-${j}`} className="form-label">{t(field)}</label>
                                        { field === 'text' || field === 'label' ?
                                            <textarea className="form-textarea" name={field} id={`${field}-${j}`} value={item[field]} onChange={e => handleInputChange(e, i)}></textarea>
                                        :
                                            <input name={field} id={`${field}-${j}`} type="text" value={item[field]} className={`form-input`} onChange={e => handleInputChange(e, i)} />
                                        }
                                    </>
                                }
                            </div>
                        )) }
                        { noEdit || (i === 0) ? '' : <p onClick={() => handleRemoveClick(i) } className="btn btn-sm mb-2 bg-blue-500 hover:bg-blue-600 text-white btn-rounded">Supprimer</p> }
                    </div>
                </div>
            )) : ""}
        </div>
      </>
    )
  }

export default Collection