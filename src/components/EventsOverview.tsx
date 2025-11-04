import { useNavigate } from "react-router-dom";
import { Target, Code } from "lucide-react";
import EventCard from "./EventCard";

const EventsOverview = () => {
  const navigate = useNavigate();

  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Two Exciting Challenges
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose your path: Tackle real-world problems with SDGs or crack the code in our blind challenge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <EventCard
            title="SDG Idea Presentation"
            description="Transform assigned Sustainable Development Goals into actionable solutions for your college"
            time="10:00 AM - 12:00 PM"
            type="Team Event"
            icon={<Target className="w-6 h-6 text-white" />}
            onRegister={() => navigate("/register-sdg")}
            details={[
              "Each team receives one SDG via email",
              "Identify a real college problem related to the goal",
              "Submit problem statement and PPT 12 hours before event",
              "Present innovative solutions to judges",
            ]}
          />

          <EventCard
            title="Blind Code Challenge"
            description="Reverse-engineer hidden logic through input-output analysis and implement the solution"
            time="1:00 PM - 3:00 PM"
            type="Solo Event"
            icon={<Code className="w-6 h-6 text-white" />}
            onRegister={() => navigate("/register-blind-code")}
            details={[
              "Access challenge web page with hidden logic",
              "Use switch commands (Q1, Q2, Q3) to select problems",
              "Analyze input-output patterns to deduce logic",
              "Implement solution on designated coding platform",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsOverview;
