import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import JobDetails from "./jobDetails";

import data from '../../data/jobs.json';


class SearchJobs extends Component {
  
  state = {
    jobDetails: data,
    searchString: ""
  };

  constructor() {
    super();
    this.getjobDetails();
    //console.log(this.state.jobDetails);
  }

  getjobDetails = () => {
    /*fetch("https://rawgit.com/vivekn91/helloWorld/master/jobs.json")
      .then(res => {
        res.json();
        console.log(res.json());
      })
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );*/
    //this.setState({ jobDetails : []});
    console.log(data);
    return data;
  };

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getjobDetails();
  };

  render() {
    return (
      <div>
        {this.state.jobDetails !== [] ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for jobDetails"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.jobDetails.map((currentJob) => (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={currentJob._id}>
                  <JobDetails JobDetails={currentJob} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No Jobs found"
        )}
      </div>
    );
  }
}

export default SearchJobs;
