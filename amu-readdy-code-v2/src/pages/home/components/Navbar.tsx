import { useState } from 'react';
import { stegaClean } from '@sanity/client/stega';
import { getSiteSettingsDataAttribute } from '../../../sanity/dataAttributes';
import { runSiteLink } from '../../../sanity/siteLinkActions';
import { useSiteSettingsContent } from '../../../sanity/useSiteSettingsContent';
import type { SiteNavItemContent } from '../../../sanity/types';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const siteSettings = useSiteSettingsContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownLabel, setOpenDropdownLabel] = useState<string | null>(null);

  const handleNavItem = (item: SiteNavItemContent) => {
    runSiteLink(item, () => {
      setMobileMenuOpen(false);
      setOpenDropdownLabel(null);
    });
  };

  const handleChildItem = (index: number, childIndex: number) => {
    const child = siteSettings.headerNavItems[index]?.children?.[childIndex];
    if (!child) return;
    runSiteLink(child, () => {
      setMobileMenuOpen(false);
      setOpenDropdownLabel(null);
    });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-[10px] shadow-sm border-b border-white/60'
          : 'bg-white/85 backdrop-blur-[10px] shadow-sm border-b border-white/60'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center h-24">
          <div className="flex-shrink-0">
            <button onClick={() => window.REACT_APP_NAVIGATE('/')} className="cursor-pointer">
              <img
                alt={siteSettings.headerLogo.alt}
                className="w-auto max-w-[220px] object-contain transition-all duration-500 h-14"
                data-sanity-edit-group
                data-sanity-edit-target
                data-sanity={getSiteSettingsDataAttribute('headerLogo')}
                src={siteSettings.headerLogo.url}
              />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-10">
            {siteSettings.headerNavItems.map((item, index) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              const isOpen = openDropdownLabel === item.label;
              const cleanLabel = stegaClean(item.label);

              if (hasChildren) {
                return (
                  <div
                    key={`${cleanLabel}-${index}`}
                    className="relative"
                    onMouseEnter={() => setOpenDropdownLabel(cleanLabel)}
                    onMouseLeave={() => setOpenDropdownLabel(null)}
                  >
                    <button
                      onClick={() => handleNavItem(item)}
                      className="group relative py-2 cursor-pointer flex items-center gap-1"
                    >
                      <span className="text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 text-stone-600 group-hover:text-[#4a5d4a] leading-none flex items-center">
                        {cleanLabel}
                      </span>
                      <span className={`w-4 h-4 flex items-center justify-center transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <i className="ri-arrow-down-s-line text-stone-400 text-sm"></i>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a5d4a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </button>

                    <div className="absolute top-full left-0 w-full h-3" />

                    <div
                      className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-44 bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden transition-all duration-200 ${
                        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="py-1.5">
                        {item.children?.map((child, childIndex) => (
                          <div key={`${stegaClean(child.label)}-${childIndex}`}>
                            <button
                              onClick={() => handleChildItem(index, childIndex)}
                              className="w-full text-left px-5 py-3 text-[13px] text-stone-600 hover:bg-[#faf6f0] hover:text-[#cd9651] transition-colors duration-150 cursor-pointer tracking-wide"
                            >
                              {stegaClean(child.label)}
                            </button>
                            {childIndex < item.children.length - 1 && <div className="mx-4 h-px bg-stone-100"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={`${cleanLabel}-${index}`}
                  onClick={() => handleNavItem(item)}
                  className="group relative py-2 cursor-pointer"
                >
                  <span className="text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 text-stone-600 group-hover:text-[#4a5d4a]">
                    {cleanLabel}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a5d4a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center flex-shrink-0">
            <button
              onClick={() => runSiteLink(siteSettings.headerCta)}
              className="px-5 py-2.5 rounded-full cursor-pointer transition-all duration-300 bg-[#cd9651] shadow-sm hover:bg-[#b8843f]"
            >
              <span
                className="text-[13px] font-medium uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-300 text-white"
                data-sanity={getSiteSettingsDataAttribute('headerCta.label')}
              >
                {siteSettings.headerCta.label}
              </span>
            </button>
          </div>

          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md cursor-pointer text-gray-700"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </div>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-3">
            {siteSettings.headerNavItems.map((item, index) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              const isOpen = openDropdownLabel === item.label;

              if (!hasChildren) {
                return (
                  <button
                    key={`${stegaClean(item.label)}-${index}`}
                    onClick={() => handleNavItem(item)}
                    className="block w-full text-left py-2 text-sm font-medium text-stone-600 hover:text-[#4a5d4a] cursor-pointer"
                  >
                    {stegaClean(item.label)}
                  </button>
                );
              }

              return (
                <div key={`${stegaClean(item.label)}-${index}`}>
                  <button
                    onClick={() => setOpenDropdownLabel(isOpen ? null : stegaClean(item.label))}
                    className="flex items-center justify-between w-full py-2 text-sm font-medium text-stone-600 hover:text-[#4a5d4a] cursor-pointer"
                  >
                    <span>{stegaClean(item.label)}</span>
                    <span className={`w-4 h-4 flex items-center justify-center transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <i className="ri-arrow-down-s-line text-stone-400"></i>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.children?.map((child, childIndex) => (
                        <button
                          key={`${stegaClean(child.label)}-${childIndex}`}
                          onClick={() => handleChildItem(index, childIndex)}
                          className="block w-full text-left py-2 text-sm text-[#cd9651] hover:text-[#b8843f] cursor-pointer"
                        >
                          {stegaClean(child.label)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <button
              onClick={() => runSiteLink(siteSettings.headerCta, () => setMobileMenuOpen(false))}
              className="w-full mt-4 px-4 py-3 bg-[#cd9651] text-white rounded-full text-sm font-medium cursor-pointer"
            >
              <span data-sanity={getSiteSettingsDataAttribute('headerCta.label')}>{siteSettings.headerCta.label}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
