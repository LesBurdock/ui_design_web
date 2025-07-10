'use client'; // This is a client component
import data from "../../../data/data.json";

import { useState, useRef } from 'react';
import Image from "next/image";
import styles from "../page.module.css";
import "../globals.css";
import { handleArrowKeyNavigation } from '../../utils/handleArrowKeyNavigation.js';

export default function DestinationsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const destinations = data.destinations;
  const activeDestination = destinations[activeIndex];
const tabRefs = useRef([]);

 const handleKeyDown = (e) => {
    const currentIndex = tabRefs.current.findIndex(ref => ref === document.activeElement);
    handleArrowKeyNavigation(e, tabRefs, currentIndex, destinations.length, setActiveIndex);
  };

  return (
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
        {destinations.map((destination, index) => (
          <button
          key={index}
          ref={(el) => tabRefs.current[index] = el}
          tabIndex={index === activeIndex ? 0 : -1}  // only active tab is focusable by Tab
          onClick={() => setActiveIndex(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            aria-selected={index === activeIndex ? "true" : "false"}
            className={`
           ${styles.fgLight} 
           ${styles.bgTransparent} 
           ${styles.sansCond} 
           ${styles.uppercase} 
           ${styles.letter_spacing_2} 
           ${index === activeIndex ? styles.active : ""}
         `}
          >
            {destination.name}
          </button>
        ))}
      </div>

      {/* Destination Content */}
      <div className={styles.destination_image_wrapper}>
        <Image
          className={styles.destination_image}
          src={activeDestination.images.png.replace("./assets", "/assets")}
          alt={activeDestination.name}
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
          {activeDestination.name}
        </h3>
        <p>{activeDestination.description}</p>
        <div className={`${styles.flex} ${styles.destination_meta}`}>
          <div>
            <h2
              className={`${styles.fgLight} ${styles.uppercase} ${styles.fs_200}`}
            >
              Avg. Distance:
            </h2>
            <p className={`${styles.fgWhite} ${styles.fs_500}`}>
              {activeDestination.distance}
            </p>
          </div>
          <div>
            <h2
              className={`${styles.fgLight} ${styles.uppercase} ${styles.fs_200}`}
            >
              Est. Travel Time:{" "}
            </h2>
            <p className={`${styles.fgWhite} ${styles.fs_500}`}>
              {activeDestination.travel}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}