import React, { useState, useEffect } from 'react';
import { MapPin, Star, Filter, Search, ChevronDown, X } from 'lucide-react';

const ApartmentListingsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState([100, 1000]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  
  // Sample data for apartments
  const apartments = [
    {
      id: 1,
      title: "Luxury Skyline View",
      description: "Experience unparalleled luxury with panoramic views of the city skyline from this exquisite apartment featuring premium furnishings and state-of-the-art amenities.",
      location: "Downtown, New York",
      price: 250,
      bedrooms: 2,
      bathrooms: 2,
      size: 1200,
      rating: 4.9,
      reviews: 124,
      amenities: ["Pool", "Gym", "Parking", "WiFi", "Air Conditioning", "Kitchen", "TV"],
      images: ["/public/image/1.jpg", "/api/placeholder/800/500", "/api/placeholder/800/500"],
    },
    {
      id: 2,
      title: "Beachfront Paradise",
      description: "Wake up to the sound of waves in this stunning beachfront apartment with direct beach access, spacious balcony, and breathtaking ocean views.",
      location: "Miami Beach, Florida",
      price: 320,
      bedrooms: 3,
      bathrooms: 2,
      size: 1500,
      rating: 4.8,
      reviews: 96,
      amenities: ["Beach Access", "Pool", "Gym", "Parking", "WiFi", "Air Conditioning", "Kitchen"],
      images: ["/public/image/2.jpg", "/api/placeholder/800/500", "/api/placeholder/800/500"],
    },
    {
      id: 3,
      title: "Modern Urban Loft",
      description: "This stylish urban loft combines industrial elements with modern luxury, featuring high ceilings, exposed brick, and contemporary furnishings in the heart of the city.",
      location: "San Francisco, California",
      price: 275,
      bedrooms: 1,
      bathrooms: 1,
      size: 950,
      rating: 4.7,
      reviews: 83,
      amenities: ["Gym", "Parking", "WiFi", "Air Conditioning", "Kitchen", "Workspace"],
      images: ["/public/image/3.jpg", "/api/placeholder/800/500", "/api/placeholder/800/500"],
    },
    {
      id: 4,
      title: "Historic Townhouse Suite",
      description: "Stay in a beautifully restored historic townhouse with modern amenities, featuring original architectural details and a private garden.",
      location: "Boston, Massachusetts",
      price: 290,
      bedrooms: 2,
      bathrooms: 2.5,
      size: 1350,
      rating: 4.9,
      reviews: 107,
      amenities: ["Garden", "Parking", "WiFi", "Air Conditioning", "Kitchen", "Fireplace"],
      images: ["/public/image/4.jpg", "/api/placeholder/800/500", "/api/placeholder/800/500"],
    },
    {
      id: 5,
      title: "Lakeside Retreat",
      description: "Escape to this serene lakeside apartment with floor-to-ceiling windows offering spectacular water views and access to private dock and nature trails.",
      location: "Lake Tahoe, Nevada",
      price: 340,
      bedrooms: 3,
      bathrooms: 2,
      size: 1600,
      rating: 4.8,
      reviews: 65,
      amenities: ["Lake Access", "Hot Tub", "Parking", "WiFi", "Air Conditioning", "Kitchen", "Fireplace"],
      images: ["/public/image/5.jpg", "/api/placeholder/800/500", "/api/placeholder/800/500"],
    },
    {
      id: 6,
      title: "Luxury Penthouse",
      description: "Experience the pinnacle of luxury living in this spectacular penthouse featuring a private rooftop terrace, floor-to-ceiling windows, and premium designer furnishings.",
      location: "Chicago, Illinois",
      price: 450,
      bedrooms: 4,
      bathrooms: 3.5,
      size: 2200,
      rating: 5.0,
      reviews: 42,
      amenities: ["Rooftop Terrace", "Pool", "Gym", "Parking", "WiFi", "Air Conditioning", "Kitchen", "Concierge"],
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500", "/api/placeholder/800/500"],
    }
  ];
  
  const cities = ["New York", "Miami", "San Francisco", "Boston", "Lake Tahoe", "Chicago", "Los Angeles"];
  const amenitiesList = ["Pool", "Gym", "Parking", "WiFi", "Air Conditioning", "Kitchen", "TV", "Beach Access", "Lake Access", "Hot Tub", "Fireplace", "Workspace", "Rooftop Terrace", "Concierge", "Garden"];
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const toggleBedroom = (bedroom) => {
    if (selectedBedrooms.includes(bedroom)) {
      setSelectedBedrooms(selectedBedrooms.filter(item => item !== bedroom));
    } else {
      setSelectedBedrooms([...selectedBedrooms, bedroom]);
    }
  };
  
  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(item => item !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">LuxeStay</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-blue-600 font-medium">Apartments</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Locations</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </nav>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">Sign In</button>
          </div>
        </div>
      </header> */}
      
      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="relative flex-grow mb-4 md:mb-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search locations, apartments..."
              />
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <ChevronDown className={`h-4 w-4 ml-2 transform transition ${filtersOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <select className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg border-none focus:ring-blue-500">
                <option>Sort: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Most Reviews</option>
              </select>
            </div>
          </div>
          
          {/* Filter Panel */}
          {filtersOpen && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Price Range (per night)</h3>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      className="w-24 px-3 py-2 border border-gray-300 rounded"
                      placeholder="Min"
                      min="0"
                      value={selectedPrice[0]}
                      onChange={(e) => setSelectedPrice([parseInt(e.target.value), selectedPrice[1]])}
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="number"
                      className="w-24 px-3 py-2 border border-gray-300 rounded"
                      placeholder="Max"
                      min="0"
                      value={selectedPrice[1]}
                      onChange={(e) => setSelectedPrice([selectedPrice[0], parseInt(e.target.value)])}
                    />
                    <span className="text-gray-500">USD</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Bedrooms</h3>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, "5+"].map(bedroom => (
                      <button
                        key={bedroom}
                        className={`px-3 py-1 rounded ${selectedBedrooms.includes(bedroom) 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-400'}`}
                        onClick={() => toggleBedroom(bedroom)}
                      >
                        {bedroom} {bedroom === 1 ? 'bed' : 'beds'}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Location</h3>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded">
                    <option value="">Any location</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {amenitiesList.map(amenity => (
                    <button
                      key={amenity}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedAmenities.includes(amenity)
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-400'
                      }`}
                      onClick={() => toggleAmenity(amenity)}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <button className="text-gray-600 hover:text-gray-800 transition flex items-center">
                  <X className="h-4 w-4 mr-1" />
                  Clear all filters
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Show results
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Results Summary */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Premium Apartments</h2>
          <p className="text-gray-600">{apartments.length} luxury accommodations found</p>
        </div>
        
        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(placeholder => (
              <div key={placeholder} className="bg-white rounded-xl overflow-hidden shadow animate-pulse">
                <div className="h-60 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/4 mb-4"></div>
                  <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Apartment Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map(apartment => (
              <div 
                key={apartment.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="overflow-hidden h-60">
                    <img 
                      src={apartment.images[0]}
                      alt={apartment.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-blue-900">
                    ${apartment.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-blue-600 w-4 h-4 mr-1" />
                    <span className="text-gray-500 text-sm">{apartment.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{apartment.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{apartment.description}</p>
                  
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <span className="mr-3">{apartment.bedrooms} {apartment.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                    <span className="mr-3">{apartment.bathrooms} {apartment.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                    <span>{apartment.size} sq ft</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {apartment.amenities.slice(0, 3).map(amenity => (
                      <span key={amenity} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                    {apartment.amenities.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{apartment.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="text-yellow-500 w-4 h-4 fill-current" />
                      <span className="ml-1 text-gray-700 font-medium">{apartment.rating}</span>
                      <span className="ml-1 text-gray-500">({apartment.reviews} reviews)</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-1">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition">
              Previous
            </button>
            {[1, 2, 3, 4, 5].map(page => (
              <button 
                key={page}
                className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                  page === 1 
                    ? 'bg-blue-600 text-white' 
                    : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                } transition`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition">
              Next
            </button>
          </div>
        </div>
      </main>
      
    
      
      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ApartmentListingsPage;