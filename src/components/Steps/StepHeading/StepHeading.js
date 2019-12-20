import React from 'react';
import classes from './StepHeading.module.css';

const stepHeading = (props) => {
    let heading = 'Product Finder';

    if (props.step === 1) {
        heading = 'Find the signal booster that is right for you';
    }

    if (props.step === 2 & props.context === 'home') {
        heading = 'What area of your home do you need to cover?';
    }

    if (props.step === 2 & props.context === 'vehicle') {
        heading = 'Select your vehicle type:';
    }

    if (props.step === 3) {
        heading = 'Which wireless service provider do you use?';
    }

    return <h1 className={classes.StepHeading}>{heading}</h1>
}

export default stepHeading;