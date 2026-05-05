import {getSiteSettingsDataAttribute} from '../sanity/dataAttributes';
import {runSiteLink} from '../sanity/siteLinkActions';
import {useSiteSettingsContent} from '../sanity/useSiteSettingsContent';

export default function FloatingLineButton() {
  const siteSettings = useSiteSettingsContent();
  const button = siteSettings.floatingLineButton;

  if (!button.enabled) return null;

  return (
    <button
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#cd9651] hover:bg-[#b8843d] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 scale-100 cursor-pointer"
      aria-label={button.ariaLabel}
      onClick={() => runSiteLink(button.link)}
      data-sanity={getSiteSettingsDataAttribute('floatingLineButton.link.target')}
    >
      <i className="ri-line-fill text-white text-2xl"></i>
    </button>
  );
}
