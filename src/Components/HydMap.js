import React from 'react'
import map from '../images/hyderabad.PNG'
import { FixedSizeList as List } from 'react-window';

    const Map = () =>(
      <div>
        <img src={map} alt="Settled Place" />
      </div>
      ); 
 
   export const HydMap = () =>
    <List
    className="List"
    height={250}
    itemCount={1}
    itemSize={50}
    width={800}
  >
    {Map}
  </List>
