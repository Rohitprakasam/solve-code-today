import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsOverview from "@/components/EventsOverview";
import FloatingSDGs from "@/components/FloatingSDGs";
import Judges from "@/components/Judges";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <EventsOverview />
      <FloatingSDGs />
      <Judges />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
