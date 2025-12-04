import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
return (
<main className={styles.main}>
    <header className={styles.header}>
      <div className={styles.headerTop}>
  <div className={styles.headerLeft}>
    MONA EL-BIRA 
      </div>
          {/* <div className={styles.headerLeft}>
  ARCHIVE PRODUCER & VISUAL RESEARCHER
    </div> */}
        <a className={styles.headerEmail} href="mailto:monaelbira@gmail.com">CONTACT</a>
        </div>
      <div>ARCHIVE PRODUCER & VISUAL RESEARCHER</div>
    </header>
<div className={styles.sectionTitle}>SELECTED WORKS ↓</div>
      <section className={styles.grid}>
        <a href="https://charlottestreetfilms.com/" target="_blank">
          <Image src="/01_SixBillionDollarMan.png" alt="Movie 1" width={300} height={450} className={styles.poster}/>
        </a>

        <a href="https://www.riefenstahl-film.de/" target="_blank">
          <Image src="/02_Riefenstahl.jpg" alt="Movie 2" width={300} height={450} className={styles.poster}/>
        </a>

        <a href="https://www.imdb.com/de/title/tt11687002/?reasonForLanguagePrompt=browser_header_mismatch" target="_blank">
          <Image src="/03_Outrun.jpg" alt="Movie 3" width={300} height={450} className={styles.poster}/>
        </a>

        <a href="https://www.imdb.com/de/title/tt20420316/?reasonForLanguagePrompt=browser_header_mismatch" target="_blank">
          <Image src="/04_Gladbeck.jpg" alt="Movie 4" width={300} height={450} className={styles.poster}/>
        </a>
      </section>

<section className={styles.logos}>
      <div className={styles.logoRow}>
        <a href="https://germanarchiveproducers.de/en/homepage_en/">
          <Image src="/grap.png" alt="Logo 1" width={120} height={70} /></a>
        <a href="https://www.archivalproducersalliance.com/">
        <Image src="/apa.webp" alt="Logo 2" width={150} height={60} /></a>
<Image src="/focal_filled.png" alt="Logo 3" width={120} height={60} />
</div>
</section>
</main>
);
}