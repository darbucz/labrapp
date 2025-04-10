import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

// Rejestracja komponentów Chart.js
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function TrackerScreen({ setActiveTab }) {
  const [historia, setHistoria] = useState([
    { data: "02.04", kroki: 7200, czas: "1h 45min" },
    { data: "03.04", kroki: 5400, czas: "1h 05min" },
    { data: "04.04", kroki: 6900, czas: "1h 30min" },
  ]);

  const [kroki, setKroki] = useState("");
  const [czas, setCzas] = useState("");

  const dodajDzien = () => {
    const dzisiaj = new Date();
    const data =
      dzisiaj.getDate().toString().padStart(2, "0") +
      "." +
      (dzisiaj.getMonth() + 1).toString().padStart(2, "0");
    if (!kroki || !czas) return;
    setHistoria([...historia, { data, kroki: parseInt(kroki), czas }]);
    setKroki("");
    setCzas("");
  };

  const wykresDanych = {
    labels: historia.map((e) => e.data),
    datasets: [
      {
        label: "Kroki",
        data: historia.map((e) => e.kroki),
        borderColor: "#facc15",
        backgroundColor: "#fef08a",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-yellow-600">🐾 Tracker aktywności</h2>
        <button
          onClick={() => setActiveTab("home")}
          className="text-sm text-yellow-600 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-100 transition"
        >
          ⬅️ Powrót do menu
        </button>
      </div>

      {/* Formularz */}
      <div className="bg-white p-4 rounded shadow space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="number"
            value={kroki}
            onChange={(e) => setKroki(e.target.value)}
            placeholder="Liczba kroków"
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            value={czas}
            onChange={(e) => setCzas(e.target.value)}
            placeholder="Czas spaceru (np. 1h 15min)"
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={dodajDzien}
            className="bg-yellow-400 px-4 py-2 rounded text-white font-semibold hover:bg-yellow-500 transition"
          >
            ➕ Dodaj
          </button>
        </div>
      </div>

      {/* Wykres */}
      <div className="bg-white p-4 rounded shadow">
        <Line data={wykresDanych} />
      </div>

      {/* Historia */}
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">📅 Historia</h3>
        <ul className="space-y-1 text-sm">
          {historia.map((e, i) => (
            <li key={i} className="bg-gray-50 p-2 rounded shadow flex justify-between">
              <span>{e.data}</span>
              <span>{e.kroki} kroków – {e.czas}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
