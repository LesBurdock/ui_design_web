// app/about/page.jsx
import React from "react";
import styles from "../page.module.css";

export default function DesignSystem() {
  return (
    <div>
      <div className={styles.container}>
        <h1>Design system</h1>

        <section>
          <h2 className={styles.numbered_title}>
            <span>01</span> colors
          </h2>
          <div className={styles.flex}>
            <div className={styles.flexgrow}>
              <div
                className={`${styles.box} ${styles.bgDark} ${styles.fgLight}`}
              >
                #0B0D17
              </div>
              <p>
                <span className={styles.fgLight}> RGB</span> 11, 13, 23
              </p>
              <p>
                <span className={styles.fgLight}> HSL</span> 230°, 35%, 7%
              </p>
            </div>
            <div className={styles.flexgrow}>
              <div
                className={`${styles.box} ${styles.bgLight} ${styles.fgDark}`}
              >
                #0B0D17
              </div>
              <p>
                <span className={styles.fgDark}>RGB</span> 11, 13, 23
              </p>
              <p>
                <span className={styles.fgDark}>HSL</span> 230°, 35%, 7%
              </p>
            </div>
            <div className={styles.flexgrow}>
              <div
                className={`${styles.box} ${styles.bgWhite} ${styles.fgDark}`}
              >
                #0B0D17
              </div>
              <p>
                <span className={styles.fgDark}>RGB</span> 11, 13, 23
              </p>
              <p>
                <span className={styles.fgDark}>HSL</span> 230°, 35%, 7%
              </p>
            </div>
          </div>
        </section>
        <section id="typography">
          <h2 className={styles.numbered_title}>
            <span>02 </span>Typography
          </h2>
          <div className={styles.flex}>
            <div
              className={`flow ${styles.flexg100}`}
              style={{ "--flow_space": "4rem" } as React.CSSProperties}
            >
              <div>
                <p className={`${styles.fgLight} ${styles.serif}`}>
                  Heading 1 - Bellefair Regular - 150px
                </p>
                <p
                  className={`${styles.fs_900} ${styles.uppercase} ${styles.fgWhite} ${styles.serif}`}
                >
                  Earth
                </p>
              </div>
              <div>
                <p className={styles.fgLight}>
                  Heading 2 - Bellefair Regular - 100px
                </p>
                <p
                  className={`${styles.fs_800} ${styles.uppercase} ${styles.fgWhite} ${styles.serif} `}
                >
                  Venus
                </p>
              </div>
              <div>
                <p className={styles.fgLight}>
                  Heading 3 - Bellefair Regular - 56px
                </p>
                <p
                  className={`${styles.fs_700} ${styles.uppercase} ${styles.fgWhite} ${styles.serif}`}
                >
                  Jupiter & Saturn
                </p>
              </div>
              <div>
                <p className={styles.fgLight}>
                  Heading 4 - Bellefair Regular - 32px
                </p>
                <p
                  className={`${styles.fs_600} ${styles.uppercase} ${styles.fgWhite} ${styles.serif}`}
                >
                  Uranus, Neptune, & Pluto
                </p>
              </div>
              <div>
                <p className={`${styles.fgLight} ${styles.sans}`}>
                  Heading 5 - Barlow Condensed Regular - 28px
                </p>
                <p
                  className={`${styles.fs_500} ${styles.uppercase} ${styles.fgLight} ${styles.letter_spacing_1} ${styles.sans}`}
                >
                  So, you want to travel to space
                </p>
              </div>
            </div>

            <div
              className={`flow ${styles.flexg100}`}
              style={{ "--flow_space": "4rem" } as React.CSSProperties}
            >
              <div>
                <p className={`${styles.fgLight} ${styles.serif}`}>
                  Subheading 1 - Bellefair Regular - 28px
                </p>
                <p className={`${styles.fgWhite} ${styles.fs_600}`}>
                  384,400 km
                </p>
              </div>
              <div>
                <p className={`${styles.fgLight}`}>
                  Subheading 2 - Barlow Condensed Regular - 14px - 2.35
                  Character Space
                </p>
                <p
                  className={`${styles.fgWhite} ${styles.sansCond} ${styles.fs_400} ${styles.letter_spacing_3}`}
                >
                  Avg. Distance
                </p>
              </div>
              <div>
                <p className={`${styles.fgLight}`}>
                  Nav Text - Barlow Condensed Regular - 16px - 2.7 Character
                  Space
                </p>
                <p
                  className={`${styles.fgWhite} ${styles.sansCond} ${styles.fs_400} ${styles.letter_spacing_2}`}
                >
                  Europa
                </p>
              </div>
              <div>
                <p className={`${styles.fgLight}`}>Body Text</p>
                <p className={`${styles.fgWhite} ${styles.sansCond}`}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                  Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Phasellus hendrerit.
                  Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                  vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                  sollicitudin laoreet viverra, tortor libero sodales leo, eget
                  blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                  Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                  nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
                  vel, nisi.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`flow ${styles.flexg100}`}
          style={{ "--flow_space": "4rem" } as React.CSSProperties}
          id="interactive-elements"
        >
          <h2 className={styles.numbered_title}>
            <span>03</span> Interactive elements
          </h2>

          {/* //navigation// */}
          <div>
            <nav>
              <ul
                className={`${styles.primary_navigation} ${styles.underline_indicators} ${styles.flex}`}
              >
                <li className={styles.active}>
                  <a
                    className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
                    href="#"
                  >
                    <span>01</span>Active
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
                    href="#"
                  >
                    <span>02</span>Hovered
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
                    href="#"
                  >
                    <span>03</span>Idle
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.flex}>
            <div>
              {/* <!-- explore button --> */}
              <a
                href="#"
                className={`${styles.large_button} ${styles.bgWhite} ${styles.fgDark} ${styles.fs_600} ${styles.uppercase} ${styles.letter_spacing_1} ${styles.sans} `}
              >
                Explore
              </a>
            </div>

            <div className={`flow ${styles.flexg100}`} style={{ marginBottom: "50vh" } as React.CSSProperties}>
              {/* <!-- Tabs --> */}
              <div
                role="tablist"
                className={`${styles.underline_indicators} ${styles.flex} ${styles.tab_group}`}
              >
                <button
                  role="tab"
                  aria-selected="true"
                  className={`${styles.fgLight} ${styles.bgDark} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2}`}
                >
                  Moon
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  className={`${styles.fgLight} ${styles.bgDark} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2}`}
                >
                  Mars
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  className={`${styles.fgLight} ${styles.bgDark} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2}`}
                >
                  Europa
                </button>
              </div>

              {/* <!-- Dots --> */}
              <div className={`${styles.flex} ${styles.dot_indicators}`}>
              <button
                  role="tab"
                  aria-selected="true"
                ><span  className={`${styles.sr_only}`}
                >   slide title</span>
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                ><span  className={`${styles.sr_only}`}
                >   slide title</span>
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                ><span  className={`${styles.sr_only}`}
                >   slide title</span>
                </button>
                </div>
              {/* <!-- Numbers --> */}
              <div className={`${styles.flex} ${styles.number_indicators}`}>
              <button
                  role="tab"
                  aria-selected="true"
                >1
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                >2
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                >3
                </button>
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
