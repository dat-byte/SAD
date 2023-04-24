import React, { useState } from "react";
import Form from "./Form";
import FormData from "./FormData";
import Dropdown from "../dropdown/Dropdown";
import { useLocation, useNavigate } from "react-router-dom";

const TextForm = ({ title, controller, objectKey, onSubmit }) => {
  const { state } = useLocation();
  const navigate = useNavigate()
  const [values, setValues] = useState(
    state ? state : FormData[objectKey].formData
  );

  const handleSubmit = (e) => {
    const endPoint = title.includes('Add') ? 'make' : 'edit'
    fetch(`/${controller}/${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      response.ok ? console.log(response) : console.log(response);
    });
    alert("Saved Info");
    navigate('/')
  };

  const handleFormChange = (e) => {
    console.log(e.target.name)
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleDropSelect = (option, name) => {
    setValues({ ...values, [name]: option });
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
