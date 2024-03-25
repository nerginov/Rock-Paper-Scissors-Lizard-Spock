import styles from "./Result.module.scss";
import Choice from "./Choice";
import rockImg from "../assets/icon-rock.svg";
import paperImg from "../assets/icon-paper.svg";
import lizardImg from "../assets/icon-lizard.svg";
import spockImg from "../assets/icon-spock.svg";
import scissorsImg from "../assets/icon-scissors.svg";
import { useState, useEffect } from "react";

const Result = ({ userChoice, handlePlayAgain, handleScoreUpdate }) => {
  // Define winning combinations for the game
  const winningCombinations = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  // Object mapping choice names to image paths
  const choiceImages = {
    rock: rockImg,
    paper: paperImg,
    scissors: scissorsImg,
    lizard: lizardImg,
    spock: spockImg,
  };

  // State variables
  const [isWinner, setIsWinner] = useState();
  const [houseChoice, setHouseChoice] = useState("");
  const [showPreview, setShowPreview] = useState(true); // State to control the visibility of the house's choice preview

  // Effect to set up the initial house's choice and hide the preview after 2 seconds
  useEffect(() => {
    const randomChoice = getRandomHouseChoice();
    setHouseChoice(randomChoice);
    setTimeout(() => {
      setShowPreview(false);
    }, 2000);
  }, []);

  // Effect to determine the winner based on the user's and house's choices
  useEffect(() => {
    //executes only if the houseChoice is made
    if (houseChoice && !showPreview) {
      if (userChoice === houseChoice) {
        setIsWinner("draw");
      } else if (winningCombinations[userChoice].includes(houseChoice)) {
        setIsWinner("user");
        handleScoreUpdate("user");
      } else {
        setIsWinner("house");
        handleScoreUpdate("house");
      }
    }
  }, [houseChoice, userChoice, showPreview]);

  // Function to randomly select a choice for the house
  function getRandomHouseChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  return (
    <div className={styles.result}>
      <div className={styles["result__choices"]}>
        <div className={styles["result__choices__user-container"]}>
          <Choice
            toss={userChoice}
            stage="result"
            img={choiceImages[userChoice]}
            winner={isWinner === "user" ? "winner" : ""}
            nonClickable={true}
            ariaLabel={`User choice: ${userChoice}`}
          ></Choice>
          <p>Your Picked</p>
        </div>
        <div className={styles["result__choices__house-container"]}>
          {showPreview && <div className={styles.preview}></div>}
          {!showPreview && (
            <>
              <Choice
                toss={houseChoice}
                stage="result"
                img={choiceImages[houseChoice]}
                winner={isWinner === "house" ? "winner" : ""}
                nonClickable={true}
                ariaLabel={`House choice: ${houseChoice}`}
              ></Choice>
              <p>The House Picked</p>
            </>
          )}
        </div>
      </div>
      <div className={styles["result__announcement-container"]}>
        <h2>
          {isWinner === "user"
            ? "YOU WIN"
            : isWinner === "house"
            ? "LOSE"
            : isWinner === "draw"
            ? "DRAW"
            : ""}
        </h2>
        {isWinner && (
          <button
            className={styles["result__announcement-container__button"]}
            onClick={() => {
              handlePlayAgain();
            }}
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};
export default Result;
