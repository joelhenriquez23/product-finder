import React from 'react';
import Step from './Step/Step';
import classes from './Steps.module.css';

const steps = (props) => {
    return (
        <div className={classes.Steps}>
            {props.steps.map((step, index) =>  {
                return <Step
                    key={step.id}
                    id={step.id}
                    stepNumber={props.step}
                    name={step.name}
                    icon={step.icon}
                    clicked={() => {
                        if (props.stepChange) {
                            props.stepChange(step.next);
                        }
            
                        if (props.contextChange) {
                            props.contextChange(step.context);
                        }
            
                        if (props.subcontextChange) {
                            props.subcontextChange(step.subcontext);
                        }
            
                        if (props.carrierChange) {
                            props.carrierChange(step.carrier);
                        }
                    }}
                />
            })}
        </div>
    )
}

export default steps;