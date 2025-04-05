import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import TrackerScreen from "./screens/TrackerScreen";


export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-yellow-200 p-4 text-center shadow-md">
        <h1 className="text-3xl font-bold">🐾 LabrApp</h1>
        <p className="text-sm">Twoje centrum dla labradora</p>
      </header>

      <main className="p-4">
        {activeTab === "home" && <HomeScreen setActiveTab={setActiveTab} />}
		{activeTab === "tracker" && <TrackerScreen />}  
      </main>
    </div>
  );
}
