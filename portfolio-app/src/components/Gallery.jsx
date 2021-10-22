// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

// import components
import aboutBG from '../aboutBG.jpg';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100%',
    width: '100%'
  },
  bg:{
    backgroundImage: `url(${aboutBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  title: {
    fontWeight: 700,
    fontSize: 'min(10vw, 90px)',
    textAlign: 'center'
  },
  greeting: {
    textAlign: "center",
    fontSize: 'min(5vw, 40px)'
  },
  centeredItem: {
    bottom: "0px",
    position: "absolute",
    width: "100%",
    textAlign: "center"
  },
  icons: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  iconsInline: {
    width: 50,
    margin: 5,
    marginTop: -5,
    marginLeft: 20
  },
  item: {
    marginTop: 180
  },
  secondContainer: {
    height: "100vh",
    width: "100%"
  },
  hidden: {
    justifyContent: "center",
    display: "flex",
    marginTop: 30
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
    color: "Black"
  },
  workWrapper: {
    minHeight: '100vh',
    color: 'black',
    fontFamily: 'Open Sans',
    alignItems: 'center'
  },
  galleryImages: {
    paddingBottom: 100,
    height: '100%'
  },
  galleryContainer: {
    paddingTop: 70
  },
  imagesContainer: {
      
  }
}));

function Gallery() {

  const classes = useStyles();

  return (
    <div className={classes.bg}>
        <div className={classes.container}>
            <div className={classes.workWrapper}>
                <Grid container className={classes.galleryContainer}>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
                    <Grid item className="imagesContainer" xs={10} sm={10} md={5} lg={5} xl={5} align='center'>
                        <Parallax className="galleryImages" y={[-20, 20]} tagOuter="figure">
                            <img height='100%' width='90%' src="/galleryImages/Catland.JPEG" alt=''/>
                        </Parallax>
                    </Grid>
                    <Hidden mdUp>
                        <Grid item xs={1} sm={1} />
                        <Grid item xs={1} sm={1} />
                    </Hidden>
                    <Grid item className="imagesContainer" xs={10} sm={10} md={5} lg={5} xl={5} align='center'>
                        <Parallax className="galleryImages" y={[10, 40]} tagOuter="figure">
                            <img height='100%' width='90%' src="/galleryImages/Cats.JPEG" alt=''/>
                        </Parallax>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />

                    <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
                    <Grid item className="imagesContainer" xs={12} sm={12} md={10} lg={10} xl={10} align='center'>
                        <Parallax className="galleryImages" y={[-30, 30]} tagOuter="figure">
                            <img height='100%' width='90%' src="/galleryImages/Dewey 2.JPEG" alt=''/>
                        </Parallax>
                    </Grid>
                    <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />

                    <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />
                    <Grid item className="imagesContainer" xs={6} sm={6} md={5} lg={5} xl={5} align='center'>
                        <Parallax className="galleryImages" y={[-20, 20]} tagOuter="figure">
                            <img height='100%' width='90%' src="/galleryImages/Dewey.JPEG" alt=''/>
                        </Parallax>
                    </Grid>
                    <Grid item className="imagesContainer" xs={6} sm={6} md={5} lg={5} xl={5} align='center'>
                        <Parallax className="galleryImages" y={[-20, 40]} tagOuter="figure">
                            <img height='100%' width='90%' src="/galleryImages/Gracie 3.JPEG" alt=''/>
                        </Parallax>
                    </Grid>
                    <Grid item xs="auto" sm="auto" md={1} lg={1} xl={1} />     
                </Grid>
          </div>
      </div>
  </div>
  );
}

export default Gallery;