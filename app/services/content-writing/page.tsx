import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import styles from "@/app/services/nestedservices.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <h1 className={styles.h1}>Content Writing</h1>
        <div className={styles.card}>
          <Image
            src="/images/content-writing.png"
            alt={"image"}
            width={150}
            height={150}
            className={styles.img}
          />
          <h2 className={styles.h2}>Content Writing</h2>
          <p className={styles.info}>
            I am a versatile content writer specializing in creating engaging
            <br></br> and informative content for your brand.
          </p>
        </div>

        <Link href="/contact" className={styles.button}>
          Contact Me
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
