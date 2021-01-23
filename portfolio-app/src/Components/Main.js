// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "react-router";

// import styles
import './Main.css';

// import components
import bg from '../blurredBG.jpg';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between"
  },
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  title: {
    fontWeight: 700,
    fontSize: 60
  },
  greeting: {
    textAlign: "left"
  },
  placer: {
    width: "30vmin",
    minWidth: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    marginTop: 100,
    marginBottom: 50
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
  }
}));

function Main() {

  const classes = useStyles();

  return (
    <div className="App">
    <Grid className={classes.paperContainer}>
    <div className="AppBG">
      <Grid container className={classes.container}>
      <Grid item xs={1} sm={1} md={2} lg={3} xl={3}/> 
        <Grid item className={classes.item} xs={11} sm={11} md={4} lg={3} xl={3}>
          <Typography className={classes.title} variant="h1" component="h2" gutterBottom>
            Hi, I'm Luke!
          </Typography>
          <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
            Developer. Designer. Musician.
          </Typography>
        </Grid>
        <Hidden mdUp>
          <Grid item xs={1} sm={1}/>
        </Hidden>
        <Grid item xs={10} sm={10} md={4} lg={3} xl={3} align="center">
          <img className={classes.placer} src="/placer.png" alt="LHW logo"/>
        </Grid>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={3}/>
      </Grid>
      <div className={classes.centeredItem}>
        <ArrowDownwardIcon className="downArrow bounce-7"/>
      </div>
    </div>
    </Grid>

    <Grid container className={classes.secondContainer}>
      <Grid item lg={2} xl={2}/>
      <Hidden mdDown>
        <Grid item className={classes.item} lg={2} xl={2} align="center">
        <IconButton aria-label="menu">
          <a target='_blank' href='https://github.com/LukeHW' rel="noreferrer" className={classes.outsideLinks}>
            <img className={classes.icons} src="/github.png" alt="github logo"/>
          </a>
        </IconButton>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid item xs={1} sm={1} md={1}/>
      </Hidden>
      <Grid item className={classes.item} xs={10} sm={10} md={10} lg={4} xl={4} align="center">
        <Typography className={classes.title} variant="h1" gutterBottom>
          Feel free to add me on 
        <Hidden lgUp>
          <Typography className={classes.hidden} variant="h4" gutterBottom>
            <a target='_blank' href='https://github.com/LukeHW' rel="noreferrer" className={classes.outsideLinks}>
              Github
              <img className={classes.iconsInline} src="/github.png" alt="github logo"/>
            </a>
          </Typography>
          <Typography className={classes.hidden} variant="h4" gutterBottom>
            <a target='_blank' href='https://www.linkedin.com/in/lukehw/' rel="noreferrer" className={classes.outsideLinks}>
              LinkedIn
              <img className={classes.iconsInline} src="/linkedin.png" alt="linkedin logo"/>
            </a>
          </Typography>
        </Hidden>
        </Typography>
      </Grid>
      <Hidden lgUp>
        <Grid item xs={1} sm={1} md={1}/>
      </Hidden>
      <Hidden mdDown>
        <Grid item className={classes.item} lg={2} xl={2} align="center">
        <IconButton aria-label="menu">
          <a target='_blank' href='https://www.linkedin.com/in/lukehw/' rel="noreferrer" className={classes.outsideLinks}>
            <img className={classes.icons} src="/linkedin.png" alt="linkedin logo"/>
          </a>
        </IconButton>
        </Grid>
      </Hidden>
      <Grid item lg={2} xl={2}/>  
    </Grid>
  </div>
  );
}

export default Main;