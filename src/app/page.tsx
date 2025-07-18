import styles from "./page.module.css";
import { CSSProperties } from 'react';
import "./globals.css";

export default function Home() {
  return (
    <>
      <main className={`flow ${styles.grid_container} ${styles.grid_container__home} ${styles.container}`}>
        <div className={`flow`} style={{ "--flow_space": "1rem" } as CSSProperties}>
        <h1
          className={`${styles.fs_500} ${styles.uppercase} ${styles.fgLight} ${styles.letter_spacing_1} ${styles.sansCond}`}
        >
          So, you want to travel to{" "}
          <span
            className={`${styles.fs_900} ${styles.paddingtop} ${styles.uppercase} ${styles.fgWhite} ${styles.serif} ${styles.d_block}`}
          >
            Space
          </span>
        </h1>
        <p className={`${styles.body_lineheight}`}>
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
      </main>
    </>
  );
}
