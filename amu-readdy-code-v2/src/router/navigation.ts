import type { NavigateFunction } from 'react-router-dom';

let navigateResolver: (navigate: NavigateFunction) => void;

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

export function setAppNavigate(navigate: NavigateFunction) {
  window.REACT_APP_NAVIGATE = navigate;
  navigateResolver(window.REACT_APP_NAVIGATE);
}
