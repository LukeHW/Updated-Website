import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar.js';
import bg from './bg.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 25
  },
  item: {
    padding: "20px",
    textAlign: "center"
  },
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    minWidth: "50%",
    minHeight: "50%"
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Paper className={classes.paperContainer}>
      <div className="AppBG">
        <Navbar position="fixed"/>
        <Grid container className={classes.container}>
          <Grid item className={classes.item} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="h2" component="h2" gutterBottom>
                    Luke H. Wahlmeier
          </Typography>
          </Grid>
          <Grid item className={classes.item} xs={12} sm={12} md={12} lg={12} xl={12}>
          So today, for the first time, my little toddler finally counted to ten. Everyone was celebrating, saying how proud they are in my kid, and then Ben Shapiro kicks open the door. "Oh you think it's impressive that they can count to ten? I can count to one million." and then proceeded, in my living room for the next two weeks, to count to one million. He then said "yep, another libtard destroyed" and then curbstomped my kid.
          </Grid>
        </Grid>
      </div>
      </Paper>
    </div>
  );
}

export default App;
