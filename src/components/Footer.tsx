import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Sciences de la Vie</h3>
            <p className="text-gray-400">Université de Kinshasa</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="hover:text-emerald-400">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" className="hover:text-emerald-400">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-emerald-400">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Département des Sciences de la Vie. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}