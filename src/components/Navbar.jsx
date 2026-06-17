import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
  ];


  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi VNS Hostel, I'm visiting your website and want to inquire about room availability.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-vnsLight border-b border-vnsDark/10 py-3 shadow-md backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-width-container mx-auto px-5 lg:px-12 flex justify-between items-center">
        {/* Logo Branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-vnsDark/10 flex items-center justify-center overflow-hidden bg-white shadow-sm group-hover:scale-105 transition-transform duration-200">
            <img src={logoImg} alt="VNS Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-vnsDark tracking-wide leading-tight group-hover:text-vnsAccent transition-colors duration-200">
              VNS
            </span>
            <span className="font-body text-[10px] text-vnsDark/70 tracking-widest uppercase leading-none font-bold">
              Boys Hostel
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  className="font-body text-sm font-semibold text-vnsDark/80 hover:text-vnsDark transition-colors duration-200"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-body text-sm font-semibold transition-colors duration-200 hover:text-vnsDark ${
                    isActive ? 'text-vnsDark border-b-2 border-vnsDark pb-1' : 'text-vnsDark/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <button
          onClick={handleWhatsAppClick}
          className="hidden md:flex items-center gap-2 bg-vnsDark hover:bg-[#4E2813] text-vnsText-primary px-5 py-2.5 rounded-vns border border-vnsDark shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 text-vnsAccent fill-current" />
          <span className="font-heading text-xs font-semibold uppercase tracking-wider">Book A Visit</span>
        </button>

        {/* Mobile Burger Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-vnsDark p-2 border border-vnsDark/10 rounded-vns hover:bg-vnsDark/5 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`absolute top-full left-0 w-full bg-vnsLight border-b border-vnsDark/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => {
            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-heading text-lg font-bold text-vnsDark/85 hover:text-vnsDark py-2 border-b border-vnsDark/5"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-heading text-lg font-bold py-2 border-b border-vnsDark/5 hover:text-vnsDark ${
                    isActive ? 'text-vnsDark' : 'text-vnsDark/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              handleWhatsAppClick();
            }}
            className="flex items-center justify-center gap-2 bg-vnsDark text-vnsText-primary py-3 rounded-vns border border-vnsDark shadow-md mt-2"
          >
            <MessageCircle className="w-5 h-5 text-vnsAccent fill-current" />
            <span className="font-heading font-semibold tracking-wider uppercase">Book A Visit</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
