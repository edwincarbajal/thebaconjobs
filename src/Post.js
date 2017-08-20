import React from 'react';
import { Link } from 'react-router-dom';

const Post = props => {
  const categories = string => {
    return string.split(',').map(category => {
      return (
        <li key={category} className="list-inline-item">
          <h5>
            <span className="text-uppercase text-light badge badge-info">
              {category}
            </span>
          </h5>
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
                <h5 className="card-title text-uppercase">
                  <Link to={`/jobs/${props.job.id}`}>
                    <strong>
                      {props.job.position}
                    </strong>
                  </Link>
                </h5>
              </div>
              <div className="col-md-3">
                <ul className="list-inline">
                  {categories(props.job.category)}
                </ul>
              </div>
              <div className="col-md-3">
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
