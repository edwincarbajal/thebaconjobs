import React, { Component } from 'react';
import Post from './Post';

const Jobs = (props) => {
  return (
    <div>
      {
        props.data.map((job) => {
          return <Post key={job.id} job={job} />;
        })
      }
    </div>
  );
}

export default Jobs;
