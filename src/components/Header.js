import styles from "../components/Header.module.scss";
import { useState, useEffect } from "react";

const Header = ({ score }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  // useEffect to handle animation of the score
  useEffect(() => {
    setIsAnimated(true);

    const timeout = setTimeout(() => {
      setIsAnimated(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timeout);
  }, [score]);

  return (
    <header className={styles.header}>
      <h1>
        Rock <br /> Paper <br /> Scissors <br /> Lizard <br /> Spock
      </h1>
      <div
        className={styles["header__score-container"]}
        aria-label="Game Score"
      >
        <p aria-label="Current Score">
          <span>SCORE</span>{" "}
          <span
            className={isAnimated ? styles.animated : ""}
            aria-live="polite"
          >
            {score}
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
