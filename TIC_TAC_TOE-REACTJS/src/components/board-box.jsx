///
// src/components/board-box.jsx
///
import React from 'react';
import classes from '../styles/box.css';
// Create Box component
export const Box = (props) => {
    return (
        <button className={classes.boardBox} onClick={props.onClick}>
            {props.value}
        </button>
    )
}