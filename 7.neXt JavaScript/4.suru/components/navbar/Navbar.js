import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/static/logos/SL FULL.svg"
            width={100}
            height={100}
            objectFit="cover"
            alt="logo"
          ></Image>
        </Link>
      </div>
      <div className={styles.elements}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </div>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <div
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ top: open ? "50px" : "-100vh" }}
      >
        <Link href="/">
          <a className={styles.menuItem}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.menuItem}>About</a>
        </Link>
        <Link href="/services">
          <a className={styles.menuItem}>Services</a>
        </Link>
        <Link href="/blog">
          <a className={styles.menuItem}>Blog</a>
        </Link>
        <Link href="/contact">
          <a className={styles.menuItem}>Contact Us</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
