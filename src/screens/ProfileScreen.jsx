import { useState } from "react";

export default function ProfileScreen() {
  const [profile, setProfile] = useState({ name: "", age: "", weight: "", toy: "", food: "", vet: "" });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">🐶 Profil Twojego Labka</h2>
      <input name="name" placeholder="Imię" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="age" placeholder="Wiek" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="weight" placeholder="Waga" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="toy" placeholder="Ulubiona zabawka" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="food" placeholder="Ulubione jedzenie" className="w-full p-2 border rounded" onChange={handleChange} />
      <textarea name="vet" placeholder="Notatki zdrowotne / weterynarz" className="w-full p-2 border rounded" onChange={handleChange} />
    </div>
  );
}