import React, {Component} from 'react';
import {InputSwitch} from 'primereact/components/inputswitch/InputSwitch';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { FixedSizeList as List } from "react-window";
import { HydMap } from './HydMap';
import { AtrMap } from './AtrMap';
import MapInputSwitch from './MapInputSwitch';
//import HydMap from './HydMap';

export class InputSwitchTest extends Component {

    constructor() {
        super();
        this.state = {
            checked1: true,
            checked2: true
        };
    }
    hydSwitchHandler()
    {
        if (this.state.checked1) {
            this.setState({
                checked1:false
            })
        } else {
            this.setState({
                checked1:true
            })
        }
    }
    atrSwitchHandler()
    {
        if (this.state.checked2) {
           return this.setState({
                checked2:false
            })
        } else {
            return this.setState({
                checked2:true
            })
        }
    }
    
    render() {
        const switchStyles = {
            position : 'Absolute',
            top: 0,
            right:0,
            padding:100
          };
        const Map = () =>(
            <div className="content-section introduction">
                    <h3>Hyderabad</h3>
                    <InputSwitch checked={this.state.checked1} tooltip="Hyderabad" onChange={()=>this.hydSwitchHandler()} /> 

                    <h3>Atmakur</h3>
                    <InputSwitch checked={this.state.checked2} tooltip="Atmakur" onChange={()=>this.atrSwitchHandler()}/>
                </div>
            ); 
        return (
            <div>
                {this.state.checked1?<HydMap/>:null}
                {this.state.checked2?<AtrMap/>:null}
            <List
                className="List"
                height={100}
                itemCount={1}
                itemSize={50}
                width={800}
                align={'smart'}
                
  >
    {Map}
  </List>
  </div>
        );
    }
}
export default InputSwitchTest;