import React, { Component } from 'react';
import axios from 'axios';
import UpdateForm from './UpdateForm';

class EditJob extends Component {
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
    return (
      <div>
        <div className="row">
          <div className="col-12 text-center">
            <h1>Edit Job</h1>
          </div>
        </div>

        <div id="new-job-form-container" className="col-md-6 mx-auto">
          <UpdateForm
            job={this.state.job}
            params={this.props.match.params.id}
            history={this.props.history}
            fetchData={this.props.fetchData}
          />
        </div>
      </div>
    );
  }
}

export default EditJob;
