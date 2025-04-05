// JavaScript Documentexport default function TrackerScreen() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center text-yellow-600">🐾 Tracker aktywności</h2>
      <p className="text-center text-gray-600">Monitoruj aktywność swojego labka dzień po dniu!</p>

      {/* Statystyki dnia */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">👣 Kroki</h3>
          <p className="text-3xl font-bold text-yellow-500">6 214</p>
          <p className="text-sm text-gray-400">Dziś</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">⏱️ Czas spaceru</h3>
          <p className="text-3xl font-bold text-yellow-500">1h 20min</p>
          <p className="text-sm text-gray-400">Średnio dziennie</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">🎯 Cel</h3>
          <p className="text-3xl font-bold text-yellow-500">8 000 kroków</p>
          <p className="text-sm text-gray-400">Twój dzienny cel</p>
        </div>
      </div>

      {/* Historia */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">📅 Historia aktywności</h3>
        <ul className="space-y-2 text-sm">
          <li className="bg-white p-4 rounded shadow flex justify-between">
            <span>4 kwietnia</span>
            <span>6 900 kroków – 1h 30min</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex justify-between">
            <span>3 kwietnia</span>
            <span>5 400 kroków – 1h 5min</span>
          </li>
          <li className="bg-white p-4 rounded shadow flex justify-between">
            <span>2 kwietnia</span>
            <span>7 200 kroków – 1h 45min</span>
          </li>
        </ul>
      </div>

      {/* Dodaj dane */}
      <div className="text-center">
        <button className="px-6 py-2 bg-yellow-400 text-white rounded-full shadow hover:bg-yellow-500 transition">
          ➕ Dodaj dzisiejsze dane
        </button>
      </div>
    </div>
  );
}
