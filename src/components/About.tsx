import Image from "next/image";

import styles from "@/styles/about.module.scss";
import CheckInView from "@/utils/CheckInView";
import { HeaderMenu } from "@/models/header";

function About() {
  const aboutImg = "/img/aboutImg.png";
  return (
    <>
      <section id="about" className={styles["about-container"]}>
        <div className={styles["left-content"]}>
          <Image alt="about-img" fill={true} src={aboutImg} quality={100} />
        </div>
        <div className={styles["right-content"]}>
          <h1 className={styles["content-header"]}>
            <span>About</span> Us
          </h1>
          <p className={styles["content-description"]}>
            VENTURA Transport adalah perusahaan yang bergerak dibidang jasa sewa
            kendaraan pribadi maupun bus di Yogyakarta dan berbagai kota besar
            lainnya.Kami akan melayani berbagai kebutuhan anda di bidang
            trasportasi baik untuk kebutuhan Pribadi, Oprasional KNtor, Tau VIP
            dn Tour Wisata. Dengan aman, nyaman dan nilai lebih untuk anda.
          </p>
          {/* <button>See more</button> */}
        </div>
      </section>
      <CheckInView menuName={HeaderMenu.About} />
    </>
  );
}

export default About;
