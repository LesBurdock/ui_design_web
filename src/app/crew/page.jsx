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
    <div className="p-4">
      <NavButton />
      <main
        className={`flow ${styles.grid_container} ${styles.grid_container__destination}`}
        style={{ "--flow_space": "2rem" }}
      >
        {/* Top-left: Page header */}
          <h1 className={`${styles.numbered_title}`}>
            <span>01</span> PICK YOUR DESTINATION
          </h1>
        {/* Tab Buttons */}
        <div
          role="tablist"
          className={`${styles.underline_indicators} ${styles.flex} ${styles.tab_group}`}
        >
          {crew.map((crew, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={index === activeIndex ? "true" : "false"}
              className={`
           ${styles.fgLight} 
           ${styles.bgDark} 
           ${styles.sansCond} 
           ${styles.uppercase} 
           ${styles.letter_spacing_2} 
           ${index === activeIndex ? styles.active_tab : ""}
         `}
            >
              {crew.name}
            </button>
          ))}
        </div>

        {/* Destination Content */}
<div className={styles.destination_image_wrapper}>
          <Image
          className={styles.destination_image}
            src={activeCrew.images.png.replace("./assets", "/assets")}
            alt={activeCrew.name}
            fill
             sizes="(max-width: 600px) 100vw, 400px"
            style={{ objectFit: "contain" }}
            priority
          />
          </div>
        <article className={`${styles.destination_info}`}>
          <h3
            className={`${styles.fs_800} ${styles.uppercase} ${styles.fgWhite} ${styles.serif} ${styles.d_block}`}
          >
            {activeCrew.name}
          </h3>
          <p>{activeCrew.bio}</p>
          <div className={`${styles.flex} ${styles.destination_meta}`}>
            <div>
              <h2
                className={`${styles.fgLight} ${styles.uppercase} ${styles.fs_200}`}
              >
                Role:
              </h2>
              <p className={`${styles.fgWhite} ${styles.fs_500}`}>
                {activeCrew.role}
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}