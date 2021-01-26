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
    textAlign: "left"
  },
  project: {
    marginBottom: 50,
    marginTop: 50
  },
  projectNumber: {
    fontSize: 'min(8vw, 90px)'
  },
  title: {
    fontSize: 'min(8vw, 60px)',
    fontWeight: 'bold',
    margin: 0
  },
  subtitle: {
    fontSize: 'min(6vw, 40px)',
    fontWeight: 'lighter',
    fontStyle: 'italic',
    marginTop: 0,
    marginBottom: 0
  },
  body: {
    fontSize: 'min(4vw, 25px)',
    fontWeight: 'lighter',
    marginTop: 0
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
    fontWeight: 'lighter',
    marginTop: 10
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
  },
  item: {
    margin: 0
  },
  shadow: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(8px)",
    color: "white",
    padding: theme.spacing(3)
  }
}))

var sliders = document.querySelectorAll('.glide');

for (var i = 0; i < sliders.length; i++) {
  var glide = new Glide(sliders[i], {
    type: 'carousel',
    perView: '4',
    breakpoints: {
      1701: {
        perView: 3
      },
      1025: {
        perView: 2
      },
      600: {
        perView: 1
      }
    }
  });
  
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
      let githubLink = cur.githubLink;
      let hostedLink = cur.hostedLink;
      let tags = cur.tags;
      let yearCreated = cur.yearCreated;
  
      projectArray.push({projectNumber, title, subtitle, body, images, githubLink, hostedLink, tags, yearCreated});
    }
    setProjects(projectArray);
  }, [])


  return (
    <div className={classes.container}>
        {projects.map((project, index) => {
          return <div className={classes.project} key={index}>
                  <div className={classes.shadow}>
                    <Grid container className={classes.container}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <h1 className={classes.title}>
                            {project.title}
                            <a target="_blank" rel="noopener noreferrer" href={project.githubLink}><img src={project.images[0]} className={classes.inlineLink} alt="github img"/></a>
                            {project.hostedLink === "" ? null : (<a target="_blank" rel="noopener noreferrer" href={project.hostedLink}><img src={project.images[1]} className={classes.inlineLink} alt="github img"/></a>)}
                          </h1>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <h3 className={classes.subtitle}>{project.subtitle} ({project.yearCreated})</h3>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <h5 className={classes.tags}>Tech Stack: {project.tags.join(', ')}</h5>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <h5 className={classes.body}>{project.body}</h5>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                              <button data-glide-dir="<">Prev</button>
                              <button data-glide-dir=">">Next</button>
                            </div>
                          </div>
                          </div>
                      </Grid>
                    </Grid>
                  </div>
                 </div>
        })}
    </div>
  );
}

export default Projects;