// JavaScript Documentexport default function GuideScreen({ setActiveTab }) {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-yellow-600">🧠 Poradnik labradora</h2>
        <button
          onClick={() => setActiveTab("home")}
          className="text-sm text-yellow-600 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-100 transition"
        >
          ⬅️ Powrót do menu
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">🍖 Żywienie</h3>
          <p className="text-gray-700">
            Labradory kochają jedzenie, ale łatwo tyją! Stawiaj na zbilansowane karmy, porcje
            wagowe i unikaj smakołyków między posiłkami.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">🐾 Spacer i aktywność</h3>
          <p className="text-gray-700">
            2-3 spacery dziennie, minimum 1h ruchu. Świetnie sprawdza się aportowanie i zabawy
            z innymi psami!
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">🛁 Pielęgnacja</h3>
          <p className="text-gray-700">
            Regularne szczotkowanie 2-3 razy w tygodniu ograniczy linienie. Uszy i łapy
            trzeba sprawdzać co kilka dni.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">🎓 Tresura i zachowanie</h3>
          <p className="text-gray-700">
            Labradory są inteligentne i chętne do nauki. Najlepiej działają pozytywne metody
            szkolenia (nagrody zamiast kar).
          </p>
			<div className="bg-white p-4 rounded shadow">
  <h3 className="text-xl font-semibold mb-2">🌐 Polecane artykuły</h3>
  <ul className="list-disc pl-6 text-blue-600 space-y-2 text-sm">
    <li>
      <a
        href="https://piesotto.pl/jak-dbac-o-labradora/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jak dbać o labradora? – Piesotto
      </a>
    </li>
    <li>
      <a
        href="https://zwierzakbezpieczny.pl/zywienie-labradora/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Żywienie labradora – co warto wiedzieć?
      </a>
    </li>
    <li>
      <a
        href="https://pl.wikipedia.org/wiki/Labrador_retriever"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wikipedia: Labrador Retriever
      </a>
    </li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
}
