import React, { useState, useEffect } from 'react'

const Collection = ({ field, collection, onCollectionChange, noEdit = false }) => {
  const [customId, setCustomId] = useState(1);

  const collectionFields = field.dataCollection.fields;

  const createModel = () => {
    let newModel = {};
    collectionFields.forEach((_field) => {
      newModel[_field] = "";
    });
    newModel['customId'] = customId;
    setCustomId(customId + 1);
    return newModel;
  }

  const initModel = () => {
    const firstModel = createModel();
    return [firstModel];
  }

  const [list, setList] = useState(initModel);

  const handleAddClick = () => {
    setList([...list, createModel()]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newlist = [...list];
    newlist[index][name] = value;
    setList(newlist);
  };

  const handleRemoveClick = index => {
    console.log(index);
    const newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist);
  };

    return (
      <>
        <div className="d-flex justify-content-between">
          <p className="form-label mb-2">{field.label} </p>
          { noEdit ? '' : <p onClick={handleAddClick} className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white btn-rounded">Ajouter</p> }
        </div>
        <div className="d-flex flex-wrap m-n2">
          { list.map((item, i) => (
              <div key={i} className={`m-2`}>
                <div className="form-group mb-0">{item.id ?? item.customId}
                  { collectionFields.map((field, j) => (
                      <div key={j} className="form-element">
                        <label htmlFor={`${field}-${item.customId}`} className="form-label">{field}</label>
                        <input name={field} id={`${field}-${item.customId}`} type="text" defaultValue={item[field]} className={`form-input`} onChange={e => handleInputChange(e, i)} />
                      </div>
                  )) }
                  { noEdit || (i === 0) ? '' : <p onClick={() => handleRemoveClick(i) } className="btn btn-sm mb-2 bg-blue-500 hover:bg-blue-600 text-white btn-rounded">Supprimer</p> }
                </div>
              </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>{JSON.stringify(list)}</div>
      </>
    )
  }

export default Collection