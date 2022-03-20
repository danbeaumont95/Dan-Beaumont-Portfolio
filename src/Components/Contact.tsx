import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Box, TextField, Typography, Button, Tooltip } from '@material-ui/core';
import Swal from 'sweetalert2';
import ContactService from '../Services/contact';
import { useForm } from 'react-hook-form';

const WhiteTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: '#fff', // Text color
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#fff8', // Semi-transparent underline
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#fff', // Solid underline on hover
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff', // Solid underline on focus
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  allContent: {
    marginTop: theme.spacing(12),
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: '60%',
    height: '60%',
    padding: 0,
    borderRadius: '20px',
    backgroundColor: '#3e3e3e',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  topBox: {
    borderRadius: '20px 20px 0px 00px',
    textAlign: 'left',
    width: '100%',
    backgroundColor: '#4d4d4f',
    height: '8%',
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
    marginLeft: '10px',
    marginRight: '2px',
    height: '10px',
    width: '10px',
    backgroundColor: '#ed1c6f',
    borderRadius: '50%',
    display: 'inline-block',
  },
  minimize: {
    height: '10px',
    width: '10px',
    marginRight: '2px',
    backgroundColor: '#e8e925',
    borderRadius: '50%',
    display: 'inline-block',
  },
  maximize: {
    height: '10px',
    width: '10px',
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
    width: '60%'
  },
  inputField: {
    width: '60%',
    marginTop: '10px',
  },
  bodyInputField: {
    width: '60%',
    marginTop: '10px'
  },
  button: {
    backgroundColor: '#ed1c6f',
    width: '30%',
    marginTop: '10px',
    height: '50px',
    '&:hover': {
      backgroundColor: '#3c041a',
      color: 'white'
    },
  },
  text: {
    flexBasis: '40%',
    color: '#ed1c6f',
    marginLeft: '20px',
    marginTop: theme.spacing(6)
  },
  content: {
    display: 'flex',
  }
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

  const onSubmit = (data) => {
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

      <Box className={classes.box}>
        <Box className={classes.topBox}>
          <div className={classes.leftButtons}>

            <div className={classes.exit}></div>
            <div className={classes.minimize}></div>

            <div className={classes.maximize}></div>
          </div>

        </Box>
        <div className={classes.content}>
          <Typography variant="h3" className={classes.text}>Contact me!</Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} className={classes.formBox}>

            <WhiteTextField
              {...register('userEmail')}
              onChange={handleChangeDetails}
              placeholder="Your Email"
              className={classes.inputField}
              inputProps={{
                style: { textAlign: 'center', color: 'white' },
              }}
            />

            <WhiteTextField
              {...register('subject')}
              onChange={handleChangeDetails}
              placeholder="Subject"
              className={classes.inputField}
              inputProps={{
                style: { textAlign: 'center' },
              }}
            />

            <WhiteTextField
              {...register('body')}
              onChange={handleChangeDetails}
              placeholder="Body"
              className={classes.bodyInputField}
              inputProps={{
                style: { height: '200px', color: 'white' },
              }}
              variant="outlined"
              multiline
            />
            <Tooltip title="By clicking send, this confirms you are happy for your email to be shared with me, I will try respond to your query within 24 hours" placement="top">
              <Button
                type="submit"
                onClick={() => {
                  setDetails(details);
                }}
                className={classes.button}
              >
                Send email!
              </Button>
            </Tooltip>
          </Box>
        </div>
      </Box>
    </div>
  );
};
