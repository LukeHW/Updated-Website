// import modules
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// styles for Footer.js
const useStyles = makeStyles((theme) => ({
  footerActive: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 200,
    width: "100%"
  },
  footer: {
    color: "white",
    width: 300,
    marginTop: 85,
    fontSize: 20
  }
}));

function Footer() {

  const classes = useStyles();

  return (
    <div className={classes.footerActive}>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
            <Typography className={classes.footer} variant="h5" component="h2" gutterBottom>
                Luke H. Wahlmeier - 2021
            </Typography>
            </Grid> 
        </Grid>
    </div>
  );
}

export default Footer;