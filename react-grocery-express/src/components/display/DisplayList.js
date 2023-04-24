import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DisplayContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const DisplayUlContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  width: 70%;
  overflow-x: auto;
`;

const DisplayListItem = styled.li`
  background-color: white;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 10px;
  width: 80%;
  &:hover {
    background: #f4f4f4;
    cursor: pointer;
  }
`;

const DisplayListItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DisplayList = ({
  title,
  items,
  objectKey,
  setItems,
  editPath,
  onDelete,
}) => {
  const navigate = useNavigate();
  
  const handleOnDeleteClick = (index) => {
    alert(`Removed item: ${index}`);
    setItems(items.filter((item, idx) => idx !== index));
    onDelete(index);
  };

  console.log(items)
  return (
    <DisplayContainer>
      <h2>{title}</h2>
      <DisplayUlContainer>
        { items && items.map((item, index) => {
          return (
            <DisplayListItemContainer key={index}>
              <DisplayListItem key={index}>{item[objectKey]}</DisplayListItem>
              <AiIcons.AiFillDelete
                onClick={() => {
                  handleOnDeleteClick(item);
                }}
              />
              <AiIcons.AiFillEdit
                onClick={() => {
                  navigate(editPath, {state: item });
                }}
              />
            </DisplayListItemContainer>
          );
        })}
      </DisplayUlContainer>
    </DisplayContainer>
  );
};

export default DisplayList;
