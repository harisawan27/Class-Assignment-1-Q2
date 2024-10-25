import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./about.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <h1 className={styles.h1}>About Me</h1>
        <p className={styles.p}>
          I am a web developer and graphic designer. I love combining creativity
          with technology. I enjoy creating visually appealing and highly
          functional digital experiences, blending artistic expression with
          technical precision in the digital landscape.<br></br>
          Currently, I am expanding my expertise by studying AI, Web 3.0, and
          the Metaverse at GIAIC. This advanced education is equipping me with
          cutting-edge skills to navigate and shape the future of the web. My
          coursework has provided me with a deep understanding of the latest
          trends and technologies, which I integrate into my projects to deliver
          innovative solutions.<br></br>
          In my professional journey, I have successfully designed and developed
          websites that are not only aesthetically pleasing but also optimized
          for performance and user experience. My graphic design work is
          characterized by a keen eye for detail and a strong sense of visual
          storytelling.<br></br>I am always eager to connect with like-minded
          professionals, explore collaborative opportunities, and contribute to
          projects that push the boundaries of what's possible in the digital
          world. Let's connect and create something extraordinary together.
        </p>
        <Link href="/services" className={styles.button}>
          My Services
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
