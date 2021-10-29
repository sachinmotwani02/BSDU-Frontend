import React, {useState, useEffect} from 'react'
import SideNav from '../components/SideNav';
import DataTable from 'react-data-table-component';
import ViewButton from '../components/ViewButton';

const axios = require('axios');



// const data = [{ id: 1, title: 'Conan the Barbarian', school: 'automobile', category: 'school',  },
// { id: 2, name: 'Harry Potter', school: 'automobile', category: 'school' },
// { id: 3, name: 'Harry met ashwin', school: 'csit', category: 'school' }
// ];


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
    selector: 'faculty_image',
    sortable: true,
  },
  {
    name: 'Designation',
    selector: 'designation',
    sortable: true,
  },
  {
    name: 'Action',
    selector: 'action',
    cell: row => <div><ViewButton name="View" /><ViewButton name="Edit" /><ViewButton name="Delete" /></div>
  },
];
const Faculty = () => {

  const [value, setValue] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/faculties/?format=json')
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
            <h2>Faculty</h2>
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

export default Faculty