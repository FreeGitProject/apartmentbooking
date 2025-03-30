function Footer() {
    return (
        
         <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
         <div className="container mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div>
               <h3 className="text-2xl font-bold mb-4">LuxeStay</h3>
               <p className="text-gray-400 mb-6">
                 Premium apartment bookings for discerning travelers.
               </p>
               <div className="flex space-x-4">
                 {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                   <a key={social} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition">
                     <span className="w-5 h-5 block bg-white rounded-full"></span>
                   </a>
                 ))}
               </div>
             </div>
             
             <div>
               <h4 className="font-semibold mb-4">Quick Links</h4>
               <ul className="space-y-2">
                 {['Home', 'About Us', 'Apartments', 'Locations', 'Contact'].map((link) => (
                   <li key={link}>
                     <a href="#" className="text-gray-400 hover:text-white transition">
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
             
             <div>
               <h4 className="font-semibold mb-4">Popular Cities</h4>
               <ul className="space-y-2">
                 {['New York', 'London', 'Paris', 'Tokyo', 'Dubai', 'Singapore'].map((city) => (
                   <li key={city}>
                     <a href="#" className="text-gray-400 hover:text-white transition">
                       {city}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
             
             <div>
               <h4 className="font-semibold mb-4">Newsletter</h4>
               <p className="text-gray-400 mb-4">
                 Subscribe to get exclusive offers and updates.
               </p>
               <div className="flex">
                 <input 
                   type="email" 
                   placeholder="Your email"
                   className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full"
                 />
                 <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                   Subscribe
                 </button>
               </div>
             </div>
           </div>
           
           <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
             <p className="text-gray-400">© 2025 LuxeStay. All rights reserved.</p>
             <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
               <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
               <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
             </div>
           </div>
         </div>
       </footer>
    );
  }
  
  export default Footer;
  