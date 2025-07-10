'use client'; // This is a client component
import data from '../../../data/data.json';

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from "../page.module.css";
import "../globals.css";
import { handleArrowKeyNavigation } from '../../utils/handleArrowKeyNavigation.js';

export default function CrewPage() {
    const [activeIndex, setActiveIndex] = useState(0);
  const crew = data.crew;
  const activeCrew = crew[activeIndex];
  const tabRefs = useRef([]);

 const handleKeyDown = (e) => {
    const currentIndex = tabRefs.current.findIndex(ref => ref === document.activeElement);
    handleArrowKeyNavigation(e, tabRefs, currentIndex, crew.length, setActiveIndex);
  };


  return (
      <main
        className={`flow ${styles.grid_container} ${styles.grid_container__crew} ${styles.container}`}
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
              ref={(el) => tabRefs.current[index] = el}
              tabIndex={index === activeIndex ? 0 : -1}  // only active tab is focusable by Tab
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="tab"
              aria-selected={index === activeIndex ? "true" : "false"}
              className={`
           ${index === activeIndex ? styles.active : ""}
         `}
            ><span className={`${styles.sr_only}`}
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
            <header>
              <h2
                className={`${styles.letter_spacing_3} ${styles.uppercase} ${styles.crew_role}`}
              >
                  {activeCrew.role}
              </h2>
          <p
            className={`${styles.fs_700} ${styles.uppercase} ${styles.fgWhite} ${styles.serif}`}
          >
            {activeCrew.name}
          </p>
          </header>
          <p>{activeCrew.bio}</p>
        </article>
      </main>
  );
}