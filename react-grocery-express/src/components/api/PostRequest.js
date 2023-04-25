const PostRequest = (apiEndPoint, data, navigate, message, handleData) => {
  fetch(apiEndPoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      jsonResponse
        ? handleData
          ? handleData(jsonResponse)
          : console.log("Handle data is null")
        : console.log(jsonResponse);
    })
    .catch((e) => {
      console.log(e);
    });
  alert(message);
  if (navigate) navigate("/");
};

export default PostRequest;
