import styles from "./App.module.scss";
import Header from "./components/Header";
import Choices from "./components/Choices";
import Rules from "./components/Rules";
import Result from "./components/Result";
import { React, useEffect, useState } from "react";

function App() {
  // State variables
  const [isChoicesActive, setIsChoicesActive] = useState(true);
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the rules modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // Function to handle user's choice
  const handleUserChoice = (toss, e) => {
    setUserChoice(toss);
    setIsChoicesActive(false);
  };
  // Function to handle play again button
  const handlePlayAgain = () => {
    setIsChoicesActive(true);
  };
  // Function to update the score based on the result
  const handleScoreUpdate = (result) => {
    setScore((prevScore) => {
      if (result == "user") {
        return prevScore + 1; // if user wins
      } else if (result == "house") {
        return prevScore - 1; // if house wins
      } else {
        return prevScore; // if it's a draw
      }
    });
  };

  return (
    <>
      <div className={styles.app}>
        <Header score={score} />
        {/* Render the Result component if the user has made their choice, 
    otherwise render the initial Choices component for the user to make a selection */}
        {!isChoicesActive ? (
          <Result
            userChoice={userChoice}
            handlePlayAgain={handlePlayAgain}
            handleScoreUpdate={handleScoreUpdate}
          />
        ) : (
          <Choices handleUserChoice={handleUserChoice} />
        )}
        {/* Button to toggle rules modal */}
        <button
          className={styles["rules-button"]}
          onClick={() => toggleModal()}
        >
          Rules
        </button>
      </div>
      {/* Render rules modal and backdrop if modal is open */}
      {isModalOpen && <Rules toggleModal={toggleModal} />}
      {isModalOpen && (
        <div
          className={styles.backdrop}
          onClick={() => {
            toggleModal();
          }}
        ></div>
      )}
    </>
  );
}

export default App;
