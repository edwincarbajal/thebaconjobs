import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.css';

const Post = props => {
  const categories = string => {
    return string.split(',').map(category => {
      return (
        <li key={category} className="list-inline-item">
          <h4>
            <span className="font-weight-normal text-uppercase badge">
              {category}
            </span>
          </h4>
        </li>
      );
    });
  };

  return (
    <div key={props.job.id} className="row no-gutters">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h6 className="card-title text-uppercase">
                  {props.job.employer}
                </h6>
                <h5 className="job-card-title card-title text-uppercase">
                  <Link to={`/jobs/${props.job.id}`}>
                    <strong>
                      {props.job.position}
                    </strong>
                  </Link>
                </h5>
              </div>
              <div className="category-card col-md-3">
                <ul className="list-inline">
                  {categories(props.job.categories)}
                </ul>
              </div>
              <div className="location-card col-md-3">
                <h6 className="text-muted text-right align-middle">
                  {props.job.location}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
