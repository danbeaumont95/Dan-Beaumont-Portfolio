import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField, Typography, Button } from '@material-ui/core';
import Swal from 'sweetalert2';
import ContactService from '../Services/contact';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(() => ({
  allContent: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ed1c6f',
    textAlign: 'center',
    paddingTop: 20,
    paddingBlock: 20,
    textDecoration: 'underline',
    ['@media (max-width:800px)']: {
      marginTop: 0,
    },
  },
  box: {
    padding: 0,
    backgroundColor: '#3e3e3e',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  topBox: {
    textAlign: 'left',
    width: '100%',
    backgroundColor: '#4d4d4f',
    height: '10%',
    display: 'flex',
    flexDirection: 'row'
  },
  leftButtons: {
    textAlign: 'left'
  },
  rightButtons: {
    textAlign: 'right'
  },
  exit: {
    marginTop: '15px',
    height: '15px',
    width: '15px',
    backgroundColor: '#ed1c6f',
    borderRadius: '50%',
    display: 'inline-block',
  },
  minimize: {
    height: '15px',
    width: '15px',
    backgroundColor: '#e8e925',
    borderRadius: '50%',
    display: 'inline-block',
  },
  maximize: {
    height: '15px',
    width: '15px',
    backgroundColor: '#74c54f',
    borderRadius: '50%',
    display: 'inline-block',
  },
  dots: {
    height: '15px',
    width: '15px',
    backgroundColor: '#999',
    borderRadius: '50%',
    display: 'inline-block',
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    backgroundColor: 'white',
    width: '60%',
    marginTop: '10px'
  },
  bodyInputField: {
    backgroundColor: 'white',
    width: '60%',
    marginTop: '10px'
  },
  button: {
    backgroundColor: '#D7EDFA',
    width: '30%',
    marginTop: '10px',
    height: '50px',
    '&:hover': {
      backgroundColor: '#BEE3ED',
    },
  },

}));
export const Contact = () => {
  const [details, setDetails] = useState({});
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const classes = useStyles();

  const handleChangeDetails = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = data => {
    const { subject, body, userEmail } = data;
    ContactService.sendEmail(subject, body, userEmail)
      .then(async (res) => {
        if (res.data.message === '[Success] Email sent!') {
          await Swal.fire({
            title: 'Message sent!'
          });
          window.location.href = '/contact';
        }
        else {
          return Swal.fire({
            title: 'Email failed to send, please try again!'
          });
        }
      });
  };

  return (
    <div className={classes.allContent}>
      <Typography className={classes.title} variant="h2">Contact me!</Typography>

      <Box className={classes.box}>
        <Box className={classes.topBox}>
          <div className={classes.leftButtons}>

            <div className={classes.exit}></div>
            <div className={classes.minimize}></div>

            <div className={classes.maximize}></div>
          </div>
          <div className={classes.rightButtons}>

            <div className={classes.dots}></div>
            <div className={classes.dots}></div>
            <div className={classes.dots}></div>
          </div>
        </Box>
        <Typography variant="h6">Please fill in the form below and send me a message, I will try to get back to you within 24 hours</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className={classes.formBox}>

          <TextField
            {...register('userEmail')}
            onChange={handleChangeDetails}
            placeholder="Your Email"
            className={classes.inputField}
            inputProps={{
              style: { textAlign: 'center' },
              // className: classes.color,
            }}
            variant="outlined"
          />

          <TextField
            {...register('subject')}
            onChange={handleChangeDetails}
            placeholder="Subject"
            className={classes.inputField}
            inputProps={{
              style: { textAlign: 'center' },
              // className: classes.color,
            }}
            variant="outlined"
          />

          <TextField
            {...register('body')}
            onChange={handleChangeDetails}
            placeholder="Body"
            className={classes.bodyInputField}
            inputProps={{
              style: { height: '200px' },
              // className: classes.color,
            }}
            variant="outlined"
            multiline
          />

          <Button
            type="submit"
            onClick={() => {
              setDetails(details);
            }}
            className={classes.button}
          >
            Send message!
          </Button>

        </Box>
      </Box>
    </div>
  );
};
