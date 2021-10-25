// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

// import components
import galleryBG2 from '../galleryBG2.jpg';
// import image data
import galleryJSON from './pageComponents/gallery.json';

import ScrollToTop from './pageComponents/ScrollToTop';

// styles for Main.js
const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100%',
    width: '100%'
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
      height: 300,
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
      height: "100%",
      margin: "0 auto"
  },
  galleryTitle: {
      fontSize: 40,
      fontWeight: 500
  },
  gallerySubtitle: {
    fontSize: 20,
    fontWeight: 300
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
  }
}));

function Gallery() {

  const classes = useStyles();

  const itemData = galleryJSON;

  return (
    <div className={classes.bg}>
      <ScrollToTop showBelow={250} />
        <div className={classes.container}>
            <div className={classes.workWrapper}>
                <div className={classes.gallerySpacer} >
                    <Grid container>
                        <Grid item xs={1} sm={1} md={2} lg={2} xl={2} />
                        <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
                            <h1 className={classes.pageTitle}>Gallery</h1>
                        </Grid>
                        <Grid item xs={1} sm={1} md={2} lg={2} xl={2} />
                    </Grid>
                </div>
                <Grid container>
                    <Hidden mdDown>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} />
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <ImageList variant="masonry" cols={3} gap={20}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <div className={classes.galleryTitleContainer}>
                                    <h3 className={classes.galleryTitle}>{item.names}</h3>
                                    <h5 className={classes.gallerySubtitle}>{item.title}</h5>
                                </div>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} />
                    </Hidden>

                    <Hidden smDown lgUp>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} />
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <ImageList variant="masonry" cols={2} gap={20}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <div className={classes.galleryTitleContainer}>
                                    <h3 className={classes.galleryTitle}>{item.names}</h3>
                                    <h5 className={classes.gallerySubtitle}>{item.title}</h5>
                                </div>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} />
                    </Hidden>

                    <Hidden mdUp>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
                    <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                        <ImageList variant="masonry" cols={1} gap={20}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <div className={classes.galleryTitleContainer}>
                                    <h3 className={classes.galleryTitle}>{item.names}</h3>
                                    <h5 className={classes.gallerySubtitle}>{item.title}</h5>
                                </div>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
                    </Hidden>
                </Grid>
          </div>
      </div>
  </div>
  );
}

export default Gallery;