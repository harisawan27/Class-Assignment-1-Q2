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
        <h1 className={styles.h1}>Graphic Designing</h1>
        <div className={styles.card}>
          <Image
            src="/images/graphic-designing.png"
            alt={"image"}
            width={150}
            height={150}
            className={styles.img}
          />
          <h2 className={styles.h2}>Graphic Designing</h2>
          <p className={styles.info}>
            I excel in crafting cohesive visual identities that reflect the
            essence of your brand <br></br>and resonate with your target
            audience.
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
