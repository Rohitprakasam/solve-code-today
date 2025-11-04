import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsOverview from "@/components/EventsOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <EventsOverview />
      <Footer />
    </div>
  );
};

export default Index;
