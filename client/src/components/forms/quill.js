import React, { useState } from 'react'
import ReactQuill from 'react-quill';

const CustomQuill = ({item}) => {
    const [value, setValue] = useState(item.value);

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'header': 2 }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],


            [{ 'align': [] }],
            ['blockquote'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
        ]
    };

    return (
        <>
            <ReactQuill theme="snow" modules={modules} defaultValue={value} onChange={(e) => setValue(e)}/>
            <textarea ref={item.ref} name={item.name} value={value ? value : ''} className="d-none" readOnly></textarea>
        </>
    )
}
export default CustomQuill;