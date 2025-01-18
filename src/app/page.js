import Hero from "./components/hero/Hero";
import Cards from "./components/cards/Cards";

export default function Home() {
  return <>
  <section className="grid grid-cols-2 gap-2 h-full overflow-hidden">
    <div className="grid grid-rows-2 gap-y-2">
      <Hero />
      <Hero />
    </div>
    <div className="grid grid-cols-2 gap-2">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  </section>
  </>;
}
