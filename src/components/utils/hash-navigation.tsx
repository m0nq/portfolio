'use client';

import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

export default function HashNavigation({ children }: PropsWithChildren) {
  const pathname = usePathname();

  useEffect(() => {
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
  }, [pathname]);

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
