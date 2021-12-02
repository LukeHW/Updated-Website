// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import components
import workBG from '../lost-sky-bg.avif';
import Projects from './Projects';

import ScrollToTop from './pageComponents/ScrollToTop';

// styles for Main.js
const useStyles = makeStyles(() => ({
  container: {
    overflow: 'hidden'
  },
  paperContainer: {
    backgroundImage: `url(${workBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
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
    minHeight: '100vh',
    color: 'black',
    fontFamily: 'Inter',
    alignItems: 'center'
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
    marginBottom: 60,
    lineHeight: 1.05,
    letterSpacing: '-.045em'
  },
  spacerTextHeader: {
    fontWeight: 600,
    fontSize: 28,
    textAlign: 'left',
    color: '#333333',
    margin: 5
  }
}));

function Work() {

  const classes = useStyles();

  return (
    <div className={"App"}>
    <ScrollToTop showBelow={250} />
    <Grid className={classes.paperContainer}>
    <div className={classes.workWrapper}>
      <Grid container className={classes.container}>
        <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />
        <Grid item className={classes.spacer} xs={12} sm={12} md={12} lg={10} xl={10}>
            <div className={classes.spacerContainer}>
              <h1 className={classes.spacerTextHeader}>
                Projects
              </h1>
              <h2 className={classes.spacerText}>
                Code I have worked on.
              </h2>
            </div>
        </Grid>
        <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />

        <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />
        <Grid item className={classes.item} xs={12} sm={12} md={12} lg={10} xl={10} align={"center"}>
          <Projects renderAmount={6}/>
        </Grid>
        <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={1} xl={1} />
      </Grid>
    </div>
    </Grid>
  </div>
  );
}

export default Work;