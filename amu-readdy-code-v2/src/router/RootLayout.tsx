import { Outlet, useNavigate } from 'react-router-dom';
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

  useEffect(() => {
    setAppNavigate(navigate);
  }, [navigate]);

  return (
    <>
      <Outlet />
      <SanityVisualEditing />
    </>
  );
}
