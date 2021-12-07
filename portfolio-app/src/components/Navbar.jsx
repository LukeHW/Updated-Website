/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react';


// styles for Navbar.js
const useStyles = makeStyles(() => ({
  navbarLogo: {
    width: 50,
    height: 50,
    marginBottom: 3,
    borderRadius: '50%',
    marginLeft: '12px'
  },
  navbarContainer: {
    height: 60,
    top:0,
    position: "fixed",
    zIndex: 100,
    width: "100%",
    fontFamily: "Inter"
  },
  link: {
    fontWeight: "normal",
    color: "rgba(255, 255, 255)",
    textAlign: "center",
    width: 120
  },
  menuBox: {
    width: "100%",
    height: '100%',
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    zIndex: 100
  },
  menuContainerHidden: {
    display: "none"
  },
  menuContainerShown: {
    width: "100%",
    minWidth: '200px',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: "rgba(20, 20, 20, 0.75)",
    backdropFilter: "blur(15px)",
    position: "fixed",
    zIndex: 6,
    right: '0px'
  },
  menuLink: {
    textDecoration: "none",
    fontWeight: 500,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: 'Inter',
    position: 'relative',
    display: 'inline-block',
    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      backgroundColor: '#397BA6',
      height: '2px',
      bottom: 0,
      left: 0,
      transform: 'scale(0)',
      transformOrigin: 'center',
      transition: 'transform 0.3s ease'
    },
    '&:hover::before': {
      transform: 'scale(1)'
    },
    '&:focus::before': {
      transform: 'scale(1)'
    },
  },
  menuLinkSpacer: {
    marginTop: "22px",
    '&::after': {
      width: '100%',
      backgroundColor: 'rgba(180, 180, 180)'
    },
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  navbarActive: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    backdropFilter: "blur(15px)",
    height: 62,
    top: 0,
    position: "fixed",
    zIndex: 100,
    width: "100%",
    borderBottom: '1px solid #333333',
    fontFamily: "Inter"
  },
  navLinks: {
    textDecoration: "none",
    fontWeight: 500,
    paddingLeft: 30,
    paddingRight: 30,
    color: "rgba(255, 255, 255)",
    '&:hover': {
      color: 'rgba(220, 220, 220)'
    },
    '&:focus': {
      color: 'rgba(220, 220, 220)'
    },
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: "100%",
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      backgroundColor: '#397BA6',
      height: '2px',
      bottom: 0,
      left: 0,
      transform: 'scale(0)',
      transformOrigin: 'center',
      transition: 'transform 0.3s ease'
    },
    '&:hover::before': {
      transform: 'scale(1)'
    },
    '&:focus::before': {
      transform: 'scale(1)'
    },
  },
  hamburgerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: "100%",
    width: 50,
    marginLeft: "auto",
    marginRight: "auto"
  },
  hamburger: {
    
  },
  navButton: {
    margin: 0,
    marginTop: 5,
    padding: 0,
    borderRadius: '50%',
    width: 50,
    minWidth: 50,
    height: 50,
    boxShadow: '0px 0px 5px 5px rgba(255, 255, 255, .2)',
    '&:hover': {
      boxShadow: '0px 0px 5px 5px rgba(255, 255, 255, .5)'
    }
  },
  logoLink: {
    display: 'block',
    textDecoration: 'none'
  },
  logoLinkContainer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: "100%"
  },
  container: {
    height: 62,
    maxWidth: 1080,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  nameLink: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Inter',
    textAlign: 'left',
    marginLeft: '3vw'
  },
  navSpacer: {
    height: '100%',
    width: '35vw',
    maxWidth: 450
  }
}));

function Navbar() {

  const [navbar, setNavbar] = useState(true);
  const [menu, setMenu] = useState(false);

  const [isOpen, setOpen] = useState(false);

  const classes = useStyles();

  const closeMenuHandler = () => {
    setMenu(false);
    setOpen(false);
  }

  return (
    <div>
        <div className={navbar ? classes.navbarActive : classes.navbarContainer}>
            <Grid container className={classes.container}>
                <Grid item xs={"auto"} sm={"auto"} /> 
                <Grid item xs={6} sm={4} md={3} lg={3} xl={3}>
                  <div className={classes.logoLinkContainer}>
                    <a href={"/"} className={classes.logoLink}>
                      <h1 className={classes.nameLink}>Luke Wahlmeier</h1>
                    </a>
                  </div>
                </Grid>
                <Hidden smDown>
                    <div className={classes.navSpacer}/>
                    <div className={classes.link}>
                        <Link to={"/Work"} className={classes.navLinks}>Work</Link>
                    </div>
                    <div className={classes.link}>
                        <Link to={"/Gallery"} className={classes.navLinks}>Gallery</Link>
                    </div>
                    <div className={classes.link}>
                        <HashLink smooth to={"/#Contact"} className={classes.navLinks}>Contact</HashLink>
                    </div>
                </Hidden>

                <Hidden mdUp>
                    <Grid item xs={4} sm={7} /> 
                    <Grid item xs={2} sm={1} align={"center"}>
                      <div className={classes.hamburgerContainer}>
                        <Hamburger className={classes.hamburger} toggled={isOpen, menu}  toggle={setOpen, setMenu} size={25} color={"#FFFFFF"} label={"Show menu"} marginTop={"20px"} direction={"right"} />
                      </div>
                    </Grid>
                </Hidden>
            </Grid>
        </div>

        <Hidden mdUp>
            <Grid container className={menu ? classes.menuContainerShown : classes.menuContainerHidden}>
                <Grid item className={classes.menuBox} xs={12} sm={12} align={"center"}>
                    <div className={classes.menuLinkSpacer}>
                        <Link to={"/Work"} className={classes.menuLink} onClick={closeMenuHandler}>Work</Link>
                    </div>
                    <div className={classes.menuLinkSpacer}>
                        <Link to={"/Gallery"} className={classes.menuLink} onClick={closeMenuHandler}>Gallery</Link>
                    </div>
                    <div className={classes.menuLinkSpacer}>
                        <HashLink smooth to={"/#Contact"} className={classes.menuLink} onClick={closeMenuHandler}>Contact</HashLink>
                    </div>
                </Grid>
            </Grid>
        </Hidden>
    </div>
  );
}

export default Navbar;