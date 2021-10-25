// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';

import ScrollToTop from './pageComponents/ScrollToTop';

// import styles
import './Main.css';

// import components
import bg from '../blurredBG.jpg';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
    fontFamily: 'Inter',
    minHeight: 600
  },
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  greeting: {
    fontWeight: 600,
    fontSize: 'min(10vw, 70px)',
    color: "white",
    fontFamily: 'Inter',
    textAlign: 'center'
  },
  title: {
    fontWeight: 400,
    fontSize: 'min(6vw, 28px)',
    color: "white",
    fontFamily: 'Inter',
    textAlign: "center"
  },
  placer: {
    width: "30vmin",
    minWidth: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 35
  },
  placerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  centeredItem: {
    bottom: "0px",
    position: "absolute",
    width: "100%",
    textAlign: "center"
  },
  icons: {
    width: 100
  },
  iconsInline: {
    width: 50,
    margin: 5,
    marginLeft: 20
  },
  item: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    marginTop: 50,
    marginBottom: 50
  },
  secondContainer: {
    minHeight: "100vh",
    backgroundColor: ('#222222'),
    fontFamily: 'Open Sans',
    padding: theme.spacing(0)
  },
  hidden: {
    justifyContent: "center",
    display: "flex",
    marginTop: 30,
    fontFamily: 'Open Sans',
    fontSize: 30,
    overflow: 'auto'
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
    color: "rgba(255, 255, 255)",
    '&:hover': {
      filter: 'contrast(50%)'
    },
    '&:focus': {
      filter: 'contrast(50%)'
    }
  },
  paperLinks: {
    width: 300,
    height: 400,
    margin: 10,
    transition: 'transform .2s',
    '&:hover': {
      boxShadow: '0 0px 15px 0 rgba(255, 255, 255, 0.9)',
      transform: 'scale(1.1)'
    },
    '&:focus': {
      boxShadow: '0 0px 8px 0 rgba(255, 255, 255, 0.7)',
      transform: 'scale(1.1)'
    }
  },
  spacer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    marginTop: 100
  },
  spacerText: {
    fontWeight: 500,
    fontSize: 'min(10vw, 70px)',
    textAlign: 'center',
    color: 'white'
  },
  links: {
    paddingTop: 5,
    width: 'inherit',
    transition: 'transform .2s',
    '&:hover': {
      backgroundColor: ('#dddddd')
    },
    '&:focus': {
      filter: 'opacity(0.8)'
    }
  },
  paperTitle: {
    marginTop: 15
  },
  paperLinksContainer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: 'inherit',
    marginTop: 50
  },
  paperBody: {
    padding: 10
  },
  galleryContainer: {
    minHeight: "100vh",
    fontFamily: 'Open Sans',
    padding: theme.spacing(0),
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  contactContainer: {
    minHeight: "100vh",
    backgroundColor: ('#222222'),
    fontFamily: 'Open Sans',
    padding: theme.spacing(0)
  }
}));

function Main() {

  const classes = useStyles();

  return (
    <div className="App">
      <ScrollToTop showBelow={250} />
      <Grid className={classes.paperContainer}>
        <div className="AppBG">
          <Grid container className={classes.container}>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} /> 
            <Grid item className={classes.item} xs={12} sm={12} md={10} lg={10} xl={10}>
              <img className={classes.placer} src="/placer.png" alt="LHW logo" />
              <Typography className={classes.title} variant="h1" component="h2" gutterBottom align='center'>
                Luke Wahlmeier
              </Typography>
              <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
                Developer. Innovator. Musician.
              </Typography>
            </Grid>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
          </Grid>
          <div className={classes.centeredItem}>
            <ArrowDownwardIcon className="downArrow bounce-7" />
          </div>
        </div>
      </Grid>

      <Grid container className={classes.secondContainer}>
          <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography className={classes.spacerText} variant="h4" component="h2" gutterBottom align='center'>
                Some of my work
              </Typography>
          </Grid>
          <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} /> 
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} align='center'>
            <Paper elevation={5} className={classes.paperLinks} align='center'>
              <div className={classes.paperLinksContainer}>
                <a target='_blank' href='https://github.com/LukeHW' rel="noreferrer" className={classes.links}>
                    <img className={classes.icons} src="/github.png" alt="github logo" />
                </a>
                <Typography variant="h4" component="h2" className={classes.paperTitle} gutterBottom align='center'>
                  Github
                </Typography>
                <Typography variant="h6" component="h6" className={classes.paperBody} align='center'>
                  Explore, read, or star my current repos and other contributions to projects.
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} align="center">
            <Paper elevation={5} className={classes.paperLinks} align='center'>
              <div className={classes.paperLinksContainer}>
                <a target='_blank' href='https://stackoverflow.com/users/10533948/lukehw' rel="noreferrer" className={classes.links}>
                    <img className={classes.icons} src="/linkedin.png" alt="linkedin logo" />
                </a>
                <Typography variant="h4" component="h4" className={classes.paperTitle} gutterBottom align='center'>
                  Stack Overflow
                </Typography>
                <Typography variant="h6" component="h6" className={classes.paperBody} align='center'>
                  Add me on one of the most popular professional networking platforms.
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} align="center">
            <Paper elevation={5} className={classes.paperLinks} align='center'>
              <div className={classes.paperLinksContainer}>
                <a target='_blank' href='https://linkedin.com/in/lukehw/' rel="noreferrer" className={classes.links}>
                    <img className={classes.icons} src="/linkedin.png" alt="linkedin logo" />
                </a>
                <Typography variant="h4" component="h4" className={classes.paperTitle} gutterBottom align='center'>
                  LinkedIn
                </Typography>
                <Typography variant="h6" component="h6" className={classes.paperBody} align='center'>
                  Add me on one of the most popular professional networking platforms.
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} /> 
      </Grid>

      <Grid cointainer>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <div className={classes.galleryContainer}>
            Gallery
          </div>
        </Grid>
      </Grid>

      <Grid cointainer>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <div className={classes.contactContainer} id="Contact">
            Contact
          </div>
        </Grid>
      </Grid>

    </div>
  );
}

export default Main;