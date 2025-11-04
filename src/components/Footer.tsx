import React from 'react';
import { MapPin, Phone, Mail, Store, Package } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Owner & Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-bold text-black mb-4">Owner & Location</h3>
            <div className="flex items-start space-x-3">
              <Store className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-black mb-2">ANC GEN. FORWARDERS  Main Branch
                </p>
                <p className="text-sm text-black flex items-start">
                  <MapPin className="h-4 w-4 text-primary mr-1 flex-shrink-0 mt-0.5" />
                  <span>SUMIL STREET BASUD CAMARINES NORTE</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-bold text-black mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:09569254324" 
                className="flex items-center space-x-3 text-black hover:text-primary transition-colors duration-200 group"
              >
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                <span className="font-body">09569254324</span>
              </a>
              <a 
                href="tel:09691175819" 
                className="flex items-center space-x-3 text-black hover:text-primary transition-colors duration-200 group"
              >
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                <span className="font-body">09691175819</span>
              </a>
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-bold text-black mb-4">Our Business</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-black font-body">ANC Store and General Merchandise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-black font-body">ANC Distillers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-black font-body text-center md:text-left">
              © {new Date().getFullYear()} ANC GEN. All rights reserved.
            </p>
            <p className="text-sm text-primary font-body font-medium">
              Food & Beverages Express
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

