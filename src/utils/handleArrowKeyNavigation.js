export function handleArrowKeyNavigation(e, refs, currentIndex, totalItems, setIndex) {
    let newIndex = currentIndex;
  
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      newIndex = (currentIndex + 1) % totalItems;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      newIndex = (currentIndex - 1 + totalItems) % totalItems;
    }
  
    if (newIndex !== currentIndex) {
      setIndex(newIndex);
      requestAnimationFrame(() => {
        refs.current[newIndex]?.focus();
      });
    }
  }