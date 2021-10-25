/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-lonely-if */
/* eslint-disable no-unneeded-ternary */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    scrollToTopButton: {
      zIndex: 5,
      position: 'fixed',
      bottom: '2vh',
      backgroundColor: '#222222',
      color: 'white',
      "&:hover, &.Mui-focusVisible": {
          transition: '0.3s',
          color: '#397BA6',
          backgroundColor: '#222222',
          borderRadius: '50%',
          boxShadow: '0 0 0 3px #397BA6'
      },
      right: '5%',
      borderRadius: '50%',
      boxShadow: '0 0 0 3px #EEEEEE'
    }
  }));

const ScrollToTop = ({showBelow}) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }
    
    const handleClick = () => {
        window.scrollTo({top: 0, behavior: `smooth`})
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div>
            {show && 
                <IconButton onClick={handleClick} className={classes.scrollToTopButton}>
                    <ExpandLessIcon />
                </IconButton>
            }
        </div>
    )
}
export default ScrollToTop;