import React, { useState, useEffect } from 'react'

const CollectionItem = ({item, onRemove, onChange, fields}) => {
  const [elem, setElem] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const newElem = elem;
    fields.forEach((field) => {
      newElem[field] = item[field]
    });
    if (item.id) {
      newElem['id'] = item.id;
    }
    newElem['customId'] = item.customId;
    setElem(newElem)
    setLoaded(true);
  }, [item]);

  const onElemChange = (data, name) => {
    const newItem = elem;
    newItem[name] = data;
    setElem(newItem);
    onChange(elem);
  }

  const removeFromList = (customId) => {
    onRemove(customId);
    console.log('remove from list in collection item')
  }

  return (
    <div className={`m-2`}>
      { loaded ?
          <div className="form-group mb-0">
            { fields.map((field, i) => (
              <div key={i} className="form-element">
                <label htmlFor={`${field}-${elem.customId}`} className="form-label">{field}</label>
                <input name={field} id={`${field}-${elem.customId}`} type="text" defaultValue={elem[field]} className={`form-input`} onChange={e => onElemChange(e.target.value, field)} />
              </div>
            )) }
            <p onClick={(e) => removeFromList(elem.customId) } className="btn btn-sm mb-2 bg-blue-500 hover:bg-blue-600 text-white btn-rounded">Supprimer</p>
          </div>
      : '' }
    </div>
    )
  }

export default CollectionItem