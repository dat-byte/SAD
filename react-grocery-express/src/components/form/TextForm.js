import React, { useState } from "react";
import Form from "./Form";
import FormData from "./FormData";
import Dropdown from "../dropdown/Dropdown";

const TextForm = ({ title, objectKey, onSubmit }) => {
  const [values, setValues] = useState(FormData[objectKey].formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
