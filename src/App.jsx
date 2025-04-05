import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import GalleryScreen from "./screens/GalleryScreen";
import SpotsScreen from "./screens/SpotsScreen";
import GuideScreen from "./screens/GuideScreen";
import ForumScreen from "./screens/ForumScreen";
import TrackerScreen from "./screens/TrackerScreen";

export default function LabrApp() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-yellow-200 p-4 text-center shadow-md">
        <h1 className="text-3xl font-bold">🐾 LabrApp</h1>
        <p className="text-sm">Twoje centrum dla labradora</p>
      </header>

      <nav className="flex justify-around bg-white p-2 shadow-md flex-wrap">
        <button onClick={() => setActiveTab("home")}>🏠 Home</button>
        <button onClick={() => setActiveTab("profile")}>🐶 Profil</button>
        <button onClick={() => setActiveTab("gallery")}>📸 Galeria</button>
        <button onClick={() => setActiveTab("spots")}>📍 Spoty</button>
        <button onClick={() => setActiveTab("guide")}>🧠 Poradnik</button>
        <button onClick={() => setActiveTab("forum")}>💬 Forum</button>
        <button onClick={() => setActiveTab("tracker")}>🐾 Tracker</button>
      </nav>

      <main className="p-4">
        {activeTab === "home" && <HomeScreen />}
        {activeTab === "profile" && <ProfileScreen />}
        {activeTab === "gallery" && <GalleryScreen />}
        {activeTab === "spots" && <SpotsScreen />}
        {activeTab === "guide" && <GuideScreen />}
        {activeTab === "forum" && <ForumScreen />}
        {activeTab === "tracker" && <TrackerScreen />}
      </main>
    </div>
  );
}
