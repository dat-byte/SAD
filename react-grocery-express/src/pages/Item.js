import React, { useState } from 'react'
import DisplayList from '../components/display/DisplayList'
import useGetRequest from "../components/api/useGetRequest";

export const DisplayItem = () => {
  const [items, setItems] = useState([]);
  
  const onDelete = (e) => {
    console.log(e)
    fetch(`/item/delete/${e.item_name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(items),
    }).then((response) => {
      response.ok ? console.log(response.json()) : console.log(response);
    });
  }; 

  const [storeID, setStore] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/item/get-items/${storeID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }
    }).then((response) => {
        console.log(response)
        setItems(response)
    });
    alert(`The store you entered was: ${storeID}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Enter store ID:
        <input 
          type="text" 
          value={storeID}
          onChange={(e) => setStore(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
      {items && (
        <DisplayList
          title={"Display Items"}
          objectKey={"item_name"}
          items={items}
          setItems={setItems}
          editPath={"/items/edit-item"}
          onDelete={onDelete}
        />
      )}
    </div>
  )
}

export default DisplayItem;

