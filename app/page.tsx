import HeroSection from "./component/HeroSection";

export default function Home() {
  return (
    <div className="bg-black h-full">
      <main className="">
        <HeroSection />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
