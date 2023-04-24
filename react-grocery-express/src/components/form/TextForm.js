import React, { useState } from "react";
import Form from "./Form";
import FormData from "./FormData";
import Dropdown from "../dropdown/Dropdown";
import { useLocation } from "react-router-dom";

const TextForm = ({ title, objectKey, onSubmit }) => {
  const { state } = useLocation();
  const [values, setValues] = useState(
    state ? state : FormData[objectKey].formData
  );

  const handleSubmit = (e) => {
    console.log(values);
    fetch(`/customer/delete/${e.account_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      response.ok ? console.log(response.json()) : console.log(response);
    });
    alert("Saved Info");
  };

  const handleFormChange = (e) => {
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
          return item.includes("Select") ? (
            <Dropdown
              key={index}
              placeholder={item}
              name={FormData[objectKey].input[index]}
              selectedOption={values[FormData[objectKey].input[index]]}
              setSelectedOption={handleDropSelect}
            />
          ) : (
            <Form
              placeholder={item}
              key={index}
              name={FormData[objectKey].input[index]}
              onChange={handleFormChange}
              value={state ? values[FormData[objectKey].input[index]] : ""}
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
