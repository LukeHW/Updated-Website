/* eslint-disable react/jsx-boolean-value */
// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Fade, Slide } from '@mui/material';

import ScrollToTop from './pageComponents/ScrollToTop';
import DemoCarousel from './pageComponents/DemoCarousel';

import projectData from './Projects.json';

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
    fontSize: 'clamp(48px, 10vmin, 105px)',
    color: "white",
    fontFamily: 'Inter',
    textAlign: 'center',
    lineHeight: 1.05,
    letterSpacing: '-.045em',
    marginTop: 10
  },
  title: {
    fontWeight: 400,
    fontSize: 'min(6vw, 32px)',
    color: "white",
    fontFamily: 'Inter',
    textAlign: "center"
  },
  placer: {
    width: "30%",
    maxWidth: 400,
    minWidth: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 35,
    borderRadius: '50%',
    border: 'solid white 5px'
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
    marginTop: 70,
    marginBottom: 50
  },
  secondContainer: {
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
    width: 400,
    height: 500,
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
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 10,
    paddingLeft: '3vw'
  },
  spacerText: {
    fontWeight: 500,
    fontSize: 'clamp(48px, 10vw, 92px)',
    textAlign: 'left',
    color: '#DDDDDD',
    margin: 5,
    marginBottom: 80,
    lineHeight: 1.05,
    letterSpacing: '-.045em'
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
    marginTop: 20
  },
  paperBody: {
    padding: 10
  },
  galleryContainer: {
    fontFamily: 'Inter',
    padding: theme.spacing(0),
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
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
    height: 70,
    marginTop: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center'
  },
  viewLink: {
    textDecoration: 'none',
    fontSize: 24,
    fontWeight: 300,
    color: 'white',
    position: 'relative',
    display: 'inline-block',
    paddingBottom: 3,
    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      backgroundColor: '#397BA6',
      height: '3px',
      bottom: 0,
      left: 0,
      transform: 'scale(0)',
      transformOrigin: 'center',
      transition: 'transform 0.3s ease'
    },
    '&:hover::before': {
      transform: 'scale(1)'
    },
    '&:focus::before': {
      transform: 'scale(1)'
    },
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
  },
  contactSpacer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    paddingTop: 100,
    paddingBottom: 100,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  carouselSpacer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 60,
    minHeight: 400
  },
  project: {
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    maxWidth: 450,
    display: 'inline-block'
  },
  projectNumber: {
    fontSize: 'min(8vw, 90px)'
  },
  projectTitle: {
    fontSize: 'min(8vw, 42px)',
    fontWeight: '400',
    margin: 0,
    marginBottom: 10,
    fontFamily: 'Inter',
    textAlign: 'left',
    lineHeight: '120%'
  },
  projectContainer: {
    fontSize: 'min(8vw, 42px)',
    fontWeight: '400',
    margin: 5,
    marginBottom: 20,
    fontFamily: 'Inter'
  },
  subtitle: {
    fontSize: 'min(6vw, 40px)',
    fontWeight: 'lighter',
    fontStyle: 'italic',
    marginTop: 0,
    marginBottom: 10,
    fontFamily: 'Inter',
    textAlign: 'center'
  },
  body: {
    fontSize: 'min(4vw, 25px)',
    fontWeight: 300,
    marginTop: 0,
    textAlign: 'left'
  },
  images: {
    maxWidth: '200px',
    minHeight: '180px',
    textAlign: 'center'
  },
  tags: {
    fontSize: 'min(4vw, 25px)',
    fontWeight: 300,
    marginTop: 10,
    textAlign: 'center'
  },
  yearCreated: {
    fontSize: 20
  },
  carosel: {
    diplay: 'flex',
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden'
  },
  inlineLink: {
    maxWidth: "min(6vw, 55px)",
    display: 'inline-block',
    marginLeft: '10px',
    marginBottom: '-2px'
  },
  shadow: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(8px)",
    color: "white",
    padding: theme.spacing(4),
    borderRadius: '20px',
    minHeight: 300,
    maxWidth: 400,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  inlineSkeleton: {
    display: 'inline-block',
    marginLeft: '1%',
    marginBottom: '2%'
  },
  hostedLink: {
    outline: 'none',
    textDecoration: 'none',
    '&:link': {
      color: '#ffffff'
    },
    '&:visited': {
      color: '#bbbbbb'
    },
    '&:focus': {
      borderBottom: '1px solid',
      background: '#444444'
    },
    '&:hover': {
      borderBottom: '1px solid',
      background: '#444444'
    },
    '&:active': {
      background: '#333333',
      color: '#bbbbbb'
    }
  },
  titleLink: {
    outline: 'none',
    textDecoration: 'none',
    '&:link': {
      color: '#ffffff'
    },
    '&:visited': {
      color: '#bbbbbb'
    },
    '&:focus': {
      borderBottom: '1px solid',
      background: '#444444'
    },
    '&:hover': {
      borderBottom: '1px solid',
      background: '#444444'
    },
    '&:active': {
      background: '#333333',
      color: '#bbbbbb'
    }
  }
}));

function Main() {

  const classes = useStyles();

  const projectJSON = projectData.projects;

  return (
    <div className="App">
      <ScrollToTop showBelow={250} />
      <Grid className={classes.paperContainer}>
        <div className="AppBG">
          <Grid container className={classes.container}>
            <Grid item className={classes.item} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Slide in timeout={1500} direction="up" easing={{ enter: "cubic-bezier(0, 1.5, .8, 1)", exit: "linear", }}>
                  <img className={classes.placer} src="/main.png" alt="Luke W." />
                </Slide>
                <Slide in timeout={1750} direction="up" easing={{ enter: "cubic-bezier(0, 1.5, .8, 1)", exit: "linear", }}>
                  <Typography className={classes.title} variant="h1" component="h2" gutterBottom align='center'>
                    Luke Wahlmeier
                  </Typography>
                </Slide>
                <Slide in timeout={2000} direction="up" easing={{ enter: "cubic-bezier(0, 1.5, .8, 1)", exit: "linear", }}>
                  <Typography className={classes.greeting} variant="h4" component="h2" gutterBottom>
                    Developer. Innovator. Musician.
                  </Typography>
                </Slide>
            </Grid>
          </Grid>
          <div className={classes.centeredItem}>
            <ArrowDownwardIcon className="downArrow bounce-7" />
          </div>
        </div>
      </Grid>

      <Grid container className={classes.secondContainer}>
        <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
          <Grid item className={classes.spacer} xs={12} sm={12} md={10} lg={10} xl={10}>
              <div className={classes.spacerContainer}>
                <h1 className={classes.spacerTextHeader}>
                  Projects
                </h1>
                <h2 className={classes.spacerText}>
                  Some of the work I have done.
                </h2>
              </div>
          </Grid>
          <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
              <div className={classes.projectContainer} key={projectJSON[0].projectNumber}>
                <div className={classes.shadow}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h1 className={classes.projectTitle}>
                        <a target="_blank" rel="noopener noreferrer" href={projectJSON[0].githubLink} className={classes.titleLink}>{projectJSON[0].title}</a>
                        </h1>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                        <h5 className={classes.body}>
                            {projectJSON[0].body}
                        </h5>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h5 className={classes.tags}>
                          {projectJSON[0].tags}
                        </h5>
                    </Grid>
                  </Grid>
                </div>
              </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <div className={classes.projectContainer} key={projectJSON[2].projectNumber}>
                <div className={classes.shadow}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h1 className={classes.projectTitle}>
                        <a target="_blank" rel="noopener noreferrer" href={projectJSON[2].githubLink} className={classes.titleLink}>{projectJSON[2].title}</a>
                        </h1>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                        <h5 className={classes.body}>
                            {projectJSON[2].body}
                        </h5>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h5 className={classes.tags}>
                          {projectJSON[2].tags}
                        </h5>
                    </Grid>
                  </Grid>
                </div>
              </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <div className={classes.projectContainer} key={projectJSON[0].projectNumber}>
                <div className={classes.shadow}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h1 className={classes.projectTitle}>
                        <a target="_blank" rel="noopener noreferrer" href={projectJSON[0].githubLink} className={classes.titleLink}>{projectJSON[0].title}</a>
                        </h1>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                        <h5 className={classes.body}>
                            {projectJSON[0].body}
                        </h5>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h5 className={classes.tags}>
                          {projectJSON[0].tags}
                        </h5>
                    </Grid>
                  </Grid>
                </div>
              </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={classes.viewLinkContainer}>
              <a href="/Work" className={classes.viewLink}>
                View more
              </a>
            </div>
          </Grid> 
      </Grid>

          <div className={classes.galleryContainer}>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
            <Grid item className={classes.gallerySpacer} xs={12} sm={12} md={10} lg={10} xl={10}>
                <div className={classes.spacerContainer}>
                  <h1 className={classes.galleryTextHeader}>
                    Gallery
                  </h1>
                  <h2 className={classes.spacerText}>
                    Some of the pictures I have taken.
                  </h2>
                </div>
            </Grid>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />

            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
            <Grid item className={classes.carouselSpacer} xs={12} sm={12} md={10} lg={10} xl={10}>
                <DemoCarousel />
            </Grid>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={classes.viewLinkContainer}>
                <a href="/Gallery" className={classes.viewLink}>
                  View gallery
                </a>
              </div>
            </Grid> 
          </div>

          <div className={classes.contactContainer} id="Contact">
          <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
            <Grid item className={classes.contactSpacer} xs={12} sm={12} md={10} lg={10} xl={10}>
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
                  <Input inputtype='input' type='tel' name='number' placeholder='Phone Number' />
                  <Input inputtype='textarea' type='text' name='message' placeholder='Reason for getting in touch' />
                  <Button className={classes.button} placeholder='Send'>Send</Button>
                  <a href="mailto:lukewahlmeier@gmail.com" className={classes.emailText}>
                    lukewahlmeier@gmail.com
                  </a>
            </Grid>
            <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
          </div>

    </div>
  );
}

export default Main;