import React from 'react';
import classes from './PreviousStep.module.css';

const previousStep = (props) => {
    return (
        <div className={classes.PreviousStep} onClick={()=> props.click(props.currentStep)}>Go Back</div>
    )
}

export default previousStep;