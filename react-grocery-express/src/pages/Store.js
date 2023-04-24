import React, { useState } from 'react'
import DisplayList from '../components/display/DisplayList'
import useGetRequest from "../components/api/useGetRequest";


export const DisplayStore = () => {
  const [items, setItems] = useState([]);
  useGetRequest('store/stores', setItems)
  
  const onDelete = (e) => {
    console.log(e)
    fetch(`/store/delete/${e.store_id}`, {
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
        title={"Display Store"}
        objectKey={"store_id"}
        items={items}
        setItems={setItems}
        editPath={"/stores/edit-store"}
        onDelete={onDelete}
      />
    )}
  </div>
  )
}

export default DisplayStore;

