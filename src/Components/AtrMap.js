import React from 'react'
import map from '../images/atmakur.PNG'
import { FixedSizeList as List } from 'react-window';

    const Map = () =>(
      <div>
        <img src={map} alt="Native Place" />
      </div>
      ); 
 
   export const AtrMap = () =>
    <List
    className="List"
    height={250}
    itemCount={1}
    itemSize={50}
    width={800}
  >
    {Map}
  </List>
