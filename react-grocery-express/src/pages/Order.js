import React, { useState } from "react";
import DisplayList from "../components/display/DisplayList";
import SubmitID from "../components/form/SubmitID";
import PostRequest from "../components/api/PostRequest";

export const DisplayOrder = () => {
  const [storeID, setStore] = useState("");
  const [items, setItems] = useState([]);

  const onDelete = (e) => {
    PostRequest(
      "item/delete",
      { ...items, store_id: storeID },
      null,
      "Deleted order",
      null
    );
  };
  return (
    <div>
      <SubmitID
        keyIdName={"store_id"}
        setData={setItems}
        endPoint={"order/get-orders"}
        setId={setStore}
      />
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
  );
};

export default DisplayOrder;
