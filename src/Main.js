import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Jobs from './Jobs';
import JobRoutes from './JobRoutes';
import GettingStarted from './GettingStarted';

const Main = (props) => {
  const { jobs } = props;
  return(
    <main>
      <Switch>
        <Route exact path='/' render={(props) => (
          <Jobs {...props} data={jobs} />
        )}/>
        <Route path='/jobs' component={JobRoutes}/>
        <Route exact path='/getting-started' component={GettingStarted}/>
      </Switch>
    </main>
  );
}

export default Main;
