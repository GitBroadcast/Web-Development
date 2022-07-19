import NavbarElements from "./NavbarElements";
import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { useState } from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);

  const handleMenu = () => {
    setisMenu(!isMenu);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.elements}>
          <div className={styles.onlyNavElements}>
            <NavbarElements />
          </div>
          <div
            className={styles.isActive}
            onClick={handleMenu}
            clicked={isMenu}
          >
            <Hamburger />
          </div>
        </div>
      </div>
      {isMenu && (
        <div className={styles.mobileNavView} onClick={handleMenu}>
          <NavbarElements />
        </div>
      )}
    </div>
  );
};

export default Navbar;
