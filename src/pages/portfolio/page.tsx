
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import AnimatedIcon from '../../components/base/AnimatedIcon';
import ScrollAnimationWrapper from '../../components/base/ScrollAnimationWrapper';
import FloatingShapes from '../../components/base/FloatingShapes';

export default function Portfolio() {
  const projects = [
    {
      title: 'Shuhna Logistics Platform',
      description: 'A comprehensive e-commerce logistics solution featuring multi-carrier integration, real-time tracking, automated shipping workflows, and advanced analytics dashboard. Built with React, Node.js, and integrated with major shipping providers.',
      category: 'Web Platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      image: 'https://readdy.ai/api/search-image?query=modern%20logistics%20dashboard%20interface%20with%20shipping%20tracking%2C%20clean%20blue%20and%20white%20design%2C%20professional%20business%20application%2C%20multiple%20carrier%20integration%2C%20e-commerce%20platform%2C%20minimalist%20UI%20design%2C%20data%20visualization%20charts%2C%20futuristic%20tech%20interface%2C%203D%20elements&width=600&height=400&seq=shuhna-logistics-detail&orientation=landscape',
      results: ['40% faster shipping processing', '25% reduction in logistics costs', '99.9% uptime reliability']
    },
    {
      title: 'GenovaThera Website',
      description: 'A sophisticated pharmaceutical company website showcasing biotech solutions and rare disease therapies. Features interactive product catalogs, research publications, clinical trial information, and secure patient portals.',
      category: 'Corporate Website',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Strapi CMS'],
      image: 'https://readdy.ai/api/search-image?query=pharmaceutical%20company%20website%20design%2C%20medical%20and%20healthcare%20interface%2C%20clean%20professional%20layout%2C%20biotech%20solutions%20presentation%2C%20modern%20medical%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20scientific%20and%20trustworthy%20design%2C%20advanced%20medical%20technology%2C%203D%20molecular%20structures&width=600&height=400&seq=genovathera-website-detail&orientation=landscape',
      results: ['300% increase in lead generation', 'HIPAA compliant security', '50% improvement in user engagement']
    },
    {
      title: 'Neon Edge Game',
      description: 'A competitive gaming experience featuring AI-enhanced gameplay, advanced combo systems, stunning visual effects, and real-time multiplayer capabilities. Developed using Unity with custom shaders and particle systems.',
      category: 'Game Development',
      technologies: ['Unity', 'C#', 'Photon Network', 'Custom Shaders'],
      image: 'https://readdy.ai/api/search-image?query=futuristic%20neon%20game%20interface%2C%20cyberpunk%20gaming%20UI%2C%20competitive%20esports%20game%20design%2C%20neon%20blue%20and%20purple%20colors%2C%20modern%20gaming%20graphics%2C%20action%20game%20interface%2C%20digital%20entertainment%2C%203D%20gaming%20environment%2C%20holographic%20effects&width=600&height=400&seq=neon-edge-game-detail&orientation=landscape',
      results: ['100K+ active players', '4.8/5 user rating', 'Featured on Steam']
    },
    {
      title: 'FinTech Mobile App',
      description: 'A secure mobile banking application with biometric authentication, real-time transactions, investment tracking, and AI-powered financial insights. Built with React Native and integrated with banking APIs.',
      category: 'Mobile App',
      technologies: ['React Native', 'Redux', 'Firebase', 'Plaid API'],
      image: 'https://readdy.ai/api/search-image?query=modern%20mobile%20banking%20app%20interface%2C%20fintech%20application%20design%2C%20secure%20financial%20dashboard%2C%20clean%20minimalist%20UI%2C%20blue%20and%20white%20color%20scheme%2C%20mobile%20banking%20features%2C%20transaction%20history%2C%20investment%20tracking%2C%203D%20financial%20charts&width=600&height=400&seq=fintech-mobile-app&orientation=landscape',
      results: ['500K+ downloads', 'Bank-grade security', '95% user satisfaction']
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'An intelligent business analytics platform powered by machine learning algorithms. Features predictive analytics, automated reporting, data visualization, and real-time business intelligence insights.',
      category: 'Web Platform',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      image: 'https://readdy.ai/api/search-image?query=AI%20analytics%20dashboard%20interface%2C%20business%20intelligence%20platform%2C%20data%20visualization%20charts%2C%20machine%20learning%20insights%2C%20modern%20dark%20theme%20UI%2C%20predictive%20analytics%2C%20real-time%20data%20monitoring%2C%203D%20data%20representations&width=600&height=400&seq=ai-analytics-dashboard&orientation=landscape',
      results: ['60% faster decision making', 'AI-powered predictions', '200% ROI improvement']
    },
    {
      title: 'E-Learning Platform',
      description: 'A comprehensive online education platform with interactive courses, video streaming, progress tracking, and collaborative learning tools. Supports multiple content formats and assessment methods.',
      category: 'Web Platform',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'WebRTC'],
      image: 'https://readdy.ai/api/search-image?query=modern%20e-learning%20platform%20interface%2C%20online%20education%20dashboard%2C%20course%20management%20system%2C%20video%20streaming%20interface%2C%20student%20progress%20tracking%2C%20clean%20educational%20design%2C%20interactive%20learning%20tools%2C%203D%20educational%20elements&width=600&height=400&seq=elearning-platform&orientation=landscape',
      results: ['50K+ students enrolled', '98% course completion rate', 'Multi-language support']
    }
  ];

  const categories = ['All', 'Web Platform', 'Mobile App', 'Game Development', 'Corporate Website'];

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.REACT_APP_NAVIGATE(path);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-tech text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 gradient-bg-1 relative overflow-hidden">
        <FloatingShapes count={6} />
        <div className="tech-pattern absolute inset-0"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollAnimationWrapper animation="scroll-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text-3d">Our Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of innovative digital solutions that have transformed businesses 
              and delivered exceptional results across various industries.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 gradient-bg-2 relative">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimationWrapper animation="scroll-slide-left">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? '3d-primary' : '3d-secondary'}
                  size="sm"
                  className="stagger-3d-1"
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 gradient-bg-3 relative">
        <div className="tech-grid absolute inset-0"></div>
        <FloatingShapes count={8} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'}
                delay={index * 100}
              >
                <div className="card-3d rounded-xl overflow-hidden hover:border-cyan-500 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 group-hover:border-cyan-500/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            <AnimatedIcon 
                              icon="ri-check-line"
                              size="sm"
                              variant="3d"
                              gradient="from-green-500 to-emerald-600"
                              className="mr-3"
                            />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button variant="3d-primary" size="sm">
                        <i className="ri-eye-line mr-2"></i>
                        View Details
                      </Button>
                      <Button variant="3d-secondary" size="sm">
                        <i className="ri-external-link-line mr-2"></i>
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg-4 relative">
        <div className="tech-pattern absolute inset-0"></div>
        <FloatingShapes count={5} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollAnimationWrapper animation="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-3d">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's create something amazing together. Contact us to discuss your vision 
              and see how we can bring it to life.
            </p>
            <button onClick={() => handleNavigation('/contact')} className="whitespace-nowrap cursor-pointer">
              <Button variant="3d-primary" size="lg">
                <i className="ri-message-3-line mr-2"></i>
                Get Started Today
              </Button>
            </button>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
}