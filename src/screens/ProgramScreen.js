import React, {useState, useEffect} from 'react'
import SideNav from '../components/SideNav';
import DataTable from 'react-data-table-component';
import ViewButton from '../components/ViewButton';


const axios = require('axios');





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
    name: 'programImage',
    selector: 'program_image',
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
    cell: row => <div className="container d-flex"><ViewButton name="View" /><ViewButton name="Edit" /><ViewButton name="Delete" /></div>
  },
];
const ProgramScreen = () => {

  const [value, setValue] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/program/?format=json')
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
            <h2>Program</h2>
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

export default ProgramScreen