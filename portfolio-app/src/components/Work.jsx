// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// import components
import Projects from './Projects';

import ScrollToTop from './pageComponents/ScrollToTop';

// styles for Main.js
const useStyles = makeStyles(() => ({
  container: {
    overflow: 'hidden',
    paddingBottom: 50
  },
  paperContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },
  title: {
    fontWeight: 500,
    fontSize: 'min(10vw, 90px)',
    marginBottom: 80,
    fontFamily: 'Inter'
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
    maxWidth: 1600,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
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
    color: 'black',
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
    marginLeft: 'auto',
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
  }
}));

function Work() {

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
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp3')
    },
  }

  return (
    <div className={"App"}>
    <ScrollToTop showBelow={250} />
    <Grid className={classes.paperContainer}>
    <div className={classes.workWrapper}>
      <Grid container className={classes.container}>
        <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />
        <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={10} xl={10}>
            <StyleRoot>
              <div style={styles.fadeInUp}>
                <div className={classes.spacerContainer}>
                  <h1 className={classes.spacerTextHeader}>
                    Projects
                  </h1>
                  <h2 className={classes.spacerText}>
                    Code I have worked on.
                  </h2>
                </div>
              </div>
            </StyleRoot>
        </Grid>
        <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align={"center"}>
          <StyleRoot>
            <div style={styles.fadeInUp2}>
              <Projects renderAmount={7}/>
            </div>
          </StyleRoot>
        </Grid>
      </Grid>
    </div>
    </Grid>
  </div>
  );
}

export default Work;