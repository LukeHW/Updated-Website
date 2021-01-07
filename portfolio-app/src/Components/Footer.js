import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  navbarLogo: {
    minWidth: 70,
    maxWidth: 70,
    marginTop: 10
  },
  link: {
      fontWeight: "normal",
      color: "white",
      marginTop: 30,
      textAlign: "center"
  },
  menuIcon: {
      fontSize: 55,
      color: "white"
  },
  navbarActive: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      height: 200,
      width: "100%"
  }
}));

function Footer() {

  const classes = useStyles();

  return (
    <div className={classes.navbarActive}>
        <Grid container className={classes.container}>
            <Grid xs={1} sm={1} md={2} lg={3} xl={3}></Grid> 
            <Grid item className={classes.logo} xs={1} sm={1} md={1} lg={1} xl={1} align="left">
                <img className={classes.navbarLogo} src="/favicon.png" alt="LHW logo"/>
            </Grid>
            <Grid xs={1} sm={1} md={1} lg={2} xl={2}></Grid> 
            <Hidden smDown>
                <Grid item className={classes.link} md={2} lg={1} xl={1}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        If you want to contact me
                    </Typography>
                </Grid>
                <Grid item className={classes.link} md={2} lg={1} xl={1}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Second
                    </Typography>
                </Grid>
                <Grid item className={classes.link} md={2} lg={1} xl={1}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Thrid
                    </Typography>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid xs={7} sm={7}></Grid> 
                <Grid item className={classes.menuContainer} xs={2} sm={2}>
                    <IconButton aria-label="menu">
                        <MenuIcon className={classes.menuIcon}/>
                    </IconButton>
                </Grid>
            </Hidden>
        </Grid>
    </div>
  );
}

export default Footer;