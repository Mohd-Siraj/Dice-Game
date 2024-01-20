import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices1.png" alt="dice img" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play now</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Container = styled.div`
  max-width: 1182px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  top: 180px;
  left: 129px;
  gap: 5px;
  .content {
    h1 {
      font-size: 96px;
      font-weight: 700;
      width: 528px;
    }
  }
  img {
    width: 649px;
    height: 522px;
  }
`;

