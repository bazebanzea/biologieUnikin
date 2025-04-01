import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/teamMembers';
import { ArrowLeft } from 'lucide-react';

export default function TeamMemberDetails() {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Membre non trouvé</h1>
          <p className="mt-4 text-gray-600">Le membre recherché n'existe pas.</p>
          <Link to="/team" className="mt-6 inline-flex items-center text-emerald-600 hover:text-emerald-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour à l'équipe
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/team" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Retour à l'équipe
      </Link>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={`https://source.unsplash.com/400x300/?portrait&sig=${member.id}`}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">{member.name}</h1>
              <p className="text-emerald-600 mb-2">{member.field}</p>
              <p className="text-gray-600 mb-4">{member.title}</p>
              <div className="text-sm text-gray-500">
                <p>📧 {member.email}</p>
                <p>📞 +243810000000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Biographie</h2>
            <p className="text-gray-600">{member.biography}</p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Formation</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {member.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Projets de Recherche</h2>
            <div className="space-y-4">
              {member.research.map((project, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-emerald-600">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Publications Récentes</h2>
            <div className="space-y-4">
              {member.publications.map((pub, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <a href={pub.url} className="text-emerald-600 hover:text-emerald-700 font-medium">
                    {pub.title}
                  </a>
                  <p className="text-sm text-gray-500">{pub.journal}, {pub.year}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Enseignement</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {member.teaching.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </section>

          {member.awards.length > 0 && (
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Prix et Distinctions</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {member.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}