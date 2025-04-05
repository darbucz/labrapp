export default function HomeScreen({ setActiveTab }) {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/my-labrador.jpg')" }}
    >
      <div className="bg-black/60 p-6 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold drop-shadow-md mb-4">
          Witaj w świecie labków!
        </h1>
        <p className="mb-6 text-lg">Twoje centrum miłości do labradorów 🐾</p>

        <button
          onClick={() => setActiveTab("profile")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-lg transition"
        >
          Wejście
        </button>
      </div>
    </div>
  );
}
