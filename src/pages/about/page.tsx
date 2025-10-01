
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function About() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality',
      description: 'Every project undergoes rigorous testing and quality assurance to ensure excellence.'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.'
    },
    {
      icon: 'ri-time-line',
      title: 'Reliability',
      description: 'We deliver projects on time and provide ongoing support for long-term success.'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Company Evolution',
      description: 'Quadravexa expanded into a full-fledged digital solutions company, taking on bigger challenges and serving enterprise clients.'
    },
    {
      year: '2023',
      title: 'Major Projects',
      description: 'Successfully launched Shuhna logistics platform and GenovaThera pharmaceutical website, establishing our reputation in B2B solutions.'
    },
    {
      year: '2022',
      title: 'Foundation',
      description: 'Founded with a vision to create innovative digital experiences that make a real difference for businesses and users.'
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
                About Quadravexa
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a passionate team of developers, designers, and innovators dedicated to crafting 
              digital experiences that drive business growth and user engagement. Our mission is to 
              transform ideas into powerful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Founded with a passion for innovation, Quadravexa began as a vision to bridge the gap 
                  between cutting-edge technology and practical business solutions. We recognized that 
                  many businesses struggle to leverage technology effectively, and we set out to change that.
                </p>
                <p>
                  Our team combines deep technical expertise with a keen understanding of business needs. 
                  We specialize in modern web technologies, mobile development, and game design, ensuring 
                  our solutions reach the widest possible audience while delivering exceptional user experiences.
                </p>
                <p>
                  Today, we're proud to serve as a trusted tech partner for startups, established businesses, 
                  and organizations looking to innovate and grow through digital transformation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20tech%20team%20working%20together%20in%20a%20bright%20office%20space%2C%20diverse%20group%20of%20developers%20and%20designers%20collaborating%2C%20multiple%20monitors%20with%20code%20and%20designs%2C%20innovative%20workspace%20environment%2C%20professional%20atmosphere%2C%20teamwork%20and%20creativity&width=600&height=400&seq=team-collaboration&orientation=landscape"
                alt="Quadravexa Team"
                className="rounded-xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-target-line text-2xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses by transforming their ideas into high-impact digital solutions. 
                We are committed to delivering excellence through cutting-edge technology, user-centric 
                design, and a collaborative development process that ensures every project becomes a 
                benchmark of quality and innovation.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-eye-line text-2xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To pioneer the next paradigm of digital interaction, architecting immersive and 
                intelligent ecosystems that transcend traditional boundaries. We envision a future 
                where technology seamlessly integrates with business processes, creating deeply 
                personalized and empowering experiences for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                  <i className={`${value.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-cyan-400">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-cyan-500 rounded-full mt-2 mr-8 relative">
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-700"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Quadravexa can help transform your business with innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => handleNavigation('/contact')} className="whitespace-nowrap cursor-pointer">
              <Button variant="secondary" size="lg">
                <i className="ri-message-3-line mr-2"></i>
                Get In Touch
              </Button>
            </button>
            <button onClick={() => handleNavigation('/services')} className="whitespace-nowrap cursor-pointer">
              <Button variant="outline" size="lg">
                <i className="ri-service-line mr-2"></i>
                Our Services
              </Button>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}