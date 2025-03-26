export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  return <h1 className="text-3xl">User profile: {id}</h1>;
}
