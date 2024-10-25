import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./services.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <h1 className={styles.h1}>My Services</h1>
        <p className={styles.p}>
          I provide a wide range of Services <br></br>
          It is My Pleasure to Help You in Your Digital and Online Presence in
          the All Kind of Website Solutions and Suggestions.
        </p>

        <div className={styles.gridContainer}>
          <Link href="/services/web-developer" className={styles.button2}>
            <strong>Web Developing</strong>
          </Link>
          <Link href="/services/graphic-design" className={styles.button2}>
            <strong>Graphic Design</strong>
          </Link>
          <Link href="/services/content-writing" className={styles.button2}>
            <strong>Content Writing</strong>
          </Link>
          <Link href="/services/video-editing" className={styles.button2}>
            <strong>Video Editing</strong>
          </Link>
        </div>

        <Link href="/contact" className={styles.button}>
          Contact Me
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
