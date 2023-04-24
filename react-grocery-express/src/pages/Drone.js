import React, { useState } from 'react'
import DisplayList from '../components/display/DisplayList'

export const DisplayDrone = () => {
  const [items, setItems] = useState(['David', 'Trimino', 'was', 'here', 'at o', 'house'])
  const onDelete = (e) => {
    // TODO: send customer to server to finalize deletion
    console.log(items[e])
  } 

  return (
    <DisplayList title={'Display Drones'} items={items} setItems={setItems} editPath={'/drones/edit-drone'} deleteEndpoint={'customers/delete/'} onDelete={onDelete}/>
  )
}

export default DisplayDrone;

