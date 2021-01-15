// import modules
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { BrowserRouter as Router, Link} from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react';

// styles for Navbar.js
const useStyles = makeStyles((theme) => ({
  navbarLogo: {
    minWidth: 70,
    maxWidth: 70,
    marginTop: 7,
    marginBottom: 3,
    marginLeft: -15
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
    height: 200,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(15px)",
    position: "fixed",
    marginTop: 84,
    zIndex: 100
  },
  menuLink: {
    textDecoration: "none",
    fontWeight: "lighter",
    color: "white",
    fontSize: 25,
    textAlign: "right"
  },
  menuLinkSpacer: {
    marginRight: "10vmin",
    marginTop: "15px"
  },
  navbarActive: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(15px)",
    maxHeight: 200,
    top: 0,
    position: "fixed",
    zIndex: 100,
    width: "100%"
  },
  navLinks: {
    textDecoration: "none",
    fontWeight: "normal",
    color: "White"
  },
  hamburger: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: "100%",
    marginLeft: "1vmin"
  }
}));

function Navbar() {

  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const [isOpen, setOpen] = useState(false);

  const classes = useStyles();

  const changeBackground = () => {
      if(window.scrollY >= 80) {
          setNavbar(true);
      }else {
          setNavbar(false);
      }
  };

  const toggleDropdown = () => {
    menu ? setMenu(false) : setMenu(true);
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
                    <Grid item xs={7} sm={7}/>
                    <Grid item xs={1} sm={1}>
                      <div className={classes.hamburger}>
                        <Hamburger toggled={isOpen, menu} toggle={setOpen, setMenu} size={35} color="#FFFFFF" label="Show menu" marginTop="20px" direction="right" />
                      </div>
                    </Grid>
                </Hidden>
            </Grid>
        </div>

        <Hidden mdUp>
            <Grid container className={menu ? classes.menuContainerShown : classes.menuContainerHidden}>
                <Grid item className={classes.menuBox} xs={12} sm={12} align="right">
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Work" className={classes.menuLink}>Work</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/About" className={classes.menuLink}>About</Link>
                    </Typography>
                    <Typography className={classes.menuLinkSpacer} variant="h5" component="h2" gutterBottom>
                        <Link to="/Contact" className={classes.menuLink}>Contact</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Hidden>
    </Router>
  );
}

export default Navbar;

