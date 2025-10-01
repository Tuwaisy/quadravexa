
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Services() {
  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'Performance Optimization', 'SEO-Friendly', 'CMS Integration'],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      image: 'https://readdy.ai/api/search-image?query=modern%20web%20development%20workspace%20with%20multiple%20screens%20showing%20responsive%20website%20designs%2C%20clean%20code%20editor%20interface%2C%20web%20development%20tools%2C%20professional%20developer%20environment%2C%20blue%20and%20white%20color%20scheme&width=500&height=300&seq=web-development&orientation=landscape'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Cross-Platform', 'Native Performance', 'App Store Optimization', 'Push Notifications'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      image: 'https://readdy.ai/api/search-image?query=mobile%20app%20development%20interface%20showing%20smartphone%20mockups%20with%20modern%20app%20designs%2C%20mobile%20UI%20components%2C%20app%20development%20tools%2C%20clean%20professional%20workspace%2C%20iOS%20and%20Android%20development&width=500&height=300&seq=mobile-development&orientation=landscape'
    },
    {
      icon: 'ri-gamepad-line',
      title: 'Game Development',
      description: 'Immersive gaming experiences for desktop and mobile platforms',
      features: ['2D/3D Graphics', 'Multiplayer Support', 'Cross-Platform', 'Analytics Integration'],
      technologies: ['Unity', 'Unreal Engine', 'C#', 'JavaScript'],
      image: 'https://readdy.ai/api/search-image?query=game%20development%20studio%20with%20multiple%20monitors%20showing%203D%20game%20environments%2C%20game%20engine%20interface%2C%20character%20models%20and%20animations%2C%20professional%20gaming%20development%20workspace%2C%20colorful%20and%20engaging&width=500&height=300&seq=game-development&orientation=landscape'
    },
    {
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance digital experiences',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
      image: 'https://readdy.ai/api/search-image?query=UI%20UX%20design%20workspace%20with%20design%20tools%2C%20wireframes%2C%20user%20interface%20mockups%2C%20color%20palettes%2C%20design%20system%20components%2C%20modern%20designer%20workspace%2C%20creative%20and%20organized%20environment&width=500&height=300&seq=ui-ux-design&orientation=landscape'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions',
      features: ['Auto Scaling', 'Load Balancing', 'Database Management', 'Security'],
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker'],
      image: 'https://readdy.ai/api/search-image?query=cloud%20computing%20infrastructure%20visualization%20with%20servers%2C%20data%20centers%2C%20network%20connections%2C%20cloud%20services%20dashboard%2C%20modern%20technology%20architecture%2C%20blue%20and%20white%20professional%20design&width=500&height=300&seq=cloud-solutions&orientation=landscape'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation and growth strategies',
      features: ['Market Analysis', 'Technology Roadmap', 'Performance Metrics', 'Growth Planning'],
      technologies: ['Analytics', 'SEO Tools', 'CRM', 'Marketing Automation'],
      image: 'https://readdy.ai/api/search-image?query=digital%20strategy%20planning%20with%20charts%2C%20graphs%2C%20business%20analytics%20dashboard%2C%20strategic%20planning%20documents%2C%20professional%20business%20environment%2C%20data%20visualization%20and%20insights&width=500&height=300&seq=digital-strategy&orientation=landscape'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and technical requirements.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team creates a detailed project roadmap with timelines, milestones, and deliverables.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'We craft user-centered designs and prototypes that align with your brand and objectives.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Our developers build your solution using best practices and cutting-edge technologies.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance ensures your product meets the highest standards.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your solution and provide ongoing support for continued success.'
    }
  ];

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.REACT_APP_NAVIGATE(path);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive digital solutions designed to accelerate your business growth. 
              From web development to mobile apps and beyond, we deliver excellence at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <i className={`${service.icon} text-xl text-white`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <i className="ri-check-line text-cyan-400 mr-2"></i>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div 
                key={index}
                className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 mt-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Why Choose Quadravexa?
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-star-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Expertise</h3>
                    <p className="text-gray-400">Years of experience delivering successful projects across various industries.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-rocket-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-400">We use the latest technologies and best practices to ensure optimal performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-customer-service-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</h3>
                    <p className="text-gray-400">Ongoing support and maintenance to ensure your solution continues to excel.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20tech%20team%20meeting%20in%20modern%20office%2C%20diverse%20group%20discussing%20project%20plans%2C%20laptops%20and%20monitors%20with%20development%20tools%2C%20collaborative%20workspace%2C%20innovation%20and%20teamwork%2C%20bright%20and%20professional%20environment&width=600&height=400&seq=why-choose-us&orientation=landscape"
                alt="Why Choose Quadravexa"
                className="rounded-xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and explore how our services can help 
            achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => handleNavigation('/contact')} className="whitespace-nowrap cursor-pointer">
              <Button variant="secondary" size="lg">
                <i className="ri-calendar-line mr-2"></i>
                Schedule Consultation
              </Button>
            </button>
            <button onClick={() => handleNavigation('/portfolio')} className="whitespace-nowrap cursor-pointer">
              <Button variant="outline" size="lg">
                <i className="ri-eye-line mr-2"></i>
                View Our Work
              </Button>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}