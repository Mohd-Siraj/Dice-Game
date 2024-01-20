import styled from "styled-components"

export const Button = styled.button`
  min-width: 220px;
  /* height: Hug (44px); */
  padding: 10px 30px;
  border-radius: 5px;
  gap: 10px;
  border: none;
  background-color: black;
  color: white;
  float: right;
  font-size: 16px;
  border: 1px solid transparent;
  &:hover {
    color: black;
    background-color: white;
border: 1px solid black;
cursor: pointer;
  }
  `