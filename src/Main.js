import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Jobs from './Jobs';
import Job from './Job';
import NewJob from './NewJob';

const Main = props => {
  const { jobs, updateJobs } = props;
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Jobs {...props} data={jobs} />}
        />
        <Route exact path="/jobs/:id" component={Job} />
        <Route
          exact
          path="/job/new"
          render={props => <NewJob {...props} updateJobs={updateJobs} />}
        />
      </Switch>
    </main>
  );
};

export default Main;
