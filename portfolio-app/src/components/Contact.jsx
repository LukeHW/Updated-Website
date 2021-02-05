/* eslint-disable react/jsx-filename-extension */
// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

// import components
import workBG from '../work-blurred-bg.jpg';
import Input from './Input';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: 'Open Sans'
  },
  paperContainer: {
    backgroundImage: `url(${workBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  title: {
    fontWeight: 500,
    fontSize: 'min(10vw, 60px)',
    fontFamily: 'Open Sans',
    textAlign: 'center'
  },
  greeting: {
    textAlign: "center",
    fontSize: "min(6vw, 40px)",
    marginBottom: 40
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
    fontFamily: 'Open Sans',
    alignItems: 'center'
  },
  inputContainer: {
    flexGrow: 1
  },
  inputGrid: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    textAlign: 'center',
    padding: '15px',
    borderRadius: '10px',
    marginLeft: 10,
    marginRight: 10,
    maxWidth: 1300
  },
  inputHeaders: {
    textAlign: 'left',
    color: 'white',
    fontSize: '20px',
    paddingLeft: 'inherit'
  },
  button: {
    color: 'white',
    backgroundColor: 'rgb(100, 100, 100)',
    '&:hover': {
      backgroundColor: 'rgb(150, 150, 150)'
    }
  }
}));

function Contact() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid className={classes.paperContainer}>
        <div className={classes.workWrapper}>
          <Grid container className={classes.container}>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={2} /> 
            <Grid item className={classes.item} xs={10} sm={10} md={10} lg={8} xl={8}>
              <Typography className={classes.title} variant="h1" component="h2" gutterBottom>
                Contact me
              </Typography>
              <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
                Or don&#39;t. It&#39;s really up to you.
              </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={2} xl={2} />
            <div className={classes.inputContainer}>
              <Grid container>
                <Grid item xs /> 
                <Grid item className={classes.inputGrid} xs={12} sm={12} md={10} lg={8} xl={8}>
                  <h5 className={classes.inputHeaders}>First and Last Name</h5>
                  <Input inputtype='input' type='text' name='name' placeholder='Your Name' />
                  <Input inputtype='input' type='email' name='email' placeholder='Email Address' />
                  <Input inputtype='input' type='text' name='street' placeholder='Street Address' />
                  <Input inputtype='textarea' type='text' name='message' placeholder='Reason for contact' />
                  <Button className={classes.button} placeholder='Send'>Send</Button>
                </Grid>
                <Grid item xs /> 
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>

      <Grid className={classes.paperContainer}>
        <div className={classes.workWrapper}>
          <Grid container className={classes.container}>
            <Grid item xs={1} sm={1} md={1} lg={2} xl={2} /> 
            <Grid item className={classes.item} xs={10} sm={10} md={10} lg={8} xl={8}>
              <Typography className={classes.title} variant="h1" component="h2" gutterBottom>So... you&#39;re interested?</Typography>
              <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>I take it? Why else are you down this far?</Typography>
            </Grid>
            <Hidden mdUp>
              <Grid item xs={1} sm={1} />
            </Hidden>
            <Grid item xs={1} sm={1} md={1} lg={2} xl={2} />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Contact;