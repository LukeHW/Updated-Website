// import modules
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';

// import json Projects object
import ProjectsJSON from './Projects.json';

// styles for App.js
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    textAlign: "left"
  },
  project: {
    marginBottom: "510px"
  },
  projectNumber: {
    fontSize: 60,
    color: "white"
  },
  title: {
    marginTop: 50,
    fontSize: 60,
    color: "white"
  },
  subtitle: {
    marginTop: 50,
    color: "white",
    fontSize: 50
  },
  body: {
    marginTop: 50,
    color: "white",
    fontSize: 40
  },
  links: {
    marginTop: 50,
    color: "white",
    fontSize: 30
  },
  tags: {
    marginTop: 50,
    color: "white",
    fontSize: 20
  },
  yearCreated: {
    marginTop: 50,
    color: "white",
    fontSize: 20
  }
}))

function Projects() {

  const classes = useStyles();

  const [projects, setProjects] = useState([]);

  const projectArray = [];

  const currentProjectArray = ProjectsJSON.projects;

  useEffect(() => {
    for (let i in currentProjectArray) {
      let cur = currentProjectArray[i];

      let projectNumber = cur.projectNumber;
      let title = cur.title;
      let subtitle = cur.subtitle;
      let body = cur.body;
      let images = cur.images;
      let links = cur.links;
      let tags = cur.tags;
      let yearCreated = cur.yearCreated;
  
      projectArray.push({projectNumber, title, subtitle, body, images, links, tags, yearCreated});
    }
    setProjects(projectArray);
  })


  return (
    <div className={classes.container}>
        {projects.map((project, index) => {
          return <div className={classes.project} key={index}>
                   <h1 className={classes.title}>{project.title}</h1>
                   <h3 className={classes.subtitle}>{project.subtitle}</h3>
                   <h5 className={classes.body}>{project.body}</h5>
                   <h5 className={classes.images}>{project.images.join(' ')}</h5>
                   <h5 className={classes.links}>{project.links.join(' ')}</h5>
                   <h5 className={classes.tags}>{project.tags.join(' ')}</h5>
                   <h6 className={classes.yearCreated}>{project.yearCreated}</h6>
                 </div>
        })}
    </div>
  );
}

export default Projects;