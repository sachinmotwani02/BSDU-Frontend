import React from 'react'
import EditScreen from './screens/EditScreen';

import SchoolScreen from './screens/SchoolScreen';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';
import ProgramScreen from './screens/ProgramScreen';
import SchoolIndividual from './screens/SchoolIndividual';
import ProgramIndividual from './screens/ProgramIndividual'
import Faculty from './screens/Faculty';
import FacultyIndividual from './screens/FacultyIndividual';
import Leaders from './screens/Leaders';

function App() {


  return (
    <>
      {/* <EditScreen /> */}
      <Switch>
          <Route exact path="/" component={DashboardScreen} />
          <Route exact path="/school" component={SchoolScreen} />
          <Route exact path="/programs" component={ProgramScreen} />
          <Route exact path="/schoolind" component={SchoolIndividual} />
          <Route exact path="/indprogram" component={ProgramIndividual} />
          <Route exact path="/faculty" component={Faculty} />
          <Route exact path="/indfaculty" component={FacultyIndividual} />
          <Route exact path="/leader" component={Leaders} />
          <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
