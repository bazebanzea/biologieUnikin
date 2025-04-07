import React from 'react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
         backgroundImage: 'url("https://www.unikin.ac.cd/wp-content/uploads/2022/03/fac-petrole.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bienvenue aux Sciences de la Vie
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Découvrez l'excellence en recherche et en enseignement dans le domaine des sciences biologiques
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Formation d'Excellence</h3>
            <p className="text-gray-600">
              Des programmes d'études innovants et une formation pratique pour préparer les leaders de demain.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Recherche Innovante</h3>
            <p className="text-gray-600">
              Des projets de recherche à la pointe de la technologie dans des domaines variés de la biologie.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Collaboration Internationale</h3>
            <p className="text-gray-600">
              Des partenariats avec des institutions prestigieuses du monde entier.
            </p>
          </div>
        </div>
      </div>

      {/* Latest News Preview */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Actualités Récentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <span className="text-emerald-600 text-sm">12 Mars 2024</span>
              <h3 className="text-xl font-bold mt-2">Nouveau laboratoire de recherche</h3>
              <p className="text-gray-600 mt-2">
                Inauguration de notre nouveau laboratoire de biotechnologie...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <span className="text-emerald-600 text-sm">10 Mars 2024</span>
              <h3 className="text-xl font-bold mt-2">Conférence Internationale</h3>
              <p className="text-gray-600 mt-2">
                Participation à la conférence internationale de biologie moléculaire...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
