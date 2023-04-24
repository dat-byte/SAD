import React from "react";

const UsePostRequest = (data, apiEndpoint) => {
  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    response.ok ? response.json() : console.log(response);
  });
};

export default UsePostRequest;
