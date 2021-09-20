import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import Colors from '../../constants/Colors'

const CustomQuill = ({item, onChange}) => {
    const [value, setValue] = useState(item.value);
    const [toggle, setToggle] = useState(true);

    const updateHTML = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }

    const updateValue = (value) => {
        setValue(value)
        onChange(value);
    }

    const colors = Colors.colors;

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'header': 2 }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': colors}, { 'background': colors }],
            [{ 'align': [] }],
            ['blockquote'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            ['link', 'image', 'video'],
        ]
    };

    return (
                <>
                    <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded align-self-start mb-3" onClick={(e) => updateHTML(e, value)}>Toggle HTML</button>
                    { toggle ? 
                        <ReactQuill theme="snow" modules={modules} value={value} onChange={(e) => updateValue(e)}/>
                    : 
                        <textarea value={value} className="form-textarea mb-5" onChange={(e) => updateValue(e.target.value)}></textarea>
                    }
                </>
    )
}
export default CustomQuill;