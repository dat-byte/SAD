import React, { useState } from 'react'
import DisplayList from '../components/display/DisplayList'

export const DisplayOrder = () => {
  const [items, setItems] = useState(['David', 'Trimino', 'was', 'here', 'at o', 'house'])
  const onDelete = (e) => {
    // TODO: send customer to server to finalize deletion
    console.log(items[e])
  } 

  return (
    <DisplayList title={'Display Order'} items={items} setItems={setItems} editPath={'/orders/edit-order'} deleteEndpoint={'order/delete/'} onDelete={onDelete}/>
  )
}

export default DisplayOrder;

