import React, { useState, useEffect } from 'react'
import CollectionItem from './collection-item'

const Collection = ({ collection, onChange, currentCollection = null }) => {
  const [number, setNumber] = useState(0);
  const [id, setId] = useState(1);
  const [list, setList] = useState([]);
  
  useEffect(() => {
    setList([]);
    console.log(currentCollection);
    if (currentCollection) {
      currentCollection.forEach((item) => {
        addList(item);
      });
    } else {
      addList();
    }
  }, []);

  function createItem(model) {
    const newItem = {};
    setId(id + 1);
    collection.dataCollection.fields.forEach((field) => {
      if (model) {
        newItem[field] = model[field]
      } else {
        newItem[field] = null
      }
    });
    newItem['id'] = id;
    return newItem;
  }

  const addList = (item = null) => {
    console.log(item);
    const newItem = createItem(item);
    list.push(newItem);
    setNumber(number + 1);
  }

  const removeList = id => {
    list.splice(list.indexOf(list.find((x) => x.id === id)), 1);
    setNumber(number - 1);
    onChange(list);
  }

  function updateData(data) {
    const newList = list;
    newList[newList.indexOf(newList.find(item => item.id === data.id))] = data;
    onChange(newList);
  }

    return (
      <>
        <div className="d-flex justify-content-between">
          <p className="form-label mb-2">{collection.label} </p>
          <p onClick={() => addList() } className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white btn-rounded">Ajouter</p>
        </div>
        <div className="d-flex flex-wrap">
          { list.map((item, i) => <CollectionItem key={i} id={item.id} item={item} onRemove={removeList} onChange={(data) => updateData(data)} fields={collection.dataCollection.fields} /> ) }
        </div>
      </>
    )
  }

export default Collection