import React from 'react';
import styles from './NewJob.css';
import JobForm from './JobForm';

const NewJob = props => {
  return (
    <div>
      <div id="new-job-container" className="row">
        <div className="col-12 text-center">
          <h1>
            <span className="text-info">Post a job.</span> Reach thousands of
            talented people
          </h1>
        </div>
      </div>
      <div id="new-job-form-container" className="col-md-6 mx-auto">
        <JobForm history={props.history} updateJobs={props.updateJobs} />
      </div>
    </div>
  );
};

export default NewJob;
