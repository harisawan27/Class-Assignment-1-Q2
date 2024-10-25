import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <h1 className={styles.h1}>I&apos;m Muhammad Haris Awan</h1>
        <p className={styles.p}>
          I'm Muhammad Haris Awan, a passionate web and graphic designer
          dedicated to bringing creativity and innovation to every project I
          undertake.<br></br>
          Whether you're seeking captivating visual designs or sleek,
          user-friendly websites, you've come to the right place.
        </p>
        <Link href="/about" className={styles.button}>
          About Me
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
