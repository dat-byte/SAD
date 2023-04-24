import React, { useState } from "react";
import DisplayList from "../components/display/DisplayList";
import useGetRequest from "../components/api/useGetRequest";


export const DisplayCustomer = () => {
  const [items, setItems] = useState([]);
  useGetRequest('customer/customers', setItems)
  
  const onDelete = (e) => {
    console.log(e)
    fetch(`/customer/delete/${e.account_id}`, {
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
          title={"Display Customers"}
          objectKey={"account_id"}
          items={items}
          setItems={setItems}
          editPath={"/customers/edit-customer"}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default DisplayCustomer;
