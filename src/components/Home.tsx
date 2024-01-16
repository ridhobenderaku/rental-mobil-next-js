import Image from "next/image";
import styles from "@/styles/home.module.scss";
import CheckInView from "@/utils/CheckInView";
import { HeaderMenu } from "@/models/header";
import Link from "next/link";

function Home() {
  const image = "/img/slider/1.jpg";

  return (
    <section id="home" className={styles["container"]}>
      <CheckInView menuName={HeaderMenu.Home} />
      <div className={styles["home-container"]}>
        <div className={styles["content-wrapper"]}>
          <h1 className={styles["content-heading"]}>
            Your <span>Transportation Solution!</span>
          </h1>
          <p className={styles["content-description"]}>
            Semangat kami dalam menyediakan jasa Transportasi untuk Anda. kami
            yakin menjamin kenyamanan dan keselamatan anda saat berkendara
            selamat sampai tujuan.
          </p>
          <div className={styles["content-box-wrapper"]}>
            <Link href="#contact" className={styles["content-btn"]}>
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["content-background"]}>
        <Image src={image} fill={true} sizes="100vw" alt={image} />
      </div>
    </section>
  );
}

export default Home;
