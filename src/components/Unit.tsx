import Image from "next/image";

import styles from "@/styles/unit.module.scss";
import CheckInView from "@/utils/CheckInView";
import { HeaderMenu } from "@/models/header";

export function BoxIcon({
  description,
  imgURL,
}: {
  description: string;
  imgURL: string;
}) {
  return (
    <div className={styles["card-image"]}>
      <Image alt="Unit" src={imgURL} fill priority />
      <h1>{description}</h1>
    </div>
  );
}

function Unit() {
  const avanza = "/img/unit/Avanza Facelift.png";
  const avanzafwd = "/img/unit/Avanza FWD.png";
  const fortuner = "/img/unit/Fortuner.png";
  const hiace = "/img/unit/Hiace Commuter.png";
  const premio = "/img/unit/Hiace Premio.png";
  const reborn = "/img/unit/Innova Reborn.png";
  return (
    <section id="Unit" className={styles["container"]}>
      <div className={styles["Unit-container"]}>
        <div className={styles["left-content"]}>
          <h3 className={styles["content-title"]}>
            <span> Ventura Transport</span> Unit
          </h3>
        </div>
        <div className={styles["wrapper"]}>
          <BoxIcon description="" imgURL={avanza} />
          <BoxIcon description="" imgURL={avanzafwd} />
          <BoxIcon description="" imgURL={fortuner} />
          <BoxIcon description="" imgURL={reborn} />
          <BoxIcon description="" imgURL={premio} />
          <BoxIcon description="" imgURL={hiace} />
        </div>
        <CheckInView menuName={HeaderMenu.Unit} />
      </div>
    </section>
  );
}

export default Unit;
