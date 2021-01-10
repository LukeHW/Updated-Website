// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// styles for Page.js
const useStyles = makeStyles((theme) => ({
  pageContainer: {
    maxHeight: "200vh",
    width: "100%"
  }
}));

function Page(props) {

  const classes = useStyles();

  return (
   <div className={classes.pageContainer}>
     {props.children}
   </div>
  );
}

export default Page;