import { useState } from "react";

export default function GalleryScreen({ setActiveTab }) {
  const [zdjecia, setZdjecia] = useState([
    {
      url: "/lab1.jpg",
      glosy: 3,
      komentarze: ["Ale słodziak!", "Mój wygląda identycznie 🐾"],
    },
    {
      url: "/lab2.jpg",
      glosy: 1,
      komentarze: [],
    },
    {
      url: "/lab3.jpg",
      glosy: 2,
      komentarze: ["Wygląda na szczęśliwego!"],
    },
  ]);

  const [noweUrl, setNoweUrl] = useState("");
  const [noweKomentarze, setNoweKomentarze] = useState({});

  const dodajZdjecie = () => {
    if (noweUrl.trim()) {
      setZdjecia([
        ...zdjecia,
        { url: noweUrl.trim(), glosy: 0, komentarze: [] },
      ]);
      setNoweUrl("");
    }
  };

  const dodajGlos = (index) => {
    const nowe = [...zdjecia];
    nowe[index].glosy += 1;
    setZdjecia(nowe);
  };

  const dodajKomentarz = (index) => {
    const tekst = noweKomentarze[index];
    if (!tekst || tekst.trim() === "") return;
    const nowe = [...zdjecia];
    nowe[index].komentarze.push(tekst.trim());
    setZdjecia(nowe);
    setNoweKomentarze({ ...noweKomentarze, [index]: "" });
  };

  const zwyciezca = [...zdjecia].sort((a, b) => b.glosy - a.glosy)[0];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-yellow-600">📸 Galeria labków</h2>
        <button
          onClick={() => setActiveTab("home")}
          className="text-sm text-yellow-600 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-100 transition"
        >
          ⬅️ Powrót do menu
        </button>
      </div>

      {/* Formularz dodawania */}
      <div className="flex gap-4">
        <input
          type="text"
          value={noweUrl}
          onChange={(e) => setNoweUrl(e.target.value)}
          placeholder="Link do zdjęcia labka (URL)"
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={dodajZdjecie}
          className="bg-yellow-400 px-4 py-2 rounded text-white font-semibold hover:bg-yellow-500 transition"
        >
          ➕ Dodaj
        </button>
      </div>

      {/* Zwycięzca tygodnia */}
      {zwyciezca && (
        <div className="bg-yellow-100 p-4 rounded shadow text-center">
          <h3 className="font-semibold text-lg mb-2">🏅 Labek tygodnia!</h3>
          <img
            src={zwyciezca.url}
            alt="Labek tygodnia"
            className="mx-auto h-60 object-cover rounded shadow"
          />
          <p className="text-sm mt-2 text-gray-600">
            {zwyciezca.glosy} głosów
          </p>
        </div>
      )}

      {/* Galeria zdjęć */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {zdjecia.map((zdj, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow space-y-2 flex flex-col"
          >
            <img
              src={zdj.url}
              alt={`Labrador ${index + 1}`}
              className="w-full h-48 object-cover rounded"
            />

            {/* Głosowanie */}
            <button
              onClick={() => dodajGlos(index)}
              className="bg-yellow-300 text-sm px-3 py-1 rounded hover:bg-yellow-400 transition"
            >
              🐾 Głosuj ({zdj.glosy})
            </button>

            {/* Komentarze */}
            <div className="space-y-1 text-sm text-gray-700">
              <p className="font-semibold">💬 Komentarze:</p>
              {zdj.komentarze.length > 0 ? (
                zdj.komentarze.map((kom, i) => (
                  <p key={i}>• {kom}</p>
                ))
              ) : (
                <p className="text-gray-400 italic">Brak komentarzy</p>
              )}
            </div>

            {/* Dodaj komentarz */}
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={noweKomentarze[index] || ""}
                onChange={(e) =>
                  setNoweKomentarze({
                    ...noweKomentarze,
                    [index]: e.target.value,
                  })
                }
                placeholder="Dodaj komentarz..."
                className="flex-1 p-1 border rounded"
              />
              <button
                onClick={() => dodajKomentarz(index)}
                className="text-sm bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
              >
                Dodaj
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
