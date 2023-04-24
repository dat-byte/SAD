import React, { useState } from 'react'
import DisplayList from '../components/display/DisplayList'

export const DisplayStore = () => {
  const [items, setItems] = useState(['David', 'Trimino', 'was', 'here', 'at o', 'house'])
  const onDelete = (e) => {
    // TODO: send customer to server to finalize deletion
    console.log(items[e])
  } 

  return (
    <DisplayList title={'Display Stores'} items={items} setItems={setItems} editPath={'/stores/edit-store'} deleteEndpoint={'store/delete/'} onDelete={onDelete}/>
  )
}

export default DisplayStore;

