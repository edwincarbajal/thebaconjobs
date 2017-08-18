import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Job from './Job';

const JobRoutes = () => (
  <Switch>
    <Route exact path='/jobs' component={NotFound}/>
    <Route path='/jobs/:id' component={Job}/>
  </Switch>
)

export default JobRoutes;
