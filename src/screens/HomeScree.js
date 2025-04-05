export default function HomeScreen({ setActiveTab }) {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-yellow-600 mt-6">
        ?? Witaj w swiecie labków!
      </h2>

      <img
        src="/moj-labrador.jpg"
        alt="Mój labrador"
        className="mx-auto rounded-lg shadow-lg max-h-80"
      />

      <div className="space-y-3">
        <button
          onClick={() => setActiveTab("profile")}
          className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition"
        >
          ?? Wejscie do Profilu
        </button>

        <button
          onClick={() => setActiveTab("gallery")}
          className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition"
        >
          ?? Galeria
        </button>

        <button
          onClick={() => setActiveTab("spots")}
          className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition"
        >
          ?? Labrador Spoty
        </button>

        <button
          onClick={() => setActiveTab("guide")}
          className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition"
        >
          ?? Poradnik
        </button>

        <button
          onClick={() => setActiveTab("forum")}
          className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition"
        >
          ?? Forum
        </button>

        <button
          onClick={() => setActiveTab("tracker")}
          className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition"
        >
          ?? Tracker Aktywnosci
        </button>
      </div>
    </div>
  );
}
