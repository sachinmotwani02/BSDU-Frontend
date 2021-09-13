import React from 'react'
import EditScreen from './screens/EditScreen';
import SchoolScreen from './screens/SchoolScreen';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';
import ProgramScreen from './screens/ProgramScreen';


function App() {


  return (
<<<<<<< HEAD
    <div>
      <EditScreen />
      {/* <School /> */}
      {/* <LoginScreen /> */}
    </div>
=======
    <>
      {/* <EditScreen /> */}
      <Switch>
          <Route exact path="/" component={DashboardScreen} />
          <Route exact path="/school" component={SchoolScreen} />
          <Route exact path="/programs" component={ProgramScreen} />
          <Redirect to="/" />
      </Switch>
    </>
>>>>>>> 3ba537befd4724ffcf3362e53de3532cd47adda9
  );
}

export default App;
