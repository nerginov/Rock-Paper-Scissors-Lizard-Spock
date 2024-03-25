import rulesImg from "../assets/image-rules.svg";
import styles from "./Rules.module.scss";
import closeBtn from "../assets/icon-close.svg";
const Rules = ({ toggleModal }) => {
  return (
    <div className={styles["rules-modal"]} aria-modal="true">
      <h1>Winning Combinations</h1>
      <img
        src={rulesImg}
        alt="Winning combinations: Rock crushes Scissors, Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock."
      />
      <button onClick={() => toggleModal()} aria-label="Close rules modal">
        <img src={closeBtn} alt="Close" />
      </button>
    </div>
  );
};
export default Rules;
