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
    name: 'Heading',
    selector: 'heading',
    sortable: true,
  },
  {
    name: 'Objective',
    selector: 'objectives',
    sortable: true,
  },
  {
    name: 'Duration',
    selector: 'duration',
    sortable: true,
  },
  
  {
    name: 'Eligibility Criteria',
    selector: 'eligibility_criteria',
    sortable: true,
  },

  {
    name: 'Selection Procedure',
    selector: 'selection_procedure',
    sortable: true,
  },

  {
    name: 'Curriculum',
    selector: 'curriculum',
    sortable: true,
  },

  {
    name: 'Career',
    selector: 'career_employability',
    sortable: true,
  },

  {
    name: 'Labs',
    selector: 'infrastruct_labs',
    sortable: true,
  },

  {
    name: 'Infrastructure',
    selector: 'infrastructure_images',
    sortable: true,
  },
  {
    name: 'Action',
    selector: 'action',
    cell: row => <div><ViewButton name="View" /><ViewButton name="Edit" /><ViewButton name="Delete" /></div>
  },
];
const ProgramIndividual = () => {

  const [value, setValue] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/indprogram/?format=json')
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
            <h2>Program Individual</h2>
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

export default ProgramIndividual