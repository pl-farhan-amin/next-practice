import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href={"/"} className={styles.navbarLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href={"/about"} className={styles.navbarLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href={"/article"} className={styles.navbarLink}>
              Article
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href={"/contact"} className={styles.navbarLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
