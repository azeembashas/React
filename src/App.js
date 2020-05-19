import React, { Component } from 'react';
import MapInputSwitch from './Components/MapInputSwitch';
import { PanelDemo } from './Components/PanelDemo';
import BapInformation from './Components/BapInformation';
import TabMapViewer from './Components/TabMapViewer';
 
class App extends Component {
  render() {
    return (
      <div>
        {/* <MapInputSwitch /> */}
        {/* <PanelDemo/> */}
        <BapInformation/>
        <TabMapViewer/>
      </div>
    );
  }
}
 
export default App;