// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// styles for Footer.js
const useStyles = makeStyles((theme) => ({
  footerActive: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 60,
    width: "100%"
  },
  footer: {
    color: "white",
    width: 300,
    marginTop: 20,
    marginLeft: '7%',
    fontSize: 15,
    fontFamily: 'Open Sans'
  },
  footerLinks: {
    textDecoration: "none",
    color: "rgba(255, 255, 255)",
    '&:hover': {
      filter: 'contrast(50%)'
    },
    '&:focus': {
      filter: 'contrast(50%)'
    },
  },
  icons: {
    width: 25,
    height: 25,
    marginRight: 5,
    padding: 5
  },
  iconsContainer: {
    marginTop: 13,
    marginRight: '7%'
  }
}));

function Footer() {

  const classes = useStyles();

  return (
    <div className={classes.footerActive}>
        <Grid container>
            <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2}/>
            <Grid item xs={6} sm={6} md={5} lg={4} xl={4} align="left">
              <Typography className={classes.footer} variant="h5" component="h2" gutterBottom>
                  2021 - LukeHW
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={5} lg={4} xl={4} align="right">
              <div className={classes.iconsContainer}>
                <a target='_blank' href='https://github.com/LukeHW' rel="noreferrer" className={classes.footerLinks}>
                  <img className={classes.icons} src="/githubWhiteLogo.png" alt="github logo" />
                </a>
                <a target='_blank' href='https://github.com/LukeHW' rel="noreferrer" className={classes.footerLinks}>
                  <img className={classes.icons} src="/linkedinWhiteLogo.png" alt="github logo" />
                </a>
              </div>
            </Grid> 
            <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2}/>
        </Grid>
    </div>
  );
}

export default Footer;