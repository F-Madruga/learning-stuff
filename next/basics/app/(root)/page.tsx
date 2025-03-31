export default async function Home() {
  console.log("-- SERVER");
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums = await response.json();

  return (
    <>
      <h1 className="text-3xl">Music albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
        {albums.map((album: { id: number; title: string }) => (
          <div
            key={album.id}
            className="bg-white shadow-md rounded-lg p4 transition t..."
          >
            <h3 className="text-lg font-bold mb-2">{album.title}</h3>
            <p className="text-gray-600">Album Id: {album.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
