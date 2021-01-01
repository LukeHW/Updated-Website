import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar.js';
import bg from './blurredBG.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
    marginTop: "100px"
  },
  item: {
    padding: "20px",
    textAlign: "center",
    fontSize: 30
  },
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat center",
    backgroundSize: "cover"
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid className={classes.paperContainer}>
      <div className="AppBG">
        <Navbar/>
        <Grid container className={classes.container}>
          <Grid item className={classes.item} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="h1" component="h2" gutterBottom>
                    Luke H. Wahlmeier
          </Typography>
          </Grid>
          <Grid xs={0} sm={0} md={3} lg={3} xl={3}></Grid> 
          <Grid item className={classes.item} xs={12} sm={12} md={6} lg={6} xl={6}>
          So today, for the first time, my little toddler finally counted to ten. Everyone was celebrating, saying how proud they are in my kid, and then Ben Shapiro kicks open the door. "Oh you think it's impressive that they can count to ten? I can count to one million." and then proceeded, in my living room for the next two weeks, to count to one million. He then said "yep, another libtard destroyed" and then curbstomped my kid.
          </Grid>
          <Grid xs={0} sm={0} md={3} lg={3} xl={3}></Grid> 
        </Grid>
      </div>
      </Grid>
    </div>
  );
}

export default App;
