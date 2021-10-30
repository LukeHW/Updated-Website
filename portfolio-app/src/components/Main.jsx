/* eslint-disable react/jsx-boolean-value */
// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import ScrollToTop from './pageComponents/ScrollToTop';

// import styles
import './Main.css';

// import components
import bg from '../blurredBG.jpg';

import Input from './Input';

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
    fontSize: 'min(10vw, 92px)',
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
    fontFamily: 'Inter',
    padding: theme.spacing(0)
  },
  hidden: {
    justifyContent: "center",
    display: "flex",
    marginTop: 30,
    fontFamily: 'Inter',
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
    },
    marginBottom: 25
  },
  spacer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  spacerContainer: {
    maxWidth: 1000,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  spacerText: {
    fontWeight: 500,
    fontSize: 'min(10vw, 92px)',
    textAlign: 'left',
    color: '#DDDDDD',
    margin: 5
  },
  spacerTextHeader: {
    fontWeight: 500,
    fontSize: 28,
    textAlign: 'left',
    color: 'white',
    margin: 5
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
    fontFamily: 'Inter',
    padding: theme.spacing(0),
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  contactContainer: {
    minHeight: "55vh",
    backgroundColor: ('#222222'),
    fontFamily: 'Inter',
    padding: theme.spacing(0)
  },
  viewLinkContainer: {
    width: 300,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    height: 50
  },
  viewLink: {
    textDecoration: 'none',
    fontSize: 24,
    fontWeight: 300,
    color: 'white',
    margin: 30
  },
  galleryTextHeader: {
    fontWeight: 500,
    fontSize: 28,
    textAlign: 'left',
    color: 'white',
    margin: 5,
    marginTop: 0,
    paddingTop: 30
  },
  gallerySpacer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    paddingTop: 100,
    paddingBottom: 130,
    marginLeft: 'auto',
    marginRight: 'auto'
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
    },
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10
  },
  emailText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 200,
    textDecoration: 'none',
    marginTop: 25,
    marginBottom: 25,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 200
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
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          <Grid item className={classes.spacer} xs={10} sm={10} md={10} lg={10} xl={10}>
              <div className={classes.spacerContainer}>
                <h1 className={classes.spacerTextHeader}>
                  Projects
                </h1>
                <h2 className={classes.spacerText}>
                  Some of the work I have done.
                </h2>
              </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />

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
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={classes.viewLinkContainer}>
              <a href="/Work" className={classes.viewLink}>
                View more
              </a>
            </div>
          </Grid> 
      </Grid>

          <div className={classes.galleryContainer}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
            <Grid item className={classes.gallerySpacer} xs={10} sm={10} md={10} lg={10} xl={10}>
                <div className={classes.spacerContainer}>
                  <h1 className={classes.galleryTextHeader}>
                    Gallery
                  </h1>
                  <h2 className={classes.spacerText}>
                    Some of the pictures I have taken.
                  </h2>
                </div>
                
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          </div>

          <div className={classes.contactContainer} id="Contact">
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
            <Grid item className={classes.gallerySpacer} xs={10} sm={10} md={10} lg={10} xl={10}>
                <div className={classes.spacerContainer}>
                  <h1 className={classes.galleryTextHeader}>
                    Contact
                  </h1>
                  <h2 className={classes.spacerText}>
                    Get in touch with me.
                  </h2>
                </div>
                  <Input inputtype='input' type='text' name='name' placeholder='Your Name' />
                  <Input inputtype='input' type='email' name='email' placeholder='Email Address' />
                  <Input inputtype='input' type='text' name='street' placeholder='Street Address' />
                  <Input inputtype='textarea' type='text' name='message' placeholder='Reason for contact' />
                  <Button className={classes.button} placeholder='Send'>Send</Button>
                  <a href="mailto:lukewahlmeier@gmail.com" className={classes.emailText}>
                    lukewahlmeier@gmail.com
                  </a>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          </div>

    </div>
  );
}

export default Main;