import styles from "./Choices.module.scss";
import pentagon from "../assets/bg-pentagon.svg";
import Choice from "./Choice";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import lizard from "../assets/icon-lizard.svg";
import spock from "../assets/icon-spock.svg";
import scissors from "../assets/icon-scissors.svg";

const Choices = ({ handleUserChoice }) => {
  return (
    <div className={styles.choices} role="group" aria-label="Choices">
      <img src={pentagon} alt="" className={styles["choices-pentagon"]} />
      <Choice
        toss="rock"
        stage="initial"
        img={rock}
        handleUserChoice={handleUserChoice}
        ariaLabel="rock"
      />
      <Choice
        toss="paper"
        stage="initial"
        img={paper}
        handleUserChoice={handleUserChoice}
        ariaLabel="paper"
      />
      <Choice
        toss="scissors"
        stage="initial"
        img={scissors}
        handleUserChoice={handleUserChoice}
        ariaLabel="scissors"
      />
      <Choice
        toss="spock"
        stage="initial"
        img={spock}
        handleUserChoice={handleUserChoice}
        ariaLabel="spock"
      />
      <Choice
        toss="lizard"
        stage="initial"
        img={lizard}
        handleUserChoice={handleUserChoice}
        ariaLabel="lizard"
      />
    </div>
  );
};

export default Choices;
