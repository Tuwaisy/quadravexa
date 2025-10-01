
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full text-white z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-strong shadow-2xl shadow-cyan-500/10' 
        : 'bg-gray-900/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="https://quadravexa.com/assets/images/QUADRAVEXA.png" 
                alt="Quadravexa Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:to-blue-400 relative" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '700', letterSpacing: '1.5px' }}>
              <span className="relative bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                <span className="inline-block transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ textShadow: '0 2px 10px rgba(6, 182, 212, 0.3)' }}>Q</span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ textShadow: '0 2px 10px rgba(6, 182, 212, 0.3)' }}>uadravexa</span>
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-cyan-400 group ${
                  location.pathname === item.href ? 'text-cyan-400' : 'text-gray-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.href ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 top-3 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 border-t border-gray-700/50 mt-4">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 hover:translate-x-2 ${
                    location.pathname === item.href ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-1 h-1 rounded-full bg-current transition-all duration-300 ${
                      location.pathname === item.href ? 'scale-150' : 'scale-100'
                    }`}></div>
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
