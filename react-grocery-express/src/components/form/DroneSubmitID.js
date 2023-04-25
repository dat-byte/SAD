import React, { useState } from "react";
import PostRequest from '../api/PostRequest';

const DroneSumbitID = ({keyIdName, setData, setId}) => {
  const [thingID, setThings] = useState("");
  const [rfDrone, setrfDrone] = useState(false)

  const handleToggle = ({ target }) =>
    setrfDrone(s => ({ ...s, [target.name]: !s[target.name] }));

  const handleSumbitStoreId = (e) => {
    e.preventDefault();
    setId(thingID)
    console.log(`Submit for id: ${thingID}`);
    const apiEndPoint = rfDrone ? 'drone/get-rfdrone' : 'drone/get-drone'
    PostRequest(
      apiEndPoint,
      { [keyIdName]: thingID },
      null,
      "Retrieving items..",
      setData
    );
  };

  return (
    <div>
      <form onSubmit={handleSumbitStoreId} className="submitID">
        <label
          style={{
            marginLeft: "100px",
          }}
        >
          Enter store ID:
          <input
            type="text"
            value={thingID}
            onChange={(e) => setThings(e.target.value)}
            style={{
              marginLeft: "40px",
            }}
          />
        </label>
        <br />
        <input
          type="checkbox"
          onChange={(e) => handleToggle(e)}
        />
        <input type="submit" />
      </form>
      
    </div>
  );
};

export default DroneSumbitID;
