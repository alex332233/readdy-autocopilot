import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SanityVisualEditing from '../sanity/SanityVisualEditing';
import { setAppNavigate } from './navigation';

declare global {
  interface Window {
    REACT_APP_NAVIGATE: import('react-router-dom').NavigateFunction;
  }
}

export default function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setAppNavigate(navigate);
  }, [navigate]);

  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.replace('#', '');
    const scrollToHashTarget = () => {
      const element = document.getElementById(targetId);
      if (!element) return false;

      const offset = 96;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({top: offsetPosition, behavior: 'smooth'});
      return true;
    };

    if (scrollToHashTarget()) return;

    const timeoutId = window.setTimeout(() => {
      scrollToHashTarget();
    }, 250);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.hash, location.pathname]);

  return (
    <>
      <Outlet />
      <SanityVisualEditing />
    </>
  );
}
