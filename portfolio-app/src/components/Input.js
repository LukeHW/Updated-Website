import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//styles for Input.js
const useStyles = makeStyles(() => ({
  input: {
      width: '100%',
      padding: '10px',
      boxSizing: 'border-box'
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
      }
  }
}));

const Input = (props) => {

    const classes = useStyles();

    let inputElement = null;

    switch (props.inputType) {
        case('input'):
            inputElement = <input className={classes.inputElement} {...props}/>;
            break;
        case('textarea'):
            inputElement = <textarea className={classes.inputElement} {...props}/>;
            break;
        default:
            inputElement = <input className={classes.inputElement} {...props}/>;
    }

    return (
        <div className={classes.input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;