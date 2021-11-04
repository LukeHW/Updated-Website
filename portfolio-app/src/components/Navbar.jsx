// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { HashLink as Link } from 'react-router-hash-link';
import { Spin as Hamburger } from 'hamburger-react';
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";


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
    textAlign: "center"
  },
  menuBox: {
    width: "100%",
    height: 200,
    position: "fixed",
    zIndex: 100
  },
  menuContainerHidden: {
    display: "none"
  },
  menuContainerShown: {
    width: "100%",
    minWidth: '200px',
    height: 200,
    backgroundColor: "rgba(20, 20, 20, 0.75)",
    backdropFilter: "blur(15px)",
    position: "fixed",
    marginTop: 63,
    zIndex: 100,
    right: '0px'
  },
  menuLink: {
    textDecoration: "none",
    fontWeight: 300,
    color: "white",
    fontSize: 22,
    textAlign: "right",
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
    marginRight: "8vw",
    marginTop: "22px",
    '&::after': {
      width: '100%',
      backgroundColor: 'rgba(180, 180, 180)'
    }
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
    fontWeight: "normal",
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
    height: 62
  },
  nameLink: {
    color: 'white',
    fontSize: 19,
    fontWeight: 500,
    fontFamily: 'Inter',
    textAlign: 'center',
    width: 160,
    marginLeft: '3vw'
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
                <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2}/> 
                <Grid item xs={7} sm={4} md={2} lg={2} xl={2}>
                  <div className={classes.logoLinkContainer}>
                    <Link to="/" className={classes.logoLink}>
                          <h1 className={classes.nameLink}>Luke Wahlmeier</h1>
                    </Link>
                  </div>
                </Grid>
                <Grid item xs="auto" sm="auto" md={2} lg={3} xl={3}/>
                <Hidden smDown>
                    <Grid item className={classes.link} md={2} lg={1} xl={1}>
                          <Link to="/Work" className={classes.navLinks}>Work</Link>
                    </Grid>
                    <Grid item className={classes.link} md={2} lg={1} xl={1}>
                          <Link to="/Gallery" className={classes.navLinks}>Gallery</Link>
                    </Grid>
                    <Grid item className={classes.link} md={2} lg={1} xl={1}>
                          <Link smooth to="/#Contact" className={classes.navLinks}>Contact</Link>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item xs={3} sm={6}/>
                    <Grid item xs={2} sm={2} align="center">
                      <div className={classes.hamburgerContainer}>
                        <Hamburger className={classes.hamburger} toggled={isOpen, menu}  toggle={setOpen, setMenu} size={25} color="#FFFFFF" label="Show menu" marginTop="20px" direction="right" />
                      </div>
                    </Grid>
                </Hidden>
            </Grid>
        </div>

        <Hidden mdUp>
            <Grid container className={menu ? classes.menuContainerShown : classes.menuContainerHidden}>
                <Grid item className={classes.menuBox} xs={12} sm={12} align="right">
                    <div className={classes.menuLinkSpacer}>
                        <Link to="/Work" className={classes.menuLink} onClick={closeMenuHandler}>Work</Link>
                    </div>
                    <div className={classes.menuLinkSpacer}>
                        <Link to="/Gallery" className={classes.menuLink} onClick={closeMenuHandler}>Gallery</Link>
                    </div>
                    <div className={classes.menuLinkSpacer}>
                        <Link smooth to="/#Contact" className={classes.menuLink} onClick={closeMenuHandler}>Contact</Link>
                    </div>
                </Grid>
            </Grid>
        </Hidden>
    </div>
  );
}

export default Navbar;