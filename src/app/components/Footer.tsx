import { Apple, Smartphone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Support: ['Help Center', 'Safety', 'Terms of Service', 'Privacy Policy'],
    'For Vendors': ['Vendor Portal', 'Pricing', 'Resources', 'Success Stories'],
    'For Providers': ['Drive with Us', 'Requirements', 'Earnings', 'Insurance'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h3 className="mb-4 text-2xl font-bold text-white">ErrandSort</h3>
            <p className="mb-6 text-gray-400">
              Your trusted platform for shopping, selling, and delivering. 
              Join thousands of satisfied users today.
            </p>
            
            {/* App Download Buttons */}
            <div className="mb-6 space-y-3">
              <button className="flex w-full items-center gap-3 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 transition-colors hover:bg-gray-700 sm:w-auto">
                <Apple className="h-6 w-6 text-white" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </button>
              
              <button className="flex w-full items-center gap-3 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 transition-colors hover:bg-gray-700 sm:w-auto">
                <Smartphone className="h-6 w-6 text-white" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-emerald-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-emerald-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-emerald-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-emerald-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 font-semibold text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition-colors hover:text-emerald-500">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              © 2026 ErrandSort. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="transition-colors hover:text-emerald-500">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-emerald-500">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-emerald-500">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}