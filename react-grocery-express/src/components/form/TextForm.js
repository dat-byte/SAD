import React, { useState } from "react";
import Form from "./Form";
import FormData from "./FormData";
import PostRequest from '../api/PostRequest';
import { useLocation, useNavigate } from "react-router-dom";

const TextForm = ({ title, controller, objectKey, onSubmit }) => {
  const { state } = useLocation();
  const navigate = useNavigate()
  const [values, setValues] = useState(
    state ? state : FormData[objectKey].formData
  );

  const handleSubmit = (e) => {
  var endPoint = title.includes('Add') ? `/${controller}/make` : `/${controller}/edit`
    if (title === "Add Items to Order")
      endPoint= '/order/request'
    
    if (title === "Transfer Order")
      endPoint = '/order/transfer_order'
    
    if (title === "Purchase Order")
      endPoint = '/order/purchase'

    console.log(`End Point for ${title}: ${endPoint}`)
    PostRequest(endPoint, values, navigate, "Saved Info")
  };

  const handleFormChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className="home">
      <div className="forms">
        <h2 className="title">{title}</h2>
        {FormData[objectKey].placeholder.map((item, index) => {
          return (
            <Form
              placeholder={item}
              key={index}
              name={FormData[objectKey].input[index]}
              onChange={handleFormChange}
              value={values[FormData[objectKey].input[index]]}
              title={title}
            />
          );
        })}
        <button onClick={handleSubmit} className="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default TextForm;
