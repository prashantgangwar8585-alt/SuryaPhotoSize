export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-orange-600">
        🌞 SuryaPhotoSize
      </h1>

      <p className="mt-4 text-xl text-gray-700">
        AI Photo Size & HD Print Studio
      </p>

      <button className="mt-8 px-8 py-4 rounded-xl bg-orange-600 text-white hover:bg-orange-700">
        Upload Photo
      </button>
    </main>
  );
}