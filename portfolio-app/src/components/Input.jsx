/* eslint react/prop-types: 0 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// styles for Input.js
const useStyles = makeStyles(() => ({
  input: {
      width: '100%',
      padding: '10px',
      boxSizing: 'border-box',
      maxWidth: 1000,
      marginLeft: 'auto',
      marginRight: 'auto'
  },
  label: {
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '8px'
  },
  inputElement: {
      outline: 'none',
      border: '1px solid #ccc',
      backgroundColor: 'white',
      font: 'inherit',
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      padding: '6px 10px',
      '&:focus': {
        outline: 'none',
        backgroundColor: '#ccc'
      },
      borderRadius: '3px'
  },
  textArea: {
    outline: 'none',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    font: 'inherit',
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    padding: '6px 10px',
    '&:focus': {
      outline: 'none',
      backgroundColor: '#ccc'
    },
    borderRadius: '3px',
    resize: 'none'
  }
}));

const Input = (props) => {

    const classes = useStyles();

    let inputElement = null;

    switch (props.inputtype) {
        case('input'):
            inputElement = <input className={classes.inputElement} id='input' {...props} />;
            break;
        case('textarea'):
            inputElement = <textarea className={classes.textArea} id='textarea' rows="10" {...props} />;
            break;
        default:
            inputElement = <input className={classes.inputElement} id='default' {...props} />;
    }

    return (
        <div className={classes.input}>
            <label className={classes.label} htmlFor={'input' || 'textarea' || 'default'}>{inputElement}</label>
        </div>
    )
}

export default Input;