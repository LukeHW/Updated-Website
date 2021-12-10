/* eslint-disable no-plusplus */
// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden, ImageList, ImageListItem } from '@mui/material';
import { SRLWrapper } from "simple-react-lightbox";
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


// import ResponsiveGallery from 'react-responsive-gallery';

// import components

// import image data
import galleryJSON from './pageComponents/gallery.json';

import ScrollToTop from './pageComponents/ScrollToTop';

// styles for Main.js
const useStyles = makeStyles(() => ({
  container: {
    minHeight: '100%',
    width: '100%'
  },
  bg:{
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
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
    alignItems: 'center'
  },
  galleryImages: {
    
  },
  galleryContainer: {
    paddingTop: 70,
    height: '100%'
  },
  gallerySpacer: {
      width: '100%'
  },
  galleryTitleContainer: {
      zIndex: 3,
      color: '#FFFFFF',
      display: 'block',
      position: 'absolute',
      textAlign: 'center',
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
    marginTop: 130
  },
  pageSubtitle: {
    fontSize: 40,
    fontWeight: 400
  },
  spacer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    marginTop: 'clamp(80px, 10vw, 140px)',
    paddingTop: 62,
    marginBottom: 'clamp(80px, 10vw, 140px)',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  spacerContainer: {
    maxWidth: 1000,
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  spacerText: {
    fontWeight: 600,
    fontSize: 'clamp(48px, 10vw, 92px)',
    textAlign: 'left',
    color: '#BBBBBB',
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
  mediumContainer: {
    maxWidth: 1000,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  gallery: {
    maxWidth: 1500,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  imageContainer: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

function Gallery() {

  const classes = useStyles();

  const itemData = galleryJSON;

  const imagesArray = [];
  
  for(let i=0; i<itemData.length; i++) {
    let src = {};

    if(itemData[i].orderM){
      const {orderM, orderL} = itemData[i];

      src = {
        src: `${itemData[i].img}`,
        lightboxCaption: `${itemData[i].title}`,
        lightboxTitle: `${itemData[i].names}`,
        orderM: `${orderM}`,
        orderL: `${orderL}`
      };
    } else {
      src = {
        src: `${itemData[i].img}`,
        lightboxCaption: `${itemData[i].title}`,
        lightboxTitle: `${itemData[i].names}`
      };
    }

    imagesArray.push(src);
  }

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
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp3')
    },
  }

  return (
    <div className={classes.bg}>
      <ScrollToTop showBelow={250} />
        <div className={classes.container}>
            <div className={classes.workWrapper}>
                <div className={classes.gallerySpacer} >
                    <Grid container>
                      <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={12} xl={12}>
                      <StyleRoot>
                          <div className={classes.spacerContainer} style={styles.fadeInUp}>
                            <h1 className={classes.spacerTextHeader}>
                              Gallery
                            </h1>
                            <h2 className={classes.spacerText}>
                              Pictures captured during my daily life.
                            </h2>
                          </div>
                      </StyleRoot>
                      </Grid>
                    </Grid>
                </div>
                <Grid container>
                    <Hidden xlDown>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
                    <Grid item className={classes.gallery} xs={10} sm={10} md={10} lg={10} xl={10}>
                      <SRLWrapper>
                          <ImageList variant={"masonry"} cols={3} gap={20}>
                          {itemData.map((item) => (
                              <ImageListItem key={item.avif_img} className={classes.imageContainer}>
                                <img src={`${item.avif_img}`} alt={item.title} loading={"lazy"} />
                              </ImageListItem>
                          ))}
                          </ImageList>
                      </SRLWrapper>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
                    </Hidden>

                    <Hidden smDown xlUp>
                    <Grid item className={classes.mediumContainer} xs={12} sm={12} md={12} lg={12} xl={12}>
                      <SRLWrapper>
                        <ImageList variant={"masonry"} cols={2} gap={20}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.avif_img} className={classes.imageContainer}>
                            <img
                                src={`${item.avif_img}`}
                                alt={item.title}
                                loading={"lazy"}
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                      </SRLWrapper>
                    </Grid>
                    </Hidden>

                    <Hidden smUp>
                    <Grid item xs={"auto"} sm={1} md={1} lg={1} xl={1} />
                    <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
                      <SRLWrapper>
                        <ImageList variant={"masonry"} cols={1} gap={20}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.avif_img} className={classes.imageContainer}>
                            <img
                                src={`${item.avif_img}`}
                                alt={item.title}
                                loading={"lazy"}
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                      </SRLWrapper>
                    </Grid>
                    <Grid item xs={"auto"} sm={1} md={1} lg={1} xl={1} />
                    </Hidden>
                </Grid>
          </div>
      </div>
  </div>
  );
}

export default Gallery;