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
    marginTop: -45,
    boxShadow: '0px 0px 8px -3px #000000'
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
    maxHeight: 2000,
    backgroundColor: '#F5F5F7'
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
  ideasDesignImage: {
    width: '90%',
    maxWidth: 800,
    marginTop: 'clamp(15px, 3vmin, 50px)',
    marginBottom: 'clamp(15px, 3vmin, 50px)',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
    display: 'block',
  },
  spacer: {
    height: 'clamp(30px, 5vmin, 100px)',
    width: '100%',
    content: ' '
  },
  lighthouseButton: {
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 'clamp(40px, 8vmin, 80px)'
  },
  lighthouseContainer: {
    width: '100%',
    maxHeight: 1200
  },
  lighthouseHeader: {
    padding: 'clamp(30px, 8vmin, 80px)',
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
    fontWeight: 600,
    fontSize: 'clamp(28px, 8vmin, 60px)',
    color: '#1D1D1F'
  },
  lighthouseImage: {
    width: '90%',
    maxWidth: 800,
    maxHeight: 600,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
    display: 'block'
  },
  nextImage: {
    width: '100%',
    maxHeight: 200,
    maxWidth: 200,
    objectFit: 'cover',
    objectPosition: '50% 50%',
    padding: 5,
    marginRight: 'auto',
    marginLeft: 'auto',
  }
}))

function Project2() {

  const classes = useStyles();

  const currentProjectArray = ProjectsJSON.projects[2];

  const [lighthouse, setLighthouse] = useState("View mobile data")

  const lighthouseImage = () => {
    if(lighthouse === "View mobile data"){
      return <img className={classes.lighthouseImage} src={'/projectImages/project2/capture3.png'} alt={"Desktop Lighthouse Data"} />
    }
    return <img className={classes.lighthouseImage} src={'/projectImages/project2/captureMobile3.png'} alt={"Mobile Lighthouse Data"} />
  }

  const handleLighthouse = () => {
    if(lighthouse === "View mobile data"){
      setLighthouse("View desktop data")
    } else {
      setLighthouse("View mobile data")
    }
  }

  return (
    <div>
      <Slide in timeout={1000} direction={"up"} easing={{ enter: "cubic-bezier(0, 1, .4, 1)", exit: "linear", }}>
      <div className={classes.container}>
        <img className={classes.projectBG} src={'/projectImages/project2/portfolioBG.png'} alt={"Portfolio BG"}/>
        <h1 className={classes.projectHeader}>
          {currentProjectArray.title}
        </h1>
        <h5 className={classes.projectDiscription}>
          {currentProjectArray.body}
        </h5>

        <div className={classes.codeContainer}>
          <h2 className={classes.codeHeader}>The code</h2>
          <img className={classes.codeImage} src={'/projectImages/project2/portfolioCode.png'} alt={"Portfolio Code"}/>
          <div className={classes.codeButton}>
            <Button color={'primary'} variant={'outlined'} href={currentProjectArray.githubLink} target={'_blank'}>
              View on GitHub
            </Button>
          </div>       
        </div>

        <div>
          <h2 className={classes.detailHeader}>Created with</h2>
          <Grid container >
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project2/muiLogo.png'} alt={"MUI Logo"}/>
              </div>               
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>Material UI</h3>
                <h5 className={classes.detailSubItem}>MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.</h5>
              </div>
              <div className={classes.divContainer} />          
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project2/reactLogo2.png'} alt={"React Logo"}/>
              </div> 
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>React and JS</h3>
                <h5 className={classes.detailSubItem}>React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.</h5>
              </div>
              <div className={classes.divContainer} />       
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project2/htmlcssLogo.png'} alt={"HTML/CSS Logo"}/>
              </div> 
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>HTML/CSS</h3>
                <h5 className={classes.detailSubItem}>HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.</h5>
              </div>        
              <div className={classes.divContainer} />
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project2/awsLogo.png'} alt={"AWS Logo"}/>
              </div> 
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>Amazon Web Services</h3>
                <h5 className={classes.detailSubItem}>Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Currently being used for this website, AWS hosts a S3 bucket on Cloudfront's CDN.</h5>
              </div>        
              <div className={classes.divContainer} />
            </Grid>
            <div className={classes.spacer} />
          </Grid>
        </div>

        <div className={classes.ideasContainer}>
          <h2 className={classes.detailHeader}>Designed with</h2>
          <Grid container >
            <Grid item xs={3} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.ideasImage} src={'/projectImages/project2/figmaLogo.svg'} alt={"Figma Logo"}/>
              </div>               
            </Grid>
            <Grid item xs={9} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>Figma</h3>
                <h5 className={classes.detailSubItem}>Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.</h5>
              </div>
              <div className={classes.spacer} />          
            </Grid>
          </Grid>
          <img className={classes.ideasDesignImage} src={'/projectImages/project2/figmaExample.png'} alt={"Figma design"}/>
          <div className={classes.spacer} /> 
        </div>

        <div>
          <h2 className={classes.detailHeader}>Tested with Lighthouse</h2>
          <Grid container >
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project2/lighthouseLogo.png'} alt={"Google Lighthouse Logo"}/>
              </div>               
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>Google Lighthouse</h3>
                <h5 className={classes.detailSubItem}>Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.</h5>
              </div>
              <div className={classes.divContainer} />          
            </Grid>

            <div className={classes.lighthouseContainer}>
              <h2 className={classes.lighthouseHeader}>Lighthouse data</h2>
              <div>{lighthouseImage()}</div>
              <div className={classes.lighthouseButton}>
                <Button color={'primary'} variant={'outlined'} onClick={handleLighthouse}>
                  {lighthouse}
                </Button>
              </div>       
            </div>
          </Grid>
        </div>

        <div className={classes.ideasContainer}>
          <h2 className={classes.detailHeader}>Responsive design in mind</h2>
          <Grid container >
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project2/bracketLogo.png'} alt={"HTML bracket"}/>
              </div>               
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>{"The <picture> element"}</h3>
                <h5 className={classes.detailSubItem}>With responsive design in mind, this website makes use of the picture html element. This allows support for image fallbacks for a number of different browsers and devices.</h5>
              </div>
              <div className={classes.spacer} />          
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.detailImage} src={'/projectImages/project2/gridLogo.png'} alt={"Grid Layout"}/>
              </div>               
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>Grid structure and media queries</h3>
                <h5 className={classes.detailSubItem}>Grid designs and media queries allow easier structure flow across multiple sizes of windows. Resizing the window will change the layout to best suit the viewport.</h5>
              </div>
              <div className={classes.spacer} />          
            </Grid>
          </Grid>
        </div>

        <div>
          <h2 className={classes.detailHeader}>Ideas/Updates</h2>
          <Grid container >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={classes.detailItemWrapperLeft}>
                <img className={classes.nextImage} src={'/projectImages/project2/nextjsLogo.png'} alt={"HTML bracket"}/>
              </div>               
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={classes.detailItemWrapper}>
                <h3 className={classes.detailItem}>Next.js</h3>
                <h5 className={classes.detailSubItem}>If I would re-make this website for a third time, I would probably start my project with Next.js. Next has a lot of helpful tools out of the box like: responsively rendered image components, api routing for client side, file structure routing, and more. This would save a ton of time optimizing and staging.</h5>
              </div>
              <div className={classes.spacer} />          
            </Grid>
          </Grid>
        </div>

      </div>
      </Slide>
      <div className={classes.emptyContainer} />
    </div>
  );
}

export default Project2;