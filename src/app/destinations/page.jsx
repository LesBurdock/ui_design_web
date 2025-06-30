'use client'; // This is a client component
import data from '../../../data/data.json';

import { useState } from 'react';
import Image from 'next/image';
import styles from "../page.module.css";
import NavButton from '@/components/mobile_nav.js';

export default function DestinationsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
  const destinations = data.destinations;
  const activeDestination = destinations[activeIndex];
  return (
    
    <div className="p-4">
      <NavButton />
      <main className={`${styles.grid_container} ${styles.grid_container__home}`}>
    {/* Top-left: Page header */}
    <div className={styles.grid_header}>
      <h1 className={`${styles.numbered_title}`}><span>01</span> PICK YOUR DESTINATION</h1>
    </div>
      {/* Tab Buttons */}
      <div  role="tablist"
                className={`${styles.underline_indicators} ${styles.flex} ${styles.tab_group}`}>
        {destinations.map((destination, index) => (
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
           ${index === activeIndex ? styles.active_tab : ''}
         `}
       >
         {destination.name}
       </button>
        ))}
      </div>

      {/* Destination Content */}
      <div>
        <div>
          <h2 className={`${styles.fs_900} ${styles.uppercase} ${styles.fgWhite} ${styles.serif} ${styles.d_block}`}>
            {activeDestination.name}
          </h2>
          <p>{activeDestination.description}</p>
          <p className={`${styles.fgLight} ${styles.serif}`}>
            Distance: {activeDestination.distance}
          </p>
          <p>
            Travel Time: {activeDestination.travel}
          </p>
          <div className={styles.destination_image}>
            <Image
              src={activeDestination.images.png.replace('./assets', '/assets')}
              alt={activeDestination.name}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}