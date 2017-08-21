import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Jobs from './Jobs';
import Job from './Job';
import NewJob from './NewJob';
import EditJob from './EditJob';

const Main = props => {
  const { jobs, updateJobs, fetchData } = props;
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
        <Route
          exact
          path="/jobs/:id/edit"
          render={props => <EditJob {...props} fetchData={fetchData} />}
        />
      </Switch>
    </main>
  );
};

export default Main;
