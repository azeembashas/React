import React from 'react'
import { FixedSizeList as List } from 'react-window';

export const MapLocation = props =>{
  return <List
          className="List"
          height={300}
          itemCount={1}
          itemSize={50}
          width={800}
        >
          {props.img}
        </List>
}

