import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Jobs from './Jobs';
import JobRoutes from './JobRoutes';

const Main = (props) => {
  const { jobs } = props;
  return(
    <main>
      <Switch>
        <Route exact path='/' render={(props) => (
          <Jobs {...props} data={jobs} />
        )}/>
        <Route path='/jobs' component={JobRoutes}/>
      </Switch>
    </main>
  );
}

export default Main;
