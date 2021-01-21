// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';

// import components
import workBG from '../work-blurred-bg.jpg';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
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
    fontSize: 60
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

function Contact() {

  const classes = useStyles();

  return (
    <div className="App">
    <Grid className={classes.paperContainer}>
    <div className={classes.workWrapper}>
      <Grid container className={classes.container}>
      <Grid item xs={1} sm={1} md={2} lg={3} xl={3}/> 
        <Grid item className={classes.item} xs={10} sm={10} md={8} lg={6} xl={6}>
          <Typography className={classes.title} variant="h1" component="h2" gutterBottom>
            Contact me.
          </Typography>
          <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
            Or don't. Up to you.. I'm so lonely.
          </Typography>
        </Grid>
        <Hidden mdUp>
          <Grid item xs={1} sm={1}/>
        </Hidden>
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
        <Typography className={classes.title} variant="h1" component="h2" gutterBottom>
          Feel free to add me on 
        <Hidden lgUp>
          <Typography className={classes.hidden} variant="h4" component="h2" gutterBottom>
            <a target='_blank' href='https://github.com/LukeHW' rel="noreferrer" className={classes.outsideLinks}>
              Github
              <img className={classes.iconsInline} src="/github.png" alt="github logo"/>
            </a>
          </Typography>
          <Typography className={classes.hidden} variant="h4" component="h2" gutterBottom>
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

    <Grid className={classes.paperContainer}>
        <div className={classes.workWrapper}>
            <Grid container className={classes.container}>
                <Grid item xs={1} sm={1} md={2} lg={3} xl={3}/> 
                    <Grid item className={classes.item} xs={10} sm={10} md={8} lg={6} xl={6}>
                    <Typography className={classes.title} variant="h1" component="h2" gutterBottom>
                        So... you're interested?
                    </Typography>
                    <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
                        I take it? Why else are you down this far?
                    </Typography>
                    </Grid>
                    <Hidden mdUp>
                    <Grid item xs={1} sm={1}/>
                    </Hidden>
                    <Grid item xs={1} sm={1} md={2} lg={3} xl={3}/>
                </Grid>
                <div className={classes.centeredItem}>
                    <ArrowDownwardIcon className="downArrow bounce-7"/>
                </div>
        </div>
    </Grid>

  </div>
  );
}

export default Contact;