// JavaScript Documentexport default function HomeScreen() {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-semibold">Witaj w LabrApp! 🐶</h2>
      <p>Wszystko, czego potrzebujesz jako właściciel labradora.</p>

      <img
        src="/my-labrador.jpg"
        alt="Mój labrador"
        className="mx-auto rounded-lg shadow-lg max-h-80"
      />

      <p className="text-sm text-gray-600">To jest Twój labek na stronie głównej!</p>
    </div>
  );
}
