
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://quadravexa.com/assets/images/QUADRAVEXA.png" 
                alt="Quadravexa Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '700', letterSpacing: '1px' }}>
                Quadravexa
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted tech partner for innovative digital solutions. We craft exceptional mobile apps, 
              engaging websites, and immersive games that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <i className="ri-github-fill text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Game Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="mailto:support@quadravexa.com" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Quadravexa. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm mt-2 md:mt-0"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
