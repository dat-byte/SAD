import React, { useState } from "react";
import DisplayList from "../components/display/DisplayList";
import useGetRequest from "../components/api/useGetRequest";

export const DisplayDrone = () => {
  const [items, setItems] = useState([]);
  useGetRequest("drone/drones", setItems);

  const onDelete = (e) => {
    console.log(e);
    fetch(`/drone/delete/${e.drone_id}`, {
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
