import React, { useState } from 'react'
import DisplayList from '../components/display/DisplayList'
import useGetRequest from "../components/api/useGetRequest";

export const DisplayEmployee = () => {
  const [items, setItems] = useState([]);
  useGetRequest('employee/employees', setItems)
  
  const onDelete = (e) => {
    console.log(e)
    fetch(`/employee/delete/${e.account_id}`, {
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
          title={"Display Employees"}
          objectKey={"account_id"}
          items={items}
          setItems={setItems}
          editPath={"/employee/edit-customer"}
          onDelete={onDelete}
        />
      )}
    </div>
  )
}

export default DisplayEmployee;

