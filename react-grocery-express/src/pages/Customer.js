import React, { useState } from 'react'
import Dropdown from '../components/dropdown/Dropdown';

export const DisplayCustomer = () => {
  const [selected, setSelected] = useState("Cock")
  
  return (
    <div>
      {/* <h1>Display Customers</h1> */}
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default DisplayCustomer;