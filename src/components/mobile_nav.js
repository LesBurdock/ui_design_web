'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useRef, useState, useEffect } from "react";
import styles from "../app/page.module.css";
import { handleArrowKeyNavigation } from '@/utils/handleArrowKeyNavigation.js';

export default function NavButton() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
 
  const [activePath, setActivePath] = useState(pathname);
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const tabRefs = useRef([]);
  const dummySetIndex = () => {}; // Optional if you're not showing highlight on arrow nav


  function handleMenuToggle() {
    setIsNavOpen((prev) => !prev);
  }

  const handleKeyDown = (e) => {
    const currentIndex = tabRefs.current.findIndex(ref => ref === document.activeElement);
    if (e.key === 'Enter') {
      e.preventDefault();
      const link = tabRefs.current[currentIndex];
      if (link) {
        router.push(link.getAttribute('href'));
      }
      return;
    }
    handleArrowKeyNavigation(e, tabRefs, currentIndex, tabRefs.current.length, dummySetIndex);
  };

  const navItems = [
    { href: '/', label: 'Home', prefix: '' },
    { href: '/destinations', label: 'Destination', prefix: '/destinations' },
    { href: '/crew', label: 'Crew', prefix: '/crew' },
    { href: '/technology', label: 'Technology', prefix: '/technology' }
  ];

  return (
    <div>
      <header className={`${styles.primary_header} ${styles.flex}`}>
        <div className={styles.logo}></div>
        <button
          className={styles.mobile_nav_toggle}
          onClick={handleMenuToggle}
          aria-expanded={isNavOpen}
        >
          <span className={styles.sr_only}>Menu</span>
        </button>

        <nav
          id="primary_navigation"
          className={`${isNavOpen ? "" : styles.hidden}`}
        >
          <ul className={`${styles.primary_navigation} ${styles.underline_indicators} ${styles.flex}`}>
            {navItems.map((item, index) => (
                <li
                key={item.href}
                className={
                  activePath === item.href || (item.prefix !== '' && activePath.startsWith(item.prefix))
                    ? styles.active
                    : ''
                }
              >
                <Link
                  href={item.href}
                  tabIndex={0}
                  ref={el => tabRefs.current[index] = el}
                  onKeyDown={handleKeyDown}
                  className={`${styles.fgWhite} ${styles.sansCond} ${styles.uppercase} ${styles.letter_spacing_2}`}
                >
                  <span aria-hidden="true">0{index}</span>{item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
