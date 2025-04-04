import React, { useState, useEffect } from 'react';
import { Menu, X, User, Heart, Bell, ChevronDown } from 'lucide-react';

const PremiumHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with dropdowns
  const navItems = [
    { 
      label: 'Destinations', 
      hasDropdown: true,
      dropdownItems: ['New York', 'Los Angeles', 'Miami', 'Chicago', 'San Francisco']
    },
    { 
      label: 'Apartment Types', 
      hasDropdown: true,
      dropdownItems: ['Luxury Penthouses', 'Modern Studios', 'Family Apartments', 'Beachfront Villas', 'City Lofts']
    },
    { label: 'Special Offers', hasDropdown: false },
    { label: 'About Us', hasDropdown: false },
    { label: 'Contact', hasDropdown: false }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className={`text-2xl font-bold transition-colors duration-300 flex items-center ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}>
              <span className="mr-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 hover:rotate-12"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>
              <span className="relative">
                Luxe<span className="text-blue-500">Stay</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button 
                  onClick={() => item.hasDropdown && toggleDropdown(index)}
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 group ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 origin-top min-w-[200px] ${
                      activeDropdown === index ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                    }`}
                  >
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem, i) => (
                        <a 
                          key={i} 
                          href="#" 
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className={`p-2 rounded-full transition-all duration-300 hover:bg-opacity-20 ${
                isScrolled ? 'hover:bg-blue-100 text-gray-700 hover:text-blue-600' : 'hover:bg-white text-white'
              }`}
            >
              <Heart className="w-5 h-5" />
            </button>
            
            <button 
              className={`p-2 rounded-full transition-all duration-300 hover:bg-opacity-20 ${
                isScrolled ? 'hover:bg-blue-100 text-gray-700 hover:text-blue-600' : 'hover:bg-white text-white'
              }`}
            >
              <Bell className="w-5 h-5" />
            </button>
            
            <button 
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' 
                  : 'border border-white text-white hover:bg-white hover:text-blue-600'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Account</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-100 hover:text-blue-600' 
                : 'text-white hover:bg-white hover:bg-opacity-20'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen overflow-auto' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button 
                  onClick={() => item.hasDropdown && toggleDropdown(index)}
                  className="flex items-center justify-between w-full py-2 font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && (
                  <div 
                    className={`pl-4 border-l-2 border-blue-100 mt-2 mb-4 space-y-2 transition-all duration-300 ${
                      activeDropdown === index ? 'block' : 'hidden'
                    }`}
                  >
                    {item.dropdownItems.map((dropdownItem, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile User Actions */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex space-x-4">
                <button 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                >
                  <Heart className="w-5 h-5" />
                  <span>Favorites</span>
                </button>
                
                <button 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                >
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </button>
              </div>
              
              <button 
                className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              >
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PremiumHeader;
