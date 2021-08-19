import React, { useState } from 'react'
import SideNav from '../components/SideNav'

const EditScreen = () => {

    const [name, setName] = useState('School of Automobile');
    const [desc, setDesc] = useState('Lorem ipsum oder isdum.');
  
    return (
        <div>
        <SideNav />
            <div className="main">
                <div className="inputs">
                <label>Name</label>
                <input
                type="text"
                value={name}
                readOnly={true}
                onChange={(e) => setName(e.target.value)}/>
                <div style={{height: 20}}></div>
                <label>Description</label>
                <textarea
                className="para"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                />

                </div>
            </div>
                </div>
    )
}

export default EditScreen
