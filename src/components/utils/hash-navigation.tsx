'use client';

import { useRouter, usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect, useState } from 'react';

export default function HashNavigation({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state to true after component mounts
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Only run this effect when the component has loaded and when pathname changes
    if (!isLoaded) return;

    // Scroll to hash after a short delay to ensure the DOM is fully rendered
    const timeoutId = setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);

        if (element) {
          // Scroll to the element
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isLoaded, pathname]);

  useEffect(() => {
    // Handle hash changes within the same page
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);

        if (element) {
          // Scroll to the element
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Clean up event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return <>{children}</>;
}
