import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbarLogo: {
    minWidth: 70,
    maxWidth: 70,
    marginTop: 10
  },
  navbarContainer: {
    maxHeight: 200,
    top:0,
    position: "fixed",
    zIndex: 100,
    width: "100%"
  },
  link: {
      fontWeight: "normal",
      color: "White",
      marginTop: 30,
      textAlign: "center"
  },
  menuIcon: {
      fontSize: 55,
      color: "white"
  },
  navbarActive: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      maxHeight: 200,
      top:0,
      position: "fixed",
      zIndex: 100,
      width: "100%"
  },
  navLinks: {
      textDecoration: "none",
      fontWeight: "normal",
      color: "White"
  }
}));

function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const classes = useStyles();

  const changeBackground = () => {
      if(window.scrollY >= 80) {
          setNavbar(true);
      }else {
          setNavbar(false);
      }
  };

  window.addEventListener('scroll', changeBackground)

  return (
    <Router>
        <div className={navbar ? classes.navbarActive : classes.navbarContainer}>
            <Grid container className={classes.container}>
                <Grid xs={1} sm={1} md={2} lg={3} xl={3}/> 
                <Grid item className={classes.logo} xs={1} sm={1} md={1} lg={1} xl={1} align="left">
                    <Link to="/" className={classes.navLinks}>
                        <img className={classes.navbarLogo} src="/favicon.png" alt="LHW logo"/>
                    </Link>
                </Grid>
                <Grid xs={1} sm={1} md={1} lg={2} xl={2}/>
                <Hidden smDown>
                    <Grid item className={classes.link} md={2} lg={1} xl={1}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            <Link to="/Work" className={classes.navLinks}>Work</Link>
                        </Typography>
                    </Grid>
                    <Grid item className={classes.link} md={2} lg={1} xl={1}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            <Link to="/About" className={classes.navLinks}>About</Link>
                        </Typography>
                    </Grid>
                    <Grid item className={classes.link} md={2} lg={1} xl={1}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            <Link to="/Contact" className={classes.navLinks}>Contact</Link>
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid xs={7} sm={7}/>
                    <Grid item className={classes.menuContainer} xs={2} sm={2}>
                        <IconButton aria-label="menu">
                            <MenuIcon className={classes.menuIcon}/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    </Router>
  );
}

export default Navbar;