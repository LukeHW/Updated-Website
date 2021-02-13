// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';

// import styles
import './Main.css';

// import components
import bg from '../blurredBG.jpg';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
    fontFamily: 'Open Sans',
  },
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  title: {
    fontWeight: 500,
    fontSize: 'min(10vw, 90px)',
    color: "white",
    fontFamily: 'Open Sans',
    textAlign: 'center'
  },
  greeting: {
    fontWeight: 300,
    fontSize: 'min(5vw, 40px)',
    color: "white",
    fontFamily: 'Open Sans',
    textAlign: "center"
  },
  placer: {
    width: "30vmin",
    minWidth: 200
  },
  placerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
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
    width: "100%",
    backgroundColor: ('#444444'),
    fontFamily: 'Open Sans',
    justifyContent: "space-between",
    padding: theme.spacing(0)
  },
  hidden: {
    justifyContent: "center",
    display: "flex",
    marginTop: 30,
    fontFamily: 'Open Sans',
    fontSize: 30,
    overflow: 'auto'
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
    color: "rgba(255, 255, 255)",
    '&:hover': {
      filter: 'contrast(50%)'
    },
    '&:focus': {
      filter: 'contrast(50%)'
    }
  },
  paperLinksContainer: {
    
  },
  paperLinks: {
    width: 300,
    height: 400,
  }
}));

function Main() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid className={classes.paperContainer}>
        <div className="AppBG">
          <Grid container className={classes.container}>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} /> 
            <Grid item className={classes.item} xs={12} sm={12} md={5} lg={5} xl={5}>
              <Typography className={classes.title} variant="h1" component="h2" gutterBottom align='center'>
                Hi, I&#39;m Luke!
              </Typography>
              <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
                Developer. Designer. Musician.
              </Typography>
            </Grid>
            <Hidden mdUp>
              <Grid item xs="auto" sm="auto" />
            </Hidden>
            <Grid item className={classes.placerContainer} xs={12} sm={12} md={5} lg={5} xl={5} align="center">
              <img className={classes.placer} src="/placer.png" alt="LHW logo" />
            </Grid>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
          </Grid>
          <div className={classes.centeredItem}>
            <ArrowDownwardIcon className="downArrow bounce-7" />
          </div>
        </div>
      </Grid>

      <Grid container className={classes.secondContainer}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' b={3}>
          <Typography className={classes.title} variant="h1" component="h2" gutterBottom align='center'>
            Feel free to add me here:
          </Typography>
        </Grid>
        <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} /> 
        <Grid item className={classes.paperLinksContainer} xs={12} sm={12} md={5} lg={5} xl={5} align='center'>
          <Paper elevation={5} className={classes.paperLinks}>
            <Typography variant="h4" component="h2" gutterBottom align='center'>
              Github
            </Typography>
          </Paper>
        </Grid>
        <Grid item className={classes.paperLinksContainer} xs={12} sm={12} md={5} lg={5} xl={5} align="center">
          <Paper elevation={5} className={classes.paperLinks}>
            <Typography variant="h4" component="h2" gutterBottom align='center'>
              Github
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />  
      </Grid>

    </div>
  );
}

export default Main;