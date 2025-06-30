'use client';
import React, { useState } from "react";
import styles from "../app/page.module.css";

export default function NavButton() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleMenuToggle() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <>
          <div>
        <header className={`${styles.primary_header} ${styles.flex}`}>
          <div className={styles.logo}>
          </div>
      <button
        className={`${styles.mobile_nav_toggle}`}
        onClick={handleMenuToggle}
        aria-expanded={isNavOpen}
      >
        <span className={styles.sr_only}>Menu</span>
      </button>

      <nav
        id="primary_navigation"
        className={`${isNavOpen ? "" : styles.hidden}`}
      >
        <ul
          className={`${styles.primary_navigation} ${styles.underline_indicators} ${styles.flex}`}
        >
          <li className={styles.active}>
            <a
              className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
              href="#"
            >
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li>
            <a
              className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
              href="#"
            >
              <span aria-hidden="true">01</span>Destination
            </a>
          </li>
          <li>
            <a
              className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
              href="#"
            >
              <span aria-hidden="true">02</span>Crew
            </a>
          </li>
          <li>
            <a
              className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2} `}
              href="#"
            >
              <span aria-hidden="true">03</span>Technology
            </a>
          </li>
        </ul>
      </nav>
      </header>
      </div>
    </>
  );
}