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
        width: 'min(100%, 60vh)',
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
    },
    image: {
        maxWidth: 800,
        minWidth: 300,
        width: 'min(100%, 60vh)',
        height: 'min(100%, 60vh)',
        minHeight: 400,
        maxHeight: 1200
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
                <picture>
                    <source type={"image/webp"} media={"(min-width: 0px)"} srcSet={"/galleryImages/webp/Dewey%204.webp"} />
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Dewey%204.avif"} />
                    <img className={classes.image} src={"/galleryImages/webp/Dewey%204.webp"} alt={"Luke W."} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Jack</h3>
                    <h5 className={classes.gallerySubtitle}>Spooky Loaf</h5>
                </div>
                <picture>
                    <source type={"image/webp"} media={"(min-width: 0px)"} srcSet={"/galleryImages/webp/Jack%202.webp"} />
                    <source type={"image/avif"} media={"(min-width: 1200px))"} srcSet={"/galleryImages/compressed/Jack%202.avif"} />
                    <img className={classes.image} src={"/galleryImages/webp/Jack%202.webp"} alt={"Jack"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Colin</h3>
                    <h5 className={classes.gallerySubtitle}>Views</h5>
                </div>
                <picture>
                    <source type={"image/webp"} media={"(min-width: 0px)"} srcSet={"/galleryImages/webp/Colin%202.webp"} />
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Colin%202.avif"} />
                    <img className={classes.image} src={"/galleryImages/webp/Colin%202.webp"} alt={"Colin"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Mr. Mister</h3>
                    <h5 className={classes.gallerySubtitle}>Wet Boi</h5>
                </div>
                <picture>
                    <source type={"image/webp"} media={"(min-width: 0px)"} srcSet={"/galleryImages/webp/Mr.%20Mister%202.webp"} />
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Mr.%20Mister%202.avif"} />
                    <img className={classes.image} src={"/galleryImages/webp/Mr.%20Mister%202.webp"} alt={"Mr. Mister"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Vicious</h3>
                    <h5 className={classes.gallerySubtitle}>Showing Off</h5>
                </div>
                <picture>
                    <source type={"image/webp"} media={"(min-width: 0px)"} srcSet={"/galleryImages/webp/Vicious%202.webp"} />
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Vicious%202.avif"} />
                    <img className={classes.image} src={"/galleryImages/webp/Vicious%202.webp"} alt={"Vicious"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Jack</h3>
                    <h5 className={classes.gallerySubtitle}>Being Cute</h5>
                </div>
                <picture>
                    <source type={"image/webp"} media={"(min-width: 0px)"} srcSet={"/galleryImages/webp/Jack.webp"} />
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Jack.avif"} />
                    <img className={classes.image} src={"/galleryImages/compressed/Jack.webp"} alt={"Jack"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Vicious</h3>
                    <h5 className={classes.gallerySubtitle}>Fabulous</h5>
                </div>
                <picture>
                    <source type={"image/webp"} media={"(min-width: 0px)"} srcSet={"/galleryImages/webp/Vicious%205.webp"} />
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Vicious%205.avif"} />
                    <img className={classes.image} src={"/galleryImages/webp/Vicious%205.webp"} alt={"Vicious"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Colin</h3>
                    <h5 className={classes.gallerySubtitle}>Breather</h5>
                </div>
                <picture>
                    <source type={"image/webp"} media={"(min-width: 0px)"} srcSet={"/galleryImages/webp/Colin.webp"} />
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Colin.avif"} />
                    <img className={classes.image} src={"/galleryImages/webp/Colin.webp"} alt={"Colin"} />
                </picture>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;