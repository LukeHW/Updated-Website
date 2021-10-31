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
        width: 'min(60vh, 60vw)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30
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
    }
  }));

function DemoCarousel() {

    const classes = useStyles();

    return (
        <Carousel className={classes.carouselWrapper} autoPlay={true} interval={5000} infiniteLoop={true} showStatus={false} emulateTouch={true} useKeyboardArrows={true}>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Dewey</h3>
                    <h5 className={classes.gallerySubtitle}>Sitting Funny</h5>
                </div>
                <img src="/galleryImages/Dewey%204.jpeg" alt='Dewey' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Jack</h3>
                    <h5 className={classes.gallerySubtitle}>Spooky Loaf</h5>
                </div>
                <img src="/galleryImages/Jack%202.jpeg" alt='Jack' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Colin</h3>
                    <h5 className={classes.gallerySubtitle}>Views</h5>
                </div>
                <img src="/galleryImages/Colin%202.jpeg" alt='Colin' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Mr. Mister</h3>
                    <h5 className={classes.gallerySubtitle}>Wet Boi</h5>
                </div>
                <img src="/galleryImages/Mr.%20Mister%202.jpeg" alt='Mr. Mister' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Vicious</h3>
                    <h5 className={classes.gallerySubtitle}>Showing Off</h5>
                </div>
                <img src="/galleryImages/Vicious%202.jpeg" alt='Vicious' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Jack</h3>
                    <h5 className={classes.gallerySubtitle}>Being Cute</h5>
                </div>
                <img src="/galleryImages/Jack.jpeg" alt='Jack' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Vicious</h3>
                    <h5 className={classes.gallerySubtitle}>Fabulous</h5>
                </div>
                <img src="/galleryImages/Vicious%205.jpeg" alt='Vicious' />
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Colin</h3>
                    <h5 className={classes.gallerySubtitle}>Breather</h5>
                </div>
                <img src="/galleryImages/Colin.jpeg" alt='Colin' />
            </div>
        </Carousel>
    );
}

export default DemoCarousel;