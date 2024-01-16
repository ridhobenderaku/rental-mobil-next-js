import Image from "next/image";

import styles from "@/styles/service.module.scss";
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

function Service() {
  const paket1 = "/img/service/Paket 1.png";
  const paket2 = "/img/service/Paket 2.png";
  const paket3 = "/img/service/Paket 3.png";
  const paket4 = "/img/service/Paket 4.png";
  const paket5 = "/img/service/Paket 5.png";
  const paket6 = "/img/service/Paket 6.png";
  const paket7 = "/img/service/Paket 7.png";
  const paket8 = "/img/service/Paket 8.png";
  const paket9 = "/img/service/Paket 9.png";
  const paket10 = "/img/service/Paket 10.png";

  return (
    <section id="Unit" className={styles["container"]}>
      <div className={styles["Unit-container"]}>
        <div className={styles["left-content"]}>
          <h3 className={styles["content-title"]}>
            Our <span> Trip</span>
          </h3>
        </div>
        <div className={styles["wrapper"]}>
          <BoxIcon description="" imgURL={paket1} />
          <BoxIcon description="" imgURL={paket2} />
          <BoxIcon description="" imgURL={paket3} />
          <BoxIcon description="" imgURL={paket4} />
          <BoxIcon description="" imgURL={paket5} />
          <BoxIcon description="" imgURL={paket6} />
          <BoxIcon description="" imgURL={paket7} />
          <BoxIcon description="" imgURL={paket8} />
          <BoxIcon description="" imgURL={paket9} />
          <BoxIcon description="" imgURL={paket10} />
        </div>
        <CheckInView menuName={HeaderMenu.Unit} />
      </div>
    </section>
  );
}

export default Service;
