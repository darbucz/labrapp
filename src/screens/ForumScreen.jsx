import { useState } from "react";

export default function ForumScreen() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message) setPosts([...posts, message]);
    setMessage("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold">💬 Forum i Społeczność</h2>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Napisz coś..." className="w-full p-2 border rounded" />
      <button onClick={sendMessage} className="bg-green-500 text-white px-4 py-2 mt-2 rounded">Wyślij</button>
      <ul className="mt-4 space-y-2">
        {posts.map((msg, idx) => (
          <li key={idx} className="bg-white p-2 rounded shadow">{msg}</li>
        ))}
      </ul>
    </div>
  );
}