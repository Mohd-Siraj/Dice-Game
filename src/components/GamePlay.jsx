import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { Button } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  // console.log("salam");

  const roleDice = () => {
    // <audio src="../audio/dice_sound.mp3"></audio>
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber();
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  // <>
  //   <button onClick={setScore(0)}>Reset Score</button>
  //   <button>Show Rules</button>
  // </>;

  return (
    <MainContainer>
      <div className="main-section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button onClick={() => setScore(0)}>Reset</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide rules" : " Show rules"}
        </Button>
      </div>
      <div>{showRules && <Rules />}</div>
    </MainContainer>
  );
}
export default GamePlay;

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  /* padding: 0px 0px; */
  .main-section {
    display: flex;
    width: 1280px;
    justify-content: space-around;
  }
  .btns {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    position: absolute;
    top: 480px;
    gap: 10px;
  }
`;
