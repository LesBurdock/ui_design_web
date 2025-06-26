import styles from "./page.module.css";
import "./globals.css";
import NavButton from '@/components/mobile_nav.js';

export default function Home() {
  return (
    <>
    <div className={styles.home}></div>
      <div>
        <header className={`${styles.primary_header} ${styles.flex}`}>
          <div className={styles.logo}>
          </div>
          <NavButton></NavButton>
        </header>
      </div>
      <div className={`${styles.grid_container} ${styles.grid_container__home}`}>
        <div>
        <h1
          className={`${styles.fs_500} ${styles.uppercase} ${styles.fgLight} ${styles.letter_spacing_1} ${styles.sansCond}`}
        >
          So, you want to travel to{" "}
          <span
            className={`${styles.fs_900} ${styles.uppercase} ${styles.fgWhite} ${styles.serif} ${styles.d_block}`}
          >
            Space
          </span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        </div>
        <div>
          {/* <!-- explore button --> */}
          <a
            href="#"
            className={`${styles.large_button} ${styles.bgWhite} ${styles.fgDark} ${styles.fs_600} ${styles.uppercase} ${styles.letter_spacing_1} ${styles.sans} `}
          >
            Explore
          </a>
        </div>
      </div>
    </>
  );
}
