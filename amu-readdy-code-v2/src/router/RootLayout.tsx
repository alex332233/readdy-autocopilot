import { Outlet, useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import SanityVisualEditing from '../sanity/SanityVisualEditing';
import { setAppNavigate } from './navigation';
import FloatingLineButton from '../components/FloatingLineButton';

declare global {
  interface Window {
    REACT_APP_NAVIGATE: import('react-router').NavigateFunction;
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

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, [location.pathname, location.hash]);

  return (
    <>
      <Outlet />
      <FloatingLineButton />
      <SanityVisualEditing />
    </>
  );
}
