
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import AnimatedIcon from '../../components/base/AnimatedIcon';
import ScrollAnimationWrapper from '../../components/base/ScrollAnimationWrapper';
import FloatingShapes from '../../components/base/FloatingShapes';

export default function Home() {
  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies and optimized for performance'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences'
    },
    {
      icon: 'ri-gamepad-line',
      title: 'Game Development',
      description: 'Immersive gaming experiences for desktop and mobile platforms with advanced graphics and AI'
    }
  ];

  const portfolioHighlights = [
    {
      title: 'Shuhna Logistics Platform',
      description: 'Comprehensive e-commerce logistics solution with multi-carrier integration and real-time tracking',
      category: 'Web Platform',
      image: 'https://readdy.ai/api/search-image?query=modern%20logistics%20dashboard%20interface%20with%20shipping%20tracking%2C%20clean%20blue%20and%20white%20design%2C%20professional%20business%20application%2C%20multiple%20carrier%20integration%2C%20e-commerce%20platform%2C%20minimalist%20UI%20design%2C%20data%20visualization%20charts%2C%20futuristic%20tech%20interface&width=400&height=300&seq=shuhna-logistics&orientation=landscape'
    },
    {
      title: 'GenovaThera Website',
      description: 'Pharmaceutical company website for biotech solutions and rare disease therapies with advanced features',
      category: 'Corporate Website',
      image: 'https://readdy.ai/api/search-image?query=pharmaceutical%20company%20website%20design%2C%20medical%20and%20healthcare%20interface%2C%20clean%20professional%20layout%2C%20biotech%20solutions%20presentation%2C%20modern%20medical%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20scientific%20and%20trustworthy%20design%2C%20advanced%20medical%20technology&width=400&height=300&seq=genovathera-website&orientation=landscape'
    },
    {
      title: 'Neon Edge Game',
      description: 'Competitive gaming experience with AI enhancements, combo system, and stunning visual effects',
      category: 'Game Development',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20neon%20game%20interface%2C%20cyberpunk%20gaming%20UI%2C%20competitive%20esports%20game%20design%2C%20neon%20blue%20and%20purple%20colors%2C%20modern%20gaming%20graphics%2C%20action%20game%20interface%2C%20digital%20entertainment%2C%203D%20gaming%20environment&width=400&height=300&seq=neon-edge-game&orientation=landscape'
    }
  ];

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.REACT_APP_NAVIGATE(path);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-tech text-white overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg-1">
        <FloatingShapes count={8} />
        <div className="tech-grid absolute inset-0"></div>
        
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20technology%20workspace%20with%20multiple%20screens%20showing%20code%20and%20digital%20interfaces%2C%20futuristic%20office%20environment%2C%20blue%20and%20cyan%20lighting%2C%20professional%20tech%20company%20atmosphere%2C%20clean%20minimalist%20design%2C%20innovation%20and%20creativity%2C%20high-tech%20development%20environment%2C%203d%20rendered%20workspace&width=1920&height=1080&seq=hero-tech-workspace&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollAnimationWrapper animation="scroll-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text-3d">
                Innovative
              </span>
              <br />
              <span className="text-white text-3d">Digital Solutions</span>
            </h1>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="scroll-slide-left" delay={200}>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with Quadravexa to transform your business with cutting-edge web applications, 
              mobile apps, and digital experiences that drive growth and innovation in the modern world.
            </p>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="scroll-slide-right" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => handleNavigation('/contact')} className="whitespace-nowrap cursor-pointer">
                <Button variant="3d-primary" size="lg">
                  <i className="ri-calendar-line mr-2"></i>
                  Request a Demo
                </Button>
              </button>
              <button onClick={() => handleNavigation('/portfolio')} className="whitespace-nowrap cursor-pointer">
                <Button variant="3d-secondary" size="lg">
                  <i className="ri-eye-line mr-2"></i>
                  Explore Products
                </Button>
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 gradient-bg-2 relative">
        <div className="tech-pattern absolute inset-0"></div>
        <FloatingShapes count={5} />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimationWrapper animation="scroll-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text-3d">
                  Our Services
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                We deliver comprehensive digital solutions tailored to your business needs with cutting-edge technology
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation="scroll-rotate-in"
                delay={index * 200}
              >
                <div className="card-3d rounded-xl p-8 hover:border-cyan-500 group">
                  <div className="mb-6">
                    <AnimatedIcon 
                      icon={service.icon}
                      size="lg"
                      variant="3d"
                      animation="3d-hover"
                      gradient="from-cyan-500 via-blue-600 to-purple-600"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper animation="scroll-fade-in" delay={600}>
            <div className="text-center mt-12">
              <button onClick={() => handleNavigation('/services')} className="whitespace-nowrap cursor-pointer">
                <Button variant="3d-secondary">
                  View All Services
                  <i className="ri-arrow-right-line ml-2"></i>
                </Button>
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 gradient-bg-3 relative">
        <div className="tech-grid absolute inset-0"></div>
        <FloatingShapes count={6} />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimationWrapper animation="scroll-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text-3d">
                  Featured Projects
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Discover how we've helped businesses transform their digital presence with innovative solutions
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'}
                delay={index * 150}
              >
                <div className="card-3d rounded-xl overflow-hidden hover:border-cyan-500 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper animation="scroll-fade-in" delay={800}>
            <div className="text-center mt-12">
              <button onClick={() => handleNavigation('/portfolio')} className="whitespace-nowrap cursor-pointer">
                <Button variant="3d-primary">
                  View Full Portfolio
                  <i className="ri-arrow-right-line ml-2"></i>
                </Button>
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg-4 relative">
        <div className="tech-pattern absolute inset-0"></div>
        <FloatingShapes count={4} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollAnimationWrapper animation="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-3d">
              Ready to Transform Your Business?
            </h2>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="scroll-slide-left" delay={200}>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and explore how Quadravexa can bring your vision to life 
              with innovative digital solutions and cutting‑edge technology.
            </p>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="scroll-slide-right" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => handleNavigation('/contact')} className="whitespace-nowrap cursor-pointer">
                <Button variant="3d-secondary" size="lg">
                  <i className="ri-message-3-line mr-2"></i>
                  Start Your Project
                </Button>
              </button>
              <button onClick={() => handleNavigation('/about')} className="whitespace-nowrap cursor-pointer">
                <Button variant="3d-primary" size="lg">
                  <i className="ri-team-line mr-2"></i>
                  Learn About Us
                </Button>
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
}
