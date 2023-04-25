import React, { useState } from "react";
import PostRequest from '../api/PostRequest';

const SubmitID = ({keyIdName, setData, setId, endPoint}) => {
  const [thingID, setThings] = useState("");

  const handleSumbitStoreId = (e) => {
    e.preventDefault();
    setId(thingID)
    console.log(`Submit for id: ${thingID}`);
    PostRequest(
      endPoint,
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
        <input type="submit" />
      </form>
    </div>
  );
};

export default SubmitID;
