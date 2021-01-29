/* eslint react/prop-types: 0 */

// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// styles for Page.js
const useStyles = makeStyles((theme) => ({
  pageContainer: {
    minHeight: "200vh",
    width: "100%"
  }
}));

function Page(props) {

  const classes = useStyles();

  const { children } = props;

  return (
   <div className={classes.pageContainer}>
     {children}
   </div>
  );
}

export default Page;