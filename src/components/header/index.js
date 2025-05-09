import Link from "next/link";
import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <BiSolidCameraMovie /> NEXTFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#">MOVIES</Link>
          <Link href="#">TV SHOWS</Link>
          <Link href="#">AWARDS & EVENTS</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
