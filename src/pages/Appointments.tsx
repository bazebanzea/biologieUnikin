import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Appointments() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Chef du département",
    date: "",
    time: "",
    mode: "presentiel",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_rkomq2g", // Remplace par ton service ID
        "template_bq2n3eq", // Remplace par ton template ID
        formData,
        "os8XH7DBpDxZW0rCS" // Remplace par ton user ID
      )
      .then(
        () => alert("Votre demande a été envoyée avec succès !"),
        (error) => alert("Erreur lors de l'envoi: " + error.text)
      );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12">Prise de Rendez-vous</h1>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nom complet" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
          <select name="type" onChange={handleChange} className="w-full p-2 border rounded">
            <option>Chef du département</option>
            <option>Administration</option>
            <option>Conseiller pédagogique</option>
          </select>
          <input type="date" name="date" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="time" name="time" onChange={handleChange} className="w-full p-2 border rounded" required />
          <div className="flex space-x-4">
            <label>
              <input type="radio" name="mode" value="presentiel" onChange={handleChange} checked={formData.mode === "presentiel"} /> Présentiel
            </label>
            <label>
              <input type="radio" name="mode" value="virtuel" onChange={handleChange} checked={formData.mode === "virtuel"} /> Virtuel
            </label>
          </div>
          <textarea name="message" placeholder="Message (optionnel)" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="w-full bg-emerald-600 text-white p-2 rounded hover:bg-emerald-700">
            Demander un rendez-vous
          </button>
        </form>
      </div>
    </div>
  );
}
