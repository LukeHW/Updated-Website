/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
// import modules
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

// import json Projects object
// import ProjectsJSON from '../Projects.json';

// styles for App.js
const useStyles = makeStyles(() => ({
  blurredOverlay: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: "blur(15px)",
    display: 'block',
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    overflowX: 'hidden',
    overflowY: 'visible'
  },
  loadingHeader: {
    fontWeight: 600,
    fontSize: 'min(6vw, 24px)',
    color: "white",
    fontFamily: 'Inter',
    textAlign: "center"
  },
  test: {
      display: 'flex',
      margin: '0 auto',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.9)'
  }
}))

const override = css`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
`;

function Loading() {
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  // useEffect(() => {
  //   setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  // }, []);
  useEffect(() => {
    setLoading(true);
    return () => setLoading(false)
  }, []);

  return (
    <div className={classes.test}>
        <HashLoader color={'#397BA6'} css={override} loading={loading} size={120} />
        <h5 className={classes.loadingHeader}>Loading Web Portfolio</h5>
    </div>
  );
}

export default Loading;