// import modules
import React, { useState, useEffect } from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "react-router";
import Glide from '@glidejs/glide';

// import components
import workBG from '../work-blurred-bg.jpg';
import Projects from './Projects.js';

// styles for Main.js
const useStyles = makeStyles(() => ({
  container: {
    
  },
  paperContainer: {
    backgroundImage: `url(${workBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  title: {
    fontWeight: 400,
    fontSize: 'min(10vw, 90px)'
  },
  greeting: {
    textAlign: "left"
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
    marginTop: "150px"
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
    color: 'white',
    fontFamily: 'Open Sans',
    alignItems: 'center'
  }
}));

function Work() {

  const classes = useStyles();

  const [mount, setMount] = useState(false);

  useEffect(() => {
    let sliders = document.querySelectorAll('.glide');

    for (let i = 0; i < sliders.length; i++) {
      let glide = new Glide(sliders[i], {
        type: 'carousel',
        perView: '4',
        breakpoints: {
          1700: {
            perView: 3
          },
          1025: {
            perView: 2
          },
          600: {
            perView: 1
          }
        }
      });
      glide.mount();
      setMount(true);
    };
  },[])

  return (
    <div className="App">
    <Grid className={classes.paperContainer}>
    <div className={classes.workWrapper}>
      <Grid container className={classes.container}>
      <Grid item xs={1} sm={1} md={1} lg={2} xl={2}/> 
        <Grid item className={classes.item} xs={10} sm={10} md={10} lg={8} xl={8}>
          <Typography className={classes.title} variant="h1" component="h2" gutterBottom align='center'>
            Some of my work
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            <Projects/>
          </Typography>
        </Grid>
        <Hidden mdUp>
          <Grid item xs={1} sm={1}/>
        </Hidden>
        <Grid item xs={1} sm={1} md={1} lg={2} xl={2}/>
      </Grid>
    </div>
    </Grid>
  </div>
  );
}

export default Work;