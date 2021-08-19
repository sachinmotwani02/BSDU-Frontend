import React, { useState } from 'react'
import { EditText } from 'react-edit-text';
import SideNav from './components/SideNav';
import EditScreen from './screens/EditScreen';
import LoginScreen from './screens/LoginScreen';
import School from './screens/School';

function App() {

  return (
    <div>
      {/* <EditScreen /> */}
      {/* <School /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
