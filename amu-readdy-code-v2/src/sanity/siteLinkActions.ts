import { stegaClean } from '@sanity/client/stega';
import type {SiteLinkContent} from './types';

const scrollToTarget = (target: string) => {
  const element = document.getElementById(target);
  if (!element) return false;

  const offset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  window.scrollTo({top: offsetPosition, behavior: 'smooth'});
  return true;
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
    window.REACT_APP_NAVIGATE('/');
    window.setTimeout(() => {
      scrollToTarget(target);
    }, 250);
  }

  onAfterAction?.();
};
