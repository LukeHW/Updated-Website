// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// styles for Footer.js
const useStyles = makeStyles(() => ({
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
    borderTop: '1px solid #333333',
    maxWidth: 1250,
    marginLeft: 'auto',
    marginRight: 'auto'
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
    width: 105,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
  },
  iconsContainerSmall: {
    padding: 2,
    width: 80,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  footerActiveSmall: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 110,
    width: "100%",
    zIndex: 10,
    borderTop: '1px solid #333333',
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
  },
  footerWrapper: {
    maxHeight: 120
  }
}));

function Footer() {

  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <Hidden smDown>
        <div className={classes.footerActive}>
            <Grid className={classes.footerContainer} container>
                <Grid item xs={"auto"} sm={"auto"} md={1} lg={1} xl={1}/>
                <Grid item xs={6} sm={6} md={5} lg={5} xl={5} align={"left"}>
                  <Typography className={classes.footer} variant={"h5"} component={"h2"} gutterBottom>
                      2021 - LukeHW
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={5} lg={5} xl={5} align={"right"}>
                  <div className={classes.iconsContainer}>
                    <a target={'_blank'} href={'https://github.com/LukeHW'} rel={"noreferrer"} className={classes.footerLinks}>
                      <img className={classes.icons} src={"/githubwhiteLogo.png"} alt={"github logo"} />
                    </a>
                    <a target={'_blank'} href={'https://linkedin.com/in/lukehw/'} rel={"noreferrer"} className={classes.footerLinks}>
                      <img className={classes.icons} src={"/linkedinwhiteLogo.png"} alt={"linkedin logo"} />
                    </a>
                  </div>
                </Grid> 
                <Grid item xs={"auto"} sm={"auto"} md={1} lg={1} xl={1}/>
            </Grid>
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className={classes.footerActiveSmall}>
          <Typography className={classes.footerSmall} variant={"h5"} component={"h2"}>
              2021 - LukeHW
          </Typography>
          <div className={classes.iconsContainerSmall}>
            <a target={'_blank'} href={'https://github.com/LukeHW'} rel={"noreferrer"} className={classes.footerLinks}>
              <img className={classes.icons} src={"/githubwhiteLogo.png"} alt={"github logo"} />
            </a>
            <a target={'_blank'} href={'https://linkedin.com/in/lukehw/'} rel={"noreferrer"} className={classes.footerLinks}>
              <img className={classes.icons} src={"/linkedinwhiteLogo.png"} alt={"linkedin logo"} />
            </a>
          </div>
        </div>
      </Hidden>
    </div>
  );
}

export default Footer;