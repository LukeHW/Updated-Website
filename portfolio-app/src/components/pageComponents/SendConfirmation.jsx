// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// styles for Main.js
const useStyles = makeStyles(() => ({
  container: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: "blur(15px)",
    paddingTop: 150,
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    zIndex: 200
  },
  confirmationBox: {
      width: '100%',
      height: '100%',
      maxWidth: 500,
      maxHeight: 400
  }
}));

function SendConfirmation() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
    <div className={classes.confirmationBox}>
        <h5>Email Sent!</h5> 
    </div>
    </div>
  );
}

export default SendConfirmation;