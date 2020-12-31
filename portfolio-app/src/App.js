import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar.js';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1600,
    justifyContent: "space-between",
    alignItems: "center"
  },
  item: {
    padding: "20px"
  },
  navbarLogo: {
    maxWidth: 200,
    textAlign: "left"
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <div className="AppBG">
        <Navbar>
          Content
        </Navbar>
        <Grid container className={classes.container}>
          <Grid item className={classes.item} xs={12} sm={6} md={6} lg={4} xl={4}>
          So today, for the first time, my little toddler finally counted to ten. Everyone was celebrating, saying how proud they are in my kid, and then Ben Shapiro kicks open the door. "Oh you think it's impressive that they can count to ten? I can count to one million." and then proceeded, in my living room for the next two weeks, to count to one million. He then said "yep, another libtard destroyed" and then curbstomped my kid.
          </Grid>
          <Grid item className={classes.item} xs={12} sm={6} md={6} lg={4} xl={4}>
          So today, for the first time, my little toddler finally counted to ten. Everyone was celebrating, saying how proud they are in my kid, and then Ben Shapiro kicks open the door. "Oh you think it's impressive that they can count to ten? I can count to one million." and then proceeded, in my living room for the next two weeks, to count to one million. He then said "yep, another libtard destroyed" and then curbstomped my kid.
          </Grid>
          <Grid item className={classes.item} xs={12} sm={12} md={12} lg={4} xl={4}>
          So today, for the first time, my little toddler finally counted to ten. Everyone was celebrating, saying how proud they are in my kid, and then Ben Shapiro kicks open the door. "Oh you think it's impressive that they can count to ten? I can count to one million." and then proceeded, in my living room for the next two weeks, to count to one million. He then said "yep, another libtard destroyed" and then curbstomped my kid.
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
