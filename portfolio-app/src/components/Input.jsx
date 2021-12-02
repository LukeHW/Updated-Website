/* eslint react/prop-types: 0 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// styles for Input.js
const useStyles = makeStyles(() => ({
  input: {
      width: '100%',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingRight: '20px',
      paddingLeft: '20px',
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
      '&:user-invalid': {
        border: '2px solid red'
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
    '&:user-invalid': {
        border: '2px solid red'
    },
    borderRadius: '3px',
    resize: 'none'
  },
  button: {
    outline: 'none',
    border: '1px solid #ccc',
    font: 'inherit',
    display: 'block',
    boxSizing: 'border-box',
    padding: '6px 10px',
    '&:focus': {
      outline: 'none',
      backgroundColor: '#ccc'
    },
    '&:user-invalid': {
        border: '2px solid red'
    },
    borderRadius: '3px',
    resize: 'none',
    color: 'white',
    backgroundColor: 'rgb(100, 100, 100)',
    '&:hover': {
      backgroundColor: 'rgb(150, 150, 150)'
    },
    width: 100,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10
  }
}));

const Input = (props) => {

    const classes = useStyles();

    let inputElement = null;

    switch (props.inputtype) {
        case('input'):
            inputElement = <input className={classes.inputElement} id={"input"} {...props} />;
            break;
        case('submit'):
            inputElement = <button className={classes.button} id={"submit"} type={"submit"} {...props} >Send</button>;
            break;
        case('textarea'):
            inputElement = <textarea className={classes.textArea} id={"textarea"} rows={"10"} {...props} />;
            break;
        default:
            inputElement = <input className={classes.inputElement} id={"default"} {...props} />;
    }

    return (
        <div className={classes.input}>
            <label className={classes.label} htmlFor={'input' || 'submit' || 'textarea' || 'default'}>{inputElement}</label>
        </div>
    )
}

export default Input;