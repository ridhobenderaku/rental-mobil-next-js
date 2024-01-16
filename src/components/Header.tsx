"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "@/styles/header.module.scss";
import { HeaderMenu } from "@/models/header";
import { useContextProvider } from "@/context/ContextProvider";

function Header() {
  const { menuActive, setMenuActive } = useContextProvider();
  const [sideNav, setSideNav] = useState(false);
  const logoImg = "/img/logoVentura.png";
  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <Image
          alt="logo"
          src={logoImg}
          width={72}
          height={60}
          quality={100}
          className={styles.logo}
        />
        <div className={styles["header-menu"]}>
          <Link
            onClick={() => setMenuActive(HeaderMenu.Home)}
            className={
              menuActive === HeaderMenu.Home ? styles["header-menu-active"] : ""
            }
            href="#home"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuActive(HeaderMenu.About)}
            className={
              menuActive === HeaderMenu.About
                ? styles["header-menu-active"]
                : ""
            }
            href="#about"
          >
            About
          </Link>
          <Link
            onClick={() => setMenuActive(HeaderMenu.Unit)}
            className={
              menuActive === HeaderMenu.Unit ? styles["header-menu-active"] : ""
            }
            href="#unit"
          >
            Unit
          </Link>
          <Link
            onClick={() => setMenuActive(HeaderMenu.Service)}
            className={
              menuActive === HeaderMenu.Service
                ? styles["header-menu-active"]
                : ""
            }
            href="#service"
          >
            Our Trip
          </Link>
          <Link className={styles["header-menu-btn"]} href="#contact">
            Contact Us
          </Link>
        </div>
        <GiHamburgerMenu
          onClick={(e) => {
            e.preventDefault();
            setSideNav(true);
          }}
          className={styles["hamburger"]}
        />
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          setSideNav(false);
        }}
        style={{ display: sideNav ? "block" : "none" }}
        className={styles["header-menu-mobile"]}
      >
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className={styles["sidenav"]}
        >
          <Link
            onClick={(e) => {
              setSideNav(false);
              setMenuActive(HeaderMenu.Home);
            }}
            href="#home"
          >
            Home
          </Link>
          <Link
            onClick={(e) => {
              setSideNav(false);
              setMenuActive(HeaderMenu.About);
            }}
            href="#about"
          >
            About
          </Link>
          <Link
            onClick={(e) => {
              setSideNav(false);
              setMenuActive(HeaderMenu.Unit);
            }}
            href="#Unit"
          >
            Unit
          </Link>
          <Link
            onClick={(e) => {
              setSideNav(false);
              setMenuActive(HeaderMenu.Service);
            }}
            href="#service"
          >
            Our Service
          </Link>
          <Link
            onClick={(e) => {
              setSideNav(false);
            }}
            href="#contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
