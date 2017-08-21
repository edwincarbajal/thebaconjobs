import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      value: '', // In React, textareas require a 'value' state-field. This is the state of the jobs description
      employer: '',
      term: 'Full-Time',
      categories: '',
      location: '',
      options: [
        { value: 'Software Engineering', label: 'Software Engineering' },
        { value: 'QA Testers', label: 'QA Testers' },
        { value: 'Desgin UI/UX', label: 'Desgin UI/UX' },
        { value: 'PR & Media', label: 'PR & Media' },
        { value: 'Executive & Management', label: 'Executive & Management' },
        {
          value: 'Sales & Business Development',
          label: 'Sales & Business Development'
        },
        {
          value: 'Customer Service & Community',
          label: 'Customer Service & Community'
        },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Other', label: 'Other' }
      ]
    };
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.job) {
      this.setState({
        position: nextProp.job.position,
        value: nextProp.job.description,
        employer: nextProp.job.employer,
        term: nextProp.job.term,
        categories: nextProp.job.categories,
        location: nextProp.job.location
      });
    }
  }

  // This is a dynamic event handler
  // Uses each events id to update the proper state
  handleInputField = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleCategoryChange = e => {
    this.setState({ categories: e });
  };

  handleJobSubmit = e => {
    e.preventDefault();

    const categoryValues = this.state.categories.map(types => {
      return types.value;
    });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios
      .post(
        'https://thebaconjobsapi.herokuapp.com/v1/posts',
        {
          post: {
            position: this.state.position,
            description: this.state.value,
            employer: this.state.employer,
            term: this.state.term,
            categories: categoryValues.toString(),
            location: this.state.location
          }
        },
        config
      )
      .then(response => {
        this.props.updateJobs(response.data);
        this.props.history.push(`/jobs/${response.data.id}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleJobSubmit}>
        <h1 className="form-titles">Company Details</h1>
        <div className="form-group">
          <label htmlFor="companyDetails">Company name*</label>
          <input
            onChange={this.handleInputField}
            type="text"
            className="form-control"
            id="employer"
            placeholder="TheBacon"
            value={this.state.employer}
          />
        </div>

        <h1 className="form-titles">Job Details</h1>
        <div className="form-group">
          <label htmlFor="PositionInput">Position</label>
          <input
            onChange={this.handleInputField}
            type="text"
            className="form-control"
            id="position"
            placeholder="Junior Full Stack Developer"
            value={this.state.position}
          />
        </div>

        <div className="form-group">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="term"
                value="Full-Time"
                onChange={this.handleInputField}
                checked={this.state.term === 'Full-Time'}
              />
              Full-Time
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="term"
                value="Part-Time"
                onChange={this.handleInputField}
                checked={this.state.term === 'Part-Time'}
              />
              Part-Time
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="term"
                value="Contract"
                onChange={this.handleInputField}
                checked={this.state.term === 'Contract'}
              />
              Contract
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="term"
                value="Internship"
                onChange={this.handleInputField}
                checked={this.state.term === 'Internship'}
              />
              Internship
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="term"
                value="Co-founder"
                onChange={this.handleInputField}
                checked={this.state.term === 'Co-founder'}
              />
              Co-founder
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="categorySelect">Category(s)</label>
          <Select
            name="job-categories"
            value={this.state.categories}
            options={this.state.options}
            multi={true}
            onChange={this.handleCategoryChange}
          />
          <small id="categoryHelp" className="form-text text-muted">
            Select as many that may apply.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="locationInput">Location</label>
          <input
            onChange={this.handleInputField}
            type="text"
            className="form-control"
            id="location"
            placeholder="e.g New York, NY"
            value={this.state.location}
          />
        </div>

        <div className="form-group">
          <label htmlFor="descriptionTextArea">Description</label>
          <textarea
            onChange={this.handleInputField}
            className="form-control"
            id="value"
            rows="3"
            placeholder="TheBacon is looking for a rockstar Junior Developer to join the team!"
            value={this.state.value}
          />
        </div>

        <button type="submit" className="btn btn-outline-info btn-lg btn-block">
          Submit
        </button>
      </form>
    );
  }
}

export default JobForm;
