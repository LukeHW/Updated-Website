/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
// import modules
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import json Projects object
import ProjectsJSON from './Projects.json';

// import Projects LARGE
import Project0 from './projectsLarge/Project0.jsx';
import Project1 from './projectsLarge/Project1.jsx';
import Project2 from './projectsLarge/Project2.jsx';
import Project3 from './projectsLarge/Project3.jsx';
import Project4 from './projectsLarge/Project4.jsx';
import Project5 from './projectsLarge/Project5.jsx';

// styles for App.js
const useStyles = makeStyles(() => ({
  container: {},
  project: {
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'left',
    maxWidth: 460,
    borderRadius: '25px',
    border: '5px solid transparent',
    display: 'inline-block',
    '&:focus': {
      border: '5px solid #397BA6',
      webkitTransition: 'all 0.15s ease-in-out',
      transition: 'all 0.15s ease-in-out',
    },
    '&:hover': {
      border: '5px solid #397BA6',
      webkitTransition: 'all 0.15s ease-in-out',
      transition: 'all 0.15s ease-in-out',
    },
  },
  projectNumber: {
    fontSize: 'min(8vw, 90px)',
  },
  title: {
    fontSize: 'clamp(24px, 8vw, 32px)',
    fontWeight: '600',
    margin: 0,
    fontFamily: 'Inter',
    textAlign: 'left',
    lineHeight: '125%',
    padding: '15px 15px 0px 15px',
  },
  subtitle: {
    fontSize: 'min(6vw, 40px)',
    fontWeight: 'lighter',
    fontStyle: 'italic',
    marginTop: 0,
    marginBottom: 10,
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  body: {
    fontSize: 'clamp(18px, 5vw, 20px)',
    fontWeight: 500,
    marginTop: 0,
    textAlign: 'left',
    color: '#1d1d1f',
    padding: '15px 15px 0px 15px',
  },
  images: {
    maxWidth: '200px',
    minHeight: '180px',
    textAlign: 'center',
  },
  links: {
    fontSize: 30,
  },
  tags: {
    fontSize: 'min(4vw, 25px)',
    fontWeight: 300,
    marginTop: 10,
    textAlign: 'center',
  },
  yearCreated: {
    fontSize: 20,
  },
  carosel: {
    diplay: 'flex',
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden',
  },
  inlineLink: {
    maxWidth: 'min(6vw, 55px)',
    display: 'inline-block',
    marginLeft: '10px',
    marginBottom: '-2px',
  },
  item: {
    margin: 0,
  },
  shadow: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '20px',
    minHeight: 495,
  },
  inlineSkeleton: {
    display: 'inline-block',
    marginLeft: '1%',
    marginBottom: '2%',
  },
  hostedLink: {
    outline: 'none',
    textDecoration: 'none',
    '&:link': {
      color: '#ffffff',
    },
    '&:visited': {
      color: '#bbbbbb',
    },
    '&:focus': {
      borderBottom: '1px solid',
      background: '#cccccc',
    },
    '&:hover': {
      borderBottom: '1px solid',
      background: '#cccccc',
    },
    '&:active': {
      background: '#333333',
      color: '#bbbbbb',
    },
  },
  titleLink: {
    outline: 'none',
    textDecoration: 'none',
    '&:link': {
      color: 'rgb(29, 29, 31)',
    },
    '&:visited': {
      color: 'rgb(29, 29, 31)',
    },
    '&:focus': {
      borderBottom: '1px solid',
      background: '#cccccc',
    },
    '&:hover': {
      borderBottom: '1px solid',
      background: '#cccccc',
    },
    '&:active': {
      background: '#333333',
      color: '#bbbbbb',
    },
  },
  projectBG: {
    width: '100%',
    maxHeight: 200,
    minHeight: 170,
    objectFit: 'cover',
    objectPosition: '50% 50%',
    borderRadius: '20px 20px 0px 0px',
    backgroundColor: '#252423',
    overflow: 'hidden',
  },
  projectContainer: {
    maxWidth: 1600,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

function Projects(props) {
  const classes = useStyles();

  const [projects, setProjects] = useState([]);

  // const [projMount, setProjMount] = useState(false);

  const projectArray = [];

  const currentProjectArray = ProjectsJSON.projects;

  const projectIndex = index => {
    switch (index) {
      case 0:
        return <Project0 />;
      case 1:
        return <Project1 />;
      case 2:
        return <Project2 />;
      case 3:
        return <Project3 />;
      case 4:
        return <Project4 />;
      case 5:
        return <Project5 />;
      default:
        return null;
    }
  };

  useEffect(() => {
    for (const i in currentProjectArray) {
      if (currentProjectArray[i] && i < props.renderAmount) {
        const {
          projectNumber,
          title,
          subtitle,
          body,
          background,
          images,
          githubLink,
          hostedLink,
          tags,
          yearCreated,
        } = currentProjectArray[i];

        projectArray.push({
          projectNumber,
          title,
          subtitle,
          body,
          background,
          images,
          githubLink,
          hostedLink,
          tags,
          yearCreated,
        });
      }
    }
    setProjects(projectArray);

    // setProjMount(true);
  }, []);
  const [showResults, setShowResults] = React.useState(false);
  const [resultNumber, setResultNumber] = React.useState(0);
  const onClick = index => () => {
    setShowResults(true);
    setResultNumber(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.projectContainer}>
      {projects.map((project, index) => {
        const githubLink = (
          <a target={"_blank"} rel={"noopener noreferrer"} href={project.githubLink} className={classes.titleLink}>
            {project.title}
          </a>
        );

        return (
          <div className={classes.project} key={project.projectNumber}>
            <div className={classes.shadow} onClick={onClick(index)}>
              <img className={classes.projectBG} src={project.background} alt={""} />
              <Grid container className={classes.container}>
                <Grid item className={classes.container} xs={12} sm={12} md={12} lg={12} xl={12}>
                  <h1 className={classes.title}>{githubLink}</h1>
                </Grid>
                <Grid item className={classes.container} xs={12} sm={12} md={12} lg={12} xl={12} align={"center"}>
                  <h5 className={classes.body}>{project.body}</h5>
                </Grid>
              </Grid>
            </div>
          </div>
        );
      })}
      </div>
      {showResults ? projectIndex(resultNumber) : null}
    </div>
  );
}

export default Projects;
