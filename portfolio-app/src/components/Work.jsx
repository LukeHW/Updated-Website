// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// import components
import workBG from '../lost-sky-bg.jpg';
import Projects from './Projects';

import ScrollToTop from './pageComponents/ScrollToTop';

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
    fontSize: 'min(10vw, 90px)'
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
    marginTop: "150px"
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
    fontFamily: 'Inter',
    alignItems: 'center'
  }
}));

function Work() {

  const classes = useStyles();

  return (
    <div className="App">
    <ScrollToTop showBelow={250} />
    <Grid className={classes.paperContainer}>
    <div className={classes.workWrapper}>
      <Grid container className={classes.container}>
      <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2}/> 
        <Grid item className={classes.item} xs={12} sm={12} md={10} lg={8} xl={8} align='center'>
          <Typography className={classes.title} variant="h1" component="h2" gutterBottom>
            Some of my work
          </Typography>
          <Projects />
        </Grid>
        <Hidden mdUp>
          <Grid item xs={1} sm={1}/>
        </Hidden>
        <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2}/>
      </Grid>
    </div>
    </Grid>
  </div>
  );
}

export default Work;