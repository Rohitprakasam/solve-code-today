import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsOverview from "@/components/EventsOverview";
import FloatingSDGs from "@/components/FloatingSDGs";
import FloatingSDGsBackground from "@/components/FloatingSDGsBackground";
import Judges from "@/components/Judges";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingSDGsBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <EventsOverview />
        <FloatingSDGs />
        <Judges />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
