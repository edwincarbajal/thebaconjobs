import React from 'react';
import Post from './Post';
import styles from './Jobs.css';

const Jobs = props => {
  return (
    <div id="main-jobs-container" className="row">
      <div className="col-12">
        <h1 className="display-4 text-center">All Jobs</h1>
        {props.data.map(job => {
          return <Post key={job.id} job={job} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;
