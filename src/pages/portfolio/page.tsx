import { useMemo, useState } from 'react';

import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import AnimatedIcon from '../../components/base/AnimatedIcon';
import ScrollAnimationWrapper from '../../components/base/ScrollAnimationWrapper';
import FloatingShapes from '../../components/base/FloatingShapes';

type ProjectCategory = 'apps' | 'websites' | 'games';

type Project = {
  key: string;
  name: string;
  description: string;
  features: string[];
  image?: string;
  liveLink?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  isModal?: boolean;
};

type DisplayProject = Project & { categoryId: ProjectCategory };

type CategoryInfo = {
  id: ProjectCategory;
  label: string;
  description: string;
};

const asset = (path?: string) => (path ? `https://quadravexa.com${path}` : undefined);

const PORTFOLIO_PROJECTS: Record<ProjectCategory, Project[]> = {
  apps: [
    {
      key: 'school-system',
      name: 'School Management System',
      description:
        'A complete system for managing exams and homework. Features role-based access for Teachers, Students, and Parents, with automated exam corrections and detailed reporting.',
      features: [
        '4 User Roles (Admin, Teacher, Student, Parent)',
        'Automated Exam Grading',
        'Homework Submission & Tracking',
        'Parental Absence Requests',
        'Detailed Grade Reporting'
      ],
      isModal: true
    },
    {
      key: 'pulse-hr',
      name: 'PulseHR',
      description:
        'A mini HR system for small to medium-sized businesses. Manage employees, approve leave, and run payroll with role-based dashboards for employees and HR managers.',
      features: [
        'Role-Based Dashboards (Employee/HR)',
        'Leave Request & Approval System',
        'Employee Attendance Tracking',
        'Simplified Payroll Simulation',
        'Company Analytics Overview'
      ],
      isModal: true
    },
    {
      key: 'food-order',
      name: 'FoodOrder',
      description:
        'A fully interactive food ordering application built with React. Experience a seamless and responsive interface for browsing the menu, managing your cart, and placing orders in real-time. Includes full admin controls.',
      features: [
        'Interactive Menu & Cart',
        'Real-Time Order Updates',
        'Dynamic Item Management (Admin)',
        'Password-Protected Order History',
        'Modern, Responsive Interface'
      ],
      isModal: true
    },
    {
      key: 'shipping-express',
      name: 'Shipping Express',
      description:
        'A full-featured shipping platform simulation. Manage clients, couriers, and the entire delivery lifecycle from booking to proof of delivery. Includes role-based access for Admins, Clients, and Couriers.',
      features: [
        'Role-Based Dashboards',
        'Shipment Creation & Tracking',
        'Live Status Updates',
        'Digital Signature Capture',
        'Admin Oversight Panel'
      ],
      isModal: true
    }
  ],
  websites: [
    {
      key: 'shuhna',
      name: 'Shuhna',
      description:
        'A comprehensive logistics platform for e-commerce businesses, allowing management of shipments across multiple carriers from a single dashboard.',
      features: [
        'Multi-Carrier Integration',
        'Centralized Shipment Tracking',
        'Automated Shipping Policies',
        'Cash on Delivery Management',
        'E-commerce Platform Integration'
      ],
      liveLink: 'https://www.shuhna.net/',
      image: asset('/assets/images/shuhna.png')
    },
    {
      key: 'genovathera',
      name: 'GenovaThera',
      description:
        'A specialized pharmaceutical company website bringing innovative biotech solutions and rare disease therapies to patients across Egypt and the MENA region.',
      features: [
        'Precision Commercialization',
        'Scientific & Regional Expertise',
        'Regulatory & Access Navigation',
        'Biotech & Pharma Partnerships',
        'Focus on Egypt & MENA Markets'
      ],
      liveLink: 'https://genovathera.com',
      image: asset('/assets/images/GenovaThera.png')
    },
    {
      key: 'aura-threads',
      name: 'Aura & Threads',
      description:
        'A sleek and modern e-commerce platform simulation for a high-end perfume and clothing brand. Experience a seamless shopping journey from product browsing to checkout.',
      features: [
        'Interactive Product Grid & Filtering',
        'Dynamic Shopping Cart',
        'Simulated Checkout Process',
        'Responsive for Mobile & Desktop'
      ],
      isModal: true
    }
  ],
  games: [
    {
      key: 'edu-adventure',
      name: 'EduAdventure',
      description:
        "A fun and interactive learning game for kids. Master basic math and English concepts through engaging quizzes and colorful visuals.",
      features: [
        'Math & English subjects',
        'Multiple progressive levels',
        'Counting & equation challenges',
        'Object & word identification',
        'Kid-friendly interface'
      ],
      image: asset('/assets/images/edu-adventure.png')
    },
    {
      key: 'chess',
      name: 'Chess',
      description:
        'The classic game of strategy and tactics. Play against a computer opponent in a sleek, modern interface. Checkmate the king to win.',
      features: [
        'Modern & Sleek Interface',
        'Challenging AI Opponent',
        'Valid Move Highlighting',
        'Check & Checkmate Detection'
      ],
      image: asset('/assets/images/chess.png')
    },
    {
      key: 'sudoku',
      name: 'Sudoku',
      description:
        'A classic logic puzzle. Fill the 9x9 grid so that each column, each row, and each of the nine 3x3 subgrids contain all of the digits from 1 to 9.',
      features: [
        'Classic 9x9 Grid',
        'Three Difficulty Levels',
        'Mistake Counter',
        'Clean, Minimalist UI'
      ],
      image: asset('/assets/images/sudoku.png')
    },
    {
      key: 'neon-edge',
      name: 'Neon Edge',
      description:
        'A futuristic 2D fighting game with a deep combat system. Choose from four unique fighters—Striker, Phantom, Titan, or Assassin—and battle against a challenging AI opponent in a vibrant neon world.',
      features: [
        '4 Unique Fighter Archetypes',
        'Character Select Screen',
        'Combo & Damage System',
        'Advanced AI Opponent'
      ],
      image: asset('/assets/images/neon-edge.png')
    }
  ]
};

const CATEGORY_INFO: CategoryInfo[] = [
  {
    id: 'apps',
    label: 'Apps',
    description: 'Intuitive and powerful applications for mobile and desktop.'
  },
  {
    id: 'websites',
    label: 'Websites',
    description: 'Modern, responsive, and performant websites for businesses and individuals.'
  },
  {
    id: 'games',
    label: 'Games',
    description: 'Immersive and entertaining games for desktop and mobile platforms.'
  }
];

const CATEGORY_LABEL = CATEGORY_INFO.reduce<Record<ProjectCategory, string>>((acc, info) => {
  acc[info.id] = info.label;
  return acc;
}, {} as Record<ProjectCategory, string>);

const FILTERS: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  ...CATEGORY_INFO.map(({ id, label }) => ({ id, label }))
];

const FLATTENED_PROJECTS: DisplayProject[] = (Object.entries(PORTFOLIO_PROJECTS) as [ProjectCategory, Project[]][])
  .flatMap(([categoryId, entries]) => entries.map((entry) => ({ ...entry, categoryId })));

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>('all');

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return FLATTENED_PROJECTS;
    }

    return FLATTENED_PROJECTS.filter((project) => project.categoryId === activeCategory);
  }, [activeCategory]);

  const activeMeta = activeCategory === 'all' ? null : CATEGORY_INFO.find((info) => info.id === activeCategory);

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.REACT_APP_NAVIGATE(path);
    }, 100);
  };

  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
              {FILTERS.map((filter) => (
                <Button
                  key={filter.id}
                  variant={filter.id === activeCategory ? '3d-primary' : '3d-secondary'}
                  size="sm"
                  className="stagger-3d-1"
                  onClick={() => setActiveCategory(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
            {activeMeta && (
              <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
                {activeMeta.description}
              </p>
            )}
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 gradient-bg-3 relative">
        <div className="tech-grid absolute inset-0"></div>
        <FloatingShapes count={8} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {visibleProjects.map((project, index) => {
              const categoryLabel = CATEGORY_LABEL[project.categoryId];
              const hasLinks = Boolean(project.liveLink || project.appStoreLink || project.playStoreLink);
              const hasImage = Boolean(project.image);

              return (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'}
                delay={index * 100}
              >
                <div className="card-3d rounded-xl overflow-hidden hover:border-cyan-500 group">
                  <div className="relative h-64 overflow-hidden">
                    {hasImage ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent"></div>
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center text-center p-6">
                        <div className="space-y-3">
                          <i className="ri-lightbulb-flash-line text-4xl text-cyan-400"></i>
                          <p className="text-lg font-semibold text-white leading-snug">
                            {project.name}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        {categoryLabel}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    {project.isModal && (
                      <div className="mb-6">
                        <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 rounded-full">
                          <i className="ri-flashlight-fill mr-2"></i>
                          Interactive demo showcased on quadravexa.com
                        </span>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            <AnimatedIcon 
                              icon="ri-check-line"
                              size="sm"
                              variant="3d"
                              gradient="from-green-500 to-emerald-600"
                              className="mr-3"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {project.liveLink && (
                        <Button
                          variant="3d-primary"
                          size="sm"
                          onClick={() => openExternal(project.liveLink!)}
                        >
                          <i className="ri-external-link-line mr-2"></i>
                          Visit Website
                        </Button>
                      )}
                      {project.appStoreLink && (
                        <Button
                          variant="3d-secondary"
                          size="sm"
                          onClick={() => openExternal(project.appStoreLink!)}
                        >
                          <i className="ri-apple-fill mr-2"></i>
                          App Store
                        </Button>
                      )}
                      {project.playStoreLink && (
                        <Button
                          variant="3d-secondary"
                          size="sm"
                          onClick={() => openExternal(project.playStoreLink!)}
                        >
                          <i className="ri-google-play-fill mr-2"></i>
                          Play Store
                        </Button>
                      )}
                      {!hasLinks && (
                        <Button
                          variant="3d-secondary"
                          size="sm"
                          onClick={() => handleNavigation('/contact')}
                        >
                          <i className="ri-message-3-line mr-2"></i>
                          Request Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            );
            })}
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