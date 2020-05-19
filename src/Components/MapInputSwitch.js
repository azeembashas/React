import {InputSwitch} from 'primereact/inputswitch';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { FixedSizeList as List } from "react-window";
import React, { Component } from 'react'
import hydmap from '../images/hyderabad.PNG'
import atrmap from '../images/atmakur.PNG'
import {MapLocation}   from './MapLocation';
import '../App.css';



const HydLoc = () =>(
    <div >
      <img src={hydmap} alt="Settled Place"/>
    </div>
    ); 
const AtrLoc = () =>(
        <div>
          <img src={atrmap} alt="Native Place" />
        </div>
        ); 

export default class MapInputSwitch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked1: true,
            checked2: true
        }
    }
    render() {

    const HydSwitch = () =>(
       
        <div className="content-section implementation">
                <InputSwitch id="hydSwitch" checked={this.state.checked1} tooltip="Hyderabad" la onChange={e => this.setState({ checked1: e.value })}/> 
        </div>
        ); 
     const AtrSwitch = () =>(
            <div className="content-section implementation">
                 <InputSwitch checked={this.state.checked2} tooltip="Atmakur" onChange={e => this.setState({ checked2: e.value })}/>
            </div>
            ); 
    return(
        <div className="container">
             <div className="row">
               <div className="col-md-9">
                {this.state.checked1 ? <MapLocation img={HydLoc}/> : null}    
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                        <label>Hyderabad</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <label>Atmakur</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="row">
                        <div className="col-md-12">
                         {<HydSwitch/>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        {<AtrSwitch/>}
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="row">
               <div className="col-md-11">
                {this.state.checked2 ? <MapLocation img={AtrLoc}/> : null}    
                </div>
            </div>
        </div>

    );
}
}