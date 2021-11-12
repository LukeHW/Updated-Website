/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
// import modules
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import json Projects object
import ProjectsJSON from './Projects.json';

// import styles
import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';

// styles for App.js
const useStyles = makeStyles((theme) => ({
  container: {
    
  },
  project: {
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    maxWidth: 460,
    display: 'inline-block'
  },
  projectNumber: {
    fontSize: 'min(8vw, 90px)'
  },
  title: {
    fontSize: 'clamp(24, 5vw, 32px)',
    fontWeight: '600',
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
    fontSize: 'clamp(18px, 5vw, 20px)',
    fontWeight: 500,
    marginTop: 0,
    textAlign: 'left',
    color: '#1d1d1f'
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
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: '1px solid rgba(131, 131, 131, 0.16)',
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
      background: '#cccccc'
    },
    '&:hover': {
      borderBottom: '1px solid',
      background: '#cccccc'
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
      color: 'rgb(29, 29, 31)'
    },
    '&:visited': {
      color: 'rgb(29, 29, 31)'
    },
    '&:focus': {
      borderBottom: '1px solid',
      background: '#cccccc'
    },
    '&:hover': {
      borderBottom: '1px solid',
      background: '#cccccc'
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

export default Projects;