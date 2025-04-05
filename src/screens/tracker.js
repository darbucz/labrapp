// JavaScript Documentexport default function TrackerScreen() {
  return (
    <div className="space-y-6 text-center mt-6">
      <h2 className="text-2xl font-bold text-yellow-600">🐾 Tracker aktywności</h2>
      <p className="text-gray-700">Śledź codzienną aktywność swojego labka!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg mb-2">👣 Liczba kroków</h3>
          <p className="text-3xl font-bold text-yellow-500">6 214</p>
          <p className="text-sm text-gray-500">Dzisiaj</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg mb-2">⏱️ Czas spaceru</h3>
          <p className="text-3xl font-bold text-yellow-500">1h 20min</p>
          <p className="text-sm text-gray-500">Średnio dziennie</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg mb-2">🎯 Cel</h3>
          <p className="text-3xl font-bold text-yellow-500">8 000 kroków</p>
          <p className="text-sm text-gray-500">Dzienny limit</p>
        </div>
      </div>

      <button className="mt-6 px-6 py-2 bg-yellow-400 text-white rounded-full shadow hover:bg-yellow-500 transition">
        Dodaj dzisiejsze dane
      </button>
    </div>
  );
}
