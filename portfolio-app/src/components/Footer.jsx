// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles for Footer.js
const useStyles = makeStyles((theme) => ({
  footerActive: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 60,
    width: "100%",
    zIndex: 10
  },
  footer: {
    color: "white",
    width: 300,
    marginTop: 20,
    marginLeft: '7%',
    fontSize: 15,
    fontFamily: 'Inter'
  },
  footerContainer: {
    height: 60,
    borderTop: '1px solid #333333'
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
  },
  footerSmall: {
    color: "white",
    width: 115,
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    fontFamily: 'Inter',
    flexDirection: "column",
    justifyContent: "center",
    display: "flex"
  },
  iconsContainerSmall: {
    padding: 5,
    width: 80,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  footerActiveSmall: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 120,
    width: "100%",
    zIndex: 10,
    borderTop: '1px solid #333333'
  },
  footerWrapper: {
    maxHeight: 120
  }
}));

function Footer() {

  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerActive}>
          <Grid className={classes.footerContainer} container>
          <Hidden smDown>
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
                  <a target='_blank' href='https://linkedin.com/in/lukehw/' rel="noreferrer" className={classes.footerLinks}>
                    <img className={classes.icons} src="/linkedinWhiteLogo.png" alt="linkedin logo" />
                  </a>
                </div>
              </Grid> 
              <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2}/>
          </Hidden>
          </Grid>
      </div>

      <Hidden mdUp>
        <div className={classes.footerActiveSmall}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="left">
          <Typography className={classes.footerSmall} variant="h5" component="h2">
              2021 - LukeHW
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={4} align="right">
          <div className={classes.iconsContainerSmall}>
            <a target='_blank' href='https://github.com/LukeHW' rel="noreferrer" className={classes.footerLinks}>
              <img className={classes.icons} src="/githubWhiteLogo.png" alt="github logo" />
            </a>
            <a target='_blank' href='https://linkedin.com/in/lukehw/' rel="noreferrer" className={classes.footerLinks}>
              <img className={classes.icons} src="/linkedinWhiteLogo.png" alt="linkedin logo" />
            </a>
          </div>
        </Grid> 
        </div>
      </Hidden>
    </div>
  );
}

export default Footer;