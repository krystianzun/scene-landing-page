import Image from "next/image";
import HeroSection from "./HeroSection";
import ManifestoSection from "./ManifestoSection";

export default function Home() {
  return (
    <main className="">
      <div className="mb-16">
        <HeroSection />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <ManifestoSection />
        </div>
      </div>
    </main>
  );
}
