import React, { useState, useEffect, useRef } from 'react';
import { Search, Calendar, MapPin, Home, Star, ChevronRight, ArrowRight, Check, Award, Shield } from 'lucide-react';

const PremiumApartmentBooking = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('New York');
  const [selectedDates, setSelectedDates] = useState('Apr 10 - Apr 17');
  const [selectedGuests, setSelectedGuests] = useState('2 adults');
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({});
  
  const featuredRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  // Featured apartments data
  const featuredApartments = [
    {
      id: 1,
      title: "Luxe Manhattan Loft",
      location: "Upper East Side, New York",
      price: 289,
      rating: 4.9,
      reviews: 124,
      image: "/api/placeholder/800/500",
      features: ["Panoramic Views", "Private Terrace", "Smart Home"]
    },
    {
      id: 2,
      title: "Riverside Modern Suite",
      location: "Chelsea, New York",
      price: 245,
      rating: 4.8,
      reviews: 97,
      image: "/api/placeholder/800/500",
      features: ["River Views", "Fitness Center", "Concierge"]
    },
    {
      id: 3,
      title: "Skyline Penthouse",
      location: "Midtown, New York",
      price: 325,
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/800/500",
      features: ["Rooftop Access", "Chef's Kitchen", "Home Theater"]
    }
  ];

  // Scroll animations observer
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const elements = [
        { ref: featuredRef, id: 'featured' },
        { ref: benefitsRef, id: 'benefits' },
        { ref: ctaRef, id: 'cta' }
      ];
      
      elements.forEach(({ ref, id }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            setAnimatedElements(prev => ({ ...prev, [id]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate featured apartments
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuredApartments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredApartments.length]);

  // Animation for search panel
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Popular locations
  const popularLocations = ['New York', 'Los Angeles', 'Miami', 'Chicago', 'San Francisco'];

  // Parallax effect for hero section
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 20;
    const yPos = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x: xPos, y: yPos });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      {/* Floating Shapes Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-float-slow"></div>
        <div className="absolute top-2/3 left-2/3 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl animate-float-reverse"></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 mix-blend-multiply" />
          <div 
            className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center transition-transform duration-500 ease-out"
            style={{ transform: `scale(1.05) translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          />
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-2xl text-white space-y-6">
            <h1 
              className="text-5xl md:text-6xl font-bold opacity-0 animate-slide-up" 
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Find Your Perfect Apartment
            </h1>
            <p 
              className="text-xl opacity-0 animate-slide-up" 
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Discover luxury living spaces in prime locations worldwide. Book your dream apartment with just a few clicks.
            </p>
            
            {/* Search Panel with Advanced Animation */}
            <div 
              className="mt-8 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <div 
                className="flex items-center justify-between p-4 cursor-pointer relative overflow-hidden group" 
                onClick={toggleSearch}
              >
                <div className="absolute inset-0 bg-blue-50 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out"></div>
                <div className="flex items-center gap-3 text-gray-700 z-10">
                  <div className="bg-blue-100 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-5 h-5 text-blue-600" />
                  </div>
                  <span>{selectedLocation} • {selectedDates} • {selectedGuests}</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:translate-x-1 z-10">
                  <span>Search</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Expanded Search Options with Improved Animation */}
              <div className={`overflow-hidden transition-all duration-500 ${isSearchVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-100">
                  <div className="space-y-4 transition-all duration-500" style={{ transitionDelay: '0.1s', opacity: isSearchVisible ? 1 : 0, transform: isSearchVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Location</span>
                    </div>
                    <div className="space-y-2">
                      {popularLocations.map((location) => (
                        <div 
                          key={location} 
                          className={`p-2 rounded-lg cursor-pointer transition-all ${selectedLocation === location ? 'bg-blue-100 text-blue-600 scale-105' : 'hover:bg-gray-100 hover:scale-105'}`}
                          onClick={() => setSelectedLocation(location)}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 transition-all duration-500" style={{ transitionDelay: '0.2s', opacity: isSearchVisible ? 1 : 0, transform: isSearchVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Dates</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      Date picker placeholder
                    </div>
                  </div>
                  
                  <div className="space-y-4 transition-all duration-500" style={{ transitionDelay: '0.3s', opacity: isSearchVisible ? 1 : 0, transform: isSearchVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Home className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Guests</span>
                    </div>
                    <div className="space-y-2">
                      {['1 adult', '2 adults', '3 adults', '4+ adults'].map((option) => (
                        <div 
                          key={option} 
                          className={`p-2 rounded-lg cursor-pointer transition-all ${selectedGuests === option ? 'bg-blue-100 text-blue-600 scale-105' : 'hover:bg-gray-100 hover:scale-105'}`}
                          onClick={() => setSelectedGuests(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80">
              <div className="flex flex-col items-center text-white">
                <span className="text-sm mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                  <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Apartments Section with Scroll Animation */}
      <div 
        ref={featuredRef}
        className={`py-20 bg-white transition-all duration-1000 ${animatedElements.featured ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Luxury Apartments</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Handpicked properties that offer exceptional comfort, style and convenience.</p>
          
          <div className="relative overflow-hidden h-96 md:h-[32rem]">
            {/* 3D Rotating Carousel */}
            <div 
              className="flex transition-all duration-1000 ease-in-out h-full"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                perspective: '1000px' 
              }}
            >
              {featuredApartments.map((apartment, idx) => (
                <div 
                  key={apartment.id} 
                  className="min-w-full px-4 transition-all duration-700"
                  style={{ 
                    opacity: activeIndex === idx ? 1 : 0.5,
                    transform: `scale(${activeIndex === idx ? 1 : 0.9})`,
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-500">
                    <div className="md:w-1/2 relative overflow-hidden">
                      <img 
                        src={apartment.image} 
                        alt={apartment.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-blue-600">
                        Featured
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-white">
                          <h4 className="font-medium mb-2">Amenities</h4>
                          <ul className="space-y-1">
                            {apartment.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-400" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{apartment.location}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{apartment.title}</h3>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="flex items-center gap-1 text-amber-500">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="font-medium">{apartment.rating}</span>
                          </div>
                          <span className="text-gray-500">({apartment.reviews} reviews)</span>
                        </div>
                        <p className="text-gray-600 mb-6">
                          Experience luxury living in this stunning apartment featuring modern amenities, 
                          breathtaking views, and an unbeatable location.
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold">${apartment.price}</span>
                          <span className="text-gray-500"> / night</span>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:translate-x-1 group relative overflow-hidden">
                          <span className="relative z-10">View Details</span>
                          <span className="absolute inset-0 bg-indigo-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots with Animation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {featuredApartments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="group transition-all duration-300"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    activeIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 group-hover:bg-blue-300'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section with Staggered Animation */}
      <div 
        ref={benefitsRef}
        className={`py-20 bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-1000 ${animatedElements.benefits ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Book With Us</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">We provide a premium booking experience with attention to every detail.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-blue-600" />,
                title: "Curated Selection",
                description: "Our experts personally vet each property to ensure the highest quality standards.",
                delay: 0
              },
              {
                icon: <Calendar className="w-12 h-12 text-blue-600" />,
                title: "Flexible Booking",
                description: "Change your plans with free cancellation on most bookings up to 48 hours before check-in.",
                delay: 0.2
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: "Premium Experience",
                description: "Enjoy concierge service and 24/7 support for a truly luxurious stay.",
                delay: 0.4
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-2 group"
                style={{ 
                  transitionDelay: `${benefit.delay}s`,
                  opacity: animatedElements.benefits ? 1 : 0,
                  transform: animatedElements.benefits ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors duration-300 relative">
                  <div className="absolute inset-0 bg-blue-600/10 rounded-2xl animate-ping-slow opacity-0 group-hover:opacity-100"></div>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action with Reveal Animation */}
      <div 
        ref={ctaRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <div 
            className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl overflow-hidden relative transition-all duration-1000 ${animatedElements.cta ? 'opacity-100' : 'opacity-0 scale-95'}`}
          >
            {/* Animated Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-4 border-white/30 animate-spin-slow"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border-4 border-white/20 animate-spin-slow-reverse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-8 border-dashed border-white/10 animate-spin-slow"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">Ready to Find Your Dream Apartment?</h2>
            <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto relative">
              Join thousands of satisfied customers who have found their perfect temporary home.
              Special offers available for new users!
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 text-lg relative group hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Exploring Now
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-blue-50 to-white rounded-xl"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Scroll to Top Button - Appears when scrolled */}
      <button 
        className={`fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-blue-700 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 0; }
          50% { transform: translateY(6px); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PremiumApartmentBooking;
