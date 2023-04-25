import React, { useState } from "react";
import DisplayList from "../components/display/DisplayList";
import PostRequest from "../components/api/PostRequest";
import SubmitID from "../components/form/SubmitID";

export const DisplayItem = () => {
  const [items, setItems] = useState([]);
  const [storeID, setStore] = useState("");

  const onDelete = (item, index) => {
    // notifying of the deletion
    PostRequest(
      "item/delete",
      { ...item, store_id: storeID },
      null,
      "Deleted item",
      null
    );
  };

  return (
    <div>
      <SubmitID
        keyIdName={"store_id"}
        setData={setItems}
        endPoint={"item/get-items"}
        setId={setStore}
      />
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
  );
};

export default DisplayItem;
