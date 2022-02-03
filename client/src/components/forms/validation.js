import React, { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import Alert from '../alerts'
import Quill from './quill';
import Collection from './collections'

const FormValidation = ({items, onSubmit, alerts}) => {
  const {handleSubmit, formState: { errors }, register, setValue} = useForm()

  const getCurrentQuill = () => {
    let quill;
    items.forEach((item) => {
      if (item.type === 'wysiwyg') {
        quill = item
      }
    });
    return quill
  }

  const getCurrentImage = () => {
    let image;
    items.forEach((item) => {
      if (item.type === 'file' && item.value) {
        image = item.value
      }
    });
    return image
  }

  const [quill, setQuill] = useState(getCurrentQuill);
  const [collection, setCollection] = useState();
  const [currentImage, setCurrentImage] = useState(getCurrentImage);

  useEffect(() => {
    if (quill) {
      register(quill.name, quill.error);

      if (quill.value) {
        onEditorStateChange(quill.value);
      }
    }
  }, [register]);

  const onEditorStateChange = (editorState) => {
    setValue(quill.name, editorState);
  };

  const onSubmitFn = data => {
    if (collection) {
      collection.data.map((item) => {
        if (item.customId) {
          delete item.customId;
        }
        return item;
      });
      data[collection.name] = collection.data
    }

    if (onSubmit) {
      onSubmit(data)
    }
  }

  const updateCollection = (data, name) => {
    setCollection({'name': name, 'data': data});
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitFn)}
      className="form flex flex-wrap w-full">
      {alerts &&
        items.map((item, i) => {
          if (!errors[item.name]) return null
          let msg = errors[item.name].message
          if (msg.length === 0) msg = `${item.label} is required`
          return (
            <div key={i} className="flex flex-col w-full">
              {errors[item.name] && (
                <div className="mb-2">
                  <Alert
                    color="bg-transparent border-red-500 text-red-500"
                    borderLeft
                    raised>
                    {msg}
                  </Alert>
                </div>
              )}
            </div>
          )
        })}
      <div className="w-full">
        {items.map((item, i) => {
          if (item.type === 'checkbox') {
            return (
              <div key={i} className={`${item.hidden ? 'd-none' : ''} form-element`}>
                {item.label && <div className="form-label">{item.label}</div>}
                <div className="flex items-center justify-start space-x-2">
                  {item.options.map((option, j) => (
                    <label key={j} className="flex items-center justify-start space-x-2">
                      <input
                        {...register(item.name, item.error)}
                        type="checkbox"
                        value={option.value}
                        className={`form-checkbox h-4 w-4 ${
                          errors[item.name] ? 'text-red-500' : ''
                        }`}
                      />
                      <span
                        className={`${
                          errors[item.name] ? 'text-red-500' : ''
                        }`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )
          }
          if (item.type === 'radio') {
            return (
              <div key={i} className={`${item.hidden ? 'd-none' : ''} form-element`}>
                {item.label && <div className="form-label">{item.label}</div>}
                <div className="flex items-center justify-start space-x-2">
                  {item.options.map((option, j) => (
                    <label key={j} className="flex items-center justify-start space-x-2">
                      <input
                        type="radio"
                        value={option.value}
                        {...register(item.name, item.error)}
                        className={`form-radio h-4 w-4 ${
                          errors[item.name] ? 'text-red-500' : ''
                        }`}
                      />
                      <span
                        className={`${
                          errors[item.name] ? 'text-red-500' : ''
                        }`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )
          }
          if (item.type === 'select') {
            return (
              <div key={i} className={`${item.hidden ? 'd-none' : ''} form-element`}>
                {item.label && <div className="form-label">{item.label}</div>}
                <select
                  {...register(item.name, item.error)}
                  className={`form-select ${
                    errors[item.name] ? 'border border-red-500' : ''
                  }`}>
                  {item.options.map((option, j) => (
                    <option key={j} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {!alerts && errors[item.name] && (
                  <div className="form-error">{errors[item.name].message}</div>
                )}
              </div>
            )
          }
          if (item.type === 'textarea') {
            return (
              
                <div key={i} className={`${item.hidden ? 'd-none' : ''} form-element`}>
                  {item.label && <div className="form-label">{item.label}</div>}
                  <textarea
                    {...register(item.name, item.error)}
                    defaultValue={item.value}
                    className={`form-textarea ${
                      errors[item.name] ? 'border border-red-500' : ''
                    }`}
                    rows="3"
                    placeholder={item.placeholder}></textarea>
                  {!alerts && errors[item.name] && (
                    <div className="form-error">
                      {errors[item.name].message}
                    </div>
                  )}
                </div>
              
            )
          }
          if (item.type === 'wysiwyg') {
            return (
              
                <div key={i} className={`${item.hidden ? 'd-none' : ''} form-element`}>
                  {item.label && <div className="form-label">{item.label}</div>}

                  <Quill item={item} onChange={onEditorStateChange} />

                  {!alerts && errors[item.name] && (
                    <div className="form-error">
                      {errors[item.name].message}
                    </div>
                  )}
                </div>
              
            )
          }
          if (item.type === 'collection') {
            return (
              
                <Collection key={i} field={item} onCollectionChange={updateCollection} values={item.value} />
              
            )
          }
          if (item.type === 'file') {
            return (
              
                <div key={i} className={`${item.hidden ? 'd-none' : ''} form-element`}>
                  {item.label && <div className="form-label">{item.label}</div>}
                  <div className="mb-4">
                    <img src={currentImage} width="300" alt="Image uploadée" loading="lazy"/>
                  </div>

                  <input
                    {...register(item.name, item.error)}
                    type={item.type}
                    className={`form-input ${
                      errors[item.name] ? 'border-red-500' : ''
                    }`}
                    placeholder={item.placeholder}
                    onChange={(e) => {
                      let reader = new FileReader();
                      reader.onload = function() {
                        setCurrentImage(reader.result)
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }}
                  />

                  {!alerts && errors[item.name] && (
                    <div className="form-error">{errors[item.name].message}</div>
                  )}
                </div>
              
            )
          }
          return (
            
              <div key={i} className={`${item.hidden ? 'd-none' : ''} form-element`}>
                {item.label && <div className="form-label">{item.label}</div>}
                <input
                  {...register(item.name, item.error)}
                  type={item.type}
                  defaultValue={item.value}
                  className={`form-input ${
                    errors[item.name] ? 'border-red-500' : ''
                  }`}
                  placeholder={item.placeholder}
                />
                {!alerts && errors[item.name] && (
                  <div className="form-error">{errors[item.name].message}</div>
                )}
              </div>
            
          )
        })}
      </div>
      <input
        type="submit"
        className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded mt-4"
      />
    </form>
  )
}
export default FormValidation
