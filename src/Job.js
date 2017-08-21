import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Job.css';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {}
    };
  }

  componentWillMount = () => {
    const id = this.props.match.params.id;
    axios
      .get(`https://thebaconjobsapi.herokuapp.com/v1/posts/${id}`)
      .then(response => {
        this.setState({ job: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { position, description, employer } = this.state.job;
    return (
      <div>
        <div className="row">
          <div className="job-view col-12 text-center">
            <h5 className="text-uppercase text-muted">{`${employer} is hiring a`}</h5>
            <h1 className="job-position text-uppercase">
              <strong>
                {position}
              </strong>
            </h1>
            <Link to={`/jobs/${this.props.match.params.id}/edit`}>
              <small className="text-muted">Edit Job</small>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <p className="text-justify lead">
              {description}
            </p>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-info btn-lg btn-block text-uppercase"
                >
                  Apply for this job
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block text-uppercase"
                >
                  Share on twitter
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg btn-block text-uppercase"
                >
                  Share on facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
