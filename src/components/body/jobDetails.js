import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const JobDetails = props => {
  return (
    <div>
      {props.JobDetails ? (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.JobDetails.jobTitle}
              Full Stack Developer1
            </Typography>
            <Typography component="p">
              {props.JobDetails.skillSet}
              Full Stack Developer2
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              //href={props.JobDetails.fields.url}
              target="_blank"
            >
              Go To JobDetails
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default JobDetails;
