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
  },
  footer: {
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    width: 300,
    marginTop: 85,
    fontSize: 20
  }
}));

function Footer() {

  const classes = useStyles();

  return (
    <div className={classes.navbarActive}>
        <Grid container className={classes.container}>
            <Grid xs={12} sm={12} md={12} lg={12} xl={12} align="center">
            <Typography className={classes.footer} variant="h7" component="h2" gutterBottom>
                Luke H. Wahlmeier - 2021
            </Typography>
            </Grid> 
        </Grid>
    </div>
  );
}

export default Footer;