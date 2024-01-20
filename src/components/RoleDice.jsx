// import { useState } from "react";
import styled from "styled-components";
// import audio from "/dice_sound.mp3"
import useSound from "use-sound";
import boopSfx from "../dice_sound.mp3";

const RoleDice = ({ currentDice, roleDice }) => {

 const [play] = useSound(boopSfx);
  
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="" onClick={play} />
      </div>
      <p>Click on Dice to role</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 250px; */
  height: 449px;

  img {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 180px;
    right: 572px;
  }
`;
