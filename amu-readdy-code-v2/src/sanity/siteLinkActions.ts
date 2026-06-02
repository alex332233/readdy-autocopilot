import { stegaClean } from '@sanity/client/stega';
import type {SiteLinkContent} from './types';

const PENDING_SCROLL_TARGET_KEY = 'amu.pendingScrollTarget';

const scrollToTarget = (target: string) => {
  const element = document.getElementById(target);
  if (!element) return false;

  const offset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  window.scrollTo({top: offsetPosition, behavior: 'smooth'});
  return true;
};

export const consumePendingSiteScrollTarget = () => {
  const target = window.sessionStorage.getItem(PENDING_SCROLL_TARGET_KEY);
  if (!target) return;

  window.sessionStorage.removeItem(PENDING_SCROLL_TARGET_KEY);
  window.setTimeout(() => {
    scrollToTarget(target);
  }, 100);
};

export const runSiteLink = (link: SiteLinkContent, onAfterAction?: () => void) => {
  const kind = stegaClean(link.kind);
  const target = stegaClean(link.target);

  if (kind === 'external') {
    window.open(target, '_blank', 'noopener,noreferrer');
    onAfterAction?.();
    return;
  }

  if (kind === 'route') {
    window.REACT_APP_NAVIGATE(target);
    onAfterAction?.();
    return;
  }

  if (scrollToTarget(target)) {
    onAfterAction?.();
    return;
  }

  if (window.location.pathname !== '/') {
    window.sessionStorage.setItem(PENDING_SCROLL_TARGET_KEY, target);
    window.REACT_APP_NAVIGATE('/');
    onAfterAction?.();
    return;
  }

  onAfterAction?.();
};
