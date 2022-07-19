import Link from "next/link";
import styles from "./NavbarElements.module.css";

const NavbarElements = () => {
  const elements = ["Home", "Services", "About", "Blog", "Contact Us"];
  return elements.map((element, i) => {
    return (
      <div key={i} className={styles.navBarElements}>
        <Link href="/">{element}</Link>
      </div>
    );
  });
};
export default NavbarElements;
