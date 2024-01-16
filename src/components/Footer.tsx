"use client";

import Image from "next/image";
import styles from "@/styles/footer.module.scss";

export default function Footer() {
  const logoImg = "/img/logoVentura.png";
  const mapImg = "/img/footer/map.png";
  const telephoneImg = "/img/footer/telephone.png";
  const telephone2Img = "/img/footer/telephone2.png";
  const messageImg = "/img/footer/message.png";
  const arrowUpmg = "/img/footer/arrowTop.png";
  const socialMedia = [
    {
      link: "https://www.instagram.com/",
      img: "/img/socialMedia/instagram.png",
    },
  ];

  const scrollToUpHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section id="footer" className={styles["container"]}>
      <div className={styles["footer-container"]}>
        <Image
          alt="logo"
          width={95}
          height={80}
          src={logoImg}
          quality={100}
          priority
        />
        <div className={styles["info-container"]}>
          <div className={styles["about"]}>
            <h1 className={styles["title"]}>Ventura Transport Jogja</h1>
            <h4 className={styles["slogan"]}>“Your Transportation Solution”</h4>
            <p className={styles["description"]}>
              Semangat kami dalam menyediakan jasa Transportasi untuk Anda. kami
              yakin menjamin kenyamanan dan keselamatan anda saat berkendara
              selamat sampai tujuan.
            </p>
          </div>
          <div className={styles["contact"]}>
            <h1 className={styles["content-title"]}>Contact Us</h1>
            <div className={styles["address"]}>
              <Image
                alt="map"
                src={mapImg}
                width={24}
                height={24}
                quality={100}
                priority
              />
              <a
                target="_blank"
                href="https://maps.app.goo.gl/5zMiZs8xkuDUcsHB6"
              >
                Jl. Monumen Jogja Kembali No.38, RW.49, Gemawang, Sinduadi, Kec.
                Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284
              </a>
            </div>
            <div className={styles["column-container"]}>
              <div className={styles["column-container"]}>
                <Image
                  alt="map"
                  src={telephone2Img}
                  width={24}
                  height={24}
                  quality={100}
                  priority
                />
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=6281915427371"
                >
                  -
                </a>
              </div>
              <div className={styles["column-container"]}>
                <Image
                  alt="map"
                  src={telephoneImg}
                  width={24}
                  height={24}
                  quality={100}
                  priority
                />
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=6281915427371"
                >
                  +62 819-1542-7371
                </a>
              </div>
            </div>
            <div className={styles["column-container"]}>
              <Image
                alt="map"
                src={messageImg}
                width={24}
                height={24}
                quality={100}
                priority
              />
              <a target="_blank" href="">
                -
              </a>
            </div>
          </div>

          <div className={styles["social-media-container"]}>
            <h1 className={styles["content-title"]}>Sosial Media</h1>
            <div className={styles["social-media-content-container"]}>
              {socialMedia.map((item, index) => (
                <a key={index} href={item.link} target="_blank">
                  <Image
                    alt={item.img}
                    src={item.img}
                    width={24}
                    height={24}
                    quality={100}
                    priority
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["copyright-container"]}>
        <div className={styles["copyright"]}>
          <p>© 2023,Ventura Trasport Jogja. All Right Reserved.</p>

          <p className={styles["to-top"]} onClick={scrollToUpHandler}>
            <Image
              alt="back to top"
              src={arrowUpmg}
              width={20}
              height={20}
              quality={100}
              priority
            />
            Back to top
          </p>
        </div>
      </div>
    </section>
  );
}
