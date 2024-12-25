

import React from 'react';
import { Instagram, Github, Facebook, Twitter, Phone, Mail, MapPin, CreditCard, Truck, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">HintXX</h3>
            <h3 className='font-extrabold text-[2vh]'> Coded by Jaskirat singh</h3>
            <p className="mb-4">Your one-stop shop for all your shopping needs. Quality products, excellent service.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/code_with_hintxx/" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://github.com/JaskiratSingh26" className="hover:text-white transition-colors">
                <Github size={24} />
              </a>
            
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/Aboutpage" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="https://www.devknus.com/course/ecommerce/3" className="hover:text-white transition-colors">Guide</a></li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone size={20} />
                <span>91+ 886032****</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} />
                <span>support: jaskirattt1@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={20} />
                <span>New delhi</span>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Features</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <CreditCard size={20} />
                <span>Secure Payment</span>
              </li>
              <li className="flex items-center space-x-2">
                <Truck size={20} />
                <span>Free Shipping</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={20} />
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 HintXX. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;