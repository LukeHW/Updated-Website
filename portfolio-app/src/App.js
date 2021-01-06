import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Navbar from './Components/Navbar.js';
import Main from './Components/Main.js'
import bg from './blurredBG.jpg';
import Hidden from '@material-ui/core/Hidden';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
          <Navbar/>
          <Main/>
    </div>
  );
}

export default App;