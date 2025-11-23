import { useState, useEffect } from 'react';

export const useScrollFade = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fade transition occurs over 400px of scroll
  const fadeRange = 400;
  
  // Hero fades out: 1 → 0
  const heroOpacity = Math.max(0, Math.min(1, 1 - scrollY / fadeRange));
  
  // Services fade in: 0 → 1
  const servicesOpacity = Math.max(0, Math.min(1, scrollY / fadeRange));

  return { heroOpacity, servicesOpacity };
};
