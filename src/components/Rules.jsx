import styled from "styled-components";

const Rules = () => {
    return (
      <Rule>
        <h2>How to play dice game ?</h2>
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        <p>
          After click on dice, if selected number is equal to dice number you
          will get same point as dice.
        </p>
        <p>If you get wrong guess then 2 point will be dedcuted.</p>
      </Rule>
    );
}
export default Rules

const Rule = styled.div`
  background-color: yellow;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`