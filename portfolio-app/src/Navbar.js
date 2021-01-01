import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  navbarLogo: {
    minWidth: 70,
    maxWidth: 70,
    textAlign: "left",
    marginTop: 5,
    marginLeft: 5
  },
  navbarContainer: {
    maxHeight: 200
  },
  link: {
      fontWeight: "normal",
      color: "black",
      marginTop: 25
  },
  subtitle: {
      minWidth: "220px"
  }
}));

function Navbar() {

  const classes = useStyles();

  return (
    <div className={classes.navbarContainer}>
        <Grid container className={classes.container}>
            <Grid xs={1} sm={1} md={2} lg={3} xl={3}></Grid> 
            <Grid item className={classes.logo} xs={1} sm={1} md={1} lg={1} xl={1}>
                <img className={classes.navbarLogo} src="/favicon.png" alt="LHW logo"/>
            </Grid>
            <Grid xs={2} sm={2} md={1} lg={1} xl={1}></Grid> 
            <Grid item className={classes.link} xs={2} sm={2} md={2} lg={1} xl={1}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Work
                </Typography>
            </Grid>
            <Grid item className={classes.link} xs={2} sm={2} md={2} lg={1} xl={1}>
                <Typography variant="h5" component="h2" gutterBottom>
                    About
                </Typography>
            </Grid>
            <Grid item className={classes.link} xs={2} sm={2} md={2} lg={1} xl={1}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Contact
                </Typography>
            </Grid>
            <Grid xs={1} sm={1} md={2} lg={3} xl={3}></Grid> 
        </Grid>
    </div>
  );
}

export default Navbar;

// TITLE and SUBTITLE that disappear when going into a smaller width
/* <Grid item className={classes.logo} xs={0} sm={0} md={2} lg={2} xl={2}>
<Hidden smDown>
    <Typography variant="h5" component="h2" gutterBottom>
        LHW
    </Typography>
</Hidden>
<Hidden smDown>
    <Typography className={classes.subtitle} variant="h6" component="h2" gutterBottom>
        Luke Henry Wahlmeier
    </Typography>
</Hidden>
</Grid> */