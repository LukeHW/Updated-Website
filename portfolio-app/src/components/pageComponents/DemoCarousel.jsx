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
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Dewey%204.avif"} />
                    <source type={"image/png"} media={"(min-width: 400px)"} srcSet={"/responsiveCarouselImages/Dewey-4-800.png"} />
                    <source type={"image/png"} media={"(min-width: 0px)"} srcSet={"/responsiveCarouselImages/Dewey-4-400.png"} />
                    <img className={classes.image} src={"/galleryImages/compressed/Dewey%204.avif"} alt={"Luke W."} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Jack</h3>
                    <h5 className={classes.gallerySubtitle}>Spooky Loaf</h5>
                </div>
                <picture>
                    <source type={"image/avif"} media={"(min-width: 1200px))"} srcSet={"/galleryImages/compressed/Jack%202.avif"} />
                    <source type={"image/png"} media={"(min-width: 400px))"} srcSet={"/responsiveCarouselImages/Jack-2-800.png"} />
                    <source type={"image/png"} media={"(min-width: 0px))"} srcSet={"/responsiveCarouselImages/Jack-2-400.png"} />
                    <img className={classes.image} src={"/galleryImages/compressed/Jack%202.avif"} alt={"Jack"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Colin</h3>
                    <h5 className={classes.gallerySubtitle}>Views</h5>
                </div>
                <picture>
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Colin%202.avif"} />
                    <source type={"image/png"} media={"(min-width: 400px)"} srcSet={"/responsiveCarouselImages/Colin-2-800.png"} />
                    <source type={"image/png"} media={"(min-width: 0px)"} srcSet={"/responsiveCarouselImages/Colin-2-400.png"} />
                    <img className={classes.image} src={"/galleryImages/compressed/Colin%202.avif"} alt={"Colin"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Mr. Mister</h3>
                    <h5 className={classes.gallerySubtitle}>Wet Boi</h5>
                </div>
                <picture>
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Mr.%20Mister%202.avif"} />
                    <source type={"image/png"} media={"(min-width: 400px)"} srcSet={"/responsiveCarouselImages/Mr.Mister-2-800.png"} />
                    <source type={"image/png"} media={"(min-width: 0px)"} srcSet={"/responsiveCarouselImages/Mr.Mister-2-400.png"} />
                    <img className={classes.image} src={"/galleryImages/compressed/Mr.%20Mister%202.avif"} alt={"Mr. Mister"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Vicious</h3>
                    <h5 className={classes.gallerySubtitle}>Showing Off</h5>
                </div>
                <picture>
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Vicious%202.avif"} />
                    <source type={"image/png"} media={"(min-width: 400px)"} srcSet={"/responsiveCarouselImages/Vicious-2-800.png"} />
                    <source type={"image/png"} media={"(min-width: 0px)"} srcSet={"/responsiveCarouselImages/Vicious-2-400.png"} />
                    <img className={classes.image} src={"/galleryImages/compressed/Vicious%202.avif"} alt={"Vicious"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Jack</h3>
                    <h5 className={classes.gallerySubtitle}>Being Cute</h5>
                </div>
                <picture>
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Jack.avif"} />
                    <source type={"image/png"} media={"(min-width: 400px)"} srcSet={"/responsiveCarouselImages/Jack-800.png"} />
                    <source type={"image/png"} media={"(min-width: 0px)"} srcSet={"/responsiveCarouselImages/Jack-400.png"} />
                    <img className={classes.image} src={"/galleryImages/compressed/Jack.avif"} alt={"Jack"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Vicious</h3>
                    <h5 className={classes.gallerySubtitle}>Fabulous</h5>
                </div>
                <picture>
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Vicious%205.avif"} />
                    <source type={"image/png"} media={"(min-width: 400px)"} srcSet={"/responsiveCarouselImages/Vicious-5-800.png"} />
                    <source type={"image/png"} media={"(min-width: 0px)"} srcSet={"/responsiveCarouselImages/Vicious-5-400.png"} />
                    <img className={classes.image} src={"/galleryImages/compressed/Vicious%205.avif"} alt={"Vicious"} />
                </picture>
            </div>
            <div>
                <div className={classes.galleryTitleContainer}>
                    <h3 className={classes.galleryTitle}>Colin</h3>
                    <h5 className={classes.gallerySubtitle}>Breather</h5>
                </div>
                <picture>
                    <source type={"image/avif"} media={"(min-width: 1200px)"} srcSet={"/galleryImages/compressed/Colin.avif"} />
                    <source type={"image/png"} media={"(min-width: 400px)"} srcSet={"/responsiveCarouselImages/Colin-800.png"} />
                    <source type={"image/png"} media={"(min-width: 0px)"} srcSet={"/responsiveCarouselImages/Colin-400.png"} />
                    <img className={classes.image} src={"/galleryImages/compressed/Colin.avif"} alt={"Colin"} />
                </picture>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;