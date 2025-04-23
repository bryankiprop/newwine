import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className=" flex flex-col">
        <Hero />
      </main>
    </div>
  );
}
