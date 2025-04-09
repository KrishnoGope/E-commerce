import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Modal from './Modal';
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../Redux/ProductSlice";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('/filter-data');
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const Products = useSelector(state => state.cart.products);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar - Not Sticky */}
      <div className="bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center py-5">
          {/* Logo */}
          <div className="text-2xl font-bold text-yellow-300">
            <Link to="/">e-Shop</Link>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 mx-4">
            <form className="relative" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search Product"
                className="w-full border border-yellow-400 py-2 px-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500 cursor-pointer"
                aria-label="Search"
              />
            </form>
          </div>

          {/* Icons & Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" aria-label="Shopping Cart" className="relative">
              <FaShoppingCart className="text-xl text-yellow-400" />
              {Products.length > 0 && (
                <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center text-white">
                  {Products.length}
                </span>
              )}
            </Link>

            <button
              className="hidden md:block text-base font-medium text-red-300 hover:underline"
              onClick={openLogin}
            >
              Login | Register
            </button>

            <Link
              to="/profile"
              className="block md:hidden"
              aria-label="User Profile"
            >
              <FaUser className="text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Links */}
      <div className="bg-gray-900 sticky top-0 z-50 flex items-center justify-center space-x-8 pb-4 pt-3 text-lg font-semibold text-white shadow-md">
        <Link
          to="/"
          className={`transition-colors hover:underline ${
            isActive("/") ? "text-yellow-300 underline" : "hover:text-yellow-300"
          }`}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={`transition-colors hover:underline ${
            isActive("/shop") ? "text-yellow-300 underline" : "hover:text-yellow-300"
          }`}
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className={`transition-colors hover:underline ${
            isActive("/contact") ? "text-yellow-300 underline" : "hover:text-yellow-300"
          }`}
        >
          Contact
        </Link>
        <Link
          to="/about"
          className={`transition-colors hover:underline ${
            isActive("/about") ? "text-yellow-300 underline" : "hover:text-yellow-300"
          }`}
        >
          About
        </Link>
      </div>

      {/* Modal */}
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
      </Modal>
    </>
  );
};

export default Navbar;