// import { useState, useEffect, useRef } from 'react';
// import { Users, Star, Info, DollarSign, ArrowLeft, Menu, X, Eye, Calendar, MapPin, Clock, MessageCircle, ChevronDown, ChevronUp, Maximize, Minimize, Compass, Monitor, Sun, Coffee, Umbrella, AlertTriangle } from 'lucide-react';

// export default function UltraRealisticStadium() {
//   const [selectedSection, setSelectedSection] = useState(null);
//   const [viewMode, setViewMode] = useState('realistic'); // 'realistic', 'topDown', 'schematic'
//   const [selectedSeat, setSelectedSeat] = useState(null);
//   const [seatInfo, setSeatInfo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [activeTab, setActiveTab] = useState('seating');
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [showFilters, setShowFilters] = useState(false);
//   const [filters, setFilters] = useState({
//     priceMax: 500,
//     showSoldOut: true,
//     seatTypes: ['standard', 'premium', 'vip', 'platinum', 'corporate']
//   });
//   const [showInfoPanel, setShowInfoPanel] = useState(true);
//   const [rotation, setRotation] = useState(0);
//   const [weather, setWeather] = useState('sunny');
//   const [timeOfDay, setTimeOfDay] = useState('day');
  
//   const stadiumRef = useRef(null);

//   // Event details
//   const eventDetails = {
//     name: "ICC World Cup Final",
//     teams: "India vs Australia",
//     date: "June 18, 2025",
//     time: "10:30 AM",
//     venue: "Melbourne Cricket Ground",
//     location: "Melbourne, Australia",
//     capacity: 100024,
//     matchType: "One Day International",
//   };
  
//   // Stadium sections data with real-world details
//   const sections = [
//     { 
//       id: 'membersPavilion', 
//       name: 'Members Pavilion', 
//       color: 'bg-red-800', 
//       premiumPercent: 95, 
//       capacity: 8500,
//       features: ['Reserved seating', 'Bar access', 'Food service', 'Player view'],
//       restrictions: ['Members only', 'Dress code'],
//       popularityScore: 9.8,
//       position: { x: 50, y: 25, angle: 180, size: 1.5 }
//     },
//     { 
//       id: 'olympicStand', 
//       name: 'Olympic Stand', 
//       color: 'bg-blue-700', 
//       premiumPercent: 70, 
//       capacity: 18000,
//       features: ['Great views', 'Covered seating', 'Food court'],
//       restrictions: [],
//       popularityScore: 8.4,
//       position: { x: 80, y: 40, angle: 240, size: 1.3 }
//     },
//     { 
//       id: 'ponsfordStand', 
//       name: 'Ponsford Stand', 
//       color: 'bg-green-700', 
//       premiumPercent: 60, 
//       capacity: 21000,
//       features: ['Covered seating', 'Food outlets'],
//       restrictions: [],
//       popularityScore: 8.0,
//       position: { x: 85, y: 65, angle: 290, size: 1.2 }
//     },
//     { 
//       id: 'greatSouthernStand', 
//       name: 'Great Southern Stand', 
//       color: 'bg-purple-800', 
//       premiumPercent: 40, 
//       capacity: 25000,
//       features: ['Large food court', 'Family area'],
//       restrictions: [],
//       popularityScore: 7.5,
//       position: { x: 50, y: 85, angle: 0, size: 1.6 }
//     },
//     { 
//       id: 'shaneBowlStand', 
//       name: 'Shane Warne Stand', 
//       color: 'bg-yellow-700', 
//       premiumPercent: 55, 
//       capacity: 15000,
//       features: ['Good views', 'Covered areas'],
//       restrictions: [],
//       popularityScore: 8.2,
//       position: { x: 15, y: 65, angle: 70, size: 1.2 }
//     },
//     { 
//       id: 'corporateBoxes', 
//       name: 'Corporate Boxes', 
//       color: 'bg-indigo-900', 
//       premiumPercent: 100, 
//       capacity: 5000,
//       features: ['Private boxes', 'Premium catering', 'Waitstaff', 'Best views'],
//       restrictions: ['Corporate tickets only'],
//       popularityScore: 9.9,
//       position: { x: 20, y: 40, angle: 120, size: 0.9 }
//     },
//     { 
//       id: 'eastWingTerraces', 
//       name: 'East Wing Terraces', 
//       color: 'bg-amber-700', 
//       premiumPercent: 20, 
//       capacity: 12000,
//       features: ['Open air seating', 'Budget friendly'],
//       restrictions: [],
//       popularityScore: 6.8,
//       position: { x: 70, y: 30, angle: 210, size: 1.1 }
//     },
//     { 
//       id: 'northernFamilyZone', 
//       name: 'Northern Family Zone', 
//       color: 'bg-emerald-600', 
//       premiumPercent: 15, 
//       capacity: 8000,
//       features: ['Family friendly', 'Play areas', 'Kid meals'],
//       restrictions: [],
//       popularityScore: 7.0,
//       position: { x: 30, y: 30, angle: 150, size: 1.0 }
//     },
//   ];
  
//   // Enhanced seat types with more details
//   const seatTypes = [
//     { 
//       id: 'standard', 
//       name: 'Standard', 
//       color: 'bg-blue-500',
//       hoverColor: 'hover:bg-blue-400',
//       price: 45,
//       description: 'Regular seating with good views of the field',
//       amenities: ['Basic seat', 'Access to public concessions']
//     },
//     { 
//       id: 'premium', 
//       name: 'Premium', 
//       color: 'bg-purple-600',
//       hoverColor: 'hover:bg-purple-500',
//       price: 95,
//       description: 'Enhanced seating with better views',
//       amenities: ['Padded seat', 'Cup holder', 'Better viewing angle']
//     },
//     { 
//       id: 'vip', 
//       name: 'VIP', 
//       color: 'bg-pink-600',
//       hoverColor: 'hover:bg-pink-500',
//       price: 195,
//       description: 'Superior seating with exclusive amenities',
//       amenities: ['Padded seat', 'Extra legroom', 'Access to VIP lounges', 'Express entry']
//     },
//     { 
//       id: 'platinum', 
//       name: 'Platinum', 
//       color: 'bg-amber-500',
//       hoverColor: 'hover:bg-amber-400',
//       price: 295,
//       description: 'Premium location with dedicated services',
//       amenities: ['Luxury seat', 'Premium food & beverage options', 'Dedicated waitstaff', 'Best views']
//     },
//     { 
//       id: 'corporate', 
//       name: 'Corporate Box', 
//       color: 'bg-rose-700',
//       hoverColor: 'hover:bg-rose-600',
//       price: 495,
//       description: 'Private box seating for corporate guests',
//       amenities: ['Private suite', 'Exclusive catering', 'Premium bar service', 'Private screens', 'Climate control']
//     },
//   ];
  
//   // Generate hyper-realistic seats for each section
//   const generateSeats = (sectionId) => {
//     setLoading(true);
    
//     // Find the section
//     const section = sections.find(s => s.id === sectionId);
//     if (!section) return [];
    
//     const seats = [];
    
//     // Determine rows based on capacity
//     const rowsCount = Math.ceil(Math.sqrt(section.capacity / 15));
//     const seatsPerRow = Math.ceil(section.capacity / rowsCount);
    
//     // Generate rows using custom stadium row naming
//     const generateRowName = (index) => {
//       // For premium sections like member pavilion and corporate boxes, use different naming convention
//       if (section.id === 'membersPavilion' || section.id === 'corporateBoxes') {
//         if (index < 5) return `P${index + 1}`;
//         return `M${index - 4}`;
//       }
      
//       // For regular sections
//       if (index < 26) return String.fromCharCode(65 + index);
//       return String.fromCharCode(65 + Math.floor(index / 26) - 1) + String.fromCharCode(65 + (index % 26));
//     };
    
//     // Create blocks to simulate realistic stadium layout (sections have blocks)
//     const blockCount = Math.floor(section.capacity / 2000) + 1;
//     const blocks = Array.from({length: blockCount}, (_, i) => {
//       const blockName = String.fromCharCode(65 + i % 26);
//       return {
//         name: blockName,
//         rowOffset: Math.floor(i / blockCount * rowsCount / 3) // Offset rows to simulate stadium tiers
//       };
//     });
    
//     // Generate seats with realistic patterns
//     blocks.forEach(block => {
//       const blockRowCount = Math.floor(rowsCount / blockCount) + 1;
      
//       for (let r = 0; r < blockRowCount; r++) {
//         const actualRow = r + block.rowOffset;
//         if (actualRow >= rowsCount) continue;
        
//         const rowName = generateRowName(actualRow);
//         // Each block has slightly different number of seats per row
//         const blockSeatsPerRow = Math.floor(seatsPerRow / blockCount) + Math.floor(Math.random() * 5);
        
//         for (let s = 1; s <= blockSeatsPerRow; s++) {
//           // Determine seat type based on section's premium percentage and row number
//           let seatType;
//           const rand = Math.random() * 100;
//           const rowPercentile = (actualRow / rowsCount) * 100;
          
//           // More nuanced seat type distribution
//           if (section.id === 'corporateBoxes') {
//             seatType = rowPercentile < 50 ? 'corporate' : 'platinum';
//           } else if (section.id === 'membersPavilion' && rowPercentile < 30) {
//             seatType = rowPercentile < 15 ? 'platinum' : 'vip';
//           } else if (rand < section.premiumPercent && rowPercentile < 20) {
//             seatType = rowPercentile < 10 ? 'platinum' : 'vip';
//           } else if (rand < section.premiumPercent && rowPercentile < 40) {
//             seatType = 'premium';
//           } else {
//             seatType = 'standard';
//           }
          
//           // Determine availability with realistic patterns
//           const isAvailable = (() => {
//             // Create realistic booking patterns
            
//             // Premium seats get booked faster
//             const baseAvailability = seatType === 'corporate' ? 0.3 :
//                                   seatType === 'platinum' ? 0.4 :
//                                   seatType === 'vip' ? 0.5 :
//                                   seatType === 'premium' ? 0.65 : 0.75;
            
//             // Middle seats in a row are preferred (bell curve distribution)
//             const positionFactor = 0.2 - Math.pow((s / blockSeatsPerRow) - 0.5, 2) * 2;
            
//             // Front rows are premium and book faster
//             const rowFactor = (actualRow / rowsCount) * 0.4;
            
//             // Certain sections are more popular (Members Pavilion, etc.)
//             const popularityFactor = (section.popularityScore / 10) * 0.2;
            
//             // Some randomness for realism
//             const randomFactor = Math.random() * 0.1;
            
//             // Seats tend to be booked in groups (adjacent seats)
//             const groupFactor = (isNaN(seats[seats.length - 1]?.isAvailable) || s % 4 === 1) ? 0 : 
//                                (!seats[seats.length - 1]?.isAvailable ? -0.3 : 0.3);
            
//             return Math.random() < (baseAvailability + positionFactor + rowFactor - popularityFactor + randomFactor + groupFactor);
//           })();
          
//           // Create view rating based on position
//           // Best views are typically in the middle and lower rows
//           const horizontalViewQuality = 1 - Math.abs((s / blockSeatsPerRow) - 0.5) * 1.5;
//           const verticalViewQuality = 1 - (actualRow / rowsCount) * 0.7;
//           const viewRating = Math.min(10, Math.max(1, Math.floor((horizontalViewQuality + verticalViewQuality) * 5)));
          
//           // Create view obstruction simulation
//           let viewObstruction = null;
//           if (viewRating < 4 && Math.random() < 0.3) {
//             const obstructions = ['pillar', 'railing', 'partial'];
//             viewObstruction = obstructions[Math.floor(Math.random() * obstructions.length)];
//           }
          
//           // Add seat to the collection
//           seats.push({
//             id: `${section.id}-${block.name}${rowName}-${s}`,
//             section: section.id,
//             sectionName: section.name,
//             block: block.name,
//             row: rowName,
//             number: s,
//             type: seatType,
//             price: seatTypes.find(st => st.id === seatType).price + (viewRating > 8 ? 20 : 0) - (viewObstruction ? 15 : 0),
//             isAvailable,
//             // Enhanced seat features
//             hasCharger: ['corporate', 'platinum', 'vip'].includes(seatType) && Math.random() > 0.3,
//             hasCushion: ['corporate', 'platinum', 'vip', 'premium'].includes(seatType),
//             hasService: ['corporate', 'platinum'].includes(seatType),
//             hasExtraLegroom: ['corporate', 'platinum', 'vip'].includes(seatType) || (seatType === 'premium' && Math.random() > 0.7),
//             hasShade: Math.random() > 0.5,
//             viewRating,
//             viewObstruction,
//             distanceToField: Math.floor(20 + (actualRow / rowsCount) * 80),
//             cateringAccess: ['corporate', 'platinum'].includes(seatType) ? 'in-seat' : 
//                            (seatType === 'vip' ? 'premium lounge' : 'concessions')
//           });
//         }
//       }
//     });
    
//     // Sort seats for easier display
//     seats.sort((a, b) => {
//       if (a.block !== b.block) return a.block.localeCompare(b.block);
//       if (a.row !== b.row) return a.row.localeCompare(b.row);
//       return a.number - b.number;
//     });
    
//     // Simulate loading time for realism
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
    
//     return seats;
//   };
  
//   // Generate seats when a section is selected
//   const [seats, setSeats] = useState([]);
  
//   useEffect(() => {
//     if (selectedSection) {
//       const generatedSeats = generateSeats(selectedSection.id);
//       setSeats(generatedSeats);
//     } else {
//       setSeats([]);
//     }
//     setSelectedSeat(null);
//     setSeatInfo(null);
//   }, [selectedSection]);
  
//   const handleSectionClick = (section) => {
//     setSelectedSection(section);
//   };
  
//   const handleSeatClick = (seat) => {
//     if (!seat.isAvailable) return;
//     setSelectedSeat(seat);
//     setSeatInfo(seat);
//   };
  
//   const toggleViewMode = (mode) => {
//     setViewMode(mode);
//   };
  
//   const handleRotate = (direction) => {
//     setRotation(prev => (prev + (direction === 'right' ? 45 : -45)) % 360);
//   };
  
//   // Filter displayed seats
//   const filteredSeats = seats.filter(seat => {
//     if (!filters.showSoldOut && !seat.isAvailable) return false;
//     if (seat.price > filters.priceMax) return false;
//     if (!filters.seatTypes.includes(seat.type)) return false;
//     return true;
//   });
  
//   // Group seats by block and row for display
//   const groupedSeats = {};
//   filteredSeats.forEach(seat => {
//     const key = `${seat.block}-${seat.row}`;
//     if (!groupedSeats[key]) {
//       groupedSeats[key] = [];
//     }
//     groupedSeats[key].push(seat);
//   });
  
//   const setSeatTypeFilter = (type, enabled) => {
//     if (enabled) {
//       setFilters(prev => ({...prev, seatTypes: [...prev.seatTypes, type]}));
//     } else {
//       setFilters(prev => ({...prev, seatTypes: prev.seatTypes.filter(t => t !== type)}));
//     }
//   };

//   // Calculate stats for the currently selected section
//   const getSectionStats = () => {
//     if (!selectedSection || !seats.length) return null;
    
//     const availableSeats = seats.filter(s => s.isAvailable).length;
//     const availablePercentage = Math.round((availableSeats / seats.length) * 100);
//     const premium = seats.filter(s => ['vip', 'platinum', 'corporate'].includes(s.type)).length;
//     const premiumPercentage = Math.round((premium / seats.length) * 100);
    
//     return {
//       total: seats.length,
//       available: availableSeats,
//       availablePercentage,
//       premium,
//       premiumPercentage,
//       lowestPrice: Math.min(...seats.filter(s => s.isAvailable).map(s => s.price)) || 'N/A'
//     };
//   };
  
//   const sectionStats = getSectionStats();
  
//   return (
//     <div className="flex flex-col w-full max-w-5xl mx-auto bg-gray-900 rounded-lg text-gray-100 shadow-2xl">
//       {/* Header */}
//       <div className="w-full bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-t-lg">
//         <div className="flex justify-between items-center mb-2">
//           <h1 className="text-2xl font-bold flex items-center gap-2">
//             <img src="/api/placeholder/40/40" alt="MCG" className="rounded-full" />
//             Melbourne Cricket Ground
//           </h1>
//           <div className="flex items-center gap-4">
//             <div className="hidden md:flex items-center gap-1 text-sm bg-blue-800 px-3 py-1 rounded-full">
//               <Eye size={14} />
//               <span>Interactive 3D</span>
//             </div>
//             <div className="flex items-center gap-1 text-sm bg-green-800 px-3 py-1 rounded-full">
//               <Users size={14} />
//               <span>{eventDetails.capacity.toLocaleString()} capacity</span>
//             </div>
//           </div>
//         </div>
        
//         <div className="flex flex-wrap justify-between items-center text-sm">
//           <div className="flex items-center gap-2 mb-1">
//             <Calendar size={16} />
//             <span>{eventDetails.date}</span>
//             <span className="mx-1">•</span>
//             <Clock size={16} />
//             <span>{eventDetails.time}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Shield size={16} className="text-red-400" />
//             <span>{eventDetails.teams}</span>
//             <span className="mx-1">•</span>
//             <span>{eventDetails.matchType}</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Main content */}
//       <div className="flex flex-col md:flex-row">
//         {/* Stadium visualization */}
//         <div className={`w-full ${selectedSection ? 'md:w-3/5' : ''} p-4 relative`}>
//           {/* View controls */}
//           <div className="absolute top-4 right-4 z-10 flex bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//             <button 
//               className={`p-2 ${viewMode === 'realistic' ? 'bg-blue-700' : 'bg-gray-700'}`}
//               onClick={() => toggleViewMode('realistic')}
//               title="Realistic View"
//             >
//               <Monitor size={18} />
//             </button>
//             <button 
//               className={`p-2 ${viewMode === 'topDown' ? 'bg-blue-700' : 'bg-gray-700'}`}
//               onClick={() => toggleViewMode('topDown')}
//               title="Top Down View"
//             >
//               <Compass size={18} />
//             </button>
//             <button 
//               className={`p-2 ${viewMode === 'schematic' ? 'bg-blue-700' : 'bg-gray-700'}`}
//               onClick={() => toggleViewMode('schematic')}
//               title="Schematic View"
//             >
//               <Layers size={18} />
//             </button>
//           </div>
          
//           {/* Zoom and rotation controls */}
//           <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
//             <div className="flex bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//               <button 
//                 className="p-2 bg-gray-700"
//                 onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2))}
//                 title="Zoom In"
//               >
//                 <Maximize size={18} />
//               </button>
//               <button 
//                 className="p-2 bg-gray-700"
//                 onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.6))}
//                 title="Zoom Out"
//               >
//                 <Minimize size={18} />
//               </button>
//             </div>
//             {viewMode !== 'topDown' && (
//               <div className="flex bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//                 <button 
//                   className="p-2 bg-gray-700"
//                   onClick={() => handleRotate('left')}
//                   title="Rotate Left"
//                 >
//                   <ArrowLeft size={18} />
//                 </button>
//                 <button 
//                   className="p-2 bg-gray-700"
//                   onClick={() => handleRotate('right')}
//                   title="Rotate Right"
//                 >
//                   <ArrowLeft size={18} className="transform rotate-180" />
//                 </button>
//               </div>
//             )}
//             {viewMode === 'realistic' && (
//               <div className="flex bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//                 <button 
//                   className={`p-2 ${timeOfDay === 'day' ? 'bg-blue-700' : 'bg-gray-700'}`}
//                   onClick={() => setTimeOfDay('day')}
//                   title="Day"
//                 >
//                   <Sun size={18} />
//                 </button>
//                 <button 
//                   className={`p-2 ${weather === 'sunny' ? 'bg-yellow-700' : 'bg-gray-700'}`}
//                   onClick={() => setWeather(weather === 'sunny' ? 'cloudy' : 'sunny')}
//                   title={weather === 'sunny' ? 'Change to Cloudy' : 'Change to Sunny'}
//                 >
//                   {weather === 'sunny' ? <Umbrella size={18} /> : <Coffee size={18} />}
//                 </button>
//               </div>
//             )}
//           </div>
          
//           {/* Stadium visualization */}
//           <div 
//             ref={stadiumRef}
//             className={`relative mx-auto transition-all duration-500 overflow-hidden
//                        ${viewMode === 'realistic' ? 'h-96 w-full' : 'h-80 w-full rounded-full'}
//                        ${viewMode === 'schematic' ? 'rounded-2xl' : ''}
//                       `}
//             style={{
//               transform: `scale(${zoomLevel})`,
//               transformOrigin: 'center'
//             }}
//           >
//             {/* Stadium background effects */}
//             <div 
//               className={`absolute inset-0 ${viewMode === 'topDown' ? 'bg-green-900' : 'bg-gradient-to-b from-blue-900 to-green-900'}
//                          ${viewMode === 'schematic' ? 'bg-gray-800' : ''}
//                          ${weather === 'cloudy' && viewMode === 'realistic' ? 'opacity-80' : 'opacity-100'}
//                          transition-all duration-300`}
//             >
//               {viewMode === 'realistic' && (
//                 <div className={`absolute inset-0 bg-[url('/api/placeholder/1600/800')] bg-cover bg-center opacity-30`}></div>
//               )}
//             </div>
            
//             {/* Field */}
//             <div className={`absolute transition-all duration-500
//                            ${viewMode === 'realistic' ? 'scale-75 translate-y-10' : 'scale-100'}`}
//                 style={{
//                   inset: '10%',
//                   transform: `${viewMode === 'topDown' ? '' : 'perspective(1000px) rotateX(60deg)'} 
//                              rotate(${viewMode === 'topDown' ? rotation : 0}deg)`
//                 }}
//             >
//               {/* Cricket field */}
//               <div className={`absolute inset-0 ${viewMode === 'schematic' ? 'bg-green-700' : 'bg-green-600'} rounded-full shadow-inner
//                              ${viewMode === 'realistic' ? 'bg-gradient-to-b from-green-700 to-green-500' : ''}`}>
//                 {/* Inner circle */}
//                 <div className={`absolute 
//                                ${viewMode === 'schematic' ? 'inset-12 bg-green-600' : 'inset-12 bg-gradient-to-b from-green-600 to-green-400'}
//                                rounded-full`}>
//                   {viewMode !== 'schematic' && (
//                     <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-30"></div>
//                   )}
//                 </div>
                
//                 {/* Pitch */}
//                 <div className={`absolute ${viewMode === 'schematic' ? 'inset-28' : 'inset-24'} flex items-center justify-center`}>
//                   {viewMode === 'schematic' ? (
//                     <div className="w-32 h-10 bg-yellow-700 rounded-sm"></div>
//                   ) : (
//                     <div className="w-36 h-12 bg-yellow-800 rounded-sm border border-yellow-700 shadow-lg flex items-center justify-center">
//                       <div className="w-28 h-8 bg-yellow-700"></div>
//                     </div>
//                   )}
//                 </div>
                
//                 {/* Field markings only visible in realistic and top down views */}
//                 {viewMode !== 'schematic' && (
//                   <>
//                     <div className="absolute inset-16 rounded-full border-2 border-dashed border-white border-opacity-20"></div>
//                     <div className="absolute inset-20 rounded-full border border-white border-opacity-10"></div>
//                     {/* Wickets */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-48 flex justify-between">
//                         <div className="h-3 w-1 bg-white"></div>
//                         <div className="h-3 w-1 bg-white"></div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//             </div>
//             </div>
//             </div>
           
//             {/* Stadium sections */}
// {sections.map((section, index) => {
//   // Calculate position for the section based on the mode
//   let styles = {};
  
//   if (viewMode === 'topDown') {
//     // Calculate the position for each section around the field
//     const angle = (index / sections.length) * 2 * Math.PI + (rotation * Math.PI / 180);
//     const distance = 45;
//     const x = 50 + distance * Math.cos(angle);
//     const y = 50 + distance * Math.sin(angle);
    
//     styles = {
//       left: `${x}%`,
//       top: `${y}%`,
//       width: `${section.position.size * 15}%`,
//       height: `${8}%`,
//       transform: `translate(-50%, -50%) rotate(${angle + Math.PI/2}rad)`
//     };
//   } else if (viewMode === 'schematic') {
//     // Schematic view positions sections along the perimeter
//     const angle = (index / sections.length) * 360;
//     const segment = 360 / sections.length;
    
//     styles = {
//       position: 'absolute',
//       width: `${100 * Math.sin(Math.PI / sections.length)}%`,
//       height: '40%',
//       transformOrigin: 'bottom center',
//       bottom: '50%',
//       left: '50%',
//       transform: `rotate(${angle + rotation}deg) translateX(-50%)`
//     };
//   } else {
//     // Realistic view uses custom positions
//     const position = section.position;
    
//     // Apply rotation to sections in realistic view
//     const rotationInRadians = rotation * (Math.PI / 180);
//     const centerX = 50;
//     const centerY = 50;
    
//     // Calculate rotated position
//     const translatedX = position.x - centerX;
//     const translatedY = position.y - centerY;
//     const rotatedX = centerX + 
//       translatedX * Math.cos(rotationInRadians) - 
//       translatedY * Math.sin(rotationInRadians);
//     const rotatedY = centerY + 
//       translatedX * Math.sin(rotationInRadians) + 
//       translatedY * Math.cos(rotationInRadians);
    
//     styles = {
//       left: `${rotatedX}%`,
//       top: `${rotatedY}%`,
//       width: `${position.size * 15}%`,
//       height: `${position.size * 10}%`,
//       transform: `translate(-50%, -50%) rotate(${position.angle + rotation}deg) perspective(1000px) rotateX(30deg)`
//     };
    
//   }
  
//   return (
//     <div 
//       key={section.id}
//       className={`absolute ${section.color} flex items-center justify-center cursor-pointer 
//                   transition-all duration-300 ${selectedSection?.id === section.id ? 'ring-4 ring-white' : 'ring-1 ring-gray-400'}
//                   ${viewMode === 'schematic' ? 'rounded-none' : 'rounded-lg shadow-lg'}`}
//       style={styles}
//       onClick={() => handleSectionClick(section)}
//     >
//       {(viewMode === 'topDown' || viewMode === 'schematic' || 
//        (viewMode === 'realistic' && section.position.size > 1.0)) && (
//         <span className={`font-bold text-center text-white text-xs md:text-sm
//                           ${viewMode === 'realistic' ? 'transform -rotate-x-30 -rotate-y-30' : ''}
//                           truncate max-w-full px-1`}>
//           {section.name}
//         </span>
//       )}
      
//       {/* Capacity indicator for schematic view */}
//       {viewMode === 'schematic' && (
//         <span className="absolute bottom-1 text-xs opacity-80">
//           {(section.capacity / 1000).toFixed(1)}K
//         </span>
//       )}
      
//       {/* Only show availability indicator in realistic view */}
//       {viewMode === 'realistic' && selectedSection?.id !== section.id && (
//         <span className={`absolute bottom-1 right-1 w-2 h-2 rounded-full
//                         ${section.premiumPercent > 80 ? 'bg-red-500' : 
//                           section.premiumPercent > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}>
//         </span>
//       )}
//     </div>
//      </div>
//   );
// })}