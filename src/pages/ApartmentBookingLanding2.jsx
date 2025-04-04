import React, { useState, useEffect } from 'react';

const ApartmentBookingLandingg = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('luxury');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState(1);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredApartments = {
    luxury: [
      { id: 1, name: "Skyline Penthouse", location: "Downtown", price: 350, rating: 4.9, image: "/api/placeholder/500/300" },
      { id: 2, name: "Riverside Suite", location: "Waterfront", price: 320, rating: 4.8, image: "/api/placeholder/500/300" },
      { id: 3, name: "City View Loft", location: "Midtown", price: 290, rating: 4.7, image: "/api/placeholder/500/300" }
    ],
    family: [
      { id: 4, name: "Garden Terrace", location: "Uptown", price: 270, rating: 4.6, image: "/api/placeholder/500/300" },
      { id: 5, name: "Park Avenue Villa", location: "Central Park", price: 310, rating: 4.8, image: "/api/placeholder/500/300" },
      { id: 6, name: "Family Comfort Suite", location: "Suburban", price: 250, rating: 4.7, image: "/api/placeholder/500/300" }
    ],
    budget: [
      { id: 7, name: "Urban Studio", location: "University District", price: 180, rating: 4.5, image: "/api/placeholder/500/300" },
      { id: 8, name: "Modern Compact", location: "Downtown Edge", price: 200, rating: 4.4, image: "/api/placeholder/500/300" },
      { id: 9, name: "Smart Living Space", location: "Tech District", price: 220, rating: 4.6, image: "/api/placeholder/500/300" }
    ]
  };

  const testimonials = [
    { id: 1, name: "Sarah J.", text: "The booking process was seamless, and the apartment exceeded our expectations.", avatar: "/api/placeholder/60/60" },
    { id: 2, name: "Michael T.", text: "Absolutely stunning apartments and first-class service from start to finish.", avatar: "/api/placeholder/60/60" },
    { id: 3, name: "Emma R.", text: "We've used this service three times now and have never been disappointed.", avatar: "/api/placeholder/60/60" }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 font-sans ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Hero Section */}
      <header className="relative h-screen bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('/api/placeholder/1920/1080')`,
            opacity: 0.6 
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        
        <div className="relative container mx-auto px-6 flex flex-col h-full justify-center z-10">
          <div className={`max-w-3xl transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Find Your Perfect Luxury Apartment</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Experience exceptional living spaces curated for the discerning traveler</p>
            
            {/* Search Form */}
            <div className={`bg-white rounded-lg shadow-xl p-2 mt-8 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-2">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Location</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
                    placeholder="Where are you going?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex-1 p-2">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Check-in</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    value={dateRange.checkIn}
                    onChange={(e) => setDateRange({...dateRange, checkIn: e.target.value})}
                  />
                </div>
                <div className="flex-1 p-2">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Check-out</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    value={dateRange.checkOut}
                    onChange={(e) => setDateRange({...dateRange, checkOut: e.target.value})}
                  />
                </div>
                <div className="flex-1 p-2 relative">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Guests</label>
                  <div 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 cursor-pointer flex items-center justify-between"
                    onClick={() => setShowOptions(!showOptions)}
                  >
                    <span>{guests} Guest{guests !== 1 && 's'}</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                  
                  {showOptions && (
                    <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Adults</span>
                        <div className="flex items-center">
                          <button
                            className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
                            onClick={() => setGuests(Math.max(1, guests - 1))}
                          >-</button>
                          <span className="mx-2">{guests}</span>
                          <button
                            className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
                            onClick={() => setGuests(guests + 1)}
                          >+</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-2 flex items-end">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Apartments */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Featured Apartments
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeTab === 'luxury' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('luxury')}
              >
                Luxury
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'family' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('family')}
              >
                Family-Friendly
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeTab === 'budget' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('budget')}
              >
                Budget
              </button>
            </div>
          </div>
          
          {/* Apartment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApartments[activeTab].map((apartment, index) => (
              <div
                key={apartment.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 transform hover:shadow-xl ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <img
                    src={apartment.image}
                    alt={apartment.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                    ${apartment.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{apartment.name}</h3>
                  <div className="flex items-center mb-4">
                    <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-gray-700">{apartment.rating} Rating</span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-600">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{apartment.location}</span>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition duration-300">
                      View Details
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '150ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Booking</h3>
              <p className="text-gray-600">All transactions are encrypted and your personal information is protected with industry-leading security protocols.</p>
            </div>
            
            <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Properties</h3>
              <p className="text-gray-600">Every apartment is personally inspected and verified to ensure it meets our premium quality standards.</p>
            </div>
            
            <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '450ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our concierge team is available around the clock to assist with any requests during your stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            What Our Guests Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-gray-50 p-6 rounded-lg transition-all duration-700 transform ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <div className="flex text-yellow-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ready to Experience Luxury Living?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '150ms' }}>
            Join thousands of satisfied guests who have discovered their perfect apartment getaway.
          </p>
          <button className={`bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            Browse Apartments
          </button>
        </div>
      </section>
</div>
    );
};

export default ApartmentBookingLandingg;