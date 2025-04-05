export default function HomeScreen({ setActiveTab }) {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-yellow-600 mt-6">
        🐶 Witaj w świecie labków!
      </h2>

      <img
        src="/moj-labrador.jpg"
        alt="Mój labrador"
        className="mx-auto rounded-lg shadow-lg max-h-80"
      />

      <button
        onClick={() => setActiveTab("profile")}
        className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition"
      >
        🐾 Wejście
      </button>
    </div>
  );
}
