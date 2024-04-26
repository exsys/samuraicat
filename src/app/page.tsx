import HeroSection from "@/components/sections/hero";
import Header from "@/components/layout/header";
import Tokenomics from "@/components/sections/tokenomics";
import LinksSection from "@/components/sections/links";
import Memes from "@/components/sections/memes";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <div className="-z-10 h-full">
        <HeroSection />
      </div>
      <div className="z-10 h-full bg-white">
        <Tokenomics />
      </div>
      <div className="h-fit bg-white">
        <LinksSection />
      </div>
      <div className="h-fit bg-white">
        <Memes />
      </div>
      <div className="z-20">
        <Footer />
      </div>
    </div>
  );
}
