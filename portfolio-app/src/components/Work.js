// import modules
import React, { useState } from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "react-router";

// import components
import workBG from '../work-blurred-bg.jpg';
import Projects from './Projects.js';

// styles for Main.js
const useStyles = makeStyles(() => ({
  container: {
    
  },
  paperContainer: {
    backgroundImage: `url(${workBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  title: {
    fontWeight: 700,
    fontSize: 'min(8vw, 80px)'
  },
  greeting: {
    textAlign: "left"
  },
  centeredItem: {
    bottom: "0px",
    position: "absolute",
    width: "100%",
    textAlign: "center"
  },
  icons: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  iconsInline: {
    width: 50,
    margin: 5,
    marginTop: -5,
    marginLeft: 20
  },
  item: {
    marginTop: 250
  },
  secondContainer: {
    height: "100vh",
    width: "100%"
  },
  hidden: {
    justifyContent: "center",
    display: "flex",
    marginTop: 30
  },
  circle: {
    width: "80px",
    height: "80px",
    border: "1px solid #3c2946",
    position: "fixed",
    borderRadius: "50%"
  },
  outsideLinks: {
    textDecoration: "none",
    fontWeight: "normal",
    color: "Black"
  },
  workWrapper: {
    minHeight: '100vh',
    color: 'white',
    fontFamily: 'Roboto',
    alignItems: 'center'
  }
}));

function Work() {

  const classes = useStyles();

  return (
    <div className="App">
    <Grid className={classes.paperContainer}>
    <div className={classes.workWrapper}>
      <Grid container className={classes.container}>
      <Grid item xs={1} sm={1} md={2} lg={3} xl={3}/> 
        <Grid item className={classes.item} xs={10} sm={10} md={8} lg={6} xl={6}>
          <Typography className={classes.title} variant="h1" component="h2" gutterBottom>
            What I have worked on:
          </Typography>
          <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
            <Projects/>
          </Typography>
        </Grid>
        <Hidden mdUp>
          <Grid item xs={1} sm={1}/>
        </Hidden>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={3}/>
      </Grid>
    </div>
    </Grid>
  </div>
  );
}

export default withRouter(Work);