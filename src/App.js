import React from 'react'
import EditScreen from './screens/EditScreen';

import SchoolScreen from './screens/SchoolScreen';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';
import ProgramScreen from './screens/ProgramScreen';
import SchoolIndividual from './screens/SchoolIndividual';


function App() {


  return (
    <>
      {/* <EditScreen /> */}
      <Switch>
          <Route exact path="/" component={DashboardScreen} />
          <Route exact path="/school" component={SchoolScreen} />
          <Route exact path="/programs" component={ProgramScreen} />
          <Route exact path="/schoolind" component={SchoolIndividual} />
          <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
