/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
// import modules
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import json Projects object
import ProjectsJSON from '../Projects.json';

// styles for App.js
const useStyles = makeStyles((theme) => ({
  container: {
    
  },
  project: {
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    maxWidth: 450,
    display: 'inline-block'
  },
  projectNumber: {
    fontSize: 'min(8vw, 90px)'
  },
  title: {
    fontSize: 'min(8vw, 42px)',
    fontWeight: '400',
    margin: 0,
    marginBottom: 10,
    fontFamily: 'Inter',
    textAlign: 'left',
    lineHeight: '125%'
  },
  subtitle: {
    fontSize: 'min(6vw, 40px)',
    fontWeight: 'lighter',
    fontStyle: 'italic',
    marginTop: 0,
    marginBottom: 10,
    fontFamily: 'Inter',
    textAlign: 'center'
  },
  body: {
    fontSize: 'min(4vw, 25px)',
    fontWeight: 300,
    marginTop: 0,
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
    borderRadius: '20px',
    minHeight: 300
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

function Project0() {

  const classes = useStyles();

  const [projects, setProjects] = useState([]);

  const [projMount, setProjMount] = useState(false);

  const projectArray = [];

  const currentProjectArray = ProjectsJSON.projects;

  useEffect(() => {
      for (const i in currentProjectArray) {
        if(currentProjectArray[i]) {
        const {projectNumber, title, subtitle, body, images, githubLink, hostedLink, tags, yearCreated} = currentProjectArray[i];
    
        projectArray.push({projectNumber, title, subtitle, body, images, githubLink, hostedLink, tags, yearCreated});
        }
      }
      setProjects(projectArray);

      setProjMount(true);
  }, []);

  return (
    <div className={classes.container}>
        {projects.map((project, index) => {
          const subTitle = project.subtitle.concat(` (${project.yearCreated})`);
          const tags = 'Made with: '.concat(`${project.tags.join(', ')}`);
          const githubLink = (<a target="_blank" rel="noopener noreferrer" href={project.githubLink} className={classes.titleLink}>{project.title}</a>);
          const hostedLink = project.hostedLink === "" ? (<div/>) : (<a target="_blank" rel="noopener noreferrer" href={project.hostedLink} className={classes.hostedLink}>here.</a>);

          return  <div className={classes.project} key={project.projectNumber}>
                    <div className={classes.shadow}>
                      <Grid container className={classes.container}>
                        <Grid item className={classes.container} xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h1 className={classes.title}>
                              {githubLink}
                            </h1>
                        </Grid>
                        <Grid item className={classes.container} xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                            <h5 className={classes.body}>
                                {project.body}
                            </h5>
                        </Grid>
                        <Grid item className={classes.container} xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h5 className={classes.tags}>
                              {tags}
                            </h5>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
        })}
    </div>
  );
}

export default Project0;