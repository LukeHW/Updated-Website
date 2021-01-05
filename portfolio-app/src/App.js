import React from 'react';
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
    fontSize: 60,
    marginTop: "30vmin"
  },
  greeting: {
    textAlign: "left"
  },
  placer: {
    width: "30vmin",
    marginTop: "20vmin"
  },
  centeredItem: {
    bottom: "0px",
    position: "absolute",
    width: "100%",
    textAlign: "center"
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
          <Grid item className={classes.item} xs={10} sm={10} md={4} lg={3} xl={3} align="center">
            <img className={classes.placer} src="/placer.png" alt="LHW logo"/>
          </Grid>
          <Grid xs={1} sm={1} md={2} lg={3} xl={3}></Grid>  
        </Grid>
        <div className={classes.centeredItem}>
          <ArrowDownwardIcon className="downArrow bounce-7"/>
        </div>
      </div>
      </Grid>
    </div>
  );
}

export default App;