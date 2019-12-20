import React from 'react';
import { ReactComponent as HomeIcon } from './Icons/home.svg';
import { ReactComponent as VehicleIcon } from './Icons/vehicle.svg';
import classes from './Step.module.css';

const step = (props) => {
    let stepNumber = 'Step-' + props.stepNumber;
    let icon;

    if (props.id === 'step-home') icon = <HomeIcon className={classes[props.id]} />
    else if (props.id === 'step-vehicle') icon = <VehicleIcon className={classes[props.id]} />

    return (
        <div className={[classes.Step, classes[stepNumber]].join(' ')}  onClick={props.clicked}>
            {icon}
            <div className={classes.StepName}>{props.name}</div>
        </div>
    );
}

export default step;