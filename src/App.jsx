// JavaScript Documentimport { useState } from "react";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-yellow-200 p-4 text-center shadow-md">
        <h1 className="text-3xl font-bold">🐾 LabrApp</h1>
        <p className="text-sm">Twoje centrum dla labradora</p>
      </header>

      <nav className="flex justify-around bg-white p-2 shadow-md flex-wrap">
        <button onClick={() => setActiveTab("home")}>🏠 Home</button>
      </nav>

      <main className="p-4">
        {activeTab === "home" && <HomeScreen setActiveTab={setActiveTab} />}
      </main>
    </div>
  );
}
