import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import styles from './NewJob.css';

class NewJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      value: '', // In React, textareas require a 'value' state-field. This is the state of the jobs description
      employer: '',
      categories: [],
      type: '',
      location: '',
      selectedOption: 'Full-Time',
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
    // This function get's binded in the contructor because it uses the async/await keywords
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    this.setState(prevState => ({
      categories: [...prevState.categories, this.state.selectedOption]
    }));
    console.log(this.props);
  }

  // This is a dynamic event handler
  // Uses each events id to update the proper state
  handleInputField = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // This is an asynchronous function
  async handleOptionChange(e) {
    // Update the value of selectedOption to selected option
    await this.setState({ selectedOption: e.target.value });
    // Remove the previously selected option from state
    // The two functions below do not mutate state
    await this.setState(prevState => ({
      categories: prevState.categories.filter(category => {
        return category === this.state.selectedOption;
      })
    }));
    // Update the value of selectedOption to the new selected option
    await this.setState(prevState => ({
      categories: [...prevState.categories, this.state.selectedOption]
    }));
  }

  handleCategoryChange = e => {
    this.setState({ type: e });
  };

  handleJobSubmit = e => {
    e.preventDefault();

    const categoryValues = this.state.type.map(types => {
      return types.value;
    });
    const allCategories = [...this.state.categories, categoryValues];

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwt')
      }
    };
    axios
      .post(
        'http://localhost:3001/v1/posts',
        {
          post: {
            position: this.state.position,
            description: this.state.value,
            employer: this.state.employer,
            category: allCategories.toString(),
            location: this.state.location,
            user_id: 1
          }
        },
        config
      )
      .then(response => {
        this.props.updateJobs(response.data.data);
        this.props.history.push(`/jobs/${response.data.data.id}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div id="new-job-container" className="row">
          <div className="col text-center">
            <h1>
              <span className="text-info">Post a job.</span>Reach thousands of
              talented people
            </h1>
          </div>
        </div>
        <div id="new-job-form-container" className="col-md-6 mx-auto">
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
                    id="exampleRadios1"
                    value="Full-Time"
                    onChange={this.handleOptionChange}
                    checked={this.state.selectedOption === 'Full-Time'}
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
                    id="exampleRadios2"
                    value="Part-Time"
                    onChange={this.handleOptionChange}
                    checked={this.state.selectedOption === 'Part-Time'}
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
                    id="exampleRadios3"
                    value="Contract"
                    onChange={this.handleOptionChange}
                    checked={this.state.selectedOption === 'Contract'}
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
                    id="exampleRadios4"
                    value="Internship"
                    onChange={this.handleOptionChange}
                    checked={this.state.selectedOption === 'Internship'}
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
                    id="exampleRadios5"
                    value="Co-founder"
                    onChange={this.handleOptionChange}
                    checked={this.state.selectedOption === 'Co-founder'}
                  />
                  Co-founder
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="categorySelect">Category(s)</label>
              <Select
                name="job-categories"
                value={this.state.type}
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

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewJob;
