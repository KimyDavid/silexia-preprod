import React, { useState, useEffect } from 'react'
import CollectionItem from './collection-item'

const Collection = ({ field, collection, onChange }) => {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  let customId = 1;

  const addList = (item = null) => {
    const newItem = createItem(item);
    list.push(newItem);
    setNumber(number + 1);
  }
  
  useEffect(() => {
    if (list.length > 0) {
      list.forEach((item, i) => {
        list.splice(i, 1)
      });
    }
    
    if (collection.data) {
      console.log(collection.data)
      collection.data.forEach((item) => {
        addList(item);
      });
    } else {
      addList();
    }
  }, [collection]);

  function createItem(model) {
    const newItem = {};
    customId = customId + 1;
    field.dataCollection.fields.forEach((_field) => {
      if (model) {
        newItem[_field] = model[_field]
        newItem['id'] = model.id;
      } else {
        newItem[_field] = null
      }
      newItem['customId'] = customId;
    });
    return newItem;
  }

  const removeList = customId => {
    list.splice(list.indexOf(list.find((x) => x.customId === customId)), 1);
    setNumber(number - 1);
    onChange(list);
  }

  function updateData(data) {
    console.log(data)
    const newList = list;
    console.log(data.customId)
    console.log(newList)
    newList[newList.indexOf(newList.find(item => item.customId === data.customId))] = data;
    onChange(newList);
  }

    return (
      <>
        <div className="d-flex justify-content-between">
          <p className="form-label mb-2">{field.label} </p>
          <p onClick={() => addList() } className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white btn-rounded">Ajouter</p>
        </div>
        <div className="d-flex flex-wrap m-n2">
          { list.map((item, i) => <CollectionItem key={i} item={item} onRemove={removeList} onChange={updateData} fields={field.dataCollection.fields} /> ) }
        </div>
      </>
    )
  }

export default Collection