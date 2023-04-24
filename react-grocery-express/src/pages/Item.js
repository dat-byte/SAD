import React, { useState } from 'react'
import DisplayList from '../components/display/DisplayList'

export const DisplayItem = () => {
  const [items, setItems] = useState(['David', 'Trimino', 'was', 'here', 'at o', 'house'])
  const onDelete = (e) => {
    // TODO: send customer to server to finalize deletion
    console.log(items[e])
  } 

  return (
    <DisplayList title={'Display Items'} items={items} setItems={setItems} editPath={'/items/edit-item'} deleteEndpoint={'item/delete/'} onDelete={onDelete}/>
  )
}

export default DisplayItem;

