import React, {Component} from 'react';
import {TabView,TabPanel} from 'primereact/tabview';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import 'primeicons/primeicons.css';
import hydmap from '../images/hyderabad.PNG'

const HydLoc = () =>(
    <div>
      <img src={hydmap} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}  alt="Settled Place"/>
    </div>
    ); 
export default class TabMapViewer extends Component {

    constructor(props) {
        super(props)
        this.state = {
             activeIndex:0
        }
    }

    render() {
        return (
            <div>
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
                    <TabPanel header="BAP MAp Viewer">
                    <Toolbar>
                    <div className="p-toolbar-group-left">
                        <i className="pi pi-bars p-toolbar-separator" style={{marginRight:'.25em'}} />
                        <Button icon="pi pi-user-edit" style={{marginRight:'.25em'}} />
                        <Button  icon="pi pi-search-plus" style={{marginRight:'.25em'}} />
                        <Button  icon="pi pi-search-minus" style={{marginRight:'.25em'}} />
                        <Button icon="pi pi-globe" style={{marginRight:'.25em'}} />
                        <Button icon="pi pi-info" style={{marginRight:'.25em'}}/>
                        <Button icon="pi pi-question-circle" style={{marginRight:'.25em'}} />
                    </div>
                    </Toolbar>
                    <HydLoc/>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}