import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import JobDetails from "./jobDetails";

class SearchJobs extends Component {
  state = {
    jobDetails: [],
    searchString: ""
  };

  constructor() {
    super();
    this.getjobDetails();
  }

  getjobDetails = () => {
    return [];
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
        {this.state.jobDetails ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for jobDetails"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.jobDetails.map(currentJob => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <jobDetails course={currentJob} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No courses found"
        )}
      </div>
    );
  }
}

export default SearchJobs;