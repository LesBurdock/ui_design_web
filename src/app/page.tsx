import styles from "./page.module.css";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
    <div className={styles.home}></div>
      <div >
        <header className={`${styles.primary_header} ${styles.flex}`}>
          {/* <div>
            <Image
              src="./assets/shared/logo.svg"
              alt="space tourism logo"
              className={styles.logo}
              width={100}
              height={100}
            />
          </div> */}
          {/* <nav>
            <ul
              className={`${styles.primary_navigation} ${styles.underline_indicators} ${styles.flex}`}
            >
              <li className={styles.active}>
                <a
                  className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
                  href="#"
                >
                  <span>00</span>Home
                </a>
              </li>
              <li>
                <a
                  className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
                  href="#"
                >
                  <span>01</span>Destination
                </a>
              </li>
              <li>
                <a
                  className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
                  href="#"
                >
                  <span>02</span>Crew
                </a>
              </li>
              <li>
                <a
                  className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
                  href="#"
                >
                  <span>03</span>Technology
                </a>
              </li>
            </ul>
          </nav> */}
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
