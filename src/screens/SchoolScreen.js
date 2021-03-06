import React, {useState, useEffect} from 'react'
import SideNav from '../components/SideNav';
import DataTable from 'react-data-table-component';
import ViewButton from '../components/ViewButton';

const axios = require('axios');



// const data = [{ id: 1, title: 'Conan the Barbarian', school: 'automobile', category: 'school',  },
// { id: 2, name: 'Harry Potter', school: 'automobile', category: 'school' },
// { id: 3, name: 'Harry met ashwin', school: 'csit', category: 'school' }
// ];


const Create = () =>{
  
}


const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Image',
    selector: 'scl_image',
    sortable: true,
  },
  {
    name: 'Description',
    selector: 'description',
    sortable: true,
  },
  {
    name: 'Action',
    selector: 'action',
    cell: row => <div><ViewButton name="Create"  /><ViewButton name="Edit" /><ViewButton name="Delete" /></div>
  },
];
const SchoolScreen = () => {

  const [value, setValue] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/schools/?format=json')
    .then(function (response) {
      console.log(response);
      setValue(response.data);
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [])
    return (
        <div>
            <SideNav />
            <div className="main">
            <h2>School</h2>
            <DataTable
                title=""
                columns={columns}
                data={value}
                theme="solarized"
                // customStyles={customStyles}
            />
            </div>
        </div>
    )
}

export default SchoolScreen