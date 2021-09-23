import React, { useState } from 'react'
import Editor from "rich-markdown-editor";
import SideNav from '../components/SideNav'

const axios = require('axios');

// const data = axios.get('/user?ID=12345/?school=automotive')
// .then(function (response) {
//   console.log(response);
// })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

const data = {
    name: 'Sachin Motwani Netflix Special',
    desc: ''
}

function editData(name, desc) {
    axios.put('/user?ID=12345/?school=automotive', {
    name: name,
    desc: desc
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}

const EditScreen = () => {

    const name = useState('');
    const desc = useState('');
    return (
        <div>
        <SideNav />
            <div className="main">
                <button className="back-button">Back To School</button>
                <div className="inputs">
                <div className="edit">  
                    <h2>Edit</h2>
                    <p className="tap-text">(Select text to edit)</p>
                </div>  
                <label className="label">Name</label>
                <Editor 
                defaultValue= {data.name}
                className="edit-text"
                />
                {/* <input
                type="text"
                value={name}
                readOnly={true}
                onChange={(e) => setName(e.target.value)}
                className="label"/>
                <div style={{height: 20}}></div>*/}
                 
                
                {/* <textarea
                className="para"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                /> */}
                <label className="label">Description</label>
                <Editor 
                defaultValue="School of Automotive Skills"
                className="edit-text"
                />

                <button className="save-button" type="submit">Save</button>

                </div>
            </div>
                </div>
    )
}

export default EditScreen
