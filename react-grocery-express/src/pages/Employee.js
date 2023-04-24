import React, { useState } from 'react'
import DisplayList from '../components/display/DisplayList'

export const DisplayEmployee = () => {
  const [items, setItems] = useState(['David', 'Trimino', 'was', 'here', 'at o', 'house'])
  const onDelete = (e) => {
    // TODO: send customer to server to finalize deletion
    console.log(items[e])
  } 

  return (
    <DisplayList title={'Display Employees'} items={items} setItems={setItems} editPath={'/employees/edit-employee'} deleteEndpoint={'employee/delete/'} onDelete={onDelete}/>
  )
}

export default DisplayEmployee;

