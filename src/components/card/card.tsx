import styles from "./Card.module.scss";
import { useEffect, useRef, useState } from "react";
import BreakingBadApi from "../../services/BreakingBadApi";
import { Character } from "../../interfaces/character.interface";
import Modal from "../modal/modal";

interface ComponentProps {
  character: Character;
}

const Card: React.FC<ComponentProps> = ({ character }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeCharacter, setActiveCharacter] = useState<Character>(null);

  useEffect(() => {
    (async () => {
      const results = await BreakingBadApi.getListCharacters();
      setCharacters(results);
    })();
  }, []);

  return (
    <>
      <div className={styles["full__card__list"]}>
        {characters &&
          characters.map((chr: Character) => (
            <div
              className={styles["full__card"]}
              key={chr.char_id}
              onClick={() => setActiveCharacter(chr)}
            >
              <strong className={styles["numerical__order"]}>
                {chr.char_id}
              </strong>
              <div className={styles["symbol"]}>
                <h1 className={styles["symbol__name"]}>
                  {chr.name.substr(0, 2)}
                </h1>
                <span className={styles["subtitle__symbol__name"]}>
                  {chr.name}
                </span>
              </div>
              <strong className={styles["character__name"]}>
                {chr.nickname}
              </strong>
            </div>
          ))}
        {activeCharacter && (
          <Modal
            key={"modal"}
            character={activeCharacter}
            setCharacter={setActiveCharacter}
          />
        )}
      </div>
    </>
  );
};
export default Card;
