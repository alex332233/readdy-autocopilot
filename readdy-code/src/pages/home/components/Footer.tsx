
export default function Footer() {
  const quickLinks = [
    { name: '首頁', path: '/' },
    { name: '療程介紹', path: '/treatments' },
    { name: '關於艾苜', path: '/about' },
    { name: '真實見證', path: '/cases' },
    { name: '預約諮詢', path: '/#booking' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#cd9651] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                alt="艾苜中醫診所"
                className="h-14 w-auto brightness-0 invert"
                src="https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/2d074e29a45efc84d09e4dff77e4bad7.png"
              />
            </div>
            <p className="text-white/90 text-sm leading-relaxed">您與家人的專屬健康御守</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">關於艾苜</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  診所介紹
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-choose')}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  醫療理念
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('team')}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  醫師團隊
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  聯絡我們
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">醫療服務</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  內科調理
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  婦科治療
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  兒科調理
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  美顏針灸
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">診所資訊</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-white mt-1"></i>
                <span className="text-white/90 text-sm">704臺南市北區北安路一段239號</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-white"></i>
                <a
                  href="tel:062520699"
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  06 252 0699
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-white"></i>
                <a
                  href="mailto:amulettecmc@gmail.com"
                  className="text-white/90 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  amulettecmc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">© 2025 艾苜中醫診所. All rights reserved.</p>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-sm whitespace-nowrap cursor-pointer"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}