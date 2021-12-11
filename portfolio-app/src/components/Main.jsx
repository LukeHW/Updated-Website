/* eslint-disable eqeqeq */
/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-boolean-value */
// import modules
import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { fadeInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import emailjs from 'emailjs-com';

import { Button } from '@mui/material';

import ScrollToTop from './pageComponents/ScrollToTop';
import DemoCarousel from './pageComponents/DemoCarousel.jsx';
import Projects from './Projects';

// import styles
import './Main.css';

// import components
import bg from '../blurredBG.jpg';

import Input from './Input.jsx';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
    minHeight: 600
  },
  paperContainer: {
    background: `url(${bg}) no-repeat center center`,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    '&::before': {
      content: ' ',
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: `url(${bg}) no-repeat center center`,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      backgroundSize: 'cover',
      willChange: 'transform',
      zIndex: -1
    }
  },
  greeting: {
    fontWeight: 600,
    fontSize: 'clamp(48px, 8vmin, 105px)',
    color: "white",
    textAlign: 'center',
    lineHeight: 1.05,
    letterSpacing: '-.045em',
    marginTop: 10
  },
  title: {
    fontWeight: 600,
    fontSize: 'clamp(24px, 6vw, 32px)',
    color: "white",
    textAlign: "center"
  },
  placer: {
    width: "35%",
    height: "35%",
    maxHeight: 500,
    minHeight: 200,
    maxWidth: 500,
    minWidth: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 35,
    borderRadius: '50%',
    border: 'solid white 5px',
    display: 'block'
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
    backgroundColor: ('#252423'),
    padding: theme.spacing(0)
  },
  hidden: {
    justifyContent: "center",
    display: "flex",
    marginTop: 30,
    fontSize: 30,
    overflow: 'auto'
  },
  circle: {
    width: "80px",
    height: "80px",
    border: "1px solid #3c2946",
    position: "fixed",
    borderRadius: "50%",
    willChange: 'transform'
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
    marginTop: 'clamp(80px, 10vw, 140px)',
    marginBottom: 'clamp(80px, 10vw, 140px)',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  spacerContainer: {
    maxWidth: 1000,
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  spacerText: {
    fontWeight: 600,
    fontSize: 'clamp(48px, 10vw, 92px)',
    textAlign: 'left',
    color: '#DDDDDD',
    margin: 5,
    lineHeight: 1.05,
    letterSpacing: '-.045em'
  },
  spacerTextHeader: {
    fontWeight: 600,
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
    padding: theme.spacing(0),
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    '&::before': {
      content: ' ',
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundSize: 'cover',
      willChange: 'transform',
      zIndex: -1
    }
  },
  contactContainer: {
    backgroundColor: '#252423',
    padding: theme.spacing(0)
  },
  viewLinkContainer: {
    marginTop: 20,
    paddingBottom: 50,
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
    fontWeight: 600,
    fontSize: 28,
    textAlign: 'left',
    color: 'white',
    margin: 5,
    marginTop: 0,
  },
  gallerySpacer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    paddingTop: 'clamp(80px, 10vw, 140px)',
    paddingBottom: 'clamp(80px, 10vw, 140px)',
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
    marginBottom: 'clamp(80px, 10vw, 140px)',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 200
  },
  contactSpacer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    paddingTop: 'clamp(80px, 10vw, 140px)',
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
  },
  projectNumber: {
    fontSize: 'min(8vw, 90px)'
  },
  projectTitle: {
    fontSize: 'min(8vw, 42px)',
    fontWeight: '400',
    margin: 0,
    marginBottom: 10,
    textAlign: 'left',
    lineHeight: '120%'
  },
  projectContainer: {
    fontSize: 'min(8vw, 42px)',
    fontWeight: '400',
    margin: 5,
    marginBottom: 20,
    maxWidth: 450,
    display: 'inline-block'
  },
  subtitle: {
    fontSize: 'min(6vw, 40px)',
    fontWeight: 'lighter',
    fontStyle: 'italic',
    marginTop: 0,
    marginBottom: 10,
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
    margin: 10
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
  },
  workWrapper: {
    width: 360,
    height: '100%',
    marginLeft: 100
  },
  workWrapper2: {
    width: 360,
    height: '100%',
    marginRight: 100
  },
  wrapper: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  test: {
    marginTop: 230,
    marginBottom: 230
  },
  projects: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    maxWidth: 1300,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  fadeInUp: {
    animationName: 'fadeInUp',
    animationDuration: '1s'
  },
  formButton: {
    marginTop: 20,
    paddingBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center'
  },
  socialsContainer: {
    backgroundColor: '#111111',
    padding: theme.spacing(0)
  },
  form: {
    paddingTop: 20
  },
  socialCard: {
    height: 200,
    width: 200,
    backgroundColor: '#191919',
    border: '3px solid #888888',
    borderRadius: 20,
    margin: 30,
    display: 'inline-block',
    '&:focus': {
      border: '3px solid white',
      webkitTransition: 'all 0.15s ease-in-out',
      transition: 'all 0.15s ease-in-out',
    },
    '&:hover': {
      border: '3px solid white',
      webkitTransition: 'all 0.15s ease-in-out',
      transition: 'all 0.15s ease-in-out',
    }
  },
  socialCardImage: {
    height: 100,
    width: 100,
    display: 'block',
    padding: 30,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  socialCardHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
    width: '100%',
    textAlign: 'center',
    margin: 0
  },
  socialContainer: {
    maxWidth: 540,
    paddingBottom: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center'
  },
  socialSpacer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    paddingTop: 'clamp(80px, 10vw, 140px)',
    paddingBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

function Main() {

  const classes = useStyles();

  const styles = {
    fadeInUp: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    fadeInUp2: {
      animation: 'x 1.5s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp2')
    },
    fadeInUp3: {
      animation: 'x 1.5s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp3')
    },
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ninvqfa', 'template_wjr5esa', form.current, 'user_y6yKgiEeaPNs4tMC7IEF7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
      handleSend();
  };

  const [send, setSend] = useState("Send")

  const handleSend = () => {
    setSend("Email sent!")
  }

  return (
    <div className={"App"}>
      <ScrollToTop showBelow={250} />
      <Grid className={classes.paperContainer}>
        <div className={"AppBG"}>
          <Grid container className={classes.container}>
            <Grid item className={classes.item} xs={12} sm={12} md={12} lg={12} xl={12}>
              <StyleRoot>
                <div style={styles.fadeInUp}>
                  <picture>
                    <source type={"image/avif"} media={"(min-width: 0px"} srcSet={"/main.avif"} />
                    <source type={"image/webp"} media={"(min-width: 0px"} srcSet={"/main.webp"} />
                    <source type={"image/png"} media={"(min-width: 0px"} srcSet={"/main.png"} />
                    <img className={classes.placer} src={"/main-400.png"} alt={"Luke W."} />
                  </picture>
                </div>
                <div style={styles.fadeInUp2}>
                  <Typography className={classes.title} variant={"h1"} component={"h2"} gutterBottom align={"center"}>
                    Luke Wahlmeier
                  </Typography>
                  </div>
                <div style={styles.fadeInUp3}>
                  <Typography className={classes.greeting} variant={"h1"} component={"h2"} gutterBottom align={"center"}>
                    Developer. Innovator. Musician.
                  </Typography>
                </div>
              </StyleRoot>
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid container className={classes.secondContainer}>
        <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />
          <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={10} xl={10}>
              <div className={classes.spacerContainer}>
                <h1 className={classes.spacerTextHeader}>
                  Projects
                </h1>
                <h2 className={classes.spacerText}>
                  Some of the work I have done.
                </h2>
              </div>
          </Grid>
          <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />

          <Grid className={classes.projects} item xs={12} sm={12} md={12} lg={12} xl={12} align={"center"}>
            <Projects renderAmount={4}/>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={classes.viewLinkContainer}>
              <Button color={'primary'} variant={'contained'} href={'/Work'}>
                View more projects
              </Button>
            </div>       
          </Grid> 
      </Grid>

          <div className={classes.galleryContainer}>
            <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />
            <Grid item className={classes.gallerySpacer} xs={12} sm={12} md={12} lg={10} xl={10}>
                <div className={classes.spacerContainer}>
                  <h1 className={classes.galleryTextHeader}>
                    Gallery
                  </h1>
                  <h2 className={classes.spacerText}>
                    Pictures captured during my daily life.
                  </h2>
                </div>
            </Grid>
            <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />

            <Grid item xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} />
            <Grid item className={classes.carouselSpacer} xs={12} sm={12} md={10} lg={10} xl={10}>
                <DemoCarousel />
            </Grid>
            <Grid item xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} />

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={classes.viewLinkContainer}>
                <Button color={'primary'} variant={'contained'} href={'/Gallery'}>
                  View more pictures
                </Button>
              </div> 
            </Grid> 
          </div>

          <div className={classes.contactContainer} id={"Contact"}>
          <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />
            <Grid item className={classes.contactSpacer} xs={12} sm={12} md={12} lg={10} xl={10}>
                <div className={classes.spacerContainer}>
                  <h1 className={classes.galleryTextHeader}>
                    Contact
                  </h1>
                  <h2 className={classes.spacerText}>
                    Get in touch.
                  </h2>
                </div>
                <form ref={form} onSubmit={sendEmail} id={"myForm"} className={classes.form}>
                  <Input inputtype={"input"} required type={"text"} name={"name"} placeholder={"Your Name"} />
                  <Input inputtype={"input"} required type={"email"} name={"email"} placeholder={"Email Address"} />
                  <Input inputtype={"input"} required type={"tel"} name={"number"} placeholder={"Phone Number"} />
                  <Input inputtype={"textarea"} required type={"text"} name={"message"} placeholder={"Reason for getting in touch"} />
                </form>
                  <div className={classes.formButton}>
                    <Button color={'primary'} variant={'contained'} type={"submit"} form={"myForm"}>
                      {send}
                    </Button>
                  </div> 

                  <a href={"mailto:lukewahlmeier@gmail.com"} className={classes.emailText}>
                    lukewahlmeier@gmail.com
                  </a>
            </Grid>
            <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />
          </div>

          <div className={classes.socialsContainer} id={"Contact"}>
              <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />
              <Grid item className={classes.socialSpacer} xs={12} sm={12} md={12} lg={10} xl={10}>
                  <div className={classes.spacerContainer}>
                    <h1 className={classes.galleryTextHeader}>
                      Socials
                    </h1>
                    <h2 className={classes.spacerText}>
                      Stay in touch.
                    </h2>
                  </div>
              </Grid>
              <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />

              <div className={classes.socialContainer}>
                <a target={'_blank'} href={'https://github.com/LukeHW'} rel={"noreferrer"}>
                  <div className={classes.socialCard}>
                    <img className={classes.socialCardImage} src={"./githubLogo.png"} alt={"GitHub"} />
                    <h5 className={classes.socialCardHeader}>GitHub</h5>
                  </div>
                </a>
                <a target={'_blank'} href={'https://linkedin.com/in/lukehw/'} rel={"noreferrer"}>
                  <div className={classes.socialCard}>
                    <img className={classes.socialCardImage} src={"./linkedinLogo.png"} alt={"LinkedIn"} />
                    <h5 className={classes.socialCardHeader}>LinkedIn</h5>
                  </div>
                </a>
              </div>
          </div>

    </div>
  );
}

export default Main;