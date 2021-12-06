/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
// import modules
import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slide, Button } from '@mui/material';
import Grid from '@material-ui/core/Grid';

// import json Projects object
import ProjectsJSON from '../Projects.json';

// styles for App.js
const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    maxWidth: 1000,
    zIndex: 201,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: -5,
    fontFamily: 'Inter'
  },
  emptyContainer: {
    height: 300,
    width: '100%',
    content: ' '
  },
  projectHeader: {
    fontSize: 'clamp(27px, 7vmin, 72px)',
    fontWeight: 500,
    color: '#1D1D1F',
    padding: 'clamp(30px, 6vmin, 100px)',
    paddingBottom: 'clamp(20px, 6vw, 50px)',
    paddingTop: 'clamp(30px, 10vw, 80px)',
    margin: 0,
    textAlign: 'left',
    maxWidth: 800,
  },
  projectDiscription: {
    fontSize: 'clamp(18px, 4vmin, 24px)',
    fontWeight: 400,
    color: '#484848',
    padding: 'clamp(30px, 6vmin, 100px)',
    paddingTop: 0,
    paddingBottom: 70,
    margin: 0,
    textAlign: 'left',
    maxWidth: 800
  },
  codeContainer: {
    width: '100%',
    maxHeight: 1200,
    backgroundColor: '#F5F5F7'
  },
  codeHeader: {
    padding: 'clamp(30px, 8vmin, 80px)',
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 0,
    fontWeight: 600,
    fontSize: 'clamp(28px, 8vmin, 60px)',
    color: '#1D1D1F'
  },
  projectBG: {
    width: '100%',
    maxHeight: 500,
    minHeight: 170,
    objectFit: 'cover',
    objectPosition: '50% 50%',
    borderRadius: '20px 20px 0px 0px',
    backgroundColor: '#252423',
    overflow: 'hidden',
    marginTop: -45
  },
  codeImage: {
    width: '80%',
    maxWidth: 800,
    maxHeight: 600,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
    display: 'block'
  },
  codeButton: {
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 'clamp(40px, 8vmin, 80px)'
  },
  detailHeader: {
    padding: 'clamp(30px, 8vmin, 80px)',
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 0,
    marginTop: 0,
    fontWeight: 600,
    fontSize: 'clamp(28px, 8vmin, 60px)',
    color: '#1D1D1F'
  },
  detailImage: {
    width: '100%',
    maxHeight: 200,
    maxWidth: 200,
    objectFit: 'cover',
    objectPosition: '50% 50%',
    padding: 5,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  detailItemWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: '100%',
    marginBottom: 50,
    marginLeft: 15,
  },
  detailItemWrapperLeft: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: '100%',
    marginLeft: 10
  },
  detailItem: {
    fontWeight: 600,
    margin: 0,
    padding: '0px 10px 5px 10px',
    maxWidth: 390,
    fontSize: 'clamp(22px, 4vmin, 32px)',
    color: '#1D1D1F',
    textAlign: 'left'
  },
  detailSubItem: {
    fontWeight: 500,
    margin: 0,
    width: '90%',
    padding: '5px 10px 0px 10px',
    fontSize: 'clamp(18px, 3vmin, 24px)',
    color: '#605F5F',
    textAlign: 'left'
  },
  divContainer: {
    height: 20,
    width: '100%',
    content: ' '
  },
  ideasContainer: {
    width: '100%',
    maxHeight: 1200,
    backgroundColor: '#F5F5F7',
    borderRadius: '0px 0px 20px 20px'
  },
  ideasImage: {
    width: '20%',
    maxWidth: 400,
    minWidth: 100,
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block'
  },
  ideasBody: {
    fontWeight: 500,
    margin: 0,
    width: '90%',
    maxWidth: 800,
    padding: 20,
    fontSize: 'clamp(18px, 3vmin, 24px)',
    color: '#605F5F',
    textAlign: 'center'
  },
  spacer: {
    height: 100,
    width: '100%',
    content: ''
  }
}))

function Project0() {

  const classes = useStyles();

  const currentProjectArray = ProjectsJSON.projects[0];

  return (
    <div>
      <Slide in timeout={1000} direction={"up"} easing={{ enter: "cubic-bezier(0, 1, .4, 1)", exit: "linear", }}>
      <div className={classes.container}>
        <img className={classes.projectBG} src={currentProjectArray.background} alt={""}/>
        <h1 className={classes.projectHeader}>
          {currentProjectArray.title}
        </h1>
        <h5 className={classes.projectDiscription}>
          {currentProjectArray.body}
        </h5>

        <div className={classes.codeContainer}>
          <h2 className={classes.codeHeader}>The code</h2>
          <img className={classes.codeImage} src={'/projectImages/project0/digikeyCode.png'} alt={""}/>
          <div className={classes.codeButton}>
            <Button color={'primary'} variant={'outlined'} href={currentProjectArray.githubLink} target={'_blank'}>
              View on GitHub
            </Button>
          </div>       
        </div>

        <div>
          <h2 className={classes.detailHeader}>How it works</h2>
          <Grid container >
            <Grid item xs={3} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project0/image1.png'} alt={"Search bar image"}/>
              </div>               
            </Grid>
            <Grid item xs={9} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>Product IDs</h3>
                <h5 className={classes.detailSubItem}>User will enter a list of product IDs to be used by the API.</h5>
              </div>
              <div className={classes.divContainer} />          
            </Grid>

            <Grid item xs={3} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project0/image2.png'} alt={"Digi-key image"}/>
              </div> 
            </Grid>
            <Grid item xs={9} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>Digi-Key API Logic</h3>
                <h5 className={classes.detailSubItem}>Digi-Key’s API takes the product IDs as an input. It will then search through it’s own database for the part’s URL, datasheet, manufacture part identifiers, and more.</h5>
              </div>
              <div className={classes.divContainer} />       
            </Grid>

            <Grid item xs={3} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project0/image3.png'} alt={"File image"}/>
              </div> 
            </Grid>
            <Grid item xs={9} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>File Tree Creation</h3>
                <h5 className={classes.detailSubItem}>After the API data is returned, Node uses the 'file system' module to create a file tree. The application then saves the file tree in the root directory for the user to traverse.</h5>
              </div>        
              <div className={classes.divContainer} />
            </Grid>
          </Grid>
        </div>

        <div className={classes.ideasContainer}>
          <h2 className={classes.codeHeader}>Ideas/Updates</h2>
          <img className={classes.ideasImage} src={'/projectImages/project0/npmLogo.png'} alt={"npm logo"}/>
          <h5 className={classes.ideasBody}>An idea to improve this application would be to create a bundle for node package manager. This would make it easier for users to start using this application, rather than cloning the repo and hard-coding specifics.</h5>     
          <div className={classes.spacer} />   
        </div>

      </div>
      </Slide>
      <div className={classes.emptyContainer} />
    </div>
  );
}

export default Project0;