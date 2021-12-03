/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import json Projects object
import ProjectsJSON from '../Projects.json';

// styles for App.js
const useStyles = makeStyles(() => ({
  container: {
    height: 3000,
    width: '100%',
    maxWidth: 1000,
    zIndex: 201,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: -5,
    fontFamily: 'Inter'
  },
  emptyContainer: {
    height: 300,
    width: '100%',
    content: ' '
  },
  projectHeader: {
    fontSize: 'clamp(27px, 7vmin, 72px)',
    fontWeight: 500,
    color: '#1D1D1F',
    padding: 'clamp(30px, 6vmin, 100px)',
    paddingBottom: 'clamp(20px, 6vw, 50px)',
    paddingTop: 'clamp(30px, 10vw, 80px)',
    margin: 0,
    textAlign: 'left',
    maxWidth: 800,
  },
  projectDiscription: {
    fontSize: 'clamp(18px, 4vmin, 24px)',
    fontWeight: 400,
    color: '#484848',
    padding: 'clamp(30px, 6vmin, 100px)',
    paddingTop: 0,
    paddingBottom: 70,
    margin: 0,
    textAlign: 'left',
    maxWidth: 800
  },
  codeContainer: {
    width: '100%',
    height: 800,
    maxHeight: 800,
    backgroundColor: '#F5F5F7'
  },
  codeHeader: {
    padding: 80,
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: 600,
    fontSize: 'clamp(36px, 8vmin, 72px)'
  },
  projectBG: {
    width: '100%',
    maxHeight: 500,
    minHeight: 170,
    objectFit: 'cover',
    objectPosition: '50% 50%',
    borderRadius: '20px 20px 0px 0px',
    backgroundColor: '#252423',
    overflow: 'hidden',
    marginTop: -45
  }
}))

function Project1() {

  const classes = useStyles();

  const currentProjectArray = ProjectsJSON.projects[1];

  return (
    <div>
      <div className={classes.container}>
        <img className={classes.projectBG} src={currentProjectArray.background} alt={""}/>
        <h1 className={classes.projectHeader}>
          {currentProjectArray.title}
        </h1>
        <h5 className={classes.projectDiscription}>
          {currentProjectArray.body}
        </h5>
        <div className={classes.codeContainer}>
          <h2 className={classes.codeHeader}>The code</h2>
        </div>
      </div>
      <div className={classes.emptyContainer} />
    </div>
  );
}

export default Project1;