import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <h1 className="my-4">Home</h1>
        </div>
      </main>
    </>
  );
}
