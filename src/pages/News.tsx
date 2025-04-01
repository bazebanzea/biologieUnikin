import React from 'react';

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12">Actualités</h1>

      <div className="space-y-8">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Nouveau laboratoire"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <span className="text-emerald-600 text-sm">12 Mars 2024</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">Nouveau laboratoire de recherche</h2>
            <p className="text-gray-600 mb-4">
              Nous sommes ravis d'annoncer l'inauguration de notre nouveau laboratoire de biotechnologie. 
              Cet espace moderne permettra à nos chercheurs de poursuivre leurs travaux dans des conditions optimales.
            </p>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Lire la suite →
            </a>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Conférence Internationale"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <span className="text-emerald-600 text-sm">10 Mars 2024</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">Conférence Internationale de Biologie Moléculaire</h2>
            <p className="text-gray-600 mb-4">
              Notre département participera à la prochaine conférence internationale de biologie moléculaire. 
              Plusieurs de nos chercheurs présenteront leurs derniers travaux.
            </p>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Lire la suite →
            </a>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Publication Recherche"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <span className="text-emerald-600 text-sm">5 Mars 2024</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">Publication Majeure dans Nature</h2>
            <p className="text-gray-600 mb-4">
              L'équipe du Dr. Martin vient de publier une découverte majeure dans la revue Nature. 
              Leurs travaux sur la régulation génétique ouvrent de nouvelles perspectives thérapeutiques.
            </p>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Lire la suite →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}