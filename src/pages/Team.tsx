import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamMembers';

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12">Notre Équipe Académique</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={`https://source.unsplash.com/400x300/?portrait&sig=${member.id}`}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-emerald-600 mb-2">{member.field}</p>
              <p className="text-gray-600 mb-4">
                Spécialiste en {member.field.toLowerCase()} avec une grande expertise.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>📧 {member.email}</p>
                <p>📞 +243810000000</p>
              </div>
              <Link 
                to={`/team/${member.id}`}
                className="inline-block bg-emerald-50 text-emerald-600 px-4 py-2 rounded-md hover:bg-emerald-100 transition-colors"
              >
                Voir plus →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}