import React, { useState } from "react";
import DisplayList from "../components/display/DisplayList";
import DroneSumbitID from "../components/form/DroneSubmitID";
import PostRequest from "../components/api/PostRequest";

export const DisplayDrone = () => {
  const [storeID, setStore] = useState("");
  const [items, setItems] = useState([]);

  const onDelete = (drone, index) => {
    console.log(drone)
    PostRequest(
      "drone/delete",
      { ...drone, store_id: storeID },
      null,
      "Deleting drone..",
      null
    );
  };
  return (
    <div>
      <DroneSumbitID
        keyIdName={"store_id"}
        setData={setItems}
        setId={setStore}
      />
      {items && (
        <DisplayList
          title={"Display Drones"}
          objectKey={"drone_id"}
          items={items}
          setItems={setItems}
          editPath={"/drones/edit-drone"}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default DisplayDrone;
