// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from "react-router-dom";
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
    width: "100%"
  },
  link: {
    fontWeight: "normal",
    color: "rgba(255, 255, 255)",
    marginTop: 15,
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
    marginTop: 60,
    zIndex: 100,
    right: '0px'
  },
  menuLink: {
    textDecoration: "none",
    fontWeight: "lighter",
    color: "white",
    fontSize: 22,
    textAlign: "right",
    '&:hover': {
      color: 'rgba(220, 220, 220)'
    },
    '&:focus': {
      color: 'rgba(220, 220, 220)'
    }
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
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(15px)",
    height: 60,
    top: 0,
    position: "fixed",
    zIndex: 100,
    width: "100%"
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
    }
  },
  hamburgerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: "100%",
    marginLeft: "-30px",
    marginTop: 3
  },
  hamburger: {
    marginRight: 50
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
    display: 'block'
  },
  logoLinkContainer: {
    width: 50,
    height: 50,
    marginLeft: '4vw'
  }
}));

function Navbar() {

  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const [isOpen, setOpen] = useState(false);

  const classes = useStyles();

  const changeNavbarBackground = () => {
    if(window.scrollY >= 80) {
        setNavbar(true);
    }else {
        setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNavbarBackground);

  const closeMenuHandler = () => {
    setMenu(false);
    setOpen(false);
  }

  return (
    <div>
        <div className={navbar ? classes.navbarActive : classes.navbarContainer}>
            <Grid container className={classes.container}>
                <Grid item xs="auto" sm="auto" md={1} lg={2} xl={2}/> 
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                  <div className={classes.logoLinkContainer}>
                    <Link to="/" className={classes.logoLink}>
                          <Button className={classes.navButton} startIcon={<Avatar className={classes.navbarLogo} src="/favicon.png" />} alt="LHW logo" onClick={closeMenuHandler} />
                    </Link>
                  </div>
                </Grid>
                <Grid item xs="auto" sm="auto" md={3} lg={4} xl={4}/>
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
                    <Grid item xs={10} sm={10}/>
                    <Grid item xs={1} sm={1}>
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
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Work" className={classes.menuLink} onClick={closeMenuHandler}>Work</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/About" className={classes.menuLink} onClick={closeMenuHandler}>About</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Contact" className={classes.menuLink} onClick={closeMenuHandler}>Contact</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Hidden>
    </div>
  );
}

export default Navbar;