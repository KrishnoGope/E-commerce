import { CheckCircle, Truck, Headphones, RefreshCcw, Tag } from 'lucide-react';
import AboutUs from '../assets/images/About_Us.png';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-400 text-gray-900 py-8 px-2">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img 
              src={AboutUs} 
              alt="Ecommerce Shop" 
              className="rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 text-lg leading-relaxed text-justify">
            <p className="mb-6">
              Welcome to <span className="font-semibold text-blue-600">Our E-Commerce</span> — your one-stop destination for the best in fashion, electronics, home essentials, and more.
              We pride ourselves on quality, affordability, and excellent service.
            </p>
            <p>
              Whether you’re upgrading your wardrobe or hunting for the latest tech, we bring you a curated selection of top-rated products to meet your everyday needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg text-justify">
              Our mission is to create an unparalleled online shopping experience—simple, secure, and personalized. 
              We aim to blend innovation with trust, delivering not just products, but value to our customers.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" /> High-quality, handpicked products
              </li>
              <li className="flex items-center gap-3">
                <Truck className="text-blue-600" /> Fast & secure global shipping
              </li>
              <li className="flex items-center gap-3">
                <Headphones className="text-blue-600" /> 24/7 responsive support team
              </li>
              <li className="flex items-center gap-3">
                <RefreshCcw className="text-blue-600" /> Easy returns & hassle-free exchanges
              </li>
              <li className="flex items-center gap-3">
                <Tag className="text-blue-600" /> Exclusive deals & seasonal offers
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You for Trusting Us!</h3>
          <p className="text-lg text-gray-600">We’re excited to be a part of your shopping journey.</p>
        </div>
      </div>
    </div>
  );
};

export default About;