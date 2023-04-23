import React, { useState } from "react";
import "./DropdownMenu.css";
import * as RiIcons from "react-icons/ri";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  width: 80%;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  border: solid 1px black;
  font-weight: 500;
  font-size: 1.3rem;
  color: #000;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #000;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;

  &:hover {
    background: #f4f4f4;
    cursor: pointer;
  }
`;

const DropdownMenu = ({ placeholder, name, selectedOption, setSelectedOption, dropDownOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value, name);
    setIsOpen(false);
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="info-form">
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || placeholder}
          <RiIcons.RiArrowDownSFill />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option, index) => (
                <ListItem onClick={onOptionClicked(option)} key={index}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </div>
  );
};

export default DropdownMenu;
