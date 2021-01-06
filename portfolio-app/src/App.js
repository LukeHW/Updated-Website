import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Navbar from './Components/Navbar.js';
import bg from './blurredBG.jpg';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between"
  },
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
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
    margin: 5
  },
  item: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex"
  },
  secondContainer: {
    height: "100vh",
    width: "100%"
  },
  hidden: {
    justifyContent: "center",
    display: "flex"
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid className={classes.paperContainer}>
      <div className="AppBG">
        <Navbar/>
        <Grid container className={classes.container}>
        <Grid xs={1} sm={1} md={2} lg={3} xl={3}></Grid> 
          <Grid item className={classes.item} xs={11} sm={11} md={4} lg={3} xl={3}>
            <Typography className={classes.title} variant="h1" component="h2" gutterBottom>
              Hi, I'm Luke!
            </Typography>
            <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
              Developer. Designer. Musician.
            </Typography>
          </Grid>
          <Hidden mdUp>
            <Grid xs={1} sm={1}></Grid> 
          </Hidden>
          <Grid item xs={10} sm={10} md={4} lg={3} xl={3} align="center">
            <img className={classes.placer} src="/placer.png" alt="LHW logo"/>
          </Grid>
          <Grid xs={1} sm={1} md={2} lg={3} xl={3}></Grid>  
        </Grid>
        <div className={classes.centeredItem}>
          <ArrowDownwardIcon className="downArrow bounce-7"/>
        </div>
      </div>
      </Grid>


      <Grid container className={classes.secondContainer}>
        <Grid lg={2} xl={2}></Grid> 
        <Hidden mdDown>
          <Grid item className={classes.item} lg={2} xl={2}>
            <img className={classes.icons} src="/github.png" alt="github logo"/>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid xs={1} sm={1} md={1}></Grid> 
        </Hidden>
        <Grid item className={classes.item} xs={10} sm={10} md={10} lg={4} xl={4} align="center">
          <Typography className={classes.title} variant="h1" component="h2" gutterBottom>
            Feel free to add me on 
          <Hidden lgUp>
            <Typography className={classes.hidden} variant="h4" component="h2" gutterBottom>
              Github
              <img className={classes.iconsInline} src="/github.png" alt="github logo"/>
            </Typography>
            <Typography className={classes.hidden} variant="h4" component="h2" gutterBottom>
              LinkedIn
              <img className={classes.iconsInline} src="/linkedin.png" alt="github logo"/>
            </Typography>
          </Hidden>
          </Typography>
        </Grid>
        <Hidden lgUp>
          <Grid xs={1} sm={1} md={1}></Grid> 
        </Hidden>
        <Hidden mdDown>
          <Grid item className={classes.item} lg={2} xl={2} >
            <img className={classes.icons} src="/linkedin.png" alt="github logo"/>
          </Grid>
        </Hidden>
        <Grid lg={2} xl={2}></Grid>  
      </Grid>
    </div>
  );
}

export default App;