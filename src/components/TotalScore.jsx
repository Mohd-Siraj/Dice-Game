import styled from "styled-components";

import NumberSelector from "./NumberSelector";



function TotalScore({score}) {
  return (
    <div className="cont"><StoredContainer>
          <h1>{score}</h1>
          <p>Total Score</p>
      </StoredContainer></div>
  );
}

export default TotalScore;

const StoredContainer = styled.div`
max-width: 138px;
/* background-color: red; */
text-align: center;
h1{
font-size: 100px;
font-weight: 500;
/* width: 62px; */
height: 112px;
text-align: center;

}
p{
    font-size: 24px;
    font-weight: 500;
    width: 135px;
height: 36px;
}
.cont{
    display: flex;
    /* flex-basis: auto; */
    margin-right: 280px;
    font-size: 20px;
  }
  div.cont{
  margin-right: 280px;

}
`;
