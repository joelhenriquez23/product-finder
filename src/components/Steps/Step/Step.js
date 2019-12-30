import React from 'react';
import { ReactComponent as HomeIcon } from './Icons/home.svg';
import { ReactComponent as VehicleIcon } from './Icons/vehicle.svg';
import { ReactComponent as SingleRoomIcon } from './Icons/single-room.svg';
import { ReactComponent as MidsizeHouseIcon } from './Icons/midsize-house.svg';
import { ReactComponent as LargeHouseIcon } from './Icons/large-house.svg';
import { ReactComponent as CarTruckIcon } from './Icons/car-truck.svg';
import { ReactComponent as RVCamperIcon } from './Icons/rv-camper.svg';
import { ReactComponent as BoatIcon } from './Icons/boat.svg';

import classes from './Step.module.css';

const step = (props) => {
    let stepNumber = 'Step-' + props.stepNumber;
    let stepName;
    let icon;

    if (props.id === 'step-home') icon = <HomeIcon className={classes[props.id]} />
    
    if (props.id === 'step-vehicle') icon = <VehicleIcon className={classes[props.id]} />

    if (props.id === 'step-singleroom') icon = <SingleRoomIcon className={classes[props.id]} />

    if (props.id === 'step-midsizehouse') icon = <MidsizeHouseIcon className={classes[props.id]} />

    if (props.id === 'step-largehouse') icon = <LargeHouseIcon className={classes[props.id]} />

    if (props.id === 'step-car') icon = <CarTruckIcon className={classes[props.id]} />

    if (props.id === 'step-rv') icon = <RVCamperIcon className={classes[props.id]} />

    if (props.id === 'step-boat') icon = <BoatIcon className={classes[props.id]} />

    if (props.id === 'step-att') icon = <div className={[classes.logoATT, classes.logo].join(' ')}></div>

    if (props.id === 'step-verizon') icon = <div className={[classes.logoVerizon, classes.logo].join(' ')}></div>

    if (props.id === 'step-tmobile') icon = <div className={[classes.logoTMobile, classes.logo].join(' ')}></div>

    if (props.id === 'step-sprint') icon = <div className={[classes.logoSprint, classes.logo].join(' ')}></div>


    if (props.stepNumber !== 3) {
        stepName = <div className={classes.StepName}>{props.name}</div>;
    } 
    
    else if (props.stepNumber === 3) {
        if (props.id === 'step-all' || props.id === 'step-other') {
            stepName = <div className={classes.StepName}>{props.name}</div>;
        }
    }

    return (
        <div className={[classes.Step, classes[stepNumber]].join(' ')}  onClick={props.clicked}>
            {icon}
            {stepName}
        </div>
    );
}

export default step;