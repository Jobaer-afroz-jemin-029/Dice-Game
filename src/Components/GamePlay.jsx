import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "./Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(2);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };
  const resetScore = () => {
    setScore(0);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber();
    setCurrentDice(() => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>

        <Button onClick={() => setShowRules((prev) => !prev)}>
          {" "}
          {showRules ? "Hide " : "Show "}
          Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 50px 100px 0px 100px;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
