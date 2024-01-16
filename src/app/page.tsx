import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Service from "@/components/Service";
import Unit from "@/components/Unit";
import styles from "@/styles/landingPage.module.scss";

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <Home />
      <About />
      <Unit />
      <Service />
      <Contact />
    </main>
  );
}
