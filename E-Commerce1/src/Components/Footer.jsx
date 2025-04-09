import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-6 md:px-24">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-500 mb-4">ShopMate</h2>
          <p className="text-gray-400 leading-relaxed">
            Your one-stop shop for the latest fashion trends, gadgets, and more. Quality meets affordability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-blue-400 transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#returns" className="hover:text-blue-400 transition">Returns</a></li>
            <li><a href="#shipping" className="hover:text-blue-400 transition">Shipping</a></li>
            <li><a href="#privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Get the latest updates and offers.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-blue-700 transition-colors duration-200 py-2 rounded text-white font-semibold shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ShopMate. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition text-lg"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400 transition text-lg"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-400 transition text-lg"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400 transition text-lg"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
