/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, ChevronRight, Star, ArrowRight } from 'lucide-react';

const ApartmentBookingLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Featured apartments data
  const featuredApartments = [
    {
      id: 1,
      title: "Luxury Skyline View",
      location: "Downtown, New York",
      price: 250,
      rating: 4.9,
      reviews: 124,
      image: "/api/placeholder/800/500",
    },
    {
      id: 2,
      title: "Beachfront Paradise",
      location: "Miami Beach, Florida",
      price: 320,
      rating: 4.8,
      reviews: 96,
      image: "/api/placeholder/800/500",
    },
    {
      id: 3,
      title: "Modern Urban Loft",
      location: "San Francisco, California",
      price: 275,
      rating: 4.7,
      reviews: 83,
      image: "/api/placeholder/800/500",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/api/placeholder/1920/1080')",
            transform: isVisible ? 'scale(1)' : 'scale(1.1)',
            transition: 'transform 1.5s ease-out',
          }}
        />
        
     
        
        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
          <div 
            className={`max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Discover Your Perfect <span className="text-blue-300">Luxury</span> Apartment
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl">
              Experience premium living with our exclusive collection of handpicked apartments in the world's most desirable locations.
            </p>
            
            {/* Search Box */}
            <div 
              className={`bg-white p-4 rounded-2xl shadow-xl transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0 md:pr-4">
                  <div className="flex items-center">
                    <MapPin className="text-blue-600 w-5 h-5 mr-2" />
                    <select className="w-full focus:outline-none text-gray-700 bg-transparent">
                      <option>New York, USA</option>
                      <option>London, UK</option>
                      <option>Paris, France</option>
                      <option>Tokyo, Japan</option>
                    </select>
                  </div>
                </div>
                <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0 md:pr-4">
                  <div className="flex items-center">
                    <Calendar className="text-blue-600 w-5 h-5 mr-2" />
                    <input 
                      type="text" 
                      placeholder="Check-in — Check-out"
                      className="w-full focus:outline-none text-gray-700 bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <Search className="text-blue-600 w-5 h-5 mr-2" />
                    <input 
                      type="text" 
                      placeholder="2 guests"
                      className="w-full focus:outline-none text-gray-700 bg-transparent"
                    />
                  </div>
                </div>
                <button className="bg-blue-600 text-white rounded-xl px-6 py-3 font-medium flex items-center justify-center hover:bg-blue-700 transition">
                  Search
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-1 h-10 rounded-full relative overflow-hidden">
              <span className="absolute w-full h-full bg-white opacity-30"></span>
              <span className="absolute w-full h-1/3 bg-white animate-scrolldown"></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Apartments Section */}
      <div className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Luxury Apartments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium apartments available for your next stay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApartments.map((apartment, index) => (
              <div 
                key={apartment.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={apartment.image}
                    alt={apartment.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-blue-900">
                    ${apartment.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-blue-600 w-4 h-4 mr-1" />
                    <span className="text-gray-500 text-sm">{apartment.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{apartment.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="text-yellow-500 w-4 h-4 fill-current" />
                      <span className="ml-1 text-gray-700">{apartment.rating}</span>
                      <span className="ml-1 text-gray-500">({apartment.reviews} reviews)</span>
                    </div>
                    <button className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition">
                      Details
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-flex items-center">
              View All Apartments
              <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-blue-50 py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose LuxeStay?</h2>
              <p className="text-gray-600 mb-8">
                We provide an exclusive selection of premium apartments with exceptional service that sets us apart from the competition.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg text-white mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Verified Luxury Listings</h3>
                    <p className="text-gray-600">Every property is personally inspected to ensure it meets our premium standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg text-white mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
                    <p className="text-gray-600">Our advanced encryption and secure payment system protects your information.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg text-white mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Concierge Support</h3>
                    <p className="text-gray-600">Our dedicated team is available around the clock to assist with any requests.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-1 rounded-2xl shadow-xl relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="/api/placeholder/600/800" alt="Luxury apartment interior" className="rounded-xl" />
              </div>
              <div className="absolute top-12 -left-12 w-2/3 h-2/3 bg-blue-200 rounded-2xl -z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 bg-blue-600 rounded-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read testimonials from guests who have experienced our premium accommodations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "The apartment exceeded all my expectations. Stunning views, luxurious furnishings, and impeccable service. The concierge team went above and beyond to make our stay special."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img src="/api/placeholder/100/100" alt="Customer" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-gray-500 text-sm">New York, USA</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 px-6 md:px-12 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Luxury Living?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Join thousands of satisfied guests who have discovered their perfect luxury apartment with LuxeStay.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              Explore Locations
            </button>
          </div>
        </div>
      </div>
      
   
      
      {/* Add some custom animation styles */}
      <style jsx>{`
        @keyframes scrolldown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scrolldown {
          animation: scrolldown 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ApartmentBookingLanding;