/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';

// styles for Carousel.jsx
const useStyles = makeStyles(() => ({
    carouselWrapper: {
        maxWidth: 800,
        minWidth: 300,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
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
        fontSize: 'clamp(40px, 8vw, 80px)',
        fontWeight: 600,
        position: 'absolute',
        bottom: 0,
        left: 5,
        marginBottom: 0
    },
    gallerySubtitle: {
      fontSize: 'clamp(20px, 4vw, 50px)',
      fontWeight: 400,
      position: 'absolute',
      bottom: 10,
      left: 5,
    }
  }));

function DemoCarousel() {

    const classes = useStyles();

    return (
        <Carousel className={classes.carouselWrapper} autoPlay={true} showThumbs={false} interval={5000} infiniteLoop={true} showStatus={false} emulateTouch={true} useKeyboardArrows={true} showIndicators={false} >
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Dewey</h3>
                    <h5 className={classes.gallerySubtitle}>Sitting Funny</h5>
                </div>
                <img src="/galleryImages/Dewey%204.JPEG" alt='Dewey' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Jack</h3>
                    <h5 className={classes.gallerySubtitle}>Spooky Loaf</h5>
                </div>
                <img src="/galleryImages/Jack%202.JPEG" alt='Jack' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Colin</h3>
                    <h5 className={classes.gallerySubtitle}>Views</h5>
                </div>
                <img src="/galleryImages/Colin%202.JPEG" alt='Colin' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Mr. Mister</h3>
                    <h5 className={classes.gallerySubtitle}>Wet Boi</h5>
                </div>
                <img src="/galleryImages/Mr.%20Mister%202.JPEG" alt='Mr. Mister' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Vicious</h3>
                    <h5 className={classes.gallerySubtitle}>Showing Off</h5>
                </div>
                <img src="/galleryImages/Vicious%202.JPEG" alt='Vicious' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Jack</h3>
                    <h5 className={classes.gallerySubtitle}>Being Cute</h5>
                </div>
                <img src="/galleryImages/Jack.JPEG" alt='Jack' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Vicious</h3>
                    <h5 className={classes.gallerySubtitle}>Fabulous</h5>
                </div>
                <img src="/galleryImages/Vicious%205.JPEG" alt='Vicious' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Colin</h3>
                    <h5 className={classes.gallerySubtitle}>Breather</h5>
                </div>
                <img src="/galleryImages/Colin.JPEG" alt='Colin' />
            </div>
        </Carousel>
    );
}

export default DemoCarousel;