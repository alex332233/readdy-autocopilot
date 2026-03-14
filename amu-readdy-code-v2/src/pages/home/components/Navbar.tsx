import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuredOpen, setFeaturedOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'about') {
      window.REACT_APP_NAVIGATE('/about');
      setMobileMenuOpen(false);
      return;
    }
    if (sectionId === 'insurance') {
      window.REACT_APP_NAVIGATE('/insurance');
      setMobileMenuOpen(false);
      return;
    }
    if (sectionId === 'featured-treatments') {
      window.REACT_APP_NAVIGATE('/featured-treatments');
      setMobileMenuOpen(false);
      return;
    }
    if (sectionId === 'featured-treatments/facial') {
      window.REACT_APP_NAVIGATE('/featured-treatments/facial');
      setMobileMenuOpen(false);
      return;
    }
    if (sectionId === 'featured-treatments/growth') {
      window.REACT_APP_NAVIGATE('/featured-treatments/growth');
      setMobileMenuOpen(false);
      return;
    }
    if (sectionId === 'team') {
      window.REACT_APP_NAVIGATE('/team');
      setMobileMenuOpen(false);
      return;
    }
    if (sectionId === 'cases') {
      window.REACT_APP_NAVIGATE('/cases');
      setMobileMenuOpen(false);
      return;
    }
    if (sectionId === 'health-education') {
      window.REACT_APP_NAVIGATE('/health-education');
      setMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
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
                alt="艾苜中醫診所"
                className="w-auto max-w-[220px] object-contain transition-all duration-500 h-14"
                src="https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/31a31369a1df40450d9f72af90ec2886.png"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-10">
            <button onClick={() => scrollToSection('about')} className="group relative py-2 cursor-pointer">
              <span className="text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 text-stone-600 group-hover:text-[#4a5d4a]">
                關於艾苜
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a5d4a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>

            <button onClick={() => scrollToSection('insurance')} className="group relative py-2 cursor-pointer">
              <span className="text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 text-stone-600 group-hover:text-[#4a5d4a]">
                健保項目
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a5d4a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>

            {/* 特色療程 + 下拉選單 */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturedOpen(true)}
              onMouseLeave={() => setFeaturedOpen(false)}
            >
              <button
                onClick={() => scrollToSection('featured-treatments')}
                className="group relative py-2 cursor-pointer flex items-center gap-1"
              >
                <span className="text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 text-stone-600 group-hover:text-[#4a5d4a] leading-none flex items-center">
                  特色療程
                </span>
                <span className={`w-4 h-4 flex items-center justify-center transition-transform duration-200 ${featuredOpen ? 'rotate-180' : ''}`}>
                  <i className="ri-arrow-down-s-line text-stone-400 text-sm"></i>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a5d4a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>

              {/* 橋接區域，防止滑鼠移動到下拉選單時觸發 mouseLeave */}
              <div className="absolute top-full left-0 w-full h-3" />

              {/* 下拉選單 */}
              <div
                className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-44 bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden transition-all duration-200 ${
                  featuredOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-1.5">
                  <button
                    onClick={() => { scrollToSection('featured-treatments/facial'); setFeaturedOpen(false); }}
                    className="w-full text-left px-5 py-3 text-[13px] text-stone-600 hover:bg-[#faf6f0] hover:text-[#cd9651] transition-colors duration-150 cursor-pointer tracking-wide"
                  >
                    御顏・緊緻
                  </button>
                  <div className="mx-4 h-px bg-stone-100"></div>
                  <button
                    onClick={() => { scrollToSection('featured-treatments/growth'); setFeaturedOpen(false); }}
                    className="w-full text-left px-5 py-3 text-[13px] text-stone-600 hover:bg-[#faf6f0] hover:text-[#cd9651] transition-colors duration-150 cursor-pointer tracking-wide"
                  >
                    登峰・轉骨
                  </button>
                </div>
              </div>
            </div>

            <button onClick={() => scrollToSection('team')} className="group relative py-2 cursor-pointer">
              <span className="text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 text-stone-600 group-hover:text-[#4a5d4a]">
                醫師團隊
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a5d4a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>

            <button onClick={() => scrollToSection('cases')} className="group relative py-2 cursor-pointer">
              <span className="text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 text-stone-600 group-hover:text-[#4a5d4a]">
                真實見證
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a5d4a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>

            <button onClick={() => scrollToSection('health-education')} className="group relative py-2 cursor-pointer">
              <span className="text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 text-stone-600 group-hover:text-[#4a5d4a]">
                衛教資訊
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a5d4a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>

          <div className="hidden md:flex items-center flex-shrink-0">
            <button
              onClick={() => scrollToSection('booking')}
              className="px-5 py-2.5 rounded-full cursor-pointer transition-all duration-300 bg-[#cd9651] shadow-sm hover:bg-[#b8843f]"
            >
              <span className="text-[13px] font-medium uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-300 text-white">
                立即預約
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
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-sm font-medium text-stone-600 hover:text-[#4a5d4a] cursor-pointer"
            >
              關於艾苜
            </button>
            <button
              onClick={() => scrollToSection('insurance')}
              className="block w-full text-left py-2 text-sm font-medium text-stone-600 hover:text-[#4a5d4a] cursor-pointer"
            >
              健保項目
            </button>
            {/* 手機版特色療程 */}
            <div>
              <button
                onClick={() => setFeaturedOpen(!featuredOpen)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-stone-600 hover:text-[#4a5d4a] cursor-pointer"
              >
                <span>特色療程</span>
                <span className={`w-4 h-4 flex items-center justify-center transition-transform duration-200 ${featuredOpen ? 'rotate-180' : ''}`}>
                  <i className="ri-arrow-down-s-line text-stone-400"></i>
                </span>
              </button>
              {featuredOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <button
                    onClick={() => scrollToSection('featured-treatments/facial')}
                    className="block w-full text-left py-2 text-sm text-[#cd9651] hover:text-[#b8843f] cursor-pointer"
                  >
                    御顏・緊緻
                  </button>
                  <button
                    onClick={() => scrollToSection('featured-treatments/growth')}
                    className="block w-full text-left py-2 text-sm text-[#cd9651] hover:text-[#b8843f] cursor-pointer"
                  >
                    登峰・轉骨
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left py-2 text-sm font-medium text-stone-600 hover:text-[#4a5d4a] cursor-pointer"
            >
              醫師團隊
            </button>
            <button
              onClick={() => scrollToSection('cases')}
              className="block w-full text-left py-2 text-sm font-medium text-stone-600 hover:text-[#4a5d4a] cursor-pointer"
            >
              真實見證
            </button>
            <button
              onClick={() => scrollToSection('health-education')}
              className="block w-full text-left py-2 text-sm font-medium text-stone-600 hover:text-[#4a5d4a] cursor-pointer"
            >
              衛教資訊
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left py-2 text-sm font-medium text-stone-600 hover:text-[#4a5d4a] cursor-pointer"
            >
              初診流程
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full text-center py-2.5 mt-4 rounded-full bg-[#cd9651] text-white text-sm font-medium cursor-pointer"
            >
              立即預約
            </button>
            <div className="flex items-center justify-center gap-4 pt-2 pb-1">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 hover:bg-[#cd9651] text-stone-500 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 hover:bg-[#cd9651] text-stone-500 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
