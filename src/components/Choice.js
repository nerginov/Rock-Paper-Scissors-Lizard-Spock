import styles from "./Choice.module.scss";

const Choice = ({
  toss,
  img,
  stage,
  handleUserChoice,
  winner,
  nonClickable,
  ariaLabel,
}) => {
  // Function to handle click event
  const tossValue = toss;
  const handleClick = () => {
    // Pass the selected toss to the handleUserChoice function
    handleUserChoice(toss);
  };

  // Function to handle key press event
  const handleKeyPress = (event, choice) => {
    // Check if the pressed key is Enter and the choice is clickable(preventing clicking on result stage)
    if (event.key === "Enter" && !nonClickable) {
      handleUserChoice(choice);
    }
  };

  return (
    <div
      role={!nonClickable ? "button" : ""}
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={handleClick}
      onKeyDown={(e) => handleKeyPress(e, tossValue)}
      className={`${styles.choice} ${
        toss === "rock"
          ? styles["choice--rock"]
          : toss === "spock"
          ? styles["choice--spock"]
          : toss === "scissors"
          ? styles["choice--scissors"]
          : toss === "lizard"
          ? styles["choice--lizard"]
          : toss === "paper"
          ? styles["choice--paper"]
          : ""
      } 
        ${
          stage === "initial"
            ? styles.initial
            : stage === "result"
            ? styles.result
            : ""
        }
        ${winner ? styles.winner : ""}
        ${nonClickable ? styles["non-clickable"] : ""}
      }`}
    >
      <span className={styles["choice__img-container"]}>
        <img src={img} alt="" />
      </span>
    </div>
  );
};

export default Choice;
