import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/duygubayrakci" target="_blank">
        Duygu Bayrakçı Kumcular
      </Link>
    </footer>
  );
}

export default Footer;
