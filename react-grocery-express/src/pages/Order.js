import React, { useState } from 'react'
import DisplayList from '../components/display/DisplayList'
import useGetRequest from "../components/api/useGetRequest";


export const DisplayOrder = () => {
  const [items, setItems] = useState([]);
  useGetRequest('order/orders', setItems)
  
  const onDelete = (e) => {
    console.log(e)
    fetch(`/order/delete/${e.order_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(items),
    }).then((response) => {
      response.ok ? console.log(response.json()) : console.log(response);
    });
  };
  return (
    <div>
    {items && (
      <DisplayList
        title={"Display Orders"}
        objectKey={"order_id"}
        items={items}
        setItems={setItems}
        editPath={"/orders/edit-order"}
        onDelete={onDelete}
      />
    )}
  </div>
  )
}

export default DisplayOrder;

