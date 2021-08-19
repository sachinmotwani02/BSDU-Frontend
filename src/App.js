import React, { useState } from 'react'
import { EditText } from 'react-edit-text';
import SideNav from './components/SideNav';
import EditScreen from './screens/EditScreen';
import School from './screens/School';

function App() {

  const [name, setName] = useState('School of Automobile');
  const [desc, setDesc] = useState('Lorem ipsum oder isdum.');

  return (
    <div>
      {/* <EditScreen /> */}
      <School />
    </div>
  );
}

export default App;
