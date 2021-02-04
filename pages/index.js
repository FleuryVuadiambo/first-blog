import Nav from "./nav";
import styles from "../styles.module.css";
import Link from "next/link";
// import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <h1 className={styles.title}>Bienvenue dans mon blog </h1>
      <Link href="/about">
        <a>A propos</a>
      </Link>
    </div>
  );
}
