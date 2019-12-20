import React, {Component} from 'react';
import StepHeading from './components/Steps/StepHeading/StepHeading';
import Steps from './components/Steps/Steps';
import PreviousStep from './components/Steps/PreviousStep/PreviousStep';
import './App.css';

import Cockpit from './components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            context: null,
            subcontext: null,
            carrier: null,
            stepOneOptions: [
                {id: 'step-home', name: 'For Home', context: 'home', next: 2},
                {id: 'step-vehicle', name: 'For Vehicle', context: 'vehicle', next: 2}
            ],
            stepTwoOptions: {
                home: [
                    {id: 'step-singleroom', name: 'Single Room', subcontext: 'single-room', next: 3,},
                    {id: 'step-midsizehouse', name: 'Midsize House', subcontext: 'midsize-house', next: 3},
                    {id: 'step-largehouse', name: 'Large House', subcontext: 'large-house', next: 3,}
                ],
                vehicle: [
                    {id: 'step-car', name: 'Car & Truck', subcontext: 'car-truck', next: 3},
                    {id: 'step-rv', name: 'RVs & Campers', subcontext: 'rv-camper', next: 3},
                    {id: 'step-boat', name: 'Boats', subcontext: 'boat', next: 3}
                ]
            },
            stepThreeOptions: [
                {id: 'step-att', name: 'AT&T', carrier: 'att', next: 4},
                {id: 'step-verizon', name: 'Verizon', carrier: 'verizon', next: 4},
                {id: 'step-tmobile', name: 'T-Mobile', carrier: 't-mobile', next: 4},
                {id: 'step-sprint', name: 'Sprint', carrier: 'sprint', next: 4},
                {id: 'step-other', name: 'Other', carrier: 'other', next: 4},
                {id: 'step-all', name: 'All Carriers', carrier: 'all', next: 4}
            ]
        }
    }

    contextChangeHandler = (context) => {
        this.setState({context: context});
    }

    subcontextChangeHandler = (subcontext) => {
        this.setState({subcontext: subcontext});
    }

    carrierChangeHandler = (carrier) => {
        this.setState({carrier: carrier});
    }

    stepChangedHandler = (nextStep) => {
        this.setState({step: nextStep});
    }

    previousStepHandler = (currentStep) => {
        let previousStep = currentStep - 1;
        this.setState({step: previousStep});
    }

    render() {
        let steps;
        let previousStep = this.state.step !== 1 ? <PreviousStep currentStep={this.state.step} click={this.previousStepHandler} /> : null;

        if (this.state.step === 1) {
            steps = <Steps
                step={this.state.step}
                steps={this.state.stepOneOptions}
                stepChange={this.stepChangedHandler}
                contextChange={this.contextChangeHandler}
            />
        }
        
        if (this.state.step === 2) {
            if (this.state.context === 'home') {
                steps = <Steps
                    step={this.state.step}
                    steps={this.state.stepTwoOptions.home}
                    stepChange={this.stepChangedHandler}
                    subcontextChange={this.subcontextChangeHandler}
                />
            }

            if (this.state.context === 'vehicle') {
                steps = <Steps
                    step={this.state.step}
                    steps={this.state.stepTwoOptions.vehicle}
                    stepChange={this.stepChangedHandler}
                    subcontextChange={this.subcontextChangeHandler}
                />
            }
        }

        if (this.state.step === 3) {
            steps = <Steps
                step={this.state.step}
                stepNumber="Step3"
                steps={this.state.stepThreeOptions}
                stepChange={this.stepChangedHandler}
                carrierChange={this.carrierChangeHandler}
            />
        }

        if (this.state.step === 4) {
            steps = <div>Return products</div>
        }

        return (
            <div className="App">
                <Cockpit>
                    <div>
                    <StepHeading step={this.state.step} context={this.state.context} />
                    {steps}
                    {previousStep}
                    </div>
                </Cockpit>
            </div>
        );
    }
}

export default App;
