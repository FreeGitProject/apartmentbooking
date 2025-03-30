import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Star, Check, ArrowLeft, Heart, Share, ArrowRight } from 'lucide-react';

const ApartmentDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDates, setSelectedDates] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Sample apartment data
  const apartment = {
    id: 1,
    title: "Luxury Skyline View Penthouse",
    description: "Experience unparalleled luxury with panoramic views of the city skyline from this exquisite penthouse apartment. This premium accommodation features designer furnishings, state-of-the-art technology, and thoughtful amenities to ensure a memorable stay.",
    detailedDescription: "This spectacular penthouse occupies the entire top floor, offering 360-degree views through floor-to-ceiling windows. The open floor plan creates a seamless flow between the living, dining, and kitchen areas, perfect for entertaining or relaxing.\n\nThe chef's kitchen is equipped with top-of-the-line appliances, marble countertops, and a breakfast bar. The spacious primary bedroom features a king-sized bed with premium linens, a walk-in closet, and an ensuite bathroom with a rainfall shower and deep soaking tub.\n\nThe second bedroom provides a comfortable retreat for additional guests, while the third bedroom can be used as a home office or guest room. Additional highlights include a private outdoor terrace, fireplace, smart home features, and exclusive building amenities.",
    location: "Midtown, New York",
    address: "1234 Luxury Avenue, Midtown, New York, NY 10019",
    price: 550,
    bedrooms: 3,
    bathrooms: 2.5,
    guests: 6,
    size: 2200,
    rating: 4.96,
    reviews: 124,
    amenities: [
      "Floor-to-ceiling windows",
      "Private terrace",
      "Chef's kitchen",
      "Premium furnishings",
      "Smart home features",
      "High-speed WiFi",
      "65\" Smart TV",
      "Washer & Dryer",
      "Central Air Conditioning",
      "Heated Floors",
      "Walk-in closets",
      "Deep soaking tub",
      "Rainfall shower",
      "Fireplace"
    ],
    buildingAmenities: [
      "24/7 Concierge",
      "Rooftop pool",
      "Fitness center",
      "Spa facilities",
      "Business center",
      "Private parking",
      "Security system"
    ],
    houseRules: [
      "No smoking",
      "No parties or events",
      "Check-in: 3:00 PM - 10:00 PM",
      "Checkout: 11:00 AM",
      "Self check-in with building staff"
    ],
    hostInfo: {
      name: "Michael Anderson",
      image: "/api/placeholder/100/100",
      response: "100%",
      responseTime: "within an hour",
      joined: "January 2021",
      verified: true
    },
    images: [
      "/public/image/1.jpg",
      "/public/image/2.jpg",
      "/public/image/3.jpg",
      "/public/image/4.jpg",
      "/api/placeholder/1200/800"
    ],
    calendar: {
      bookedDates: ["2025-04-05", "2025-04-06", "2025-04-10", "2025-04-11", "2025-04-12"]
    },
    reviews1: [
      {
        id: 1,
        user: "Emma Wilson",
        avatar: "/api/placeholder/50/50",
        date: "February 2025",
        rating: 5,
        comment: "This penthouse exceeded all our expectations. The views are absolutely breathtaking, especially at sunset. Every detail of the apartment has been carefully considered. The host was incredibly attentive and responsive. We can't wait to stay here again!"
      },
      {
        id: 2,
        user: "James Rodriguez",
        avatar: "/api/placeholder/50/50",
        date: "January 2025",
        rating: 5,
        comment: "One of the best places I've ever stayed. The location is perfect - close to everything yet peaceful. The amenities are top-notch and the apartment itself is spotless. The building staff was extremely helpful. I highly recommend this luxurious penthouse."
      },
      {
        id: 3,
        user: "Sophia Chen",
        avatar: "/api/placeholder/50/50",
        date: "December 2024",
        rating: 4.5,
        comment: "Beautiful apartment with spectacular views! The furnishings are elegant and comfortable, and the kitchen is a dream to cook in. The only minor issue was some street noise, but that's to be expected in such a central location. The host was very responsive and provided excellent recommendations for local restaurants."
      }
    ]
  };
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleImageChange = (index) => {
    setSelectedImage(index);
  };
  
  const nextImage = () => {
    setSelectedImage((prev) => (prev === apartment.images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? apartment.images.length - 1 : prev - 1));
  };
  
  const handleBooking = () => {
    alert(`Booking request submitted for ${selectedDates.checkIn} to ${selectedDates.checkOut} with ${guests} guests`);
  };
  
  const calculateTotalPrice = () => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) return 0;
    
    const checkIn = new Date(selectedDates.checkIn);
    const checkOut = new Date(selectedDates.checkOut);
    const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    return nights * apartment.price;
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
      
      {isLoading ? (
        <div className="container mx-auto px-4 py-20 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-32 w-32 bg-blue-200 rounded-full mb-8"></div>
            <div className="h-4 bg-blue-200 rounded w-48 mb-4"></div>
            <div className="h-4 bg-blue-200 rounded w-32"></div>
          </div>
        </div>
      ) : (
        <main className="container mx-auto px-4 py-8">
          {/* Apartment Title Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{apartment.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-700 gap-4">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>{apartment.rating} · {apartment.reviews} reviews</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                <span>{apartment.location}</span>
              </div>
              <div className="flex items-center ml-auto gap-2">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                  <span>Save</span>
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                  <Share className="h-4 w-4 text-gray-700" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="relative mb-12 rounded-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={apartment.images[selectedImage]} 
                alt={`Apartment view ${selectedImage + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {apartment.images.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`h-2 w-2 rounded-full ${selectedImage === index ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Apartment Details */}
            <div className="lg:col-span-2">
              {/* Host Information */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                      Entire penthouse hosted by {apartment.hostInfo.name}
                    </h2>
                    <p className="text-gray-700">
                      {apartment.bedrooms} bedrooms · {apartment.bathrooms} bathrooms · {apartment.size} sq ft
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src={apartment.hostInfo.image} 
                      alt={apartment.hostInfo.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                    />
                    {apartment.hostInfo.verified && (
                      <div className="bg-blue-500 text-white p-1 rounded-full absolute translate-x-8 translate-y-8">
                        <Check className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About this space</h3>
                <p className="text-gray-700 mb-4">{apartment.description}</p>
                <p className="text-gray-700 whitespace-pre-line">{apartment.detailedDescription}</p>
              </div>
              
              {/* Amenities */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                  {apartment.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Building Amenities */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Building Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                  {apartment.buildingAmenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* House Rules */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">House Rules</h3>
                <div className="space-y-2">
                  {apartment.houseRules.map((rule, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                      <span className="text-gray-700">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Map Location */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
                <p className="text-gray-700 mb-4">{apartment.address}</p>
                <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map view would be displayed here</p>
                </div>
              </div>
              
              {/* Reviews */}
              <div>
                <div className="flex items-center mb-6">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {apartment.rating} · {apartment.reviews} reviews
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {apartment.reviews1.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-gray-200 last:border-0">
                      <div className="flex items-center mb-3">
                        <img 
                          src={review.avatar} 
                          alt={review.user} 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{review.user}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-gray-700">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Booking Widget */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${apartment.price}</span>
                    <span className="text-gray-600"> / night</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-gray-700">{apartment.rating}</span>
                  </div>
                </div>
                
                {/* Date Selection */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                      <input 
                        type="date" 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedDates.checkIn}
                        onChange={(e) => setSelectedDates({...selectedDates, checkIn: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                      <input 
                        type="date" 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedDates.checkOut}
                        onChange={(e) => setSelectedDates({...selectedDates, checkOut: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <select 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                    >
                      {[...Array(apartment.guests)].map((_, i) => (
                        <option key={i+1} value={i+1}>{i+1} {i === 0 ? 'guest' : 'guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <button 
                  onClick={handleBooking}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition mb-4"
                >
                  Reserve
                </button>
                
                {/* Price Calculation */}
                {selectedDates.checkIn && selectedDates.checkOut && (
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">
                        ${apartment.price} x {Math.round((new Date(selectedDates.checkOut) - new Date(selectedDates.checkIn)) / (1000 * 60 * 60 * 24))} nights
                      </span>
                      <span className="text-gray-700">${calculateTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Cleaning fee</span>
                      <span className="text-gray-700">$150</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Service fee</span>
                      <span className="text-gray-700">${Math.round(calculateTotalPrice() * 0.12)}</span>
                    </div>
                    <div className="flex justify-between pt-3 mt-3 border-t border-gray-200 font-semibold">
                      <span>Total</span>
                      <span>${calculateTotalPrice() + 150 + Math.round(calculateTotalPrice() * 0.12)}</span>
                    </div>
                  </div>
                )}
                
                {/* Host Info Mini */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <img 
                      src={apartment.hostInfo.image} 
                      alt={apartment.hostInfo.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Hosted by {apartment.hostInfo.name}</p>
                      <p className="text-sm text-gray-500">Joined in {apartment.hostInfo.joined}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span>Response rate: {apartment.hostInfo.response}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span>Response time: {apartment.hostInfo.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      
      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LuxeStay</h3>
              <p className="text-gray-400 text-sm">
                Premium luxury accommodations in the world's most desirable locations.
              </p>
            </div>
            <div>
              <h4 className="text-md font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Safety Information</a></li>
                <li><a href="#" className="hover:text-white transition">Cancellation Options</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
                <li><a href="#" className="hover:text-white transition">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2025 LuxeStay. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default ApartmentDetailPage;