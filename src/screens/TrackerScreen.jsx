import { useState } from "react";

export default function TrackerScreen() {
  const [steps, setSteps] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🐾 Tracker aktywności</h2>
      <p>Kroki: {steps}</p>
      <p>Czas spacerów: {time} min</p>
      <button onClick={() => setSteps(steps + 500)} className="bg-purple-500 text-white px-4 py-2 rounded">Dodaj 500 kroków</button>
      <button onClick={() => setTime(time + 10)} className="bg-indigo-500 text-white px-4 py-2 rounded ml-2">Dodaj 10 minut</button>
    </div>
  );
}