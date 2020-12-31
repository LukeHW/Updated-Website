import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  navbarLogo: {
    maxWidth: 200,
    textAlign: "left",
    marginTop: 5,
    marginLeft: 5
  },
  navbarContainer: {
    maxHeight: 200,
    backgroundColor: "#ffffff"
  },
  link: {
      fontWeight: "normal",
      color: "black",
      marginTop: 20
  }
}));

function Navbar() {

  const classes = useStyles();

  return (
    <div className={classes.navbarContainer}>
        <Grid container className={classes.container}>
            <Grid xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
            <Grid item className={classes.logo} xs={3} sm={4} md={3} lg={2} xl={2}>
                <img className={classes.navbarLogo} src="/logo.png" alt="LHW logo"/>
            </Grid>
            <Grid xs={2} sm={1} md={2} lg={3} xl={3}></Grid>
            <Grid item className={classes.link} xs={2} sm={2} md={2} lg={1} xl={1}>
                Work
            </Grid>
            <Grid item className={classes.link} xs={2} sm={2} md={2} lg={1} xl={1}>
                About
            </Grid>
            <Grid item className={classes.link} xs={2} sm={2} md={2} lg={1} xl={1}>
                Contact
            </Grid>
            <Grid xs={0} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
    </div>
  );
}

export default Navbar;
