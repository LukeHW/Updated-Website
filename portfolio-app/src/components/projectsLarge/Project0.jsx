/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import json Projects object
// import ProjectsJSON from '../Projects.json';

// styles for App.js
const useStyles = makeStyles(() => ({
  container: {
    height: 1000,
    width: 1000,
    zIndex: 1000,
    backgroundColor: 'white',
    position: 'absolute',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'none'
  }
}))

function Project0() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
        text
    </div>
  );
}

export default Project0;