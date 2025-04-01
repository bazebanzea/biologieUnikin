import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Microscope className="h-8 w-8" />
              <span className="font-bold text-xl">Sciences de la Vie</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md hover:bg-emerald-600">Accueil</Link>
              <Link to="/team" className="px-3 py-2 rounded-md hover:bg-emerald-600">Équipe</Link>
              <Link to="/news" className="px-3 py-2 rounded-md hover:bg-emerald-600">Actualités</Link>
              <Link to="/appointments" className="px-3 py-2 rounded-md hover:bg-emerald-600">Rendez-vous</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-emerald-600">Accueil</Link>
            <Link to="/team" className="block px-3 py-2 rounded-md hover:bg-emerald-600">Équipe</Link>
            <Link to="/news" className="block px-3 py-2 rounded-md hover:bg-emerald-600">Actualités</Link>
            <Link to="/appointments" className="block px-3 py-2 rounded-md hover:bg-emerald-600">Rendez-vous</Link>
          </div>
        </div>
      )}
    </nav>
  );
}