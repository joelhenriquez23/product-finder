import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default cockpit;