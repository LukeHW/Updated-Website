/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
// import modules
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Glide from '@glidejs/glide';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// import json Projects object
import ProjectsJSON from './Projects.json';

// import styles
import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';

// styles for App.js
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    textAlign: 'left',
    maxWidth: 1100
  },
  project: {
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10
  },
  projectNumber: {
    fontSize: 'min(8vw, 90px)'
  },
  title: {
    fontSize: 'min(8vw, 60px)',
    fontWeight: '400',
    margin: 0,
    marginBottom: 10,
    fontFamily: 'Open Sans',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 'min(6vw, 40px)',
    fontWeight: 'lighter',
    fontStyle: 'italic',
    marginTop: 0,
    marginBottom: 10,
    fontFamily: 'Open Sans',
    textAlign: 'center'
  },
  body: {
    fontSize: 'min(4vw, 25px)',
    fontWeight: 300,
    marginTop: 0,
    maxWidth: 1000,
    textAlign: 'left'
  },
  images: {
    maxWidth: '200px',
    minHeight: '180px',
    textAlign: 'center'
  },
  links: {
    fontSize: 30
  },
  tags: {
    fontSize: 'min(4vw, 25px)',
    fontWeight: 300,
    marginTop: 10,
    textAlign: 'center'
  },
  yearCreated: {
    fontSize: 20
  },
  carosel: {
    diplay: 'flex',
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden'
  },
  inlineLink: {
    maxWidth: "min(6vw, 55px)",
    display: 'inline-block',
    marginLeft: '10px',
    marginBottom: '-2px'
  },
  item: {
    margin: 0
  },
  shadow: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(8px)",
    color: "white",
    padding: theme.spacing(3),
    borderRadius: '20px'
  },
  inlineSkeleton: {
    display: 'inline-block',
    marginLeft: '1%',
    marginBottom: '2%'
  },
  hostedLink: {
    outline: 'none',
    textDecoration: 'none',
    '&:link': {
      color: '#ffffff'
    },
    '&:visited': {
      color: '#bbbbbb'
    },
    '&:focus': {
      borderBottom: '1px solid',
      background: '#444444'
    },
    '&:hover': {
      borderBottom: '1px solid',
      background: '#444444'
    },
    '&:active': {
      background: '#333333',
      color: '#bbbbbb'
    }
  },
  titleLink: {
    outline: 'none',
    textDecoration: 'none',
    '&:link': {
      color: '#ffffff'
    },
    '&:visited': {
      color: '#bbbbbb'
    },
    '&:focus': {
      borderBottom: '1px solid',
      background: '#444444'
    },
    '&:hover': {
      borderBottom: '1px solid',
      background: '#444444'
    },
    '&:active': {
      background: '#333333',
      color: '#bbbbbb'
    }
  }
}))

function Projects() {

  const classes = useStyles();

  const [projects, setProjects] = useState([]);

  const [projMount, setProjMount] = useState(false);

  const projectArray = [];

  const currentProjectArray = ProjectsJSON.projects;

  const mountGlider = () => {
    if (projMount) {
      const sliders = document.querySelectorAll('.glide');
      let glide = null;

      sliders.forEach((slider) => {
        glide = new Glide(slider, {
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
        })
        console.log(slider)
      })
      glide.mount();
    }
    console.log("glide mounted")
  }

  useEffect(() => {
      for (const i in currentProjectArray) {
        if(currentProjectArray[i]) {
        const {projectNumber, title, subtitle, body, images, githubLink, hostedLink, tags, yearCreated} = currentProjectArray[i];
    
        projectArray.push({projectNumber, title, subtitle, body, images, githubLink, hostedLink, tags, yearCreated});
        }
      }
      setProjects(projectArray);

      console.log("projects are set in state");

      setProjMount(true);
      mountGlider();
  }, []);

  return (
    <div className={classes.container}>
        {projects.map((project, index) => {
          const subTitle = project.subtitle.concat(` (${project.yearCreated})`);
          const tags = 'Tech Stack: '.concat(`${project.tags.join(', ')}`);
          const githubLink = (<a target="_blank" rel="noopener noreferrer" href={project.githubLink} className={classes.titleLink}>{project.title}</a>);
          const hostedLink = project.hostedLink === "" ? (<div/>) : (<a target="_blank" rel="noopener noreferrer" href={project.hostedLink} className={classes.hostedLink}>here.</a>);

          console.log("rendering project", index);

          return  <div className={classes.project} key={project.projectNumber}>
                    <div className={classes.shadow}>
                    <SkeletonTheme color="#111111" highlightColor="#222222">
                      <Grid container className={classes.container}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h1 className={classes.title}>
                              {githubLink || <Skeleton count={1} duration={2.5} width="50%" />}
                            </h1>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className={classes.subtitle}>
                              {subTitle || <Skeleton count={1} duration={2.5} width="30%" />}
                            </h3>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h5 className={classes.tags}>
                              {tags || <Skeleton count={1} duration={2.5} width="40%" />}
                            </h5>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                            <h5 className={classes.body}>
                                {project.body || <Skeleton count={10} duration={2.5} height={30} />}
                            </h5>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h5 className={classes.tags}>
                              Is it hosted? {project.hostedLink === "" ? "No" : "Yes, you can find it " }
                              {hostedLink || <Skeleton circle={true} duration={2.5} height={60} width={60} className={classes.inlineSkeleton} />} 
                            </h5>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className={classes.carosel}>
                            <div className="glide" overflow="hidden">
                              <div data-glide-el="track" className="glide__track">
                                <ul className="glide__slides">
                                  <li className="glide__slide"><img src={project.images[0]} className={classes.images} alt="github img"/></li>
                                  <li className="glide__slide"><img src={project.images[1]} className={classes.images} alt="github img"/></li>
                                  <li className="glide__slide"><img src={project.images[2]} className={classes.images} alt="github img"/></li>
                                </ul>
                              </div>
                              <div data-glide-el="controls">
                                <button type="button" className="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
                                <button type="button" className="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
                              </div>
                            </div>
                            </div>
                        </Grid>
                      </Grid>
                    </SkeletonTheme>
                    </div>
                  </div>
        })}
    </div>
  );
}

export default Projects;

export function test() { return "test"; }
export function test2() { return "test2"; }