import React from 'react'
import SideNav from '../components/SideNav';
import DataTable from 'react-data-table-component';
import ViewButton from '../components/ViewButton';

const axios = require('axios');

// const data = axios.get('/user?ID=12345')
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

  
const data = [{ id: 1, name: 'Conan the Barbarian', school: 'automobile', category: 'school',  },
{ id: 2, name: 'Harry Potter', school: 'automobile', category: 'school' },
{ id: 3, name: 'Harry met ashwin', school: 'csit', category: 'school' }
];

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'School',
    selector: 'school',
    sortable: true,
    right: true,
  },
  {
    name: 'Category',
    selector: 'category',
    sortable: true,
  },
  {
    name: 'Action',
    selector: 'action',
    cell: row => <div><ViewButton name="View" /><ViewButton name="Edit" /><ViewButton name="Delete" /></div>
  },
];
const SchoolScreen = () => {
    return (
        <div>
            <SideNav />
            <div className="main">
            <h2>School</h2>
            <DataTable
                title="Arnold Movies"
                columns={columns}
                data={data}
                theme="solarized"
                // customStyles={customStyles}
            />
            </div>
        </div>
    )
}

export default SchoolScreen
