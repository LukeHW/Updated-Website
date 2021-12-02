/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// import json Projects object
// import ProjectsJSON from '../Projects.json';

// styles for App.js
const useStyles = makeStyles(() => ({
  container: {
    height: 2000,
    width: '100%',
    maxWidth: 1200,
    zIndex: 99,
    backgroundColor: 'white',
    borderRadius: 25
  },
  blurredOverlay: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: "blur(15px)",
    paddingTop: 150,
    display: 'block',
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    overflowX: 'hidden',
    overflowY: 'visible'
  },
  closeButton: {
    margin: 5,
    float: 'right',
    display: 'block'
  }
}))

function Project0() {

  const classes = useStyles();

  const [projectOpen, setProjectOpen] = useState(true);

  const onClick = () => {
    setProjectOpen(false)
  };

  const renderProject =
    <div className={classes.blurredOverlay}>
    <div className={classes.container}>
      <div className={classes.closeButton}>
        <IconButton aria-label={"close"} onClick={onClick}>
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  </div>
  

  return (
    <div>
    {projectOpen ? renderProject : null}
    </div>
  );
}

export default Project0;