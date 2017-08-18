import React, { Component } from 'react';
import axios from 'axios';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {}
    }
  }

  componentWillMount = () => {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3001/v1/posts/${id}`)
      .then((response) => {
        this.setState({ job: response.data.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { position, description, employer } = this.state.job;
    return(
      <div>
        <div className="row">
          <div className="col-12 text-center">
            <h5 className="text-uppercase text-muted">{`${employer} is hiring a`}</h5>
            <h1 className="text-uppercase"><strong>{position}</strong></h1>
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
                <button type="button" className="btn btn-info btn-lg btn-block text-uppercase">Apply for this job</button>
                <button type="button" className="btn btn-primary btn-lg btn-block text-uppercase">Share on twitter</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block text-uppercase">Share on facebook</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;