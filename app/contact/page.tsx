import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./contact.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <h1 className={styles.h1}>Contact Me</h1>
        <div className={styles.card}>
          <h2 className={styles.h2}>Contact Me</h2>
          <p className={styles.info}>Reach me through this Linktree</p>
        </div>
        <Link
          href="https://linktr.ee/harisawan27"
          target="_blank"
          className={styles.button}
        >
          My Linktree
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
