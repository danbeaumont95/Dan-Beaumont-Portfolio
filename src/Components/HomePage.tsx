import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DanPhoto from '../Images/Dan.JPG';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  allContent: {
    height: '100vh',
    ['@media (max-width:600px)']: {
      marginBottom: theme.spacing(4),
      height: '100%'
    },
    ['@media (min-width:800px)']: {
      marginBottom: theme.spacing(8),
      height: '100%'
    },
  },
  imageAndText: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    ['@media (max-width:800px)']: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
    marginLeft: theme.spacing(8),
    ['@media (max-width:800px)']: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(4)
    },
    ['@media (max-width:1000px)']: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(4)
    },
  },
  image: {
    marginRight: theme.spacing(8),
    ['@media (max-width:500px)']: {
      width: '250px',
      height: '400px',
      marginRight: 0
    },
    ['@media (max-width:800px)']: {
      width: '350px',
      height: '400px',
      marginRight: 0
    },
    ['@media (max-width:1000px)']: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2)
    },
  }
}));
export const HomePage: () => JSX.Element = () => {
  const classes = useStyles();
  return (
    <div className={classes.allContent}>
      <Typography variant='h4' className={classes.title}>Dan Beaumont</Typography>
      <div className={classes.imageAndText}>
        <img src={DanPhoto} alt="nothing" height="500px" width="400px" className={classes.image} />
        <Typography variant='h6' className={classes.about}>
          Hi! My name is Daniel Beaumont and I am a full stack software engineer.
          <br /> <br />
          I have been employed as a software engineer for over a year, and also have 3 months experience as a trainee software developer, as well as 2 years experience teaching myself to code
          <br /> <br />
          Both my software engineer roles have been using the JavaScript eco system, mainly focusing in Node.Js, AWS, MongoDB, PSQL, Express and React.
          <br /> <br />
          Please have a look around my site and feel free to contact me by sending me a message via the contact me page.
        </Typography>
      </div>

    </div>
  );
};
