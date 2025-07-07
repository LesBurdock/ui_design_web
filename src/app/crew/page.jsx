'use client'; // This is a client component
import data from '../../../data/data.json';

import { useState } from 'react';
import Image from 'next/image';
import styles from "../page.module.css";
import NavButton from '@/components/mobile_nav.js';

export default function CrewPage() {
    const [activeIndex, setActiveIndex] = useState(0);
  const crew = data.crew;
  const activeCrew = crew[activeIndex];
  return (
    <div className={`${styles.crew}`}>
      <NavButton />
      <main
        className={`flow ${styles.grid_container} ${styles.grid_container__crew}`}
        style={{ "--flow_space": "2rem" }}
      >
        {/* Top-left: Page header */}
          <h1 className={`${styles.numbered_title}`}>
            <span>02</span> MEET YOUR CREW
          </h1>
        {/* Tab Buttons */}
        <div
          role="tablist"
          className={`${styles.flex} ${styles.dot_indicators} ${styles.tab_group}`}
        >
          {crew.map((crew, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={index === activeIndex ? "true" : "false"}
              className={`
                ${styles.sr_only}
           ${index === activeIndex ? styles.active_tab : ""}
         `}
            ><span  className={`${styles.sr_only}`}
                >{crew.name}</span>
            </button>

          ))}
        </div>

        {/* crew Content */}
<div className={styles.crew_image_wrapper}>
          <Image
          className={styles.crew_image}
            src={activeCrew.images.png.replace("./assets", "/assets")}
            alt={activeCrew.name}
            fill
             sizes="(max-width: 600px) 100vw, 400px"
            style={{ objectFit: "contain" }}
            priority
          />
          </div>
        <article className={`flow ${styles.crew_info}`} style={{ "--flow_space": "1.5rem" }}>
        <div>
              <h2
                className={`${styles.letter_spacing_3} ${styles.uppercase} ${styles.crew_role}`}
              >
                  {activeCrew.role}
              </h2>
          </div>
          <h3
            className={`${styles.fs_700} ${styles.uppercase} ${styles.fgWhite} ${styles.serif}`}
          >
            {activeCrew.name}
          </h3>
          <p>{activeCrew.bio}</p>
        </article>
      </main>
    </div>
  );
}