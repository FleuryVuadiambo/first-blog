import styles from "./styles.module.css";

function Nav() {
  return (
    <div className={styles.home}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
