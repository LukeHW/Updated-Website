// import modules
import React, { useEffect, useState, componentDidMount } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import Glide from '@glidejs/glide';

// import json Projects object
import ProjectsJSON from './Projects.json';

// import styles
import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';

// styles for App.js
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    textAlign: "left"
  },
  project: {
    marginBottom: "100px",
    marginTop: 50,
    color: "white"
  },
  projectNumber: {
    fontSize: 'min(8vw, 90px)'
  },
  title: {
    fontSize: 'min(8vw, 60px)',
    fontWeight: 'bold',
    display: 'block'
  },
  subtitle: {
    fontSize: 'min(8vw, 50px)',
    fontWeight: 'lighter',
    fontStyle: 'italic',
    marginTop: '-30px',
    display: 'block'
  },
  body: {
    fontSize: 'min(6vw, 36px)',
    fontWeight: 'lighter'
  },
  images: {
    maxWidth: '300px'
  },
  links: {
    fontSize: 30
  },
  tags: {
    fontSize: 'min(6vw, 25px)',
    fontWeight: 'lighter',
    marginTop: '-30px'
  },
  yearCreated: {
    fontSize: 20
  },
  carosel: {
    diplay: 'flex',
    width: '100%',
    textAlign: 'center'
  },
  inlineLink: {
    maxWidth: "min(6vw, 55px)",
    display: 'inline-block',
    marginLeft: '20px',
    marginBottom: '-2px'
  }
}))

var carosel = document.querySelector('.glide');

if (carosel) {
  var glide = new Glide('.glide').mount();

  glide.mount();
}

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
  }, [])


  return (
    <div className={classes.container}>
        {projects.map((project, index) => {
          return <div className={classes.project} key={index}>
                   <h1 className={classes.title}>
                     {project.title}
                     <a target="_blank" rel="noopener noreferrer" href={project.links[0]}><img src={project.images[0]} className={classes.inlineLink} alt="github img"/></a>
                   </h1>
                   <h3 className={classes.subtitle}>{project.subtitle} ({project.yearCreated})</h3>
                   <h5 className={classes.tags}>Tech Stack: {project.tags.join(' ')}</h5>
                   <h5 className={classes.body}>{project.body}</h5>

                  <div className={classes.carosel}>
                   <div className="glide">
                    <div data-glide-el="track" className="glide__track">
                      <ul className="glide__slides">
                        <li className="glide__slide"><img src={project.images[0]} className={classes.images} alt="github img"/></li>
                        <li className="glide__slide"><img src={project.images[1]} className={classes.images} alt="github img"/></li>
                        <li className="glide__slide"><img src={project.images[2]} className={classes.images} alt="github img"/></li>
                      </ul>
                    </div>
                    <div data-glide-el="controls">
                      <button data-glide-dir="<">Back</button>
                      <button data-glide-dir=">">Next</button>
                    </div>
                   </div>
                  </div>

                 </div>
        })}
    </div>
  );
}

export default Projects;