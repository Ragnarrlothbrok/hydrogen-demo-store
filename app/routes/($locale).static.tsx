export async function loader() {
  // sleep for 3 seconds to simulate a slow network request
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return null;
}

export default function Search() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>This is just a static page without any loaders</p>
    </div>
  );
}
