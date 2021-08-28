import React, { useState, useEffect } from 'react'

const CollectionItem = ({ id, item, onRemove, onChange, fields}) => {
  const [elem, setElem] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setElem(item);
  }, [item]);

  useEffect(() => {
    const newElem = elem;
    fields.forEach((field) => {
      newElem[field] = item[field]
    });
    newElem['id'] = id ;
    setElem(newElem)
    setLoaded(true)
  }, [item]);

  const onElemChange = (data, name) => {
    const newItem = elem;
    newItem[name] = data;
    setElem(newItem);
    onChange(elem);
  }

  const removeFromList = (id) => {
    onRemove(id);
  }

  return (
    <div className="space-x-2">
      {loaded ? 
        <>
          <div className="form-group">
            { fields.map((field, i) => (
              <div key={i} className="form-element">
                <label htmlFor={`${field}-${id}`} className="form-label">{field}</label>
                <input name={field} id={`${field}-${id}`} type="text" defaultValue={elem ? elem[field] : ''} className={`form-input`} onChange={e => onElemChange(e.target.value, field)} />
              </div>
            )) }
            <p onClick={() => removeFromList(id) } className="btn btn-sm mb-2 bg-blue-500 hover:bg-blue-600 text-white btn-rounded">Supprimer</p>
          </div>
        </>
        : '' }
    </div>
    )
  }

export default CollectionItem