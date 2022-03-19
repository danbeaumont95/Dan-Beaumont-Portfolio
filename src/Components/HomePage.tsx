import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DanPhoto from '../Images/Dan.JPG';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  allContent: {
    height: '100vh',
  },
  imageAndText: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6)
  },
  about: {
    color: 'white',
    textAlign: 'center',
    maxWidth: '500px',
    marginLeft: theme.spacing(4)
  },
  image: {
    marginRight: theme.spacing(4)

  }
}));
export const HomePage: () => JSX.Element = () => {
  const classes = useStyles();
  return (
    <div className={classes.allContent}>
      <Typography variant='h4' className={classes.title}>Dan Beaumont</Typography>
      <div className={classes.imageAndText}>
        <Typography variant='h6' className={classes.about}>
          Hi! My name is Daniel Beaumont and I am a full stack software engineer.
          <br /> <br />
          I have been employed as a software engineer for over a year, and also have 3 months experience as a trainee software developer, as well as 2 years experience teaching myself to code
          <br /> <br />
          Both my software engineer roles have been using the JavaScript eco system, mainly focusing in Node.Js, AWS, MongoDB, PSQL, Express and React.
          <br /> <br />
          Please have a look around my site and feel free to contact me by sending me a message via the contact me page.
        </Typography>
        <img src={DanPhoto} alt="nothing" height="600px" width="400px" className={classes.image} />
      </div>

    </div>
  );
};
