import { getSiteSettingsDataAttribute } from '../../../sanity/dataAttributes';
import { runSiteLink } from '../../../sanity/siteLinkActions';
import { useSiteSettingsContent } from '../../../sanity/useSiteSettingsContent';

export default function Footer() {
  const siteSettings = useSiteSettingsContent();

  return (
    <footer className="bg-[#cd9651] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                alt={siteSettings.footerLogo.alt}
                className="h-14 w-auto brightness-0 invert"
                data-sanity-edit-group
                data-sanity-edit-target
                data-sanity={getSiteSettingsDataAttribute('footerLogo')}
                src={siteSettings.footerLogo.url}
              />
            </div>
            <p
              className="text-white/90 text-sm leading-relaxed"
              data-sanity={getSiteSettingsDataAttribute('footerTagline')}
            >
              {siteSettings.footerTagline}
            </p>
          </div>

          {siteSettings.footerLinkGroups.map((group, groupIndex) => (
            <div key={`${group.title}-${groupIndex}`}>
              <h3
                className="text-lg font-semibold mb-4 text-white"
                data-sanity={getSiteSettingsDataAttribute(`footerLinkGroups[${groupIndex}].title`)}
              >
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={`${link.label}-${linkIndex}`}>
                    <button
                      onClick={() => runSiteLink(link)}
                      className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                      data-sanity={getSiteSettingsDataAttribute(`footerLinkGroups[${groupIndex}].links[${linkIndex}].label`)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3
              className="text-lg font-semibold mb-4 text-white"
              data-sanity={getSiteSettingsDataAttribute('clinicInfoTitle')}
            >
              {siteSettings.clinicInfoTitle}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-white mt-1"></i>
                <span className="text-white/90 text-sm" data-sanity={getSiteSettingsDataAttribute('address')}>
                  {siteSettings.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-white"></i>
                <a
                  href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                  data-sanity={getSiteSettingsDataAttribute('phone')}
                >
                  {siteSettings.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-white"></i>
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                  data-sanity={getSiteSettingsDataAttribute('email')}
                >
                  {siteSettings.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm" data-sanity={getSiteSettingsDataAttribute('copyright')}>
              {siteSettings.copyright}
            </p>
            <div className="flex items-center gap-3">
              {siteSettings.socialLinks.map((social, index) => (
                <a
                  key={`${social.platform}-${index}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-200 cursor-pointer"
                  data-sanity={getSiteSettingsDataAttribute(`socialLinks[${index}].url`)}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
            <span
              className="text-white/70 text-sm whitespace-nowrap"
              data-sanity={getSiteSettingsDataAttribute('builderLink.label')}
            >
              {siteSettings.builderLink.label}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
