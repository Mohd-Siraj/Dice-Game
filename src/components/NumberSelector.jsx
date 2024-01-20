import { useState } from "react";

import styled from "styled-components";

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("")
  };

  // const [selectedNumber, setSelectedNumber] = useState();
  // console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => {
          return (
            <Box
            key={i}
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  );
};
export default NumberSelector;

const NumberSelectorContainer = styled.div`
  /* float: right; */
  .flex {
    /* padding: 70px 0px 0px 0px; */
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    /* width: 182px; */
    /* position: absolute; */
    /* top: 10px; */
    height: 36px;
    /* float: right; */
    padding: 10px 0px;
  }
  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  /* background-color: black; */
  /* color: white; */
  border: 1px solid black;
  font-size: 24px;
  font-weight: 700;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  gap: 24px;
`;
