import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome to Apartment Booking</h1>
      <p className="mt-4 text-lg">Find your perfect home today.</p>
      <Link to="/listing" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        View Listings
      </Link>
    </div>
  );
}

export default Home;
