import React from 'react';
import Post from './Post';

const Jobs = props => {
  return (
    <div>
      <h1 className="text-center">All Jobs</h1>
      {props.data.map(job => {
        return <Post key={job.id} job={job} />;
      })}
    </div>
  );
};

export default Jobs;
