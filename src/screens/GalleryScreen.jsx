import { useState } from "react";

export default function GalleryScreen() {
  const [photos, setPhotos] = useState([]);
  const [photoUrl, setPhotoUrl] = useState("");

  const addPhoto = () => {
    if (photoUrl) setPhotos([...photos, photoUrl]);
    setPhotoUrl("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold">📸 Galeria Labradorów</h2>
      <input value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} placeholder="Link do zdjęcia" className="w-full p-2 border rounded my-2" />
      <button onClick={addPhoto} className="bg-blue-500 text-white px-4 py-2 rounded">Dodaj zdjęcie</button>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {photos.map((url, idx) => (
          <img key={idx} src={url} alt="Labrador" className="rounded shadow" />
        ))}
      </div>
    </div>
  );
}