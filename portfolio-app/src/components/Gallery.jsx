/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ResponsiveGallery from 'react-responsive-gallery';

// import components
import galleryBG2 from '../test-bg.avif';
// import image data
import galleryJSON from './pageComponents/gallery.json';

import ScrollToTop from './pageComponents/ScrollToTop';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  bg:{
    backgroundImage: `url(${galleryBG2})`,
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
    fontFamily: 'Inter',
    alignItems: 'center'
  },
  galleryImages: {
    
  },
  galleryContainer: {
    paddingTop: 70,
    height: '100%'
  },
  gallerySpacer: {
      maxHeight: 500,
      width: '100%'
  },
  galleryTitleContainer: {
      zIndex: 3,
      color: '#FFFFFF',
      display: 'block',
      position: 'absolute',
      textAlign: 'center',
      pointerEvents: 'none',
      width: "100%",
      height: "100%"
  },
  galleryTitle: {
      fontSize: 36,
      fontWeight: 500
  },
  gallerySubtitle: {
    fontSize: 20,
    fontWeight: 300
  },
  galleryTitleSmall: {
      fontSize: 36,
      fontWeight: 500,
      position: 'absolute',
      bottom: 0,
      left: 5,
      marginBottom: 25
  },
  gallerySubtitleSmall: {
    fontSize: 20,
    fontWeight: 300,
    position: 'absolute',
    bottom: 20,
    left: 5,
  },
  pageTitle:{
    fontSize: 80,
    fontWeight: 500,
    marginTop: 130,
    fontFamily: 'Inter'
  },
  pageSubtitle: {
    fontSize: 40,
    fontWeight: 400
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
    fontWeight: 600,
    fontSize: 'clamp(48px, 10vw, 92px)',
    textAlign: 'left',
    color: '#222222',
    margin: 5,
    marginBottom: 50,
    lineHeight: 1.05,
    letterSpacing: '-.045em'
  },
  spacerTextHeader: {
    fontWeight: 600,
    fontSize: 28,
    textAlign: 'left',
    color: 'black',
    margin: 5
  },
  mediumContainer: {
    maxWidth: 1200,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  gallery: {
    maxWidth: 1500,
    marginRight: 'auto',
    marginLeft: 'auto'
  }
}));

function Gallery() {

  const classes = useStyles();

  const itemData = galleryJSON;

  let imagesArray = [];
  
  for(let i=0; i<itemData.length; i++) {
    let src = {
      src: `${itemData[i].img}`,
      lightboxCaption: `${itemData[i].title}`,
      lightboxTitle: `${itemData[i].names}`
    };
    imagesArray.push(src);
  }

  return (
    <div className={classes.bg}>
      <ScrollToTop showBelow={250} />
        <div className={classes.container}>
            <div className={classes.workWrapper}>
                <div className={classes.gallerySpacer} >
                    <Grid container>
                      <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={12} xl={12}>
                          <div className={classes.spacerContainer}>
                            <h1 className={classes.spacerTextHeader}>
                              Gallery
                            </h1>
                            <h2 className={classes.spacerText}>
                              Pictures taken from my daily life.
                            </h2>
                          </div>
                      </Grid>
                    </Grid>
                </div>
                <Grid container>
                    <Grid item className={classes.gallery} xs={12} sm={12} md={12} lg={12} xl={12}>
                      <ResponsiveGallery useLightBox images={imagesArray} numOfImagesPerRow={{xs: 1, s: 1, m: 2, l: 2, xl: 3, xxl: 4}} />
                    </Grid>
                </Grid>
          </div>
      </div>
  </div>
  );
}

export default Gallery;