import React, {Component} from 'react';
import {Panel} from 'primereact/panel';
import MapInputSwitch from './MapInputSwitch';
import {InputSwitch} from 'primereact/inputswitch';





export class PanelDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             checked1:true,
             checked2:true,
             checked3:true
        }
    }
    

    render() {
        const PlotsSwitch = () =>(
            <div className="content-section implementation">
                    <InputSwitch checked={this.state.checked1} ariaLabelledBy="Plots" tooltip="Plots" onChange={e => this.setState({ checked1: e.value })}/> 
            </div>
            ); 
        const ProjectSwitch = () =>(
                <div className="content-section implementation">
                        <InputSwitch checked={this.state.checked2} ariaLabelledBy="Project" tooltip="Project Area" onChange={e => this.setState({ checked2: e.value })}/> 
                </div>
                ); 
        const AbdBaseMapSwitch = () =>(
                   <div className='container'>
                        <div className="row">
                             <div className="col-md-2" >
                             <InputSwitch checked={this.state.checked3} tooltip="Plots" onChange={e => this.setState({ checked3: e.value })}/> 
                             </div>
                             <div className="col-md-10">
                            <span> AdabBase Map</span>
                             </div>
                        </div>
                    </div>
                    ); 
            const PanelComp = () =>(
                <Panel header='Bap Layers' style={{position:'absolute',right:'30px', width:'30%', top:'0px',Index:'20',display:'box'}} >
                  <Panel header={<AbdBaseMapSwitch/>} style={{marginTop:'0em'}}  toggleable={true}>
                    <p>this is para</p>
                </Panel>
                <Panel header='Reference Data' style={{marginTop:'0em'}}  toggleable={true}>
                <Panel header='Layers' style={{marginTop:'0em'}} >
                    <div className='container'>
                        <div className="row">
                             <div className="col-md-10" >
                             <label for="Plots" >Plots</label>
                             </div>
                             <div className="col-md-2">
                             <PlotsSwitch/>
                             </div>
                        </div>
                        <div className="row">
                             <div className="col-md-10">
                             <label id="Project">Project Area</label>
                             </div>
                             <div className="col-md-2">
                             <ProjectSwitch/>
                             </div>
                        </div>
                    </div>
                   
                </Panel>
                </Panel>
                </Panel>
            ); 
        return (
            <div>
               {/* <MapInputSwitch/>  */}
               <PanelComp/>
            </div>
        )
    }
}