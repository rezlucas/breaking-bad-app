import styles from "./Modal.module.scss";
import { useEffect, useState } from "react";
import BreakingBadApi from "../../services/BreakingBadApi";
import { Character } from "../../interfaces/character.interface";
import Image from "next/image";

interface ComponentProps {
  character: Character;
  setCharacter: (value: Character | null) => void;
}

const Modal: React.FC<ComponentProps> = ({ character, setCharacter }) => {
  return (
    <div className={styles["modal__wrapper"]}>
      <div className={styles["full__card__overview"]}>
        <img className={styles["img__character"]} src={character.img} />
        <div className={styles["info__overview"]}>
          <div className={styles["header"]}>
            <Image src="/trailer-car.svg" alt="" width={100} height={50} />
            <div className={styles["character__name"]}>{character.name}</div>
            <button
              className={styles["close__modal"]}
              onClick={() => setCharacter(null)}
            >
              <Image src="/close-modal.svg" alt="" width={100} height={100} />
            </button>
          </div>
          <div className={styles["subtitle__info"]}>
            <div className={styles["characteristics__title"]}>
              <Image src="/nickname.svg" alt="" width={20} height={20} />
              <span>{character.nickname}</span>
            </div>
            <div className={styles["characteristics__title"]}>
              <Image src="/portrayed.svg" alt="" width={20} height={20} />
              <span>{character.portrayed}</span>
            </div>
          </div>

          <div className={styles["middle__informations"]}>
            <span className={styles["informations__value"]}>
              <strong>Occupation: </strong>
              {character.occupation.join(", ")}
            </span>
            <span className={styles["informations__value"]}>
              <strong>Birthday: </strong>
              {character.birthday}
            </span>
            <span className={styles["informations__value"]}>
              <strong>Status: </strong>
              {character.status}
            </span>
          </div>

          <div className={styles["cactus__images"]}>
            <Image src="/cactus-1.svg" alt="" width={50} height={50} />
            <Image src="/cactus-2.svg" alt="" width={50} height={50} />
            <Image src="/cactus-3.svg" alt="" width={50} height={50} />
            <Image src="/cactus-4.svg" alt="" width={50} height={50} />
            <Image src="/cactus-2.svg" alt="" width={50} height={50} />
            <Image src="/cactus-1.svg" alt="" width={50} height={50} />
          </div>
          <strong className={styles["episode__appearances"]}>
            <strong>Participated in the episodes of the seasons:</strong>
            <span className={styles["result__episode__appearances"]}>
              {character.appearance.join(", ")}
            </span>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Modal;
