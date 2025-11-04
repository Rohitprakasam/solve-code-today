import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Users } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  time: string;
  type: string;
  icon: ReactNode;
  onRegister: () => void;
  details: string[];
}

const EventCard = ({
  title,
  description,
  time,
  type,
  icon,
  onRegister,
  details,
}: EventCardProps) => {
  return (
    <Card className="p-8 space-y-6 gradient-card shadow-elegant border-2 border-border hover:shadow-glow transition-smooth hover:-translate-y-1 group">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-card group-hover:scale-110 transition-smooth">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span className="font-medium">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="w-4 h-4 text-primary" />
          <span className="font-medium">{type}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">
          Event Details
        </h4>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        onClick={onRegister}
        className="w-full gradient-primary hover:shadow-glow transition-smooth group/btn"
        size="lg"
      >
        <span>Register Now</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </Card>
  );
};

export default EventCard;
